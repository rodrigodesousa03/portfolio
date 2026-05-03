// =============================================
// FUEL CALCULATOR
// =============================================
let isFuelCalcOpen = false;

function launchFuelCalc() {
  // Reset rf2 setup state so lang-switch won't re-render it
  if (typeof isInBuilder !== 'undefined')   isInBuilder  = false;
  if (typeof currentSchema !== 'undefined') currentSchema = null;
  if (typeof currentToolId !== 'undefined') currentToolId = null;

  isFuelCalcOpen = true;

  document.querySelectorAll('.tool-menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('card-fuel-calc')?.classList.add('active');

  const workspace = document.getElementById('tool-workspace');
  workspace.style.display = 'block';
  document.getElementById('tool-renderer').innerHTML = renderFuelCalcPanel();
  if (!document.body.dataset.tool) {
    setTimeout(() => workspace.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
}

function renderFuelCalcPanel(preserve) {
  const fc = (toolsI18n[currentLang] || toolsI18n['pt']).fuelCalc;

  // Preserve form values across language switch
  const lapVal  = preserve?.lapTime    || '';
  const consVal = preserve?.fuelPerLap || '';
  const durVal  = preserve?.duration   || '';
  const extChk  = preserve?.extra      ? 'checked' : '';

  const backLabel = (toolsI18n[currentLang] || toolsI18n['pt']).ui?.back || '← Voltar';

  return `
    <div class="fuel-calc-panel">
      <button class="btn-back" onclick="history.back()">${backLabel}</button>
      <div class="fuel-calc-header">
        <span class="fuel-calc-icon">⛽</span>
        <div>
          <div class="fuel-calc-title">${fc.title}</div>
          <div class="fuel-calc-subtitle">${fc.subtitle}</div>
        </div>
      </div>

      <div class="fuel-calc-form">
        <div class="fuel-field">
          <label class="fuel-label">${fc.lapTime}</label>
          <div class="fuel-input-hint">m:ss</div>
          <input type="text" id="fc-laptime" class="fuel-input" placeholder="1:32"
            value="${escapeHtmlFC(lapVal)}" />
        </div>
        <div class="fuel-field">
          <label class="fuel-label">${fc.fuelPerLap}</label>
          <div class="fuel-input-hint">L / volta</div>
          <input type="number" id="fc-consumption" class="fuel-input" placeholder="2.8"
            min="0" step="0.1" value="${escapeHtmlFC(consVal)}" />
        </div>
        <div class="fuel-field">
          <label class="fuel-label">${fc.raceDuration}</label>
          <div class="fuel-input-hint">minutos</div>
          <input type="number" id="fc-duration" class="fuel-input" placeholder="60"
            min="1" step="1" value="${escapeHtmlFC(durVal)}" />
        </div>
        <div class="fuel-field fuel-field-check">
          <label class="fuel-check-label">
            <input type="checkbox" id="fc-extra" ${extChk} />
            <span class="fuel-check-text">${fc.extraLap}</span>
          </label>
        </div>
      </div>

      <button class="fuel-calc-btn" onclick="calcFuel()">${fc.calculate}</button>

      <div class="fuel-result" id="fuel-result" style="display:none"></div>
    </div>
  `;
}

function calcFuel() {
  const lapTimeStr = document.getElementById('fc-laptime').value.trim();
  const fuelPerLap = parseFloat(document.getElementById('fc-consumption').value);
  const raceMins   = parseFloat(document.getElementById('fc-duration').value);
  const extraLap   = document.getElementById('fc-extra').checked;
  const fc         = (toolsI18n[currentLang] || toolsI18n['pt']).fuelCalc;
  const resultEl   = document.getElementById('fuel-result');

  // Validate lap time format m:ss
  const lapParts = lapTimeStr.match(/^(\d+):([0-5]\d)$/);
  if (!lapParts || isNaN(fuelPerLap) || fuelPerLap <= 0 || isNaN(raceMins) || raceMins <= 0) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = `<div class="fuel-error">${fc.error}</div>`;
    return;
  }

  const lapTimeSec  = parseInt(lapParts[1]) * 60 + parseInt(lapParts[2]);
  const raceTimeSec = raceMins * 60;
  let   laps        = Math.ceil(raceTimeSec / lapTimeSec);
  if (extraLap) laps += 1;

  const totalFuel = laps * fuelPerLap;

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="fuel-result-grid">
      <div class="fuel-result-item">
        <div class="fuel-result-value">${laps}</div>
        <div class="fuel-result-label">${fc.laps}</div>
      </div>
      <div class="fuel-result-item fuel-result-main">
        <div class="fuel-result-value">${totalFuel.toFixed(2)}&thinsp;L</div>
        <div class="fuel-result-label">${fc.totalFuel}</div>
      </div>
      <div class="fuel-result-item">
        <div class="fuel-result-value">${fuelCalcFormatTime(lapTimeSec)}</div>
        <div class="fuel-result-label">${fc.lapTimeLabel}</div>
      </div>
    </div>
    ${extraLap ? `<div class="fuel-result-note">✓ ${fc.extraLapNote}</div>` : ''}
  `;
}

// Re-render preserving current form values (called on language switch)
function reRenderFuelCalc() {
  if (!isFuelCalcOpen) return;
  const preserve = {
    lapTime:    document.getElementById('fc-laptime')?.value    || '',
    fuelPerLap: document.getElementById('fc-consumption')?.value || '',
    duration:   document.getElementById('fc-duration')?.value   || '',
    extra:      document.getElementById('fc-extra')?.checked    || false,
  };
  document.getElementById('tool-renderer').innerHTML = renderFuelCalcPanel(preserve);
}

// ---- Helpers ----
function fuelCalcFormatTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function escapeHtmlFC(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

if (document.body.dataset.tool === 'fuel-calc') {
  launchFuelCalc();
}
