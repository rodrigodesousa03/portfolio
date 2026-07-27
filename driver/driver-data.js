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

  // NOTA: "Top 3 Por Circuito" já foi lido direto de estatisticas-circuitos.csv,
  // mas o export gviz (usado por update-data.ps1) espalha/embaralha esse
  // mini-painel de 4 linhas ao exportar CSV — não é um formato estável pra
  // depender. Em vez disso, computamos o Top 3 por Circuito a partir do
  // próprio agrupamento por Pista feito com base em Etapas.csv (computeByCircuito),
  // que é sempre confiável. Ver computeTop3Circuitos() abaixo.
  async function loadDriverData() {
    const etapasTxt = await fetch('../data/estatisticas-etapas.csv').then(r => r.text());
    const etapas = parseCSVSimple(etapasTxt).filter(isValidRow);
    return { etapas };
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
      corridas, podios, vitorias, top10, abandonos,
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

    // Melhor resultado: guarda a corrida da PRIMEIRA vez que esse resultado apareceu
    let melhorResultado = null;
    let melhorResultadoRace = null;
    cronologico.forEach(r => {
      const n = finalNum(r);
      if (n !== null && (melhorResultado === null || n < melhorResultado)) {
        melhorResultado = n;
        melhorResultadoRace = r;
      }
    });

    // Sequências: guarda as corridas que compõem a MAIOR sequência encontrada
    let maxPodiosConsecutivos = 0, streak = 0, streakStart = 0, podiumStreakRaces = [];
    cronologico.forEach((r, i) => {
      if (isPodium(r)) {
        if (streak === 0) streakStart = i;
        streak++;
        if (streak > maxPodiosConsecutivos) {
          maxPodiosConsecutivos = streak;
          podiumStreakRaces = cronologico.slice(streakStart, i + 1);
        }
      } else {
        streak = 0;
      }
    });

    let maxVitoriasConsecutivas = 0, winStreak = 0, winStreakStart = 0, winStreakRaces = [];
    cronologico.forEach((r, i) => {
      if (isWin(r)) {
        if (winStreak === 0) winStreakStart = i;
        winStreak++;
        if (winStreak > maxVitoriasConsecutivas) {
          maxVitoriasConsecutivas = winStreak;
          winStreakRaces = cronologico.slice(winStreakStart, i + 1);
        }
      } else {
        winStreak = 0;
      }
    });

    const circuitosComVitoriaList = [...new Set(etapas.filter(isWin).map(r => r['Pista']))];
    const ligasComTituloList = [...new Set(
      etapas.filter(r => isSim(r['Campeão']) || isSim(r['Construtores'])).map(r => r['Liga'])
    )];

    return {
      melhorResultado, melhorResultadoRace,
      maxPodiosConsecutivos, podiumStreakRaces,
      maxVitoriasConsecutivas, winStreakRaces,
      circuitosComVitoria: circuitosComVitoriaList.length, circuitosComVitoriaList,
      ligasComTitulo: ligasComTituloList.length, ligasComTituloList
    };
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
      hatTricks: rows.filter(r => isSim(r['Hat-Trick'])).length,
      abandonos: rows.filter(isAbandono).length,
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

  // O CSV tem "iRacing" e "IRacing" como grafias distintas do mesmo simulador —
  // normaliza para não duplicar a entrada no agrupamento.
  function normalizeSimulador(nome) {
    const n = String(nome || '').trim();
    if (n.toLowerCase() === 'iracing') return 'iRacing';
    return n;
  }

  function computeBySimulador(etapas) {
    const map = new Map();
    etapas.forEach(r => {
      const simulador = normalizeSimulador(r['Simulador']);
      if (!map.has(simulador)) map.set(simulador, []);
      map.get(simulador).push(r);
    });
    return [...map.entries()]
      .map(([simulador, rows]) => ({ simulador, rows, stats: summarize(rows) }))
      .sort((a, b) => b.rows.length - a.rows.length);
  }

  function computeByEquipe(etapas) {
    const map = new Map();
    etapas.forEach(r => {
      const equipe = r['Equipe'];
      if (!map.has(equipe)) map.set(equipe, []);
      map.get(equipe).push(r);
    });
    return [...map.entries()]
      .map(([equipe, rows]) => ({ equipe, rows, stats: summarize(rows) }))
      .sort((a, b) => b.rows.length - a.rows.length);
  }

  function inicioNum(r) {
    const n = parseInt(String(r['Inicio'] || '').trim(), 10);
    return isNaN(n) ? null : n;
  }

  function computeStartStats(etapas) {
    const comLargada = etapas.filter(r => inicioNum(r) !== null);
    if (!comLargada.length) return null;

    const avgStart = comLargada.reduce((sum, r) => sum + inicioNum(r), 0) / comLargada.length;
    const melhorLargada = Math.min(...comLargada.map(inicioNum));
    const melhorLargadaRace = sortByDateAsc(comLargada).find(r => inicioNum(r) === melhorLargada);

    const comGanho = comLargada.filter(r => finalNum(r) !== null);
    const avgGainNum = comGanho.length
      ? comGanho.reduce((sum, r) => sum + (inicioNum(r) - finalNum(r)), 0) / comGanho.length
      : null;

    let maiorGanho = null;
    let maiorGanhoRace = null;
    sortByDateAsc(comGanho).forEach(r => {
      const delta = inicioNum(r) - finalNum(r);
      if (maiorGanho === null || delta > maiorGanho) { maiorGanho = delta; maiorGanhoRace = r; }
    });

    return {
      avgStart: avgStart.toFixed(1),
      melhorLargada,
      melhorLargadaRace,
      avgGain: avgGainNum === null ? '-' : (avgGainNum >= 0 ? '+' : '') + avgGainNum.toFixed(1),
      maiorGanho, maiorGanhoRace,
      corridasGanhouPosicao: comGanho.filter(r => inicioNum(r) > finalNum(r)).length,
      corridasPerdeuPosicao: comGanho.filter(r => inicioNum(r) < finalNum(r)).length
    };
  }

  function computeTop3Circuitos(byCircuitoList) {
    function top3(getter) {
      return [...byCircuitoList]
        .filter(c => getter(c.stats) > 0)
        .sort((a, b) => getter(b.stats) - getter(a.stats))
        .slice(0, 3)
        .map(c => ({ pista: c.pista, valor: getter(c.stats) }));
    }
    return [
      { label: 'Corridas', circuitos: top3(s => s.corridas) },
      { label: 'Pódios', circuitos: top3(s => s.podios) },
      { label: 'Vitórias', circuitos: top3(s => s.vitorias) },
      { label: 'Poles', circuitos: top3(s => s.poles) },
      { label: 'Fast Laps', circuitos: top3(s => s.fastLaps) },
      { label: 'Hattricks', circuitos: top3(s => s.hatTricks) },
      { label: 'Abandonos', circuitos: top3(s => s.abandonos) }
    ].filter(cat => cat.circuitos.length > 0);
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
    computeByEquipe,
    computeBySimulador,
    normalizeSimulador,
    computeTop3Circuitos,
    computeStartStats,
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
