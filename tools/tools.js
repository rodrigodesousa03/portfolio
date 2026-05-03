// =============================================
// I18N
// =============================================
const toolsI18n = {
  pt: {
    nav: { portfolio: '← Portfolio', tools: 'Ferramentas' },
    page: { title: 'Ferramentas', subtitle: 'Ferramentas para simuladores de corrida' },
    catalog: { title: 'Ferramentas Disponíveis' },
    tools: {
      rf2Setup: {
        name: 'rFactor 2 Setup Builder',
        desc: 'Configurador de setup para rFactor 2'
      }
    },
    categories: {
      powertrain:         'Trem de Força',
      wheels_and_brakes:  'Rodas e Freios',
      suspension_and_aero:'Suspensão e Aero',
      dampers:            'Amortecedores',
      chassis:            'Chassi'
    },
    subcategories: {
      engine:           'Motor',
      electronics:      'Eletrônica',
      gearing:          'Câmbio',
      differential:     'Diferencial',
      front_wheels:     'Rodas Dianteiras',
      rear_wheels:      'Rodas Traseiras',
      brakes:           'Freios',
      front_suspension: 'Suspensão Dianteira',
      rear_suspension:  'Suspensão Traseira',
      anti_roll_bars:   'Barras Estabilizadoras',
      toe:              'Convergência',
      aerodynamics:     'Aerodinâmica',
      front_dampers:    'Amortecedores Dianteiros',
      rear_dampers:     'Amortecedores Traseiros',
      steering:         'Direção',
      alignment:        'Alinhamento'
    },
    fields: {
      starting_fuel:    'Combustível Inicial',
      radiator_size:    'Radiador',
      brake_map:        'Mapa de Freio',
      engine_braking:   'Freio Motor',
      gear_1:           '1ª Marcha',
      gear_2:           '2ª Marcha',
      gear_3:           '3ª Marcha',
      gear_4:           '4ª Marcha',
      gear_5:           '5ª Marcha',
      gear_6:           '6ª Marcha',
      final_drive:      'Relação Final',
      power:            'Diferencial (Potência)',
      coast:            'Diferencial (Desacel.)',
      preload:          'Pré-Carga',
      tire_compound:    'Composto de Pneu',
      tire_pressure:    'Pressão dos Pneus',
      camber:           'Câmber',
      brake_bias:       'Distribuição de Freio',
      max_pedal_force:  'Força Máx. do Pedal',
      front_brake_duct: 'Duto Freio Diant.',
      rear_brake_duct:  'Duto Freio Tras.',
      spring_rate:      'Rigidez da Mola',
      ride_height:      'Altura de Rodagem',
      front_arb:        'Barra Estab. Dianteira',
      rear_arb:         'Barra Estab. Traseira',
      front_toe:        'Convergência Diant.',
      rear_toe:         'Convergência Tras.',
      front_downforce:  'Downforce Dianteiro',
      rear_downforce:   'Downforce Traseiro',
      slow_bump:        'Compressão Lenta',
      slow_rebound:     'Extensão Lenta',
      fast_bump:        'Compressão Rápida',
      fast_rebound:     'Extensão Rápida',
      steering_lock:    'Ângulo de Volante',
      caster:           'Caster'
    },
    ui: {
      reset: 'Resetar Padrões', copy: 'Copiar JSON', copied: 'Copiado!', export: 'Baixar JSON', adjustable: 'ajustável',
      createNew: 'Criar novo', createNewDesc: 'Iniciar com valores padrão',
      importJson: 'Importar JSON', importJsonDesc: 'Carregar um setup salvo',
      newSetup: 'Setup', importedSetup: 'Setup Importado',
      setupNamePlaceholder: 'Nome do setup...',
      invalidJson: 'Arquivo inválido ou incompatível com este carro.',
      errorIsSchema: 'Este é o arquivo de schema do carro, não um setup salvo.\nPara importar, use um setup exportado com "Baixar JSON".',
      trackPlaceholder: 'Pista (opcional)',
      analyze: 'Analisar', analyzeClose: 'Fechar',
      analysisTitle: 'Análise do Setup', noChanges: 'Nenhuma alteração detectada.',
      increased: 'Aumentado', decreased: 'Diminuído', defaultLabel: 'padrão'
    }
  },
  en: {
    nav: { portfolio: '← Portfolio', tools: 'Tools' },
    page: { title: 'Tools', subtitle: 'Tools for racing simulators' },
    catalog: { title: 'Available Tools' },
    tools: {
      rf2Setup: {
        name: 'rFactor 2 Setup Builder',
        desc: 'Setup configurator for rFactor 2'
      }
    },
    categories: {
      powertrain:         'Powertrain',
      wheels_and_brakes:  'Wheels & Brakes',
      suspension_and_aero:'Suspension & Aero',
      dampers:            'Dampers',
      chassis:            'Chassis'
    },
    subcategories: {
      engine:           'Engine',
      electronics:      'Electronics',
      gearing:          'Gearing',
      differential:     'Differential',
      front_wheels:     'Front Wheels',
      rear_wheels:      'Rear Wheels',
      brakes:           'Brakes',
      front_suspension: 'Front Suspension',
      rear_suspension:  'Rear Suspension',
      anti_roll_bars:   'Anti-Roll Bars',
      toe:              'Toe',
      aerodynamics:     'Aerodynamics',
      front_dampers:    'Front Dampers',
      rear_dampers:     'Rear Dampers',
      steering:         'Steering',
      alignment:        'Alignment'
    },
    fields: {
      starting_fuel:    'Starting Fuel',
      radiator_size:    'Radiator',
      brake_map:        'Brake Map',
      engine_braking:   'Engine Braking',
      gear_1:           '1st Gear',
      gear_2:           '2nd Gear',
      gear_3:           '3rd Gear',
      gear_4:           '4th Gear',
      gear_5:           '5th Gear',
      gear_6:           '6th Gear',
      final_drive:      'Final Drive',
      power:            'Diff (Power)',
      coast:            'Diff (Coast)',
      preload:          'Preload',
      tire_compound:    'Tire Compound',
      tire_pressure:    'Tire Pressure',
      camber:           'Camber',
      brake_bias:       'Brake Bias',
      max_pedal_force:  'Max Pedal Force',
      front_brake_duct: 'Front Brake Duct',
      rear_brake_duct:  'Rear Brake Duct',
      spring_rate:      'Spring Rate',
      ride_height:      'Ride Height',
      front_arb:        'Front ARB',
      rear_arb:         'Rear ARB',
      front_toe:        'Front Toe',
      rear_toe:         'Rear Toe',
      front_downforce:  'Front Downforce',
      rear_downforce:   'Rear Downforce',
      slow_bump:        'Slow Bump',
      slow_rebound:     'Slow Rebound',
      fast_bump:        'Fast Bump',
      fast_rebound:     'Fast Rebound',
      steering_lock:    'Steering Lock',
      caster:           'Caster'
    },
    ui: {
      reset: 'Reset Defaults', copy: 'Copy JSON', copied: 'Copied!', export: 'Download JSON', adjustable: 'adjustable',
      createNew: 'Create new', createNewDesc: 'Start with default values',
      importJson: 'Import JSON', importJsonDesc: 'Load a saved setup',
      newSetup: 'New Setup', importedSetup: 'Imported Setup',
      setupNamePlaceholder: 'Setup name...',
      invalidJson: 'Invalid file or incompatible with this car.',
      errorIsSchema: 'This is the car schema file, not a saved setup.\nTo import, use a setup exported with "Download JSON".',
      trackPlaceholder: 'Track (optional)',
      analyze: 'Analyze', analyzeClose: 'Close',
      analysisTitle: 'Setup Analysis', noChanges: 'No changes detected.',
      increased: 'Increased', decreased: 'Decreased', defaultLabel: 'default'
    }
  }
};

