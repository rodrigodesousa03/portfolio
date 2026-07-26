// =============================================
// DRIVER PAGE — UI layer
// Consome window.DriverData (driver-data.js). Não recalcula nada aqui,
// apenas formata/renderiza o que a camada de dados já entrega pronto.
// =============================================

// ---------------------------------------------
// I18N
// ---------------------------------------------
const driverI18n = {
  pt: {
    nav: {
      home: 'Início', about: 'Sobre', skills: 'Skills',
      projects: 'Projetos Pessoais', education: 'Formação', contact: 'Contato', driver: 'Piloto'
    },
    hero: {
      tag: 'PERFIL DO PILOTO',
      titlesLabel: 'Títulos de Piloto',
      constructorsLabel: 'Títulos de Construtores'
    },
    statsBar: {
      races: 'Corridas', podiums: 'Pódios', wins: 'Vitórias', poles: 'Poles',
      fastlaps: 'Fast Laps', hattricks: 'Hat-tricks', chelems: 'Chelems', titles: 'Títulos'
    },
    chart: {
      tag: '// 01',
      title: 'Performance por Ano',
      dsRaces: 'Corridas', dsPodiums: 'Pódios', dsWins: 'Vitórias', dsPoles: 'Poles'
    },
    tabs: {
      tag: '// 02',
      sectionTitle: 'Histórico Completo',
      years: 'Histórico por Ano',
      leagues: 'Campeonatos por Liga',
      circuits: 'Histórico de Circuitos',
      milestones: 'Primeiros Marcos',
      loading: 'Carregando...',
      noData: 'Nenhum dado disponível',
      seasonSingular: 'temporada', seasonPlural: 'temporadas',
      raceSingular: 'corrida', racePlural: 'corridas',
      championshipSingular: 'campeonato', championshipPlural: 'campeonatos'
    },
    circuitsTab: { top3Title: 'Top 3 por Circuito' },
    sidebar: {
      advancedTitle: 'Estatísticas Avançadas',
      podiumRate: 'Taxa de Pódios',
      winRate: 'Taxa de Vitórias',
      top10Rate: 'Taxa de Top 10',
      dnfRate: 'Taxa de Abandono',
      racesPerPodium: 'Etapas / Pódio',
      racesPerWin: 'Etapas / Vitória',
      highlightsTitle: 'Destaques',
      bestResult: 'Melhor Resultado',
      podiumStreak: 'Pódios Consecutivos',
      winStreak: 'Sequência de Vitórias',
      circuitsWon: 'Circuitos Vencidos',
      leaguesWithTitle: 'Ligas com Título',
      noHighlights: 'Sem destaques disponíveis'
    },
    milestones: {
      firstRace: 'Primeira Corrida',
      firstPodium: 'Primeiro Pódio',
      firstWin: 'Primeira Vitória',
      firstPole: 'Primeira Pole',
      firstFastLap: 'Primeira Volta Mais Rápida',
      firstHatTrick: 'Primeiro Hat-Trick',
      firstChelem: 'Primeiro Chelem',
      firstDriverTitle: 'Primeiro Título (Piloto)',
      firstConstructorTitle: 'Primeiro Título (Construtores)'
    },
    modal: {
      close: 'Fechar',
      sortNewest: 'Mais Recentes',
      sortOldest: 'Mais Antigas',
      noVideo: 'Vídeo não disponível',
      titlesModalTitle: 'Títulos',
      badgeDriver: 'Piloto',
      badgeConstructor: 'Construtores',
      track: 'Pista', league: 'Liga', category: 'Categoria', season: 'Temporada', year: 'Ano',
      date: 'Data', time: 'Hora', start: 'Largada', finish: 'Chegada'
    }
  },
  en: {
    nav: {
      home: 'Home', about: 'About', skills: 'Skills',
      projects: 'Personal Projects', education: 'Education', contact: 'Contact', driver: 'Driver'
    },
    hero: {
      tag: 'DRIVER PROFILE',
      titlesLabel: 'Driver Titles',
      constructorsLabel: 'Constructors Titles'
    },
    statsBar: {
      races: 'Races', podiums: 'Podiums', wins: 'Wins', poles: 'Poles',
      fastlaps: 'Fast Laps', hattricks: 'Hat-tricks', chelems: 'Grand Chelems', titles: 'Titles'
    },
    chart: {
      tag: '// 01',
      title: 'Performance by Year',
      dsRaces: 'Races', dsPodiums: 'Podiums', dsWins: 'Wins', dsPoles: 'Poles'
    },
    tabs: {
      tag: '// 02',
      sectionTitle: 'Complete History',
      years: 'History by Year',
      leagues: 'Championships by League',
      circuits: 'Circuit History',
      milestones: 'First Milestones',
      loading: 'Loading...',
      noData: 'No data available',
      seasonSingular: 'season', seasonPlural: 'seasons',
      raceSingular: 'race', racePlural: 'races',
      championshipSingular: 'championship', championshipPlural: 'championships'
    },
    circuitsTab: { top3Title: 'Top 3 by Circuit' },
    sidebar: {
      advancedTitle: 'Advanced Stats',
      podiumRate: 'Podium Rate',
      winRate: 'Win Rate',
      top10Rate: 'Top 10 Rate',
      dnfRate: 'DNF Rate',
      racesPerPodium: 'Races / Podium',
      racesPerWin: 'Races / Win',
      highlightsTitle: 'Highlights',
      bestResult: 'Best Result',
      podiumStreak: 'Consecutive Podiums',
      winStreak: 'Win Streak',
      circuitsWon: 'Circuits Won',
      leaguesWithTitle: 'Leagues with Title',
      noHighlights: 'No highlights available'
    },
    milestones: {
      firstRace: 'First Race',
      firstPodium: 'First Podium',
      firstWin: 'First Win',
      firstPole: 'First Pole',
      firstFastLap: 'First Fastest Lap',
      firstHatTrick: 'First Hat-Trick',
      firstChelem: 'First Grand Chelem',
      firstDriverTitle: 'First Title (Driver)',
      firstConstructorTitle: 'First Title (Constructors)'
    },
    modal: {
      close: 'Close',
      sortNewest: 'Newest First',
      sortOldest: 'Oldest First',
      noVideo: 'Video not available',
      titlesModalTitle: 'Titles',
      badgeDriver: 'Driver',
      badgeConstructor: 'Constructors',
      track: 'Track', league: 'League', category: 'Category', season: 'Season', year: 'Year',
      date: 'Date', time: 'Time', start: 'Start', finish: 'Finish'
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';
let t = driverI18n[currentLang];

function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

// Mapeia os labels fixos (em pt-BR) devolvidos por DriverData.computeMilestones()
// para as chaves de tradução — a camada de dados não é alterada, só a exibição.
const MILESTONE_KEY_MAP = {
  'Primeira Corrida': 'firstRace',
  'Primeiro Pódio': 'firstPodium',
  'Primeira Vitória': 'firstWin',
  'Primeira Pole': 'firstPole',
  'Primeira Volta Mais Rápida': 'firstFastLap',
  'Primeiro Hat-Trick': 'firstHatTrick',
  'Primeiro Chelem': 'firstChelem',
  'Primeiro Título (Piloto)': 'firstDriverTitle',
  'Primeiro Título (Construtores)': 'firstConstructorTitle'
};

const STAT_ICONS = {
  races: '🏁', podiums: '🏅', wins: '🥇', poles: '🚩',
  fastlaps: '⚡', hattricks: '🎩', chelems: '👑'
};

// ---------------------------------------------
// STATE
// ---------------------------------------------
let etapas = [];
let top3Circuitos = [];
let dataLoaded = false;

let statsBar = null;
let advancedStats = null;
let recordes = null;
let byAno = [];
let byLiga = [];
let byCircuito = [];
let milestones = [];

let yearlyChartInstance = null;

let currentModalRaces = [];
let currentStatType = null;
let statModalSortDesc = true;

// ---------------------------------------------
// HELPERS
// ---------------------------------------------
function esc(str) {
  return String(str === undefined || str === null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function pl(n, singular, plural) { return n === 1 ? singular : plural; }

function posClassFor(row) {
  const pos = DriverData.formatPosition(row);
  if (pos === 'P1') return 'p1';
  if (pos === 'P2') return 'p2';
  if (pos === 'P3') return 'p3';
  if (pos === 'DNF' || pos === 'DNS' || pos === 'DSQ') return 'dnf';
  return '';
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function toYouTubeEmbed(link) {
  const url = String(link || '').trim();
  if (!url || url.toUpperCase() === 'N/A' || url === '-') return null;
  if (!/^https?:\/\//i.test(url)) return null;
  try {
    if (url.includes('youtube.com/watch')) {
      const parsed = new URL(url);
      const id = parsed.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch (e) {
    return null;
  }
  return null;
}

// Agrupa corridas com título (Campeão/Construtores) por Liga+Temporada+Categoria.
// Mesma chave de agrupamento usada em DriverData.computeStatsBar/summarize,
// só que aqui devolvemos os grupos em vez de só a contagem (para o modal de Títulos).
function computeTitleGroups(rows) {
  const map = new Map();
  rows.forEach(r => {
    const isCampeao = DriverData.isSim(r['Campeão']);
    const isConstrutores = DriverData.isSim(r['Construtores']);
    if (!isCampeao && !isConstrutores) return;
    const key = r['Liga'] + '|||' + r['Temporada'] + '|||' + r['Categoria'];
    if (!map.has(key)) {
      map.set(key, { liga: r['Liga'], temporada: r['Temporada'], categoria: r['Categoria'], piloto: false, construtores: false });
    }
    const g = map.get(key);
    if (isCampeao) g.piloto = true;
    if (isConstrutores) g.construtores = true;
  });
  return [...map.values()].sort((a, b) => a.temporada.localeCompare(b.temporada));
}

// ---------------------------------------------
// RENDER — HERO
// ---------------------------------------------
function renderHero() {
  const anos = etapas.map(r => parseInt(r['Ano'], 10)).filter(n => !isNaN(n));
  const minAno = anos.length ? Math.min(...anos) : '-';
  const maxAno = anos.length ? Math.max(...anos) : '-';
  const periodEl = document.getElementById('driverPeriod');
  if (periodEl) periodEl.textContent = `${minAno} – ${maxAno}`;

  const medalsEl = document.getElementById('driverMedals');
  if (!medalsEl) return;
  const medals = [];
  if (statsBar.titulos > 0) medals.push(medalHtml('🏆', statsBar.titulos, t.hero.titlesLabel));
  if (statsBar.construtores > 0) medals.push(medalHtml('👥', statsBar.construtores, t.hero.constructorsLabel));
  medalsEl.innerHTML = medals.join('');
}

function medalHtml(icon, count, label) {
  return `<div class="driver-medal">
    <span class="driver-medal-icon">${icon}</span>
    <span class="driver-medal-count">×${count}</span>
    <span class="driver-medal-label">${esc(label)}</span>
  </div>`;
}

// ---------------------------------------------
// RENDER — STATS BAR
// ---------------------------------------------
function renderStatsBar() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('statRaces', statsBar.corridas);
  set('statPodiums', statsBar.podios);
  set('statWins', statsBar.vitorias);
  set('statPoles', statsBar.poles);
  set('statFastLaps', statsBar.fastLaps);
  set('statHatTricks', statsBar.hatTricks);
  set('statChelems', statsBar.chelems);
  set('statTitles', statsBar.titulos + statsBar.construtores);
}

// ---------------------------------------------
// RENDER — SIDEBAR
// ---------------------------------------------
function renderSidebarAdvanced() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('taxaPodios', advancedStats.taxaPodios);
  set('taxaVitorias', advancedStats.taxaVitorias);
  set('taxaTop10', advancedStats.taxaTop10);
  set('etapasPorPodio', advancedStats.etapasPorPodio);
  set('etapasPorVitoria', advancedStats.etapasPorVitoria);
  set('taxaAbandono', advancedStats.taxaAbandono);
}

function renderRecordes() {
  const container = document.getElementById('recordesContainer');
  if (!container) return;
  if (!recordes) {
    container.innerHTML = `<p class="driver-loading-text">${esc(t.sidebar.noHighlights)}</p>`;
    return;
  }
  const items = [];
  if (recordes.melhorResultado !== null && recordes.melhorResultado !== undefined) {
    items.push([t.sidebar.bestResult, 'P' + recordes.melhorResultado]);
  }
  if (recordes.maxPodiosConsecutivos > 0) items.push([t.sidebar.podiumStreak, recordes.maxPodiosConsecutivos]);
  if (recordes.maxVitoriasConsecutivas > 0) items.push([t.sidebar.winStreak, recordes.maxVitoriasConsecutivas]);
  if (recordes.circuitosComVitoria > 0) items.push([t.sidebar.circuitsWon, recordes.circuitosComVitoria]);
  if (recordes.ligasComTitulo > 0) items.push([t.sidebar.leaguesWithTitle, recordes.ligasComTitulo]);

  container.innerHTML = items.length
    ? items.map(([label, val]) => `
        <div class="driver-highlight-item">
          <span class="driver-highlight-label">${esc(label)}</span>
          <span class="driver-highlight-value">${esc(String(val))}</span>
        </div>`).join('')
    : `<p class="driver-loading-text">${esc(t.sidebar.noHighlights)}</p>`;
}

// ---------------------------------------------
// RENDER — CHART
// ---------------------------------------------
function renderChart() {
  const canvas = document.getElementById('yearlyChart');
  if (!canvas || typeof Chart === 'undefined') return;
  if (yearlyChartInstance) { yearlyChartInstance.destroy(); yearlyChartInstance = null; }

  const labels = byAno.map(a => a.ano);
  const cyan = cssVar('--cyan') || '#00f5ff';
  const purple = cssVar('--purple') || '#9b30ff';
  const pink = cssVar('--pink') || '#ff00cc';
  const blue = cssVar('--blue') || '#0066ff';
  const textColor = cssVar('--text-dim') || '#7f849c';
  const gridColor = 'rgba(255, 255, 255, 0.06)';

  yearlyChartInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: t.chart.dsRaces, data: byAno.map(a => a.stats.corridas), backgroundColor: hexToRgba(blue, 0.3), borderColor: blue, borderWidth: 2, order: 4 },
        { label: t.chart.dsPodiums, data: byAno.map(a => a.stats.podios), backgroundColor: hexToRgba(cyan, 0.45), borderColor: cyan, borderWidth: 2, order: 3 },
        { label: t.chart.dsWins, data: byAno.map(a => a.stats.vitorias), backgroundColor: hexToRgba(purple, 0.6), borderColor: purple, borderWidth: 2, order: 2 },
        { label: t.chart.dsPoles, data: byAno.map(a => a.stats.poles), backgroundColor: hexToRgba(pink, 0.6), borderColor: pink, borderWidth: 2, order: 1 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top', labels: { color: textColor, padding: 14, font: { family: "'Rajdhani', sans-serif", size: 12, weight: 600 } } },
        tooltip: { backgroundColor: 'rgba(5, 5, 16, 0.95)', titleColor: '#fff', bodyColor: '#fff', borderColor: cyan, borderWidth: 1 }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: textColor, precision: 0 }, grid: { color: gridColor } },
        x: { ticks: { color: textColor }, grid: { color: gridColor } }
      }
    }
  });
}

// ---------------------------------------------
// RENDER — ACCORDION HELPERS
// ---------------------------------------------
function miniStatsHtml(s) {
  const parts = [];
  if (s.vitorias) parts.push(`<span>🥇 ${s.vitorias}</span>`);
  if (s.podios) parts.push(`<span>🏅 ${s.podios}</span>`);
  if (s.poles) parts.push(`<span>🚩 ${s.poles}</span>`);
  if (s.fastLaps) parts.push(`<span>⚡ ${s.fastLaps}</span>`);
  return parts.join('');
}

function titleBadgesFor(s) {
  return '🏆'.repeat(s.titulos || 0) + '👥'.repeat(s.construtores || 0);
}

function accItemHtml({ name, meta, miniStats, bodyHtml, nested }) {
  return `
    <div class="driver-acc-item${nested ? ' nested' : ''}">
      <div class="driver-acc-header" data-acc-toggle>
        <div class="driver-acc-header-left">
          <span class="driver-acc-name">${name}</span>
          <span class="driver-acc-meta">${meta}</span>
        </div>
        <div class="driver-acc-mini-stats">${miniStats}</div>
        <span class="driver-acc-toggle-icon">▼</span>
      </div>
      <div class="driver-acc-body"><div class="driver-acc-body-inner">${bodyHtml}</div></div>
    </div>`;
}

function raceItemHtml(row) {
  const idx = etapas.indexOf(row);
  const pos = DriverData.formatPosition(row);
  const posClass = posClassFor(row);
  const badges = DriverData.badgesForRace(row);
  const categoria = row['Categoria'] ? ` • ${esc(row['Categoria'])}` : '';
  return `
    <div class="driver-race-item" data-row-idx="${idx}">
      <span class="driver-race-pos ${posClass}">${esc(pos)}</span>
      <div class="driver-race-main">
        <div class="driver-race-track">${esc(row['Pista'])}</div>
        <div class="driver-race-meta">${esc(row['Liga'])}${categoria} • ${esc(row['Temporada'])}</div>
      </div>
      <span class="driver-race-badges">${badges}</span>
    </div>`;
}

function racesListHtml(rows) {
  return rows.map(raceItemHtml).join('');
}

// ---------------------------------------------
// RENDER — TAB: HISTÓRICO POR ANO
// ---------------------------------------------
function renderAnosTab() {
  const container = document.getElementById('tabAnos');
  if (!container) return;
  if (!byAno.length) { container.innerHTML = `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`; return; }

  const anosDesc = [...byAno].reverse();
  container.innerHTML = anosDesc.map(anoItem => {
    const temporadas = DriverData.computeByTemporada(anoItem.rows);
    const s = anoItem.stats;
    const badges = titleBadgesFor(s);
    const name = `${esc(anoItem.ano)}${badges ? ' ' + badges : ''}`;
    const meta = `${temporadas.length} ${pl(temporadas.length, t.tabs.seasonSingular, t.tabs.seasonPlural)} • ${s.corridas} ${pl(s.corridas, t.tabs.raceSingular, t.tabs.racePlural)}`;
    const body = temporadas.map(temp => {
      const ts = temp.stats;
      const tBadges = titleBadgesFor(ts);
      return accItemHtml({
        name: `${esc(temp.temporada)}${tBadges ? ' ' + tBadges : ''}`,
        meta: `${temp.rows.length} ${pl(temp.rows.length, t.tabs.raceSingular, t.tabs.racePlural)}`,
        miniStats: miniStatsHtml(ts),
        bodyHtml: racesListHtml(temp.rows),
        nested: true
      });
    }).join('');
    return accItemHtml({ name, meta, miniStats: miniStatsHtml(s), bodyHtml: body, nested: false });
  }).join('');
}

// ---------------------------------------------
// RENDER — TAB: CAMPEONATOS POR LIGA
// ---------------------------------------------
function renderLigasTab() {
  const container = document.getElementById('tabLigas');
  if (!container) return;
  if (!byLiga.length) { container.innerHTML = `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`; return; }

  container.innerHTML = byLiga.map(ligaItem => {
    const grupos = DriverData.computeByTemporadaCategoria(ligaItem.rows);
    const s = ligaItem.stats;
    const badges = titleBadgesFor(s);
    const name = `${esc(ligaItem.liga)}${badges ? ' ' + badges : ''}`;
    const meta = `${grupos.length} ${pl(grupos.length, t.tabs.championshipSingular, t.tabs.championshipPlural)} • ${s.corridas} ${pl(s.corridas, t.tabs.raceSingular, t.tabs.racePlural)}`;
    const body = grupos.map(g => {
      const gs = g.stats;
      const gBadges = titleBadgesFor(gs);
      const catSuffix = g.categoria ? ` • ${esc(g.categoria)}` : '';
      return accItemHtml({
        name: `${esc(g.temporada)}${catSuffix}${gBadges ? ' ' + gBadges : ''}`,
        meta: `${g.rows.length} ${pl(g.rows.length, t.tabs.raceSingular, t.tabs.racePlural)}`,
        miniStats: miniStatsHtml(gs),
        bodyHtml: racesListHtml(g.rows),
        nested: true
      });
    }).join('');
    return accItemHtml({ name, meta, miniStats: miniStatsHtml(s), bodyHtml: body, nested: false });
  }).join('');
}

// ---------------------------------------------
// RENDER — TAB: HISTÓRICO DE CIRCUITOS
// ---------------------------------------------
function renderCircuitosTab() {
  const container = document.getElementById('tabCircuitos');
  if (!container) return;
  if (!byCircuito.length) { container.innerHTML = `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`; return; }

  const medalIcon = (i) => ['🥇', '🥈', '🥉'][i] || '';
  const top3Html = (top3Circuitos || []).map(cat => `
    <div class="driver-top3-card">
      <div class="driver-top3-label">${esc(cat.label)}</div>
      <ul class="driver-top3-list">
        ${cat.circuitos.map((c, i) => `<li>${medalIcon(i)} ${esc(c)}</li>`).join('')}
      </ul>
    </div>`).join('');

  const listHtml = byCircuito.map(circ => {
    const s = circ.stats;
    return accItemHtml({
      name: esc(circ.pista),
      meta: `${s.corridas} ${pl(s.corridas, t.tabs.raceSingular, t.tabs.racePlural)}`,
      miniStats: miniStatsHtml(s),
      bodyHtml: racesListHtml(circ.rows),
      nested: false
    });
  }).join('');

  container.innerHTML = `
    ${top3Html ? `<div class="driver-top3-title">${esc(t.circuitsTab.top3Title)}</div><div class="driver-top3-grid">${top3Html}</div>` : ''}
    ${listHtml}`;
}

// ---------------------------------------------
// RENDER — TAB: PRIMEIROS MARCOS
// ---------------------------------------------
function renderMarcosTab() {
  const container = document.getElementById('tabMarcos');
  if (!container) return;
  if (!milestones.length) { container.innerHTML = `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`; return; }

  const html = milestones.map(m => {
    const idx = etapas.indexOf(m.race);
    const key = MILESTONE_KEY_MAP[m.label];
    const label = key ? t.milestones[key] : m.label;
    const pos = DriverData.formatPosition(m.race);
    const categoria = m.race['Categoria'] ? ` • ${esc(m.race['Categoria'])}` : '';
    return `
      <div class="driver-marco-item" data-row-idx="${idx}">
        <span class="driver-marco-icon">${m.icon}</span>
        <div>
          <div class="driver-marco-title">${esc(label)}</div>
          <div class="driver-marco-track">${esc(m.race['Pista'])} <span class="driver-marco-meta" style="display:inline;">${esc(pos)}</span></div>
          <div class="driver-marco-meta">${esc(m.race['Liga'])}${categoria} • ${esc(m.race['Temporada'])} • ${esc(m.race['Ano'])}</div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="driver-marcos-grid">${html}</div>`;
}

// ---------------------------------------------
// MODALS — STAT DETAIL
// ---------------------------------------------
function statModalItemHtml(row, idx) {
  const pos = DriverData.formatPosition(row);
  const posClass = posClassFor(row);
  const badges = DriverData.badgesForRace(row);
  const categoria = row['Categoria'] ? ` • ${esc(row['Categoria'])}` : '';
  return `
    <div class="driver-modal-list-item driver-race-item" data-modal-idx="${idx}">
      <span class="driver-race-pos ${posClass}">${esc(pos)}</span>
      <div class="driver-race-main">
        <div class="driver-race-track">${esc(row['Pista'])}</div>
        <div class="driver-race-meta">${esc(row['Liga'])}${categoria} • ${esc(row['Temporada'])} • ${esc(row['Ano'])}</div>
      </div>
      <span class="driver-race-badges">${badges}</span>
    </div>`;
}

function openStatModal(statType) {
  currentStatType = statType;
  const sorted = DriverData.sortByDateAsc(DriverData.filterByStatType(etapas, statType));
  if (statModalSortDesc) sorted.reverse();
  currentModalRaces = sorted;
  renderStatModal();
}

function toggleStatSort() {
  statModalSortDesc = !statModalSortDesc;
  currentModalRaces = [...currentModalRaces].reverse();
  renderStatModal();
}

function renderStatModal() {
  const icon = STAT_ICONS[currentStatType] || '';
  const title = t.statsBar[currentStatType] || '';
  const sortLabel = statModalSortDesc ? t.modal.sortOldest : t.modal.sortNewest;
  const sortIcon = statModalSortDesc ? '↓' : '↑';
  const html = `
    <div class="driver-modal-overlay" id="statModalOverlay">
      <div class="driver-modal">
        <button class="driver-modal-close" type="button" aria-label="${esc(t.modal.close)}">✕</button>
        <h2 class="driver-modal-title">${icon} ${esc(title)} (${currentModalRaces.length})</h2>
        <div class="driver-modal-sort-container">
          <button class="driver-modal-sort-btn" type="button" id="statModalSortBtn">
            <span>${sortIcon}</span><span>${esc(sortLabel)}</span>
          </button>
        </div>
        <div class="driver-modal-list">
          ${currentModalRaces.length ? currentModalRaces.map(statModalItemHtml).join('') : `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`}
        </div>
      </div>
    </div>`;
  closeStatModal();
  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';
}

function titleGroupItemHtml(g) {
  const badges = [];
  if (g.piloto) badges.push(`🏆 ${esc(t.modal.badgeDriver)}`);
  if (g.construtores) badges.push(`👥 ${esc(t.modal.badgeConstructor)}`);
  const categoria = g.categoria ? esc(g.categoria) : '';
  return `
    <div class="driver-modal-list-item static driver-race-item">
      <div class="driver-race-main">
        <div class="driver-race-track">${esc(g.liga)} • ${esc(g.temporada)}</div>
        <div class="driver-race-meta">${categoria}</div>
      </div>
      <span class="driver-race-badges" style="font-size:.72rem;font-family:var(--font-mono);letter-spacing:0;">${badges.join(' • ')}</span>
    </div>`;
}

function openTitlesModal() {
  const groups = computeTitleGroups(etapas);
  const html = `
    <div class="driver-modal-overlay" id="statModalOverlay">
      <div class="driver-modal">
        <button class="driver-modal-close" type="button" aria-label="${esc(t.modal.close)}">✕</button>
        <h2 class="driver-modal-title">🏆 ${esc(t.modal.titlesModalTitle)} (${groups.length})</h2>
        <div class="driver-modal-list">
          ${groups.length ? groups.map(titleGroupItemHtml).join('') : `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`}
        </div>
      </div>
    </div>`;
  closeStatModal();
  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  const el = document.getElementById('statModalOverlay');
  if (el) el.remove();
  if (!document.getElementById('raceModalOverlay')) document.body.style.overflow = '';
}

// ---------------------------------------------
// MODAL — RACE DETAIL
// ---------------------------------------------
function raceFieldHtml(label, value) {
  return `<div>
    <div class="driver-race-field-label">${esc(label)}</div>
    <div class="driver-race-field-value">${esc(value === undefined || value === null || value === '' ? '-' : value)}</div>
  </div>`;
}

function buildVideoHtml(link) {
  const embed = toYouTubeEmbed(link);
  if (!embed) {
    return `<div class="driver-race-modal-no-video">
      <div class="icon">📹</div>
      <div>${esc(t.modal.noVideo)}</div>
    </div>`;
  }
  return `<div class="driver-race-modal-video-container">
    <iframe src="${embed}" title="race video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`;
}

function openRaceModal(row) {
  if (!row) return;
  const pos = DriverData.formatPosition(row);
  const badges = DriverData.badgesForRace(row);
  const categoria = row['Categoria'] ? ` • ${esc(row['Categoria'])}` : '';

  const fields = [
    raceFieldHtml(t.modal.track, row['Pista']),
    raceFieldHtml(t.modal.league, row['Liga']),
    row['Categoria'] ? raceFieldHtml(t.modal.category, row['Categoria']) : '',
    raceFieldHtml(t.modal.season, row['Temporada']),
    raceFieldHtml(t.modal.year, row['Ano']),
    raceFieldHtml(t.modal.date, row['Data']),
    row['Hora'] ? raceFieldHtml(t.modal.time, row['Hora']) : '',
    raceFieldHtml(t.modal.start, row['Inicio'] ? 'P' + row['Inicio'] : '-'),
    raceFieldHtml(t.modal.finish, pos)
  ].join('');

  const html = `
    <div class="driver-modal-overlay" id="raceModalOverlay">
      <div class="driver-modal driver-race-modal">
        <button class="driver-modal-close" type="button" aria-label="${esc(t.modal.close)}">✕</button>
        <h2 class="driver-modal-title">${esc(row['Pista'])}</h2>
        <div class="driver-modal-subtitle">${esc(row['Liga'])}${categoria} • ${esc(row['Temporada'])} • ${esc(row['Ano'])}</div>
        <div class="driver-race-modal-fields">${fields}</div>
        ${badges ? `<div class="driver-race-modal-badges">${badges}</div>` : ''}
        ${buildVideoHtml(row['Transmissão'])}
      </div>
    </div>`;
  closeRaceModal();
  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';
}

function closeRaceModal() {
  const el = document.getElementById('raceModalOverlay');
  if (el) el.remove();
  if (!document.getElementById('statModalOverlay')) document.body.style.overflow = '';
}

// ---------------------------------------------
// RENDER ALL / COMPUTE ALL
// ---------------------------------------------
function computeAll() {
  statsBar = DriverData.computeStatsBar(etapas);
  advancedStats = DriverData.computeAdvancedStats(etapas);
  recordes = DriverData.computeRecordes(etapas);
  byAno = DriverData.computeByAno(etapas);
  byLiga = DriverData.computeByLiga(etapas);
  byCircuito = DriverData.computeByCircuito(etapas);
  milestones = DriverData.computeMilestones(etapas);
}

function renderAll() {
  renderHero();
  renderStatsBar();
  renderChart();
  renderAnosTab();
  renderLigasTab();
  renderCircuitosTab();
  renderMarcosTab();
  renderSidebarAdvanced();
  renderRecordes();
}

async function init() {
  try {
    const data = await DriverData.loadDriverData();
    etapas = data.etapas;
    top3Circuitos = data.top3Circuitos;
    computeAll();
    dataLoaded = true;
    renderAll();
  } catch (err) {
    console.error('Erro ao carregar dados do piloto:', err);
  }
}

// ---------------------------------------------
// I18N APPLY
// ---------------------------------------------
function applyTranslations() {
  t = driverI18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getKey(t, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  const flagEl = document.getElementById('lang-flag');
  if (flagEl) flagEl.innerHTML = currentLang === 'pt' ? '🇧🇷 <small>PT</small>' : '🇺🇸 <small>EN</small>';
  if (dataLoaded) renderAll();
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
  });
}

applyTranslations();

// ---------------------------------------------
// NAVBAR / HAMBURGER / YEAR (script.js da home não é carregado aqui)
// ---------------------------------------------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');
if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------------------------------------------
// REVEAL ON SCROLL
// ---------------------------------------------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// ---------------------------------------------
// TABS
// ---------------------------------------------
document.querySelectorAll('.driver-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.driver-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.driver-tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    const panelId = 'tab' + tab.charAt(0).toUpperCase() + tab.slice(1);
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
  });
});

