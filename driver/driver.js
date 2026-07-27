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
      since: 'Desde',
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
      noHighlights: 'Sem destaques disponíveis',
      teamStartTitle: 'Equipe & Largada',
      avgStart: 'Largada Média',
      avgGain: 'Ganho Médio de Posições',
      bestStart: 'Melhor Largada',
      biggestGain: 'Maior Ganho de Posições',
      simuladorTitle: 'Por Simulador'
    },
    popover: {
      firstAchieved: 'Primeira vez',
      streakRaces: 'Corridas da sequência',
      of: 'de'
    },
    filter: {
      year: 'Ano', league: 'Liga', simulator: 'Simulador',
      all: 'Todos', allFem: 'Todas',
      clear: '✕ Limpar filtros'
    },
    timeline: {
      tag: '// 02',
      title: 'Linha do Tempo'
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
      since: 'Since',
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
      noHighlights: 'No highlights available',
      teamStartTitle: 'Team & Starting Grid',
      avgStart: 'Average Start',
      avgGain: 'Average Positions Gained',
      bestStart: 'Best Start',
      biggestGain: 'Biggest Positions Gain',
      simuladorTitle: 'By Simulator'
    },
    popover: {
      firstAchieved: 'First achieved',
      streakRaces: 'Streak races',
      of: 'of'
    },
    filter: {
      year: 'Year', league: 'League', simulator: 'Simulator',
      all: 'All', allFem: 'All',
      clear: '✕ Clear filters'
    },
    timeline: {
      tag: '// 02',
      title: 'Timeline'
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
let careerStartYear = null;

let allAnos = [];
let allLigas = [];
let allSimuladores = [];
let filters = { ano: '', liga: '', simulador: '' };

let statsBar = null;
let advancedStats = null;
let recordes = null;
let byAno = [];
let byLiga = [];
let byCircuito = [];
let byEquipe = [];
let bySimulador = [];
let startStats = null;
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

function getFilteredEtapas() {
  return etapas.filter(r =>
    (!filters.ano || r['Ano'] === filters.ano) &&
    (!filters.liga || r['Liga'] === filters.liga) &&
    (!filters.simulador || DriverData.normalizeSimulador(r['Simulador']) === filters.simulador)
  );
}

function posClassFor(row) {
  const pos = DriverData.formatPosition(row);
  if (pos === 'P1') return 'p1';
  if (pos === 'P2') return 'p2';
  if (pos === 'P3') return 'p3';
  if (pos === 'DNF' || pos === 'DNS' || pos === 'DSQ') return 'dnf';
  return '';
}

// ---------------------------------------------
// POPOVERS — explicação/detalhe ao passar o mouse (ou tocar, no mobile)
// ---------------------------------------------
function popoverHtml(title, bodyHtml) {
  return `<div class="driver-popover" role="tooltip">
    <div class="driver-popover-title">${esc(title)}</div>
    ${bodyHtml}
  </div>`;
}

function popoverRaceListHtml(rows) {
  if (!rows || !rows.length) return `<p class="driver-popover-empty">-</p>`;
  return `<ul class="driver-popover-list">
    ${rows.map(r => `<li>
      <span class="driver-popover-pos ${posClassFor(r)}">${esc(DriverData.formatPosition(r))}</span>
      <span class="driver-popover-item-main">${esc(r['Pista'])}</span>
      <span class="driver-popover-item-sub">${esc(r['Data'])}</span>
    </li>`).join('')}
  </ul>`;
}

function popoverTextListHtml(items) {
  if (!items || !items.length) return `<p class="driver-popover-empty">-</p>`;
  return `<ul class="driver-popover-list driver-popover-list--plain">
    ${items.map(i => `<li>${esc(i)}</li>`).join('')}
  </ul>`;
}

// Item de sidebar (label + valor) com popover opcional. `popover` já vem
// pronto (via popoverHtml) ou null/undefined pra um item sem explicação.
function statItemHtml(label, value, popover) {
  const hasPopover = !!popover;
  return `<div class="driver-highlight-item${hasPopover ? ' driver-has-popover' : ''}"${hasPopover ? ' tabindex="0"' : ''}>
    <span class="driver-highlight-label">${esc(label)}</span>
    <span class="driver-highlight-value">${esc(String(value))}</span>
    ${popover || ''}
  </div>`;
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
  const periodEl = document.getElementById('driverPeriod');
  if (periodEl) periodEl.textContent = `${t.hero.since} ${careerStartYear !== null ? careerStartYear : '-'}`;

  const medalsEl = document.getElementById('driverMedals');
  if (!medalsEl) return;
  const medals = [];
  if (statsBar.titulos > 0) medals.push(medalHtml('🏆', statsBar.titulos, t.hero.titlesLabel, 'titles-driver'));
  if (statsBar.construtores > 0) medals.push(medalHtml('👥', statsBar.construtores, t.hero.constructorsLabel, 'titles-constructor'));
  medalsEl.innerHTML = medals.join('');
}

function medalHtml(icon, count, label, statType) {
  return `<div class="driver-medal" data-stat="${statType}" role="button" tabindex="0">
    <span class="driver-medal-icon">${icon}</span>
    <span class="driver-medal-count">×${count}</span>
    <span class="driver-medal-label">${esc(label)}</span>
  </div>`;
}

// ---------------------------------------------
// RENDER — STATS BAR
// ---------------------------------------------
const counterTimers = new WeakMap();

function animateCounterEl(el, target, duration) {
  if (!el) return;
  duration = duration || 800;
  const existing = counterTimers.get(el);
  if (existing) cancelAnimationFrame(existing);

  const start = parseInt(el.textContent, 10) || 0;
  if (start === target) { el.textContent = String(target); return; }
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out
    const value = Math.round(start + (target - start) * eased);
    el.textContent = String(value);
    if (progress < 1) {
      counterTimers.set(el, requestAnimationFrame(tick));
    } else {
      el.textContent = String(target);
      counterTimers.delete(el);
    }
  }
  counterTimers.set(el, requestAnimationFrame(tick));
}