// =============================================
// LANG
// =============================================
let currentLang = localStorage.getItem('lang') || 'pt';
let t = toolsI18n[currentLang];

function getKey(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

function applyTranslations() {
  t = toolsI18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getKey(t, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('lang-flag').innerHTML = currentLang === 'pt'
    ? '🇧🇷 <small>PT</small>'
    : '🇺🇸 <small>EN</small>';
  if (currentSchema && isInBuilder) renderTool(currentSchema);
  else if (currentSchema && currentToolId) {
    document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(currentToolId, currentSchema);
  }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
});

// =============================================
// NAVBAR
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

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

// =============================================
// FOOTER YEAR + REVEAL
// =============================================
document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } }),
  { threshold: 0.1 }
);

document.querySelectorAll('.section-header, .tool-menu-card').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  revealObserver.observe(el);
});

// =============================================
// TOOL SCHEMAS (embedded for static hosting)
// =============================================
const toolSchemas = {
  'rf2-setup': {
    game: 'rFactor 2',
    categories: {
      powertrain: {
        engine: {
          radiator_size:  { unit: null,   min: 1,    max: 5,    step: 1,    default: 3,    adjustable: true }
        },
        electronics: {
          brake_map:      { unit: null,   min: 1,    max: 11,   step: 1,    default: 5,    adjustable: true },
          engine_braking: { unit: null,   min: 1,    max: 5,    step: 1,    default: 3,    adjustable: true }
        },
        gearing: {
          gear_1:       { unit: null, min: 2.50, max: 4.00, step: 0.01, default: 3.10, adjustable: true },
          gear_2:       { unit: null, min: 1.80, max: 3.20, step: 0.01, default: 2.35, adjustable: true },
          gear_3:       { unit: null, min: 1.30, max: 2.50, step: 0.01, default: 1.80, adjustable: true },
          gear_4:       { unit: null, min: 1.00, max: 1.90, step: 0.01, default: 1.40, adjustable: true },
          gear_5:       { unit: null, min: 0.75, max: 1.50, step: 0.01, default: 1.10, adjustable: true },
          final_drive:  { unit: null, min: 2.80, max: 5.20, step: 0.01, default: 3.90, adjustable: true }
        },
        differential: {
          power:   { unit: '%',  min: 0, max: 100, step: 1, default: 35, adjustable: true },
          coast:   { unit: '%',  min: 0, max: 100, step: 1, default: 20, adjustable: true },
          preload: { unit: null, min: 0, max: 10,  step: 1, default: 5,  adjustable: true }
        }
      },
      wheels_and_brakes: {
        front_wheels: {
          tire_pressure: { unit: 'kPa', min: 130,  max: 200,  step: 1,   default: 168,  adjustable: true },
          camber:        { unit: '°',   min: -5.0, max: 0.0,  step: 0.1, default: -2.5, adjustable: true }
        },
        rear_wheels: {
          tire_pressure: { unit: 'kPa', min: 130,  max: 200,  step: 1,   default: 162,  adjustable: true },
          camber:        { unit: '°',   min: -5.0, max: 0.0,  step: 0.1, default: -1.5, adjustable: true }
        },
        brakes: {
          brake_bias:       { unit: '%',  min: 50.0, max: 70.0, step: 0.5, default: 57.0, adjustable: true },
          max_pedal_force:  { unit: '%',  min: 50,   max: 100,  step: 1,   default: 100,  adjustable: true },
          front_brake_duct: { unit: null, min: 0,    max: 5,    step: 1,   default: 2,    adjustable: true },
          rear_brake_duct:  { unit: null, min: 0,    max: 5,    step: 1,   default: 1,    adjustable: true }
        }
      },
      suspension_and_aero: {
        front_suspension: {
          spring_rate: { unit: 'N/mm', min: 40, max: 160, step: 1, default: 80, adjustable: true },
          ride_height:  { unit: 'mm',  min: 40, max: 100, step: 1, default: 55, adjustable: true }
        },
        rear_suspension: {
          spring_rate: { unit: 'N/mm', min: 40, max: 160, step: 1, default: 85, adjustable: true },
          ride_height:  { unit: 'mm',  min: 40, max: 100, step: 1, default: 58, adjustable: true }
        },
        anti_roll_bars: {
          front_arb: { unit: 'N/mm', min: 0, max: 50, step: 1, default: 22, adjustable: true },
          rear_arb:  { unit: 'N/mm', min: 0, max: 50, step: 1, default: 17, adjustable: true }
        },
        toe: {
          front_toe: { unit: '°', min: -0.50, max: 0.50, step: 0.01, default: 0.05, adjustable: true },
          rear_toe:  { unit: '°', min:  0.00, max: 0.50, step: 0.01, default: 0.15, adjustable: true }
        },
        aerodynamics: {
          front_downforce: { unit: null, min: 1, max: 10, step: 1, default: 5, adjustable: true },
          rear_downforce:  { unit: null, min: 1, max: 10, step: 1, default: 6, adjustable: true }
        }
      },
      dampers: {
        front_dampers: {
          slow_bump:    { unit: null, min: 0, max: 20, step: 1, default: 8,  adjustable: true },
          slow_rebound: { unit: null, min: 0, max: 20, step: 1, default: 10, adjustable: true },
          fast_bump:    { unit: null, min: 0, max: 20, step: 1, default: 6,  adjustable: true },
          fast_rebound: { unit: null, min: 0, max: 20, step: 1, default: 8,  adjustable: true }
        },
        rear_dampers: {
          slow_bump:    { unit: null, min: 0, max: 20, step: 1, default: 9,  adjustable: true },
          slow_rebound: { unit: null, min: 0, max: 20, step: 1, default: 11, adjustable: true },
          fast_bump:    { unit: null, min: 0, max: 20, step: 1, default: 7,  adjustable: true },
          fast_rebound: { unit: null, min: 0, max: 20, step: 1, default: 9,  adjustable: true }
        }
      },
      chassis: {
        steering:  { steering_lock: { unit: '°', min: 10,  max: 26,  step: 1,   default: 17,  adjustable: true } },
        alignment: { caster:        { unit: '°', min: 2.0, max: 8.0, step: 0.1, default: 4.5, adjustable: true } }
      }
    }
  }
};

