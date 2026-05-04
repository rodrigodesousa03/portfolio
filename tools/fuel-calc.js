// =============================================
// FUEL CALCULATOR
// =============================================
let isFuelCalcOpen = false;
let fcActiveTab    = 'pre';   // 'pre' | 'race'
let fcDurationMode = 'time';  // 'time' | 'laps'  (pré-corrida)
let fcRaceMode     = 'time';  // 'time' | 'laps'  (durante a corrida)

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
  const fc        = (toolsI18n[currentLang] || toolsI18n['pt']).fuelCalc;
  const backLabel = (toolsI18n[currentLang] || toolsI18n['pt']).ui?.back || '← Voltar';

  // Restaurar estado a partir do preserve
  if (preserve) {
    if (preserve.activeTab)    fcActiveTab    = preserve.activeTab;
    if (preserve.durationMode) fcDurationMode = preserve.durationMode;
    if (preserve.raceMode)     fcRaceMode     = preserve.raceMode;
  }

  // Valores pré-corrida
  const lapVal      = preserve?.lapTime    || '';
  const consVal     = preserve?.fuelPerLap || '';
  const durVal      = preserve?.duration   || '';
  const lapCountVal = preserve?.lapCount   || '';
  const extChk      = preserve?.extra      ? 'checked' : '';

  // Valores durante a corrida
  const raceFuelVal    = preserve?.currentFuel     || '';
  const raceConsVal    = preserve?.raceConsumption || '';
  const raceLapTimeVal = preserve?.raceLapTime     || '';
  const raceRemTimeVal = preserve?.remainingTime   || '';
  const raceRemLapsVal  = preserve?.remainingLaps   || '';
  const raceExtraChk    = preserve?.raceExtra        ? 'checked' : '';

  const preDisp  = fcActiveTab === 'pre'  ? '' : 'display:none';
  const raceDisp = fcActiveTab === 'race' ? '' : 'display:none';

  const durDisp    = fcDurationMode === 'time' ? '' : 'display:none';
  const lapCntDisp = fcDurationMode === 'laps' ? '' : 'display:none';

  const raceLtDisp  = fcRaceMode === 'time' ? '' : 'display:none';
  const raceRtDisp  = fcRaceMode === 'time' ? '' : 'display:none';
  const raceRlDisp  = fcRaceMode === 'laps' ? '' : 'display:none';

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

      <div class="fuel-tabs">
        <button class="fuel-tab${fcActiveTab === 'pre'  ? ' active' : ''}" onclick="switchFuelTab('pre')">${fc.tabPre}</button>
        <button class="fuel-tab${fcActiveTab === 'race' ? ' active' : ''}" onclick="switchFuelTab('race')">${fc.tabRace}</button>
      </div>

      <!-- PRÉ-CORRIDA -->
      <div id="fc-tab-pre" class="fuel-tab-content" style="${preDisp}">
        <div class="fuel-mode-toggle">
          <button class="fuel-mode-btn${fcDurationMode === 'time' ? ' active' : ''}" onclick="switchDurationMode('time')">${fc.byTime}</button>
          <button class="fuel-mode-btn${fcDurationMode === 'laps' ? ' active' : ''}" onclick="switchDurationMode('laps')">${fc.byLaps}</button>
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
            <div class="fuel-input-hint">L / ${fc.lap}</div>
          <input type="text" inputmode="decimal" id="fc-consumption" class="fuel-input" placeholder="2,8"
            value="${escapeHtmlFC(consVal)}" />
          </div>
          <div class="fuel-field" id="fc-duration-field" style="${durDisp}">
            <label class="fuel-label">${fc.raceDuration}</label>
            <div class="fuel-input-hint">min</div>
            <input type="number" id="fc-duration" class="fuel-input" placeholder="60"
              min="1" step="1" value="${escapeHtmlFC(durVal)}" />
          </div>
          <div class="fuel-field" id="fc-lapcount-field" style="${lapCntDisp}">
            <label class="fuel-label">${fc.lapCount}</label>
            <div class="fuel-input-hint">${fc.laps}</div>
            <input type="number" id="fc-lapcount" class="fuel-input" placeholder="30"
              min="1" step="1" value="${escapeHtmlFC(lapCountVal)}" />
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

      <!-- DURANTE A CORRIDA -->
      <div id="fc-tab-race" class="fuel-tab-content" style="${raceDisp}">
        <div class="fuel-mode-toggle">
          <button class="fuel-mode-btn${fcRaceMode === 'time' ? ' active' : ''}" onclick="switchRaceMode('time')">${fc.byTime}</button>
          <button class="fuel-mode-btn${fcRaceMode === 'laps' ? ' active' : ''}" onclick="switchRaceMode('laps')">${fc.byLaps}</button>
        </div>
        <div class="fuel-calc-form">
          <div class="fuel-field">
            <label class="fuel-label">${fc.currentFuel}</label>
            <div class="fuel-input-hint">L</div>
            <input type="text" inputmode="decimal" id="fc-race-fuel" class="fuel-input" placeholder="15,0"
              value="${escapeHtmlFC(raceFuelVal)}" />
          </div>
          <div class="fuel-field">
            <label class="fuel-label">${fc.fuelPerLap}</label>
            <div class="fuel-input-hint">L / ${fc.lap}</div>
            <input type="text" inputmode="decimal" id="fc-race-consumption" class="fuel-input" placeholder="2,8"
              value="${escapeHtmlFC(raceConsVal)}" />
          </div>
          <div class="fuel-field" id="fc-race-laptime-field" style="${raceLtDisp}">
            <label class="fuel-label">${fc.lapTime}</label>
            <div class="fuel-input-hint">m:ss</div>
            <input type="text" id="fc-race-laptime" class="fuel-input" placeholder="1:32"
              value="${escapeHtmlFC(raceLapTimeVal)}" />
          </div>
          <div class="fuel-field" id="fc-race-remtime-field" style="${raceRtDisp}">
            <label class="fuel-label">${fc.remainingTime}</label>
            <div class="fuel-input-hint">min</div>
            <input type="number" id="fc-race-remaining-time" class="fuel-input" placeholder="20"
              min="0" step="1" value="${escapeHtmlFC(raceRemTimeVal)}" />
          </div>
          <div class="fuel-field" id="fc-race-remlaps-field" style="${raceRlDisp}">
            <label class="fuel-label">${fc.remainingLaps}</label>
            <div class="fuel-input-hint">${fc.laps}</div>
            <input type="number" id="fc-race-remaining-laps" class="fuel-input" placeholder="8"
              min="1" step="1" value="${escapeHtmlFC(raceRemLapsVal)}" />
          </div>
          <div class="fuel-field fuel-field-check">
            <label class="fuel-check-label">
              <input type="checkbox" id="fc-race-extra" ${raceExtraChk} />
              <span class="fuel-check-text">${fc.extraLap}</span>
            </label>
          </div>
        </div>
        <button class="fuel-calc-btn" onclick="calcRaceFuel()">${fc.calculate}</button>
        <div class="fuel-result" id="race-result" style="display:none"></div>
      </div>
    </div>
  `;
}

// ---- Tab / mode switchers ----

function switchFuelTab(tab) {
  fcActiveTab = tab;
  document.getElementById('fc-tab-pre').style.display  = tab === 'pre'  ? '' : 'none';
  document.getElementById('fc-tab-race').style.display = tab === 'race' ? '' : 'none';
  document.querySelectorAll('.fuel-tab').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && tab === 'pre') || (i === 1 && tab === 'race'));
  });
}

function switchDurationMode(mode) {
  fcDurationMode = mode;
  document.getElementById('fc-duration-field').style.display  = mode === 'time' ? '' : 'none';
  document.getElementById('fc-lapcount-field').style.display  = mode === 'laps' ? '' : 'none';
  document.querySelectorAll('#fc-tab-pre .fuel-mode-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && mode === 'time') || (i === 1 && mode === 'laps'));
  });
  document.getElementById('fuel-result').style.display = 'none';
}

function switchRaceMode(mode) {
  fcRaceMode = mode;
  document.getElementById('fc-race-laptime-field').style.display = mode === 'time' ? '' : 'none';
  document.getElementById('fc-race-remtime-field').style.display = mode === 'time' ? '' : 'none';
  document.getElementById('fc-race-remlaps-field').style.display = mode === 'laps' ? '' : 'none';
  document.querySelectorAll('#fc-tab-race .fuel-mode-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && mode === 'time') || (i === 1 && mode === 'laps'));
  });
  document.getElementById('race-result').style.display = 'none';
}

// ---- Cálculo pré-corrida ----

function calcFuel() {
  const fuelPerLap = fcParse(document.getElementById('fc-consumption').value);
  const extraLap   = document.getElementById('fc-extra').checked;
  const fc         = (toolsI18n[currentLang] || toolsI18n['pt']).fuelCalc;
  const resultEl   = document.getElementById('fuel-result');

  let laps;
  let lapTimeSec = null;

  if (fcDurationMode === 'time') {
    const lapTimeStr = document.getElementById('fc-laptime').value.trim();
    const raceMins   = fcParse(document.getElementById('fc-duration').value);
    const lapParts   = lapTimeStr.match(/^(\d+):([0-5]\d)$/);
    if (!lapParts || isNaN(fuelPerLap) || fuelPerLap <= 0 || isNaN(raceMins) || raceMins <= 0) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = `<div class="fuel-error">${fc.error}</div>`;
      return;
    }
    lapTimeSec = parseInt(lapParts[1]) * 60 + parseInt(lapParts[2]);
    laps = Math.ceil((raceMins * 60) / lapTimeSec);
  } else {
    const lapCount   = fcParse(document.getElementById('fc-lapcount').value);
    const lapTimeStr = document.getElementById('fc-laptime').value.trim();
    if (isNaN(lapCount) || lapCount <= 0 || isNaN(fuelPerLap) || fuelPerLap <= 0) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = `<div class="fuel-error">${fc.errorLaps}</div>`;
      return;
    }
    laps = Math.ceil(lapCount);
    const lapParts = lapTimeStr.match(/^(\d+):([0-5]\d)$/);
    if (lapParts) lapTimeSec = parseInt(lapParts[1]) * 60 + parseInt(lapParts[2]);
  }

  if (extraLap) laps += 1;

  const totalFuel      = laps * fuelPerLap;
  const lapTimeDisplay = lapTimeSec !== null ? fuelCalcFormatTime(lapTimeSec) : '—';

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="fuel-result-grid">
      <div class="fuel-result-item">
        <div class="fuel-result-value">${laps}</div>
        <div class="fuel-result-label">${fc.laps}</div>
      </div>
      <div class="fuel-result-item fuel-result-main">
        <div class="fuel-result-value">${fcFmt(totalFuel, 2)}&thinsp;L</div>
        <div class="fuel-result-label">${fc.totalFuel}</div>
      </div>
      <div class="fuel-result-item">
        <div class="fuel-result-value">${lapTimeDisplay}</div>
        <div class="fuel-result-label">${fc.lapTimeLabel}</div>
      </div>
    </div>
    ${extraLap ? `<div class="fuel-result-note">✓ ${fc.extraLapNote}</div>` : ''}
  `;
}

