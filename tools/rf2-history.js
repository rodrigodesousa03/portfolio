// =============================================
// rF2 SETUP HISTORY (versioning)
// =============================================
// Saves snapshots to localStorage whenever the user clicks "Salvar".
// The last saved snapshot becomes the diff baseline (instead of schema defaults).
// =============================================

const HISTORY_KEY  = 'rf2-setup-history';
const MAX_HISTORY  = 60;   // max entries before oldest are dropped

// =============================================
// STORAGE HELPERS
// =============================================
function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}

function persistHistory(entries) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(entries));
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// =============================================
// SAVE
// =============================================
/**
 * Save the current setup state as a new history entry.
 * Sets savedValues so that future diffs compare against this snapshot.
 */
function saveSetup() {
  if (!currentSchema || !isInBuilder) return;

  const snapshot = deepClone(currentValues);
  const entry = {
    id:         Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name:       currentSetupName || getKey(t, 'ui.newSetup'),
    track:      currentTrackName || '',
    templateId: selectedTemplateId,
    values:     snapshot,
    savedAt:    new Date().toISOString(),
  };

  // Update in-memory baseline
  savedValues = snapshot;

  // Persist
  const history = loadHistory();
  history.unshift(entry);          // newest first
  if (history.length > MAX_HISTORY) history.splice(MAX_HISTORY);
  persistHistory(history);

  // Refresh diffs (they now show 0 changes since we just saved)
  initDiffBadges();

  // Flash the save button
  const btn = document.getElementById('btn-save');
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = getKey(t, 'ui.saved');
    btn.classList.add('saved');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('saved'); }, 2000);
  }
}

// =============================================
// HISTORY OVERLAY
// =============================================
function showHistory() {
  document.getElementById('history-overlay')?.remove();
  const entries = loadHistory().filter(e => e.templateId === selectedTemplateId);
  const hi = getKey(t, 'ui');

  let body = '';
  if (entries.length === 0) {
    body = `<p class="history-empty">${getKey(t, 'ui.historyEmpty')}</p>`;
  } else {
    for (const entry of entries) {
      const date = new Date(entry.savedAt);
      const dateStr = date.toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
      const trackHtml = entry.track
        ? `<span class="history-track">📍 ${escapeHtml(entry.track)}</span>`
        : '';
      body += `
        <div class="history-entry" id="hist-${entry.id}">
          <div class="history-entry-info">
            <span class="history-entry-name">${escapeHtml(entry.name)}</span>
            ${trackHtml}
            <span class="history-entry-date">${dateStr}</span>
          </div>
          <div class="history-entry-actions">
            <button class="btn-history-load" onclick="loadFromHistory('${entry.id}')">${getKey(t, 'ui.historyLoad')}</button>
            <button class="btn-history-delete" onclick="deleteFromHistory('${entry.id}')" title="${getKey(t, 'ui.historyDelete')}">✕</button>
          </div>
        </div>`;
    }
  }

  // Pinned default entry — always shown at the bottom
  body += `
    <div class="history-entry history-entry-default">
      <div class="history-entry-info">
        <span class="history-entry-name">${getKey(t, 'ui.historyDefaultName')}</span>
        <span class="history-entry-date">${getKey(t, 'ui.historyDefaultDesc')}</span>
      </div>
      <div class="history-entry-actions">
        <button class="btn-history-load btn-history-load-default" onclick="loadDefaults()">${getKey(t, 'ui.historyLoad')}</button>
      </div>
    </div>`;

  const overlay = document.createElement('div');
  overlay.id = 'history-overlay';
  overlay.className = 'history-overlay';
  overlay.innerHTML = `
    <div class="history-panel" role="dialog">
      <div class="history-header">
        <span class="history-title">${getKey(t, 'ui.historyTitle')}</span>
        <button class="history-close" onclick="hideHistory()">✕</button>
      </div>
      <div class="history-body">${body}</div>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) hideHistory(); });
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));
}

function hideHistory() {
  const overlay = document.getElementById('history-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
}

// =============================================
// LOAD FROM HISTORY
// =============================================
function loadFromHistory(entryId) {
  const entries = loadHistory();
  const entry = entries.find(e => e.id === entryId);
  if (!entry || !currentSchema) return;

  // Restore values — apply to schema fields (graceful: missing fields keep default)
  const schema = currentSchema;
  currentValues = {};
  for (const [catKey, cat] of Object.entries(schema.categories)) {
    currentValues[catKey] = {};
    for (const [subKey, sub] of Object.entries(cat)) {
      currentValues[catKey][subKey] = {};
      for (const [fieldKey, field] of Object.entries(sub)) {
        const v = entry.values?.[catKey]?.[subKey]?.[fieldKey];
        if (field.sides === 'both') {
          const lv = (v && typeof v === 'object') ? v.left  : (v !== undefined ? Number(v) : field.default);
          const rv = (v && typeof v === 'object') ? v.right : (v !== undefined ? Number(v) : field.default);
          currentValues[catKey][subKey][fieldKey] = {
            left:  Math.min(field.max, Math.max(field.min, lv)),
            right: Math.min(field.max, Math.max(field.min, rv)),
          };
        } else {
          currentValues[catKey][subKey][fieldKey] = v !== undefined
            ? Math.min(field.max, Math.max(field.min, Number(v)))
            : field.default;
        }
      }
    }
  }

  // The loaded state IS the new baseline
  savedValues = deepClone(currentValues);

  currentSetupName = entry.name;
  currentTrackName = entry.track || '';
  activeCategory   = null;
  linkState        = {};
  activeTagFilter  = new Set();
  isInBuilder      = true;

  hideHistory();
  renderTool(schema);
}

// =============================================
// LOAD DEFAULTS
// =============================================
function loadDefaults() {
  if (!currentSchema) return;
  savedValues = null;  // diffs against schema defaults again
  initValues(currentSchema);
  activeCategory  = null;
  linkState       = {};
  activeTagFilter = new Set();
  isInBuilder     = true;
  hideHistory();
  renderTool(currentSchema);
}

// =============================================
// DELETE FROM HISTORY
// =============================================
function deleteFromHistory(entryId) {
  const entries = loadHistory().filter(e => e.id !== entryId);
  persistHistory(entries);
  const el = document.getElementById('hist-' + entryId);
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(20px)';
    el.style.transition = 'all 0.2s';
    setTimeout(() => {
      el.remove();
      // show empty state if no entries left
      const panel = document.querySelector('.history-body');
      if (panel && !panel.querySelector('.history-entry')) {
        panel.innerHTML = `<p class="history-empty">${getKey(t, 'ui.historyEmpty')}</p>`;
      }
    }, 220);
  }
}