// =============================================
// FIELD KNOWLEDGE
// =============================================
const fieldKnowledge = {
  'powertrain.differential.power': {
    label: 'Differential Power',
    description: 'Controla o nível de travamento do diferencial durante a aceleração.',
    effects: {
      increase: ['Mais tração na saída de curva', 'Maior tendência de understeer ao acelerar'],
      decrease: ['Mais rotação do carro', 'Menor tração na saída']
    },
    tags: ['saida', 'tracao', 'estabilidade']
  },
  'powertrain.differential.coast': {
    label: 'Differential Coast',
    description: 'Controla o travamento do diferencial durante desaceleração.',
    effects: {
      increase: ['Mais estabilidade na entrada de curva', 'Menor capacidade de rotação'],
      decrease: ['Entrada de curva mais agressiva', 'Maior risco de instabilidade']
    },
    tags: ['entrada', 'estabilidade', 'frenagem']
  },
  'powertrain.differential.preload': {
    label: 'Differential Preload',
    description: 'Define a carga mínima aplicada ao diferencial em todas as situações.',
    effects: {
      increase: ['Carro mais estável em transições', 'Menor sensibilidade a mudanças bruscas'],
      decrease: ['Carro mais solto', 'Maior resposta a inputs de direção']
    },
    tags: ['estabilidade', 'transicao']
  },
  'wheels_and_brakes.front_wheels.tire_pressure': {
    label: 'Pressão do Pneu Dianteiro',
    description: 'Define a pressão interna do pneu dianteiro.',
    effects: {
      increase: ['Direção mais leve', 'Menor aderência em curvas'],
      decrease: ['Mais grip na dianteira', 'Direção mais pesada']
    },
    tags: ['entrada', 'grip']
  },
  'wheels_and_brakes.rear_wheels.tire_pressure': {
    label: 'Pressão do Pneu Traseiro',
    description: 'Define a pressão interna do pneu traseiro.',
    effects: {
      increase: ['Menor área de contato', 'Menor aderência lateral'],
      decrease: ['Maior aderência', 'Maior desgaste e aquecimento']
    },
    tags: ['tracao', 'grip', 'temperatura']
  },
  'wheels_and_brakes.front_wheels.camber': {
    label: 'Cambagem Dianteira',
    description: 'Ângulo de inclinação do pneu dianteiro.',
    effects: {
      increase: ['Melhor entrada de curva', 'Maior desgaste interno'],
      decrease: ['Menor aderência em curva', 'Melhor estabilidade em reta']
    },
    tags: ['entrada', 'grip']
  },
  'wheels_and_brakes.rear_wheels.camber': {
    label: 'Cambagem Traseira',
    description: 'Ângulo de inclinação do pneu traseiro.',
    effects: {
      increase: ['Melhor aderência em curva', 'Pior desempenho em reta'],
      decrease: ['Melhor tração em reta', 'Menor aderência lateral']
    },
    tags: ['meio', 'grip']
  },
  'wheels_and_brakes.brakes.brake_bias': {
    label: 'Brake Bias',
    description: 'Distribuição da força de frenagem entre dianteira e traseira.',
    effects: {
      increase: ['Mais estabilidade na frenagem', 'Maior tendência de understeer'],
      decrease: ['Melhor rotação na entrada', 'Maior risco de travamento traseiro']
    },
    tags: ['frenagem', 'entrada']
  },
  'suspension_and_aero.toe.front_toe': {
    label: 'Toe Dianteiro',
    description: 'Ângulo das rodas dianteiras.',
    effects: {
      increase: ['Melhor resposta na entrada', 'Menor estabilidade em reta'],
      decrease: ['Direção mais estável', 'Menor agressividade na entrada']
    },
    tags: ['entrada', 'direcao']
  },
  'suspension_and_aero.toe.rear_toe': {
    label: 'Toe Traseiro',
    description: 'Ângulo das rodas traseiras em relação ao eixo longitudinal.',
    effects: {
      increase: ['Mais estabilidade em reta', 'Menor capacidade de rotação'],
      decrease: ['Carro mais ágil', 'Mais instável']
    },
    tags: ['estabilidade', 'saida']
  },
  'suspension_and_aero.anti_roll_bars.front_arb': {
    label: 'Barra Estabilizadora Dianteira',
    description: 'Controla a rolagem da carroceria na dianteira.',
    effects: {
      increase: ['Menor rolagem', 'Menor grip na dianteira'],
      decrease: ['Mais aderência', 'Mais rolagem da carroceria']
    },
    tags: ['meio', 'equilibrio']
  },
  'suspension_and_aero.anti_roll_bars.rear_arb': {
    label: 'Barra Estabilizadora Traseira',
    description: 'Controla a rolagem traseira.',
    effects: {
      increase: ['Menor grip traseiro', 'Mais tendência a sobresterço'],
      decrease: ['Mais aderência traseira', 'Mais estabilidade']
    },
    tags: ['saida', 'equilibrio']
  },
  'dampers.front_dampers.slow_bump': {
    label: 'Bump Lento Dianteiro',
    description: 'Controla a compressão da suspensão dianteira.',
    effects: {
      increase: ['Menor mergulho em frenagem', 'Menor aderência'],
      decrease: ['Mais aderência na entrada', 'Mais movimento de suspensão']
    },
    tags: ['frenagem', 'entrada']
  },
  'dampers.rear_dampers.slow_rebound': {
    label: 'Rebound Lento Traseiro',
    description: 'Controla a velocidade de retorno da suspensão traseira.',
    effects: {
      increase: ['Maior controle da transferência de peso', 'Saída mais estável'],
      decrease: ['Resposta mais rápida', 'Menor estabilidade']
    },
    tags: ['saida', 'peso']
  },
  'powertrain.engine.radiator_size': {
    label: 'Abertura do Radiador',
    description: 'Controla o fluxo de ar para resfriamento do motor.',
    effects: {
      increase: ['Melhor resfriamento do motor', 'Maior arrasto aerodinâmico'],
      decrease: ['Menor arrasto', 'Maior risco de superaquecimento']
    },
    tags: ['reta', 'motor', 'temperatura']
  },
  'powertrain.electronics.brake_map': {
    label: 'Mapa de Freio Motor',
    description: 'Controla a intensidade do freio motor.',
    effects: {
      increase: ['Maior desaceleração sem usar freio', 'Mais estabilidade na entrada'],
      decrease: ['Carro mais livre na desaceleração', 'Maior rotação na entrada']
    },
    tags: ['entrada', 'frenagem']
  },
  'powertrain.electronics.engine_braking': {
    label: 'Engine Braking',
    description: 'Define o nível de frenagem gerado pelo motor.',
    effects: {
      increase: ['Ajuda na desaceleração', 'Pode causar instabilidade traseira'],
      decrease: ['Menor interferência do motor', 'Entrada mais suave']
    },
    tags: ['entrada', 'estabilidade']
  },
  'powertrain.gearing.gear_1': {
    label: 'Marcha 1',
    description: 'Relação da primeira marcha.',
    effects: {
      increase: ['Mais torque na saída', 'Menor velocidade máxima na marcha'],
      decrease: ['Menos torque', 'Maior alongamento da marcha']
    },
    tags: ['saida', 'aceleracao']
  },
  'powertrain.gearing.gear_2': {
    label: 'Marcha 2',
    description: 'Relação da segunda marcha.',
    effects: {
      increase: ['Mais aceleração', 'Menor velocidade máxima'],
      decrease: ['Menos aceleração', 'Mais velocidade por marcha']
    },
    tags: ['aceleracao']
  },
  'powertrain.gearing.gear_3': {
    label: 'Marcha 3',
    description: 'Relação da terceira marcha.',
    effects: {
      increase: ['Melhor resposta em curvas médias', 'Menor final'],
      decrease: ['Mais alongamento', 'Menor resposta']
    },
    tags: ['meio']
  },
  'powertrain.gearing.gear_4': {
    label: 'Marcha 4',
    description: 'Relação da quarta marcha.',
    effects: {
      increase: ['Mais aceleração', 'Menor velocidade máxima'],
      decrease: ['Maior velocidade', 'Menor resposta']
    },
    tags: ['reta']
  },
  'powertrain.gearing.gear_5': {
    label: 'Marcha 5',
    description: 'Relação da quinta marcha.',
    effects: {
      increase: ['Mais aceleração', 'Limita velocidade final'],
      decrease: ['Maior velocidade final', 'Menor aceleração']
    },
    tags: ['reta']
  },
  'powertrain.gearing.final_drive': {
    label: 'Relação Final',
    description: 'Multiplicador geral das marchas.',
    effects: {
      increase: ['Mais aceleração geral', 'Menor velocidade final'],
      decrease: ['Maior velocidade final', 'Menor aceleração']
    },
    tags: ['reta', 'aceleracao']
  },
  'wheels_and_brakes.brakes.max_pedal_force': {
    label: 'Força Máxima do Pedal',
    description: 'Define a força máxima aplicada ao freio.',
    effects: {
      increase: ['Maior controle fino', 'Exige mais força física'],
      decrease: ['Freio mais sensível', 'Menor precisão']
    },
    tags: ['frenagem', 'controle']
  },
  'wheels_and_brakes.brakes.front_brake_duct': {
    label: 'Duto de Freio Dianteiro',
    description: 'Controla o resfriamento dos freios dianteiros.',
    effects: {
      increase: ['Menor temperatura dos freios', 'Mais arrasto aerodinâmico'],
      decrease: ['Mais performance aerodinâmica', 'Risco de superaquecimento']
    },
    tags: ['frenagem', 'temperatura']
  },
  'wheels_and_brakes.brakes.rear_brake_duct': {
    label: 'Duto de Freio Traseiro',
    description: 'Controla o resfriamento dos freios traseiros.',
    effects: {
      increase: ['Menor aquecimento', 'Mais drag'],
      decrease: ['Menor resistência ao ar', 'Maior temperatura']
    },
    tags: ['frenagem']
  },
  'suspension_and_aero.front_suspension.spring_rate': {
    label: 'Mola Dianteira',
    description: 'Rigidez da mola dianteira.',
    effects: {
      increase: ['Menor rolagem', 'Menor aderência'],
      decrease: ['Mais grip', 'Mais movimento de carroceria']
    },
    tags: ['entrada', 'equilibrio']
  },
  'suspension_and_aero.rear_suspension.spring_rate': {
    label: 'Mola Traseira',
    description: 'Rigidez da mola traseira.',
    effects: {
      increase: ['Menor grip traseiro', 'Mais sobresterço'],
      decrease: ['Mais tração', 'Mais estabilidade']
    },
    tags: ['saida', 'tracao']
  },
  'suspension_and_aero.front_suspension.ride_height': {
    label: 'Altura Dianteira',
    description: 'Altura do carro na frente.',
    effects: {
      increase: ['Mais estabilidade', 'Menor downforce'],
      decrease: ['Mais downforce', 'Risco de raspar']
    },
    tags: ['aero']
  },
  'suspension_and_aero.rear_suspension.ride_height': {
    label: 'Altura Traseira',
    description: 'Altura traseira do carro.',
    effects: {
      increase: ['Mais estabilidade', 'Menor eficiência aerodinâmica'],
      decrease: ['Mais downforce', 'Mais sensível']
    },
    tags: ['aero']
  },
  'suspension_and_aero.aerodynamics.front_downforce': {
    label: 'Downforce Dianteiro',
    description: 'Carga aerodinâmica na dianteira.',
    effects: {
      increase: ['Mais grip na frente', 'Menor velocidade em reta'],
      decrease: ['Mais velocidade', 'Menor aderência']
    },
    tags: ['entrada', 'aero']
  },
  'suspension_and_aero.aerodynamics.rear_downforce': {
    label: 'Downforce Traseiro',
    description: 'Carga aerodinâmica traseira.',
    effects: {
      increase: ['Mais estabilidade', 'Menor velocidade final'],
      decrease: ['Mais velocidade', 'Menor estabilidade']
    },
    tags: ['saida', 'aero']
  },
  'dampers.front_dampers.slow_rebound': {
    label: 'Rebound Lento Dianteiro',
    description: 'Controle do retorno da suspensão dianteira.',
    effects: {
      increase: ['Mais controle de peso', 'Menos rotação'],
      decrease: ['Mais resposta', 'Menos controle']
    },
    tags: ['entrada']
  },
  'dampers.front_dampers.fast_bump': {
    label: 'Bump Rápido Dianteiro',
    description: 'Resposta a impactos rápidos na frente.',
    effects: {
      increase: ['Mais rigidez em impactos', 'Menos absorção'],
      decrease: ['Mais conforto em zebras', 'Menor precisão']
    },
    tags: ['zebra']
  },
  'dampers.front_dampers.fast_rebound': {
    label: 'Rebound Rápido Dianteiro',
    description: 'Retorno rápido da suspensão dianteira.',
    effects: {
      increase: ['Mais estabilidade', 'Menos aderência em irregularidades'],
      decrease: ['Mais contato com o solo', 'Menos controle']
    },
    tags: ['estabilidade']
  },
  'dampers.rear_dampers.slow_bump': {
    label: 'Bump Lento Traseiro',
    description: 'Compressão da suspensão traseira.',
    effects: {
      increase: ['Menor afundamento', 'Menos tração'],
      decrease: ['Mais tração', 'Mais movimento']
    },
    tags: ['saida']
  },
  'dampers.rear_dampers.fast_bump': {
    label: 'Bump Rápido Traseiro',
    description: 'Resposta traseira a impactos.',
    effects: {
      increase: ['Mais rigidez', 'Menor absorção'],
      decrease: ['Mais conforto', 'Mais aderência']
    },
    tags: ['zebra']
  },
  'dampers.rear_dampers.fast_rebound': {
    label: 'Rebound Rápido Traseiro',
    description: 'Retorno rápido da traseira.',
    effects: {
      increase: ['Mais estabilidade', 'Menos tração em irregularidades'],
      decrease: ['Mais aderência', 'Menos controle']
    },
    tags: ['saida']
  },
  'chassis.steering.steering_lock': {
    label: 'Steering Lock',
    description: 'Ângulo máximo de esterço.',
    effects: {
      increase: ['Maior capacidade de giro', 'Menor precisão'],
      decrease: ['Mais precisão', 'Menor raio de curva']
    },
    tags: ['direcao']
  },
  'chassis.alignment.caster': {
    label: 'Caster',
    description: 'Ângulo de caster da direção.',
    effects: {
      increase: ['Mais estabilidade', 'Direção mais pesada'],
      decrease: ['Direção mais leve', 'Menor estabilidade']
    },
    tags: ['direcao', 'estabilidade']
  }
};