// ---- Cálculo durante a corrida ----

function calcRaceFuel() {
  const currentFuel = fcParse(document.getElementById('fc-race-fuel').value);
  const fuelPerLap  = fcParse(document.getElementById('fc-race-consumption').value);
  const fc          = (toolsI18n[currentLang] || toolsI18n['pt']).fuelCalc;
  const resultEl    = document.getElementById('race-result');

  let remainingLaps;

  if (fcRaceMode === 'time') {
    const lapTimeStr    = document.getElementById('fc-race-laptime').value.trim();
    const remainingMins = parseFloat(document.getElementById('fc-race-remaining-time').value);
    const lapParts      = lapTimeStr.match(/^(\d+):([0-5]\d)$/);
    if (!lapParts || isNaN(fuelPerLap) || fuelPerLap <= 0 ||
        isNaN(currentFuel) || currentFuel < 0 ||
        isNaN(remainingMins) || remainingMins <= 0) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = `<div class="fuel-error">${fc.raceErrorTime}</div>`;
      return;
    }
    const lapTimeSec = parseInt(lapParts[1]) * 60 + parseInt(lapParts[2]);
    remainingLaps = Math.ceil((remainingMins * 60) / lapTimeSec);
  } else {
    const remLaps = parseFloat(document.getElementById('fc-race-remaining-laps').value);
    if (isNaN(fuelPerLap) || fuelPerLap <= 0 ||
        isNaN(currentFuel) || currentFuel < 0 ||
        isNaN(remLaps) || remLaps <= 0) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = `<div class="fuel-error">${fc.raceErrorLaps}</div>`;
      return;
    }
    remainingLaps = Math.ceil(remLaps);
  }

  const raceExtra    = document.getElementById('fc-race-extra').checked;
  if (raceExtra) remainingLaps += 1;

  const fuelNeeded   = remainingLaps * fuelPerLap;
  const surplus      = currentFuel - fuelNeeded;
  const lapsAvail    = Math.floor(currentFuel / fuelPerLap);
  const canFinish    = surplus >= 0;
  const isTight      = canFinish && surplus <= 1;
  const surplusAbs   = Math.abs(surplus);
  const surplusColor = canFinish ? (isTight ? '#ffc03d' : 'var(--cyan)') : '#ff6b6b';
  const surplusLabel = canFinish ? fc.surplusLabel : fc.deficitLabel;
  const verdictClass = isTight ? 'fuel-verdict-tight' : (canFinish ? 'fuel-verdict-ok' : 'fuel-verdict-nok');
  const verdict      = isTight ? fc.tightWarning : (canFinish ? fc.canFinish : fc.cannotFinish);

  // L&C: calcular quando há déficit
  let lncHtml = '';
  if (!canFinish) {
    const targetCons   = currentFuel / remainingLaps;
    const savingsLap   = fuelPerLap - targetCons;
    const reductionPct = (savingsLap / fuelPerLap) * 100;
    let lncClass, lncText;
    if (reductionPct <= 5)       { lncClass = 'fuel-verdict-ok';      lncText = fc.lncCalm; }
    else if (reductionPct <= 10) { lncClass = 'fuel-verdict-tight';   lncText = fc.lncModerate; }
    else if (reductionPct <= 20) { lncClass = 'fuel-verdict-warning'; lncText = fc.lncAggressive; }
    else                         { lncClass = 'fuel-verdict-nok';     lncText = fc.lncImpossible; }
    lncHtml = `
      <div class="fuel-result-grid fuel-result-grid--lnc">
        <div class="fuel-result-item">
          <div class="fuel-result-value" style="font-size:1.4rem">${fcFmt(targetCons, 3)}&thinsp;L</div>
          <div class="fuel-result-label">${fc.targetConsumption}</div>
        </div>
        <div class="fuel-result-item">
          <div class="fuel-result-value" style="font-size:1.4rem">${fcFmt(savingsLap, 3)}&thinsp;L</div>
          <div class="fuel-result-label">${fc.savingsPerLap}</div>
        </div>
        <div class="fuel-result-item">
          <div class="fuel-result-value" style="font-size:1.4rem">${fcFmt(reductionPct, 1)}%</div>
          <div class="fuel-result-label">${fc.reductionPct}</div>
        </div>
      </div>
      <div class="fuel-verdict ${lncClass}">${lncText}</div>`;
  }

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="fuel-result-grid">
      <div class="fuel-result-item">
        <div class="fuel-result-value">${remainingLaps}</div>
        <div class="fuel-result-label">${fc.laps}</div>
      </div>
      <div class="fuel-result-item">
        <div class="fuel-result-value fuel-result-value--big" style="color:${surplusColor}">${fcFmt(surplusAbs, 2)}&thinsp;L</div>
        <div class="fuel-result-label">${surplusLabel}</div>
      </div>
      <div class="fuel-result-item">
        <div class="fuel-result-value">${lapsAvail}</div>
        <div class="fuel-result-label">${fc.lapsAvailable}</div>
      </div>
    </div>
    ${raceExtra ? `<div class="fuel-result-note">✓ ${fc.extraLapNote}</div>` : ''}
    ${canFinish ? `<div class="fuel-verdict ${verdictClass}">${verdict}</div>` : ''}
    ${lncHtml}
  `;
}

// Re-render preserving current form values (called on language switch)
function reRenderFuelCalc() {
  if (!isFuelCalcOpen) return;
  const preserve = {
    activeTab:       fcActiveTab,
    durationMode:    fcDurationMode,
    raceMode:        fcRaceMode,
    // pré-corrida
    lapTime:         document.getElementById('fc-laptime')?.value             || '',
    fuelPerLap:      document.getElementById('fc-consumption')?.value         || '',
    duration:        document.getElementById('fc-duration')?.value            || '',
    lapCount:        document.getElementById('fc-lapcount')?.value            || '',
    extra:           document.getElementById('fc-extra')?.checked             || false,
    // durante a corrida
    currentFuel:     document.getElementById('fc-race-fuel')?.value           || '',
    raceConsumption: document.getElementById('fc-race-consumption')?.value    || '',
    raceLapTime:     document.getElementById('fc-race-laptime')?.value        || '',
    remainingTime:   document.getElementById('fc-race-remaining-time')?.value || '',
    raceExtra:       document.getElementById('fc-race-extra')?.checked        || false,
    remainingLaps:   document.getElementById('fc-race-remaining-laps')?.value || '',
  };
  document.getElementById('tool-renderer').innerHTML = renderFuelCalcPanel(preserve);
}

// ---- Helpers ----
function fcParse(val) {
  return parseFloat(String(val).replace(',', '.').replace(/[^0-9.]/g, ''));
}

function fcFmt(num, dec) {
  return num.toFixed(dec).replace('.', ',');
}

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