function renderStatsBar() {
  const set = (id, val) => animateCounterEl(document.getElementById(id), val);
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
  const container = document.getElementById('advancedStatsContainer');
  if (!container || !advancedStats) return;
  const a = advancedStats;

  const items = [
    statItemHtml(t.sidebar.podiumRate, a.taxaPodios,
      popoverHtml(t.sidebar.podiumRate, popoverTextListHtml([`${a.podios} ${pl(a.podios, t.tabs.raceSingular, t.tabs.racePlural)} ${t.popover.of} ${a.corridas}`]))),
    statItemHtml(t.sidebar.winRate, a.taxaVitorias,
      popoverHtml(t.sidebar.winRate, popoverTextListHtml([`${a.vitorias} ${pl(a.vitorias, t.tabs.raceSingular, t.tabs.racePlural)} ${t.popover.of} ${a.corridas}`]))),
    statItemHtml(t.sidebar.top10Rate, a.taxaTop10,
      popoverHtml(t.sidebar.top10Rate, popoverTextListHtml([`Top 10 ${t.popover.of} ${a.corridas}: ${a.top10}`]))),
    statItemHtml(t.sidebar.racesPerPodium, a.etapasPorPodio,
      popoverHtml(t.sidebar.racesPerPodium, popoverTextListHtml([`${a.corridas} ${pl(a.corridas, t.tabs.raceSingular, t.tabs.racePlural)} ${t.popover.of} ${a.podios}`]))),
    statItemHtml(t.sidebar.racesPerWin, a.etapasPorVitoria,
      popoverHtml(t.sidebar.racesPerWin, popoverTextListHtml([`${a.corridas} ${pl(a.corridas, t.tabs.raceSingular, t.tabs.racePlural)} ${t.popover.of} ${a.vitorias}`]))),
    statItemHtml(t.sidebar.dnfRate, a.taxaAbandono,
      popoverHtml(t.sidebar.dnfRate, popoverTextListHtml([`DNF: ${a.abandonos} ${t.popover.of} ${a.corridas}`])))
  ];

  container.innerHTML = items.join('');
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
    const pop = recordes.melhorResultadoRace
      ? popoverHtml(t.popover.firstAchieved, popoverRaceListHtml([recordes.melhorResultadoRace]))
      : null;
    items.push(statItemHtml(t.sidebar.bestResult, 'P' + recordes.melhorResultado, pop));
  }
  if (recordes.maxPodiosConsecutivos > 0) {
    items.push(statItemHtml(t.sidebar.podiumStreak, recordes.maxPodiosConsecutivos,
      popoverHtml(t.popover.streakRaces, popoverRaceListHtml(recordes.podiumStreakRaces))));
  }
  if (recordes.maxVitoriasConsecutivas > 0) {
    items.push(statItemHtml(t.sidebar.winStreak, recordes.maxVitoriasConsecutivas,
      popoverHtml(t.popover.streakRaces, popoverRaceListHtml(recordes.winStreakRaces))));
  }
  if (recordes.circuitosComVitoria > 0) {
    items.push(statItemHtml(t.sidebar.circuitsWon, recordes.circuitosComVitoria,
      popoverHtml(t.sidebar.circuitsWon, popoverTextListHtml(recordes.circuitosComVitoriaList))));
  }
  if (recordes.ligasComTitulo > 0) {
    items.push(statItemHtml(t.sidebar.leaguesWithTitle, recordes.ligasComTitulo,
      popoverHtml(t.sidebar.leaguesWithTitle, popoverTextListHtml(recordes.ligasComTituloList))));
  }

  container.innerHTML = items.length ? items.join('') : `<p class="driver-loading-text">${esc(t.sidebar.noHighlights)}</p>`;
}