// =============================================
// BUILDER STATE
// =============================================
let currentSchema = null;
let currentValues = {};
let activeCategory = null;
let currentSetupName = '';
let currentTrackName = '';
let currentToolId = null;
let isInBuilder = false;

// =============================================
// LAUNCH TOOL (shows create / import choice)
// =============================================
function launchTool(toolId) {
  const schema = toolSchemas[toolId];
  if (!schema) return;

  document.querySelectorAll('.tool-menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('card-' + toolId)?.classList.add('active');

  currentSchema = schema;
  currentToolId = toolId;
  isInBuilder = false;

  const workspace = document.getElementById('tool-workspace');
  workspace.style.display = 'block';
  document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(toolId, schema);
  setTimeout(() => workspace.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

function renderLaunchPanel(toolId, schema) {
  return `
    <div class="tool-launch-panel">
      <div class="tool-launch-header">
        <span class="tool-launch-icon">🏁</span>
        <div>
          <div class="tool-launch-name">${schema.game}</div>
          <div class="tool-launch-meta">${schema.game}</div>
        </div>
      </div>
      <div class="tool-launch-actions">
        <button class="tool-launch-btn" onclick="createNew('${toolId}')">
          <span class="launch-btn-icon">✦</span>
          <div class="launch-btn-body">
            <div class="launch-btn-title">${getKey(t, 'ui.createNew')}</div>
            <div class="launch-btn-desc">${getKey(t, 'ui.createNewDesc')}</div>
          </div>
        </button>
        <button class="tool-launch-btn" onclick="triggerImport('${toolId}')">
          <span class="launch-btn-icon">↑</span>
          <div class="launch-btn-body">
            <div class="launch-btn-title">${getKey(t, 'ui.importJson')}</div>
            <div class="launch-btn-desc">${getKey(t, 'ui.importJsonDesc')}</div>
          </div>
        </button>
      </div>
      <input type="file" id="import-file-${toolId}" accept=".json" style="display:none"
        onchange="importSetup(event,'${toolId}')"/>
    </div>`;
}

// =============================================
// CREATE NEW
// =============================================
function createNew(toolId) {
  currentSetupName = getKey(t, 'ui.newSetup');
  currentTrackName = '';
  initValues(toolSchemas[toolId]);
  isInBuilder = true;
  renderTool(toolSchemas[toolId]);
}

// =============================================
// IMPORT JSON
// =============================================
function triggerImport(toolId) {
  document.getElementById('import-file-' + toolId)?.click();
}

function importSetup(event, toolId) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      const schema = toolSchemas[toolId];
      if (!imported.setup) throw new Error('missing setup');

      currentValues = {};
      for (const [catKey, cat] of Object.entries(schema.categories)) {
        currentValues[catKey] = {};
        for (const [subKey, sub] of Object.entries(cat)) {
          currentValues[catKey][subKey] = {};
          for (const [fieldKey, field] of Object.entries(sub)) {
            const v = imported.setup?.[catKey]?.[subKey]?.[fieldKey];
            currentValues[catKey][subKey][fieldKey] = (v !== undefined)
              ? Math.min(field.max, Math.max(field.min, Number(v)))
              : field.default;
          }
        }
      }

      currentSetupName = imported.setup_name || getKey(t, 'ui.importedSetup');
      currentTrackName = imported.track || '';
      currentSchema = schema;
      activeCategory = null;
      isInBuilder = true;
      renderTool(schema);
    } catch {
      alert(getKey(t, 'ui.invalidJson'));
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// =============================================
// INIT VALUES
// =============================================
function initValues(schema) {
  currentValues = {};
  for (const [catKey, cat] of Object.entries(schema.categories)) {
    currentValues[catKey] = {};
    for (const [subKey, sub] of Object.entries(cat)) {
      currentValues[catKey][subKey] = {};
      for (const [fieldKey, field] of Object.entries(sub)) {
        currentValues[catKey][subKey][fieldKey] = field.default;
      }
    }
  }
}

// =============================================
// HELPERS
// =============================================
function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// =============================================
// RENDER TOOL
// =============================================
function renderTool(schema) {
  const catKeys = Object.keys(schema.categories);
  if (!activeCategory || !catKeys.includes(activeCategory)) activeCategory = catKeys[0];

  let html = `
    <div class="tool-workspace-header">
      <div class="setup-header-inputs">
        <input type="text" class="setup-name-input" id="setup-name"
          value="${escapeHtml(currentSetupName)}"
          placeholder="${escapeHtml(getKey(t, 'ui.setupNamePlaceholder'))}"
          oninput="currentSetupName = this.value"/>
        <input type="text" class="setup-track-input" id="setup-track"
          value="${escapeHtml(currentTrackName)}"
          placeholder="${escapeHtml(getKey(t, 'ui.trackPlaceholder'))}"
          oninput="currentTrackName = this.value"/>
      </div>
    </div>
    <div class="category-tabs">
  `;
  for (const catKey of catKeys) {
    const label = getKey(t, 'categories.' + catKey) || catKey;
    html += `<button class="cat-tab${catKey === activeCategory ? ' active' : ''}" onclick="switchCategory('${catKey}')">${label}</button>`;
  }
  html += `</div><div id="cat-panels">`;
  for (const catKey of catKeys) {
    html += `<div class="cat-panel${catKey === activeCategory ? ' active' : ''}" id="panel-${catKey}">`;
    html += renderCategoryContent(catKey, schema.categories[catKey]);
    html += `</div>`;
  }
  html += `</div>`;
  html += `
    <div class="setup-action-bar">
      <button class="btn-analyze" id="btn-analyze" onclick="showAnalysis()">
        ${getKey(t, 'ui.analyze')} <span class="analyze-badge" id="analyze-badge" style="display:none">0</span>
      </button>
      <button class="btn-reset" onclick="resetDefaults()">${getKey(t, 'ui.reset')}</button>
      <button class="btn-copy" id="btn-copy" onclick="copyJSON()">${getKey(t, 'ui.copy')}</button>
      <button class="btn btn-small" onclick="downloadJSON()">${getKey(t, 'ui.export')}</button>
    </div>
  `;

  document.getElementById('tool-renderer').innerHTML = html;
  initDiffBadges();
}

// =============================================
// RENDER CATEGORY CONTENT
// =============================================
function renderCategoryContent(catKey, catData) {
  let html = '';
  for (const [subKey, sub] of Object.entries(catData)) {
    const subLabel = getKey(t, 'subcategories.' + subKey) || subKey;
    html += `<div class="subcat-block"><div class="subcat-title">${subLabel}</div><div class="fields-grid">`;
    for (const [fieldKey, field] of Object.entries(sub)) {
      html += renderField(catKey, subKey, fieldKey, field);
    }
    html += `</div></div>`;
  }
  return html;
}

// =============================================
// RENDER FIELD
// =============================================
function renderField(catKey, subKey, fieldKey, field) {
  const label = getKey(t, 'fields.' + fieldKey) || fieldKey;
  const value = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
  const uid = `${catKey}__${subKey}__${fieldKey}`;
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';
  const isFixed = field.min === field.max;
  const isAdjustable = field.adjustable !== false;
  const isDisabled = isFixed || !isAdjustable;

  const knowledgeKey = `${catKey}.${subKey}.${fieldKey}`;
  const knowledge = fieldKnowledge[knowledgeKey] || null;

  const rowClass = ['field-row', isFixed ? 'field-fixed' : '', !isAdjustable ? 'field-locked' : '']
    .filter(Boolean).join(' ');

  const infoTagsHtml = knowledge
    ? (knowledge.tags || []).map(tag => `<span class="field-info-tag">${tag}</span>`).join('')
    : '';
  const infoPanelHtml = knowledge
    ? `<div class="field-info" id="info-${uid}"><p class="field-info-desc">${knowledge.description}</p><div class="field-info-tags">${infoTagsHtml}</div><div class="field-info-effects" id="fx-${uid}"></div></div>`
    : '';

  return `
    <div class="${rowClass}" id="row-${uid}">
      <div class="field-header">
        <span class="field-label">${label}</span>
        <div class="field-controls">
          <span class="field-value" id="val-${uid}">${Number(value).toFixed(decimals)}${unit}</span>
          <span class="field-diff-badge" id="diff-${uid}" style="display:none"></span>
          ${knowledge ? `<button class="field-info-btn" onclick="toggleFieldInfo('${uid}')">ℹ</button>` : ''}
          <button class="field-cfg-btn" onclick="toggleFieldConfig('${uid}')">⚙</button>
        </div>
      </div>
      <input type="range" class="setup-slider" id="${uid}"
        min="${field.min}" max="${field.max}" step="${field.step}" value="${value}"
        oninput="updateSlider('${uid}', this.value)"
        ${isDisabled ? 'disabled' : ''}/>
      ${infoPanelHtml}
      <div class="field-config" id="cfg-${uid}">
        <div class="cfg-inputs">
          <div class="cfg-label-input">
            <span class="cfg-label">min</span>
            <input type="number" class="cfg-input" value="${field.min}" step="${field.step}"
              onchange="updateFieldMeta('${uid}','min',this.value)"/>
          </div>
          <div class="cfg-label-input">
            <span class="cfg-label">max</span>
            <input type="number" class="cfg-input" value="${field.max}" step="${field.step}"
              onchange="updateFieldMeta('${uid}','max',this.value)"/>
          </div>
          <div class="cfg-label-input">
            <span class="cfg-label">step</span>
            <input type="number" class="cfg-input" value="${field.step}" step="any"
              onchange="updateFieldMeta('${uid}','step',this.value)"/>
          </div>
          <div class="cfg-label-input">
            <span class="cfg-label">default</span>
            <input type="number" class="cfg-input" value="${field.default}" step="${field.step}"
              onchange="updateFieldMeta('${uid}','default',this.value)"/>
          </div>
        </div>
        <label class="cfg-adjustable-row">
          <input type="checkbox" class="cfg-adjustable-check" ${isAdjustable ? 'checked' : ''}
            onchange="updateAdjustable('${uid}', this.checked)"/>
          <span class="cfg-toggle-track"><span class="cfg-toggle-thumb"></span></span>
          <span class="cfg-label">${getKey(t, 'ui.adjustable')}</span>
        </label>
      </div>
    </div>`;
}

// =============================================
// UPDATE HANDLERS
// =============================================
function updateAdjustable(uid, isAdjustable) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  const field = currentSchema.categories[catKey][subKey][fieldKey];
  field.adjustable = isAdjustable;
  const row = document.getElementById('row-' + uid);
  const slider = document.getElementById(uid);
  if (row) row.classList.toggle('field-locked', !isAdjustable);
  if (slider) slider.disabled = !isAdjustable || field.min === field.max;
}

function updateSlider(uid, rawValue) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  const field = currentSchema.categories[catKey][subKey][fieldKey];
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';
  const num = parseFloat(rawValue);

  currentValues[catKey][subKey][fieldKey] = num;

  const display = document.getElementById('val-' + uid);
  if (display) display.textContent = num.toFixed(decimals) + unit;

  const diffBadge = document.getElementById('diff-' + uid);
  if (diffBadge) {
    const knowledgeKey = `${catKey}.${subKey}.${fieldKey}`;
    const diff = num - field.default;
    if (fieldKnowledge[knowledgeKey] && Math.abs(diff) >= field.step * 0.5) {
      const defaultDisplay = Number(field.default).toFixed(decimals) + unit;
      diffBadge.textContent = (diff > 0 ? '▲' : '▼') + ' ' + defaultDisplay;
      diffBadge.className = 'field-diff-badge ' + (diff > 0 ? 'up' : 'down');
      diffBadge.style.display = 'inline';
    } else {
      diffBadge.style.display = 'none';
    }
  }

  if (document.getElementById('row-' + uid)?.classList.contains('info-open')) {
    populateFieldInfoEffects(uid);
  }

  refreshAnalyzeBadge();
}

// =============================================
// TOGGLE FIELD CONFIG
// =============================================
function toggleFieldConfig(uid) {
  document.getElementById('row-' + uid)?.classList.toggle('cfg-open');
}

function populateFieldInfoEffects(uid) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  const field = currentSchema.categories[catKey][subKey][fieldKey];
  const knowledge = fieldKnowledge[`${catKey}.${subKey}.${fieldKey}`];
  const fxEl = document.getElementById('fx-' + uid);
  if (!knowledge || !fxEl) return;

  const current = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
  const diff = current - field.default;

  if (Math.abs(diff) < field.step * 0.5) {
    fxEl.innerHTML = '';
    return;
  }

  const isUp = diff > 0;
  const effects = isUp ? knowledge.effects.increase : knowledge.effects.decrease;
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';

  const defaultLabel = getKey(t, 'ui.defaultLabel');
  fxEl.innerHTML = `
    <div class="field-info-fx-header">
      <span class="field-diff-badge ${isUp ? 'up' : 'down'}">${isUp ? '▲' : '▼'}</span>
      <span class="field-info-fx-label">${isUp ? getKey(t, 'ui.increased') : getKey(t, 'ui.decreased')}</span>
      <span class="field-info-fx-default">${defaultLabel}: ${Number(field.default).toFixed(decimals)}${unit}</span>
    </div>
    <ul class="field-info-fx-list">${effects.map(e => `<li>${e}</li>`).join('')}</ul>`;
}