// ---------------------------------------------
// EVENT DELEGATION — stat cards, accordions, race items, modais
// ---------------------------------------------
document.addEventListener('click', (e) => {
  const accHeader = e.target.closest('[data-acc-toggle]');
  if (accHeader) {
    accHeader.closest('.driver-acc-item').classList.toggle('open');
    return;
  }

  const statCard = e.target.closest('.driver-stat-card[data-stat]');
  if (statCard) {
    const stat = statCard.dataset.stat;
    if (stat === 'titles') openTitlesModal(); else openStatModal(stat);
    return;
  }

  const sortBtn = e.target.closest('#statModalSortBtn');
  if (sortBtn) { toggleStatSort(); return; }

  const modalRaceItem = e.target.closest('.driver-modal-list-item[data-modal-idx]');
  if (modalRaceItem) {
    const idx = parseInt(modalRaceItem.dataset.modalIdx, 10);
    const row = currentModalRaces[idx];
    closeStatModal();
    openRaceModal(row);
    return;
  }

  const raceItem = e.target.closest('.driver-race-item[data-row-idx], .driver-marco-item[data-row-idx]');
  if (raceItem) {
    const idx = parseInt(raceItem.dataset.rowIdx, 10);
    openRaceModal(etapas[idx]);
    return;
  }

  const closeBtn = e.target.closest('.driver-modal-close');
  if (closeBtn) { closeStatModal(); closeRaceModal(); return; }

  if (e.target.classList.contains('driver-modal-overlay')) {
    closeStatModal();
    closeRaceModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeStatModal(); closeRaceModal(); }
});

// ---------------------------------------------
// START
// ---------------------------------------------
init();
