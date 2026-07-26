// =============================================
// DRIVER — DATA LAYER (parsing + aggregation)
// Fonte principal: estatisticas-etapas.csv (1 linha por corrida).
// Fonte secundária: estatisticas-circuitos.csv (só a mini-tabela "Top 3 Por Circuito").
// Tudo é calculado a partir do Etapas.csv — nenhum pré-agregado é confiado.
// =============================================
(function () {

  // ---- CSV parsing ----

  function parseCSVSimple(text) {
    const lines = text.replace(/\r/g, '').trim().split('\n');
    if (!lines.length) return [];
    const headers = splitCSVLine(lines[0]);
    return lines.slice(1).map(line => {
      const values = splitCSVLine(line);
      const obj = {};
      headers.forEach((h, i) => { obj[h] = (values[i] || '').trim(); });
      return obj;
    });
  }

  function splitCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    return values;
  }

  // ---- Helpers ----

  function isValidRow(r) {
    return (r['Data'] || '').trim() !== '';
  }

  function isSim(v) {
    return String(v || '').trim().toUpperCase() === 'SIM';
  }

  function finalNum(r) {
    const v = String(r['Final'] || '').trim();
    const n = parseInt(v, 10);
    return isNaN(n) ? null : n;
  }

  function isWin(r) { return finalNum(r) === 1; }
  function isPodium(r) { const n = finalNum(r); return n !== null && n >= 1 && n <= 3; }
  function isTop10(r) { const n = finalNum(r); return n !== null && n >= 1 && n <= 10; }
  function isAbandono(r) { return String(r['Final'] || '').trim() === 'DNF'; }

  // dd/mm/aa -> Date (anos de 2 dígitos, sempre 20xx neste dataset)
  function parseDatePtBR(str) {
    const m = String(str || '').trim().match(/^(\d{2})\/(\d{2})\/(\d{2})$/);
    if (!m) return null;
    const [, d, mo, y] = m;
    return new Date(2000 + parseInt(y, 10), parseInt(mo, 10) - 1, parseInt(d, 10));
  }

  function sortByDateAsc(rows) {
    return [...rows].sort((a, b) => {
      const da = parseDatePtBR(a['Data']);
      const db = parseDatePtBR(b['Data']);
      if (!da || !db) return 0;
      return da - db;
    });
  }

  function badgesForRace(r) {
    const badges = [];
    const n = finalNum(r);
    if (n === 1) badges.push('🥇');
    else if (n === 2) badges.push('🥈');
    else if (n === 3) badges.push('🥉');
    if (isSim(r['Pole'])) badges.push('🚩');
    if (isSim(r['Best Lap'])) badges.push('⚡');
    if (isSim(r['Hat-Trick'])) badges.push('🎩');
    if (isSim(r['Chelem'])) badges.push('👑');
    if (isSim(r['Campeão']) || isSim(r['Construtores'])) badges.push('🏆');
    return badges.join(' ');
  }

  function formatPosition(r) {
    const raw = String(r['Final'] || '').trim();
    if (raw === 'DNF' || raw === 'DNS' || raw === 'DSQ') return raw;
    const n = finalNum(r);
    return n !== null ? ('P' + n) : raw;
  }

  // ---- Loading ----

  async function loadDriverData() {
    const [etapasTxt, circuitosTxt] = await Promise.all([
      fetch('../data/estatisticas-etapas.csv').then(r => r.text()),
      fetch('../data/estatisticas-circuitos.csv').then(r => r.text())
    ]);

    const etapas = parseCSVSimple(etapasTxt).filter(isValidRow);
    const top3Circuitos = parseTop3Circuitos(circuitosTxt);

    return { etapas, top3Circuitos };
  }

  function parseTop3Circuitos(text) {
    const lines = text.replace(/\r/g, '').trim().split('\n').slice(0, 4).map(splitCSVLine);
    const labelRow = lines[1]; // "Corridas:,Interlagos,Pódios:,Interlagos,..."
    const categories = [];
    for (let col = 0; col < labelRow.length; col += 2) {
      const label = (labelRow[col] || '').replace(/:$/, '').trim();
      if (!label) continue;
      const circuitos = [1, 2, 3]
        .map(rowIdx => (lines[rowIdx] && lines[rowIdx][col + 1] || '').trim())
        .filter(Boolean);
      categories.push({ label, circuitos });
    }
    return categories;
  }

  // ---- Aggregations (stats bar, gráfico, abas) ----

  function computeStatsBar(etapas) {
    const titulosSet = new Set();
    const construtoresSet = new Set();
    etapas.forEach(r => {
      const key = r['Liga'] + '|||' + r['Temporada'] + '|||' + r['Categoria'];
      if (isSim(r['Campeão'])) titulosSet.add(key);
      if (isSim(r['Construtores'])) construtoresSet.add(key);
    });
    return {
      corridas: etapas.length,
      podios: etapas.filter(isPodium).length,
      vitorias: etapas.filter(isWin).length,
      poles: etapas.filter(r => isSim(r['Pole'])).length,
      fastLaps: etapas.filter(r => isSim(r['Best Lap'])).length,
      hatTricks: etapas.filter(r => isSim(r['Hat-Trick'])).length,
      chelems: etapas.filter(r => isSim(r['Chelem'])).length,
      titulos: titulosSet.size,
      construtores: construtoresSet.size
    };
  }

  function computeAdvancedStats(etapas) {
    const corridas = etapas.length;
    const podios = etapas.filter(isPodium).length;
    const vitorias = etapas.filter(isWin).length;
    const top10 = etapas.filter(isTop10).length;
    const abandonos = etapas.filter(isAbandono).length;
    const pct = (n) => corridas > 0 ? ((n / corridas) * 100).toFixed(1) + '%' : '-';
    return {
      taxaPodios: pct(podios),
      taxaVitorias: pct(vitorias),
      taxaTop10: pct(top10),
      taxaAbandono: pct(abandonos),
      etapasPorPodio: podios > 0 ? (corridas / podios).toFixed(2) : '-',
      etapasPorVitoria: vitorias > 0 ? (corridas / vitorias).toFixed(2) : '-'
    };
  }

  function computeRecordes(etapas) {
    if (!etapas.length) return null;
    const cronologico = sortByDateAsc(etapas);

    let melhorResultado = null;
    cronologico.forEach(r => {
      const n = finalNum(r);
      if (n !== null && (melhorResultado === null || n < melhorResultado)) melhorResultado = n;
    });

    let maxPodiosConsecutivos = 0, streak = 0;
    cronologico.forEach(r => {
      if (isPodium(r)) { streak++; maxPodiosConsecutivos = Math.max(maxPodiosConsecutivos, streak); }
      else streak = 0;
    });

    let maxVitoriasConsecutivas = 0, winStreak = 0;
    cronologico.forEach(r => {
      if (isWin(r)) { winStreak++; maxVitoriasConsecutivas = Math.max(maxVitoriasConsecutivas, winStreak); }
      else winStreak = 0;
    });

    const circuitosComVitoria = new Set(etapas.filter(isWin).map(r => r['Pista'])).size;
    const ligasComTitulo = new Set(
      etapas.filter(r => isSim(r['Campeão']) || isSim(r['Construtores'])).map(r => r['Liga'])
    ).size;

    return { melhorResultado, maxPodiosConsecutivos, maxVitoriasConsecutivas, circuitosComVitoria, ligasComTitulo };
  }

  function computeByAno(etapas) {
    const map = new Map();
    etapas.forEach(r => {
      const ano = r['Ano'];
      if (!map.has(ano)) map.set(ano, []);
      map.get(ano).push(r);
    });
    return [...map.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([ano, rows]) => ({ ano, rows, stats: summarize(rows) }));
  }

  function computeByTemporada(rowsForAno) {
    const map = new Map();
    rowsForAno.forEach(r => {
      const temp = r['Temporada'];
      if (!map.has(temp)) map.set(temp, []);
      map.get(temp).push(r);
    });
    return [...map.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([temporada, rows]) => ({ temporada, rows: sortByDateAsc(rows), stats: summarize(rows) }));
  }

  function summarize(rows) {
    const titulosSet = new Set();
    const construtoresSet = new Set();
    rows.forEach(r => {
      const key = r['Liga'] + '|||' + r['Temporada'] + '|||' + r['Categoria'];
      if (isSim(r['Campeão'])) titulosSet.add(key);
      if (isSim(r['Construtores'])) construtoresSet.add(key);
    });
    return {
      corridas: rows.length,
      podios: rows.filter(isPodium).length,
      vitorias: rows.filter(isWin).length,
      poles: rows.filter(r => isSim(r['Pole'])).length,
      fastLaps: rows.filter(r => isSim(r['Best Lap'])).length,
      titulos: titulosSet.size,
      construtores: construtoresSet.size
    };
  }

  function computeByLiga(etapas) {
    const map = new Map();
    etapas.forEach(r => {
      const liga = r['Liga'];
      if (!map.has(liga)) map.set(liga, []);
      map.get(liga).push(r);
    });
    return [...map.entries()]
      .map(([liga, rows]) => ({ liga, rows, stats: summarize(rows) }))
      .sort((a, b) => (b.stats.titulos + b.stats.construtores) - (a.stats.titulos + a.stats.construtores) || b.rows.length - a.rows.length);
  }

  function computeByTemporadaCategoria(rowsForLiga) {
    const map = new Map();
    rowsForLiga.forEach(r => {
      const key = r['Temporada'] + '|||' + r['Categoria'];
      if (!map.has(key)) map.set(key, { temporada: r['Temporada'], categoria: r['Categoria'], rows: [] });
      map.get(key).rows.push(r);
    });
    return [...map.values()]
      .map(g => ({ ...g, rows: sortByDateAsc(g.rows), stats: summarize(g.rows) }))
      .sort((a, b) => a.temporada.localeCompare(b.temporada));
  }

  function computeByCircuito(etapas) {
    const map = new Map();
    etapas.forEach(r => {
      const pista = r['Pista'];
      if (!map.has(pista)) map.set(pista, []);
      map.get(pista).push(r);
    });
    return [...map.entries()]
      .map(([pista, rows]) => ({ pista, rows: sortByDateAsc(rows), stats: summarize(rows) }))
      .sort((a, b) => b.rows.length - a.rows.length);
  }

  function computeMilestones(etapas) {
    const cronologico = sortByDateAsc(etapas);
    const milestones = [];

    function firstMatch(label, icon, predicate) {
      const found = cronologico.find(predicate);
      if (found) milestones.push({ label, icon, race: found });
    }

    firstMatch('Primeira Corrida', '🏁', () => true);
    firstMatch('Primeiro Pódio', '🏅', isPodium);
    firstMatch('Primeira Vitória', '🥇', isWin);
    firstMatch('Primeira Pole', '⚡', r => isSim(r['Pole']));
    firstMatch('Primeira Volta Mais Rápida', '⏱️', r => isSim(r['Best Lap']));
    firstMatch('Primeiro Hat-Trick', '🎩', r => isSim(r['Hat-Trick']));
    firstMatch('Primeiro Chelem', '👑', r => isSim(r['Chelem']));
    firstMatch('Primeiro Título (Piloto)', '🏆', r => isSim(r['Campeão']));
    firstMatch('Primeiro Título (Construtores)', '👥', r => isSim(r['Construtores']));

    return milestones;
  }

  function filterByStatType(etapas, statType) {
    switch (statType) {
      case 'races': return etapas;
      case 'wins': return etapas.filter(isWin);
      case 'podiums': return etapas.filter(isPodium);
      case 'poles': return etapas.filter(r => isSim(r['Pole']));
      case 'fastlaps': return etapas.filter(r => isSim(r['Best Lap']));
      case 'hattricks': return etapas.filter(r => isSim(r['Hat-Trick']));
      case 'chelems': return etapas.filter(r => isSim(r['Chelem']));
      default: return [];
    }
  }

  window.DriverData = {
    loadDriverData,
    computeStatsBar,
    computeAdvancedStats,
    computeRecordes,
    computeByAno,
    computeByTemporada,
    computeByLiga,
    computeByTemporadaCategoria,
    computeByCircuito,
    computeMilestones,
    filterByStatType,
    badgesForRace,
    formatPosition,
    isWin,
    isPodium,
    isSim,
    parseDatePtBR,
    sortByDateAsc
  };
})();