function toggleFieldInfo(uid) {
  const row = document.getElementById('row-' + uid);
  if (!row) return;
  if (row.classList.toggle('info-open')) populateFieldInfoEffects(uid);
}

// =============================================
// UPDATE FIELD META (min / max / step / default)
// =============================================
function updateFieldMeta(uid, property, rawValue) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  const field = currentSchema.categories[catKey][subKey][fieldKey];

  if (field.type === 'select') {
    field[property] = rawValue;
    return;
  }

  const num = parseFloat(rawValue);
  if (isNaN(num)) return;
  field[property] = num;

  if (property === 'step') {
    const slider = document.getElementById(uid);
    if (slider) slider.step = num;
    return;
  }

  if (property === 'min' || property === 'max') {
    const slider = document.getElementById(uid);
    if (!slider) return;
    slider[property] = num;
    const clamped = Math.min(field.max, Math.max(field.min, parseFloat(slider.value)));
    slider.value = clamped;
    currentValues[catKey][subKey][fieldKey] = clamped;
    const decimals = (field.step.toString().split('.')[1] || '').length;
    const unit = field.unit ? ' ' + field.unit : '';
    const display = document.getElementById('val-' + uid);
    if (display) display.textContent = clamped.toFixed(decimals) + unit;
  }
  // 'default' only persists in schema for Reset — no live DOM update needed
}