function renderTeamStart() {
  const container = document.getElementById('teamStartContainer');
  if (!container) return;

  const items = [];
  byEquipe.forEach(g => {
    items.push(statItemHtml(g.equipe, `${g.rows.length} ${pl(g.rows.length, t.tabs.raceSingular, t.tabs.racePlural)}`));
  });
  if (startStats) {
    items.push(statItemHtml(t.sidebar.avgStart, 'P' + startStats.avgStart));
    items.push(statItemHtml(t.sidebar.avgGain, startStats.avgGain));
    const bestStartPop = startStats.melhorLargadaRace
      ? popoverHtml(t.popover.firstAchieved, popoverRaceListHtml([startStats.melhorLargadaRace]))
      : null;
    items.push(statItemHtml(t.sidebar.bestStart, 'P' + startStats.melhorLargada, bestStartPop));

    if (startStats.maiorGanho !== null && startStats.maiorGanhoRace) {
      const gainPop = popoverHtml(t.popover.firstAchieved, popoverRaceListHtml([startStats.maiorGanhoRace]));
      items.push(statItemHtml(t.sidebar.biggestGain, '+' + startStats.maiorGanho, gainPop));
    }
  }

  container.innerHTML = items.length ? items.join('') : `<p class="driver-loading-text">${esc(t.sidebar.noHighlights)}</p>`;
}

function renderSimulador() {
  const container = document.getElementById('simuladorContainer');
  if (!container) return;

  const items = bySimulador.map(g => {
    const s = g.stats;
    const pop = popoverHtml(g.simulador, popoverTextListHtml([
      `${t.statsBar.podiums}: ${s.podios}`,
      `${t.statsBar.wins}: ${s.vitorias}`,
      `${t.statsBar.poles}: ${s.poles}`,
      `${t.statsBar.fastlaps}: ${s.fastLaps}`,
      `${t.statsBar.hattricks}: ${s.hatTricks}`
    ]));
    return statItemHtml(g.simulador, `${g.rows.length} ${pl(g.rows.length, t.tabs.raceSingular, t.tabs.racePlural)}`, pop);
  });

  container.innerHTML = items.length ? items.join('') : `<p class="driver-loading-text">${esc(t.sidebar.noHighlights)}</p>`;
}

// ---------------------------------------------
// FILTRO GLOBAL (Ano / Liga / Simulador)
// ---------------------------------------------
function fillFilterSelect(id, values, current, allLabel) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = [`<option value="">${esc(allLabel)}</option>`]
    .concat(values.map(v => `<option value="${esc(v)}"${v === current ? ' selected' : ''}>${esc(v)}</option>`))
    .join('');
}

function renderFilterBar() {
  fillFilterSelect('filterAno', allAnos, filters.ano, t.filter.all);
  fillFilterSelect('filterLiga', allLigas, filters.liga, t.filter.allFem);
  fillFilterSelect('filterSimulador', allSimuladores, filters.simulador, t.filter.all);

  const clearBtn = document.getElementById('filterClearBtn');
  if (clearBtn) clearBtn.hidden = !(filters.ano || filters.liga || filters.simulador);
}

const filterAnoEl = document.getElementById('filterAno');
const filterLigaEl = document.getElementById('filterLiga');
const filterSimuladorEl = document.getElementById('filterSimulador');
const filterClearBtnEl = document.getElementById('filterClearBtn');