// =============================================
// SWITCH CATEGORY
// =============================================
function switchCategory(catKey) {
  activeCategory = catKey;
  document.querySelectorAll('.cat-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.cat-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelector(`.cat-tab[onclick="switchCategory('${catKey}')"]`)?.classList.add('active');
  document.getElementById('panel-' + catKey)?.classList.add('active');
}

// =============================================
// RESET
// =============================================
function resetDefaults() {
  if (!currentSchema) return;
  initValues(currentSchema);
  renderTool(currentSchema);
}

// =============================================
// EXPORT
// =============================================
function buildExportJSON() {
  const obj = { setup_name: currentSetupName, game: currentSchema.game, setup: currentValues };
  if (currentTrackName) obj.track = currentTrackName;
  return JSON.stringify(obj, null, 2);
}

function copyJSON() {
  navigator.clipboard.writeText(buildExportJSON()).then(() => {
    const btn = document.getElementById('btn-copy');
    const orig = btn.textContent;
    btn.textContent = getKey(t, 'ui.copied');
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  });
}

function downloadJSON() {
  const blob = new Blob([buildExportJSON()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const name = (currentSetupName || currentSchema.game).replace(/\s+/g, '_');
  a.download = name + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

// =============================================
// ANALYSIS
// =============================================
function getAnalyzableChanges() {
  const changes = [];
  if (!currentSchema) return changes;
  for (const [catKey, cat] of Object.entries(currentSchema.categories)) {
    for (const [subKey, sub] of Object.entries(cat)) {
      for (const [fieldKey, field] of Object.entries(sub)) {
        const knowledgeKey = `${catKey}.${subKey}.${fieldKey}`;
        if (!fieldKnowledge[knowledgeKey]) continue;
        const current = currentValues[catKey]?.[subKey]?.[fieldKey];
        if (current === undefined) continue;
        const diff = current - field.default;
        if (Math.abs(diff) >= field.step * 0.5) {
          changes.push({ field, current, diff, knowledge: fieldKnowledge[knowledgeKey] });
        }
      }
    }
  }
  return changes;
}

function refreshAnalyzeBadge() {
  const badge = document.getElementById('analyze-badge');
  if (!badge) return;
  const count = getAnalyzableChanges().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

function initDiffBadges() {
  if (!currentSchema) return;
  for (const [catKey, cat] of Object.entries(currentSchema.categories)) {
    for (const [subKey, sub] of Object.entries(cat)) {
      for (const [fieldKey, field] of Object.entries(sub)) {
        const uid = `${catKey}__${subKey}__${fieldKey}`;
        const knowledgeKey = `${catKey}.${subKey}.${fieldKey}`;
        if (!fieldKnowledge[knowledgeKey]) continue;
        const current = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
        const diff = current - field.default;
        const badge = document.getElementById('diff-' + uid);
        if (!badge) continue;
        if (Math.abs(diff) >= field.step * 0.5) {
          const decimals = (field.step.toString().split('.')[1] || '').length;
          const unit = field.unit ? ' ' + field.unit : '';
          badge.textContent = (diff > 0 ? '▲' : '▼') + ' ' + Number(field.default).toFixed(decimals) + unit;
          badge.className = 'field-diff-badge ' + (diff > 0 ? 'up' : 'down');
          badge.style.display = 'inline';
        } else {
          badge.style.display = 'none';
        }
      }
    }
  }
  refreshAnalyzeBadge();
}

function showAnalysis() {
  document.getElementById('analysis-overlay')?.remove();
  const changes = getAnalyzableChanges();

  let body = '';
  if (changes.length === 0) {
    body = `<p class="analysis-empty">${getKey(t, 'ui.noChanges')}</p>`;
  } else {
    for (const { field, current, diff, knowledge } of changes) {
      const decimals = (field.step.toString().split('.')[1] || '').length;
      const unit = field.unit ? ' ' + field.unit : '';
      const isUp = diff > 0;
      const dirLabel = isUp ? getKey(t, 'ui.increased') : getKey(t, 'ui.decreased');
      const dirClass = isUp ? 'up' : 'down';
      const effects = isUp ? knowledge.effects.increase : knowledge.effects.decrease;
      const tagsHtml = (knowledge.tags || []).map(tag => `<span class="analysis-tag">${tag}</span>`).join('');
      const effectsHtml = effects.map(e => `<li>${e}</li>`).join('');
      body += `
        <div class="analysis-card">
          <div class="analysis-card-header">
            <span class="analysis-field-name">${knowledge.label}</span>
            <span class="analysis-dir ${dirClass}">${isUp ? '▲' : '▼'} ${dirLabel}</span>
          </div>
          <div class="analysis-values">
            <span class="analysis-current">${Number(current).toFixed(decimals)}${unit}</span>
            <span class="analysis-sep">→</span>
            <span class="analysis-default">${Number(field.default).toFixed(decimals)}${unit} ${getKey(t, 'ui.defaultLabel')}</span>
          </div>
          <p class="analysis-desc">${knowledge.description}</p>
          <ul class="analysis-effects">${effectsHtml}</ul>
          <div class="analysis-tags">${tagsHtml}</div>
        </div>`;
    }
  }

  const overlay = document.createElement('div');
  overlay.id = 'analysis-overlay';
  overlay.className = 'analysis-overlay';
  overlay.innerHTML = `
    <div class="analysis-panel" role="dialog">
      <div class="analysis-header">
        <span class="analysis-title">${getKey(t, 'ui.analysisTitle')}</span>
        <button class="analysis-close" onclick="hideAnalysis()">✕</button>
      </div>
      <div class="analysis-body">${body}</div>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) hideAnalysis(); });
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));
}

function hideAnalysis() {
  const overlay = document.getElementById('analysis-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
}

// =============================================
// INIT
// =============================================
applyTranslations();