if (filterAnoEl) filterAnoEl.addEventListener('change', () => { filters.ano = filterAnoEl.value; onFiltersChanged(); });
if (filterLigaEl) filterLigaEl.addEventListener('change', () => { filters.liga = filterLigaEl.value; onFiltersChanged(); });
if (filterSimuladorEl) filterSimuladorEl.addEventListener('change', () => { filters.simulador = filterSimuladorEl.value; onFiltersChanged(); });
if (filterClearBtnEl) {
  filterClearBtnEl.addEventListener('click', () => {
    filters = { ano: '', liga: '', simulador: '' };
    renderFilterBar();
    onFiltersChanged();
  });
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
// RENDER — TIMELINE VISUAL
// ---------------------------------------------
function renderTimeline() {
  const container = document.getElementById('driverTimeline');
  if (!container) return;
  if (!milestones.length) {
    container.innerHTML = `<p class="driver-loading-text">${esc(t.tabs.noData)}</p>`;
    return;
  }

  const times = milestones
    .map(m => DriverData.parseDatePtBR(m.race['Data']))
    .filter(Boolean)
    .map(d => d.getTime());
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const span = maxTime - minTime || 1;

  const markersHtml = milestones.map((m, i) => {
    const idx = etapas.indexOf(m.race);
    const date = DriverData.parseDatePtBR(m.race['Data']);
    const pct = date ? ((date.getTime() - minTime) / span) * 100 : 0;
    const side = i % 2 === 0 ? 'above' : 'below';
    const key = MILESTONE_KEY_MAP[m.label];
    const label = key ? t.milestones[key] : m.label;
    return `
      <div class="driver-timeline-marker ${side}" style="left:${pct.toFixed(2)}%" data-row-idx="${idx}" tabindex="0">
        <span class="driver-timeline-dot">${m.icon}</span>
        <div class="driver-timeline-card">
          <div class="driver-timeline-label">${esc(label)}</div>
          <div class="driver-timeline-track-name">${esc(m.race['Pista'])}</div>
          <div class="driver-timeline-date">${esc(m.race['Data'])}</div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="driver-timeline-track">${markersHtml}</div>`;
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
        ${cat.circuitos.map((c, i) => `<li>${medalIcon(i)} ${esc(c.pista)} <span class="driver-top3-value">${esc(String(c.valor))}</span></li>`).join('')}
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
  const sorted = DriverData.sortByDateAsc(DriverData.filterByStatType(getFilteredEtapas(), statType));
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

function openTitlesModal(filterType) {
  let groups = computeTitleGroups(getFilteredEtapas());
  let icon = '🏆';
  let title = t.modal.titlesModalTitle;
  if (filterType === 'titles-driver') {
    groups = groups.filter(g => g.piloto);
    title = t.hero.titlesLabel;
  } else if (filterType === 'titles-constructor') {
    groups = groups.filter(g => g.construtores);
    icon = '👥';
    title = t.hero.constructorsLabel;
  }
  const html = `
    <div class="driver-modal-overlay" id="statModalOverlay">
      <div class="driver-modal">
        <button class="driver-modal-close" type="button" aria-label="${esc(t.modal.close)}">✕</button>
        <h2 class="driver-modal-title">${icon} ${esc(title)} (${groups.length})</h2>
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
function raceResultHtml(row) {
  const startNum = parseInt(row['Inicio'], 10);
  const hasStart = !isNaN(startNum);
  const finishPos = DriverData.formatPosition(row);
  const finishNum = parseInt(String(row['Final'] || '').trim(), 10);
  const hasFinish = !isNaN(finishNum);

  let arrowClass = 'neutral';
  let deltaHtml = '';
  if (hasStart && hasFinish) {
    const delta = startNum - finishNum;
    arrowClass = delta > 0 ? 'gained' : (delta < 0 ? 'lost' : 'neutral');
    if (delta !== 0) {
      deltaHtml = `<span class="driver-race-result-delta">${delta > 0 ? '+' : ''}${delta}</span>`;
    }
  } else if (!hasFinish) {
    arrowClass = 'lost';
  }

  const finishClass = posClassFor(row);

  return `
    <div class="driver-race-result">
      <div class="driver-race-result-pos">
        <span class="driver-race-result-label">${esc(t.modal.start)}</span>
        <span class="driver-race-result-value">${hasStart ? 'P' + startNum : '-'}</span>
      </div>
      <div class="driver-race-result-arrow ${arrowClass}">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h13M13 6l6 6-6 6"/>
        </svg>
        ${deltaHtml}
      </div>
      <div class="driver-race-result-pos ${finishClass}">
        <span class="driver-race-result-label">${esc(t.modal.finish)}</span>
        <span class="driver-race-result-value">${esc(finishPos || '-')}</span>
      </div>
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
  const badges = DriverData.badgesForRace(row);
  const categoria = row['Categoria'] ? ` • ${esc(row['Categoria'])}` : '';
  const dataHora = [row['Data'], row['Hora']].filter(Boolean).map(esc).join(' às ');

  const html = `
    <div class="driver-modal-overlay" id="raceModalOverlay">
      <div class="driver-modal driver-race-modal">
        <button class="driver-modal-close" type="button" aria-label="${esc(t.modal.close)}">✕</button>
        <h2 class="driver-modal-title">${esc(row['Pista'])}</h2>
        <div class="driver-modal-subtitle">${esc(row['Liga'])}${categoria} • ${esc(row['Temporada'])} • ${esc(row['Ano'])}${dataHora ? ' • ' + dataHora : ''}</div>
        ${raceResultHtml(row)}
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
  const filtered = getFilteredEtapas();
  statsBar = DriverData.computeStatsBar(filtered);
  advancedStats = DriverData.computeAdvancedStats(filtered);
  recordes = DriverData.computeRecordes(filtered);
  byAno = DriverData.computeByAno(filtered);
  byLiga = DriverData.computeByLiga(filtered);
  byCircuito = DriverData.computeByCircuito(filtered);
  top3Circuitos = DriverData.computeTop3Circuitos(byCircuito);
  byEquipe = DriverData.computeByEquipe(filtered);
  bySimulador = DriverData.computeBySimulador(filtered);
  startStats = DriverData.computeStartStats(filtered);
  milestones = DriverData.computeMilestones(filtered);
}

function renderAll() {
  renderHero();
  renderStatsBar();
  renderChart();
  renderTimeline();
  renderAnosTab();
  renderLigasTab();
  renderCircuitosTab();
  renderMarcosTab();
  renderSidebarAdvanced();
  renderRecordes();
  renderTeamStart();
  renderSimulador();
}

function onFiltersChanged() {
  computeAll();
  renderAll();
  const clearBtn = document.getElementById('filterClearBtn');
  if (clearBtn) clearBtn.hidden = !(filters.ano || filters.liga || filters.simulador);
}

async function init() {
  try {
    const data = await DriverData.loadDriverData();
    etapas = data.etapas;

    const anos = etapas.map(r => parseInt(r['Ano'], 10)).filter(n => !isNaN(n));
    careerStartYear = anos.length ? Math.min(...anos) : null;
    allAnos = [...new Set(etapas.map(r => r['Ano']))].sort();
    allLigas = [...new Set(etapas.map(r => r['Liga']))].sort((a, b) => a.localeCompare(b));
    allSimuladores = [...new Set(etapas.map(r => DriverData.normalizeSimulador(r['Simulador'])))].sort((a, b) => a.localeCompare(b));

    renderFilterBar();
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
  if (dataLoaded) { renderFilterBar(); renderAll(); }
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
  // Popovers: clique/toque alterna (hover já funciona sozinho via CSS em telas com mouse).
  const popoverTrigger = e.target.closest('.driver-has-popover');
  if (popoverTrigger) {
    const wasOpen = popoverTrigger.classList.contains('open');
    document.querySelectorAll('.driver-has-popover.open').forEach(el => el.classList.remove('open'));
    if (!wasOpen) popoverTrigger.classList.add('open');
    return;
  }
  document.querySelectorAll('.driver-has-popover.open').forEach(el => el.classList.remove('open'));

  const accHeader = e.target.closest('[data-acc-toggle]');
  if (accHeader) {
    accHeader.closest('.driver-acc-item').classList.toggle('open');
    return;
  }

  const statCard = e.target.closest('.driver-stat-card[data-stat], .driver-medal[data-stat]');
  if (statCard) {
    const stat = statCard.dataset.stat;
    if (stat === 'titles') openTitlesModal();
    else if (stat === 'titles-driver' || stat === 'titles-constructor') openTitlesModal(stat);
    else openStatModal(stat);
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

  const raceItem = e.target.closest('.driver-race-item[data-row-idx], .driver-marco-item[data-row-idx], .driver-timeline-marker[data-row-idx]');
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
  if (e.key === 'Enter' || e.key === ' ') {
    const medal = e.target.closest('.driver-medal[data-stat]');
    if (medal) { e.preventDefault(); openTitlesModal(medal.dataset.stat); return; }
    const marker = e.target.closest('.driver-timeline-marker[data-row-idx]');
    if (marker) { e.preventDefault(); openRaceModal(etapas[parseInt(marker.dataset.rowIdx, 10)]); }
  }
});

// ---------------------------------------------
// START
// ---------------------------------------------
init();
