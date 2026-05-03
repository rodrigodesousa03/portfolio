// =============================================
// I18N
// =============================================
const toolsI18n = {
  pt: {
    nav: { portfolio: '← Portfolio', tools: 'Ferramentas' },
    page: { title: 'Ferramentas' },
    catalog: { title: 'Simulador' },
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
      alignment:        'Alinhamento',
      weight:           'Peso'
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
      caster:           'Caster',
      fender_flare:         'Expansão do Para-lama',
      track_bar:            'Barra Panhard',
      front_wheel_track:    'Bitola Dianteira',
      rear_wheel_track:     'Bitola Traseira',
      tender_spring_rate:   'Mola Auxiliar',
      packers:              'Espaçadores',
      spring_rubber:        'Borracha de Mola',
      brake_disc:           'Disco de Freio',
      handbrake_pressure:   'Freio de Mão',
      vertical:             'C.G. Vertical',
      lateral:              'C.G. Lateral',
      weight_distribution:  'Dist. de Peso',
      wedge:                'Cunha'
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
      increased: 'Aumentado', decreased: 'Diminuído', defaultLabel: 'padrão',
      selectTemplate: 'Selecionar Carro',
      importTemplate: 'Importar Template',
      importTemplateDesc: 'Carregar schema de um carro',
      exportTemplate: 'Exportar Template',
      invalidTemplate: 'Arquivo inválido ou não reconhecido como template de carro.',
      importedTemplate: 'Template Importado',
      deleteTemplate: 'Excluir Template',
      linked: 'Vinculado',
      leftLabel: 'Esq.',
      rightLabel: 'Dir.'
    }
  },
  en: {
    nav: { portfolio: '← Portfolio', tools: 'Tools' },
    page: { title: 'Tools' },
    catalog: { title: 'Simulator' },
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
      alignment:        'Alignment',
      weight:           'Weight'
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
      caster:           'Caster',
      fender_flare:         'Fender Flare',
      track_bar:            'Track Bar',
      front_wheel_track:    'Front Wheel Track',
      rear_wheel_track:     'Rear Wheel Track',
      tender_spring_rate:   'Tender Spring Rate',
      packers:              'Packers',
      spring_rubber:        'Spring Rubber',
      brake_disc:           'Brake Disc',
      handbrake_pressure:   'Handbrake Pressure',
      vertical:             'CG Vertical',
      lateral:              'CG Lateral',
      weight_distribution:  'Weight Distribution',
      wedge:                'Wedge'
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
      increased: 'Increased', decreased: 'Decreased', defaultLabel: 'default',
      selectTemplate: 'Select Car',
      importTemplate: 'Import Template',
      importTemplateDesc: 'Load a car schema file',
      exportTemplate: 'Export Template',
      invalidTemplate: 'Invalid file or not recognized as a car template.',
      importedTemplate: 'Imported Template',
      deleteTemplate: 'Delete Template',
      linked: 'Linked',
      leftLabel: 'L',
      rightLabel: 'R'
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
// CAR TEMPLATES (embedded for static hosting)
// =============================================
const carTemplates = {
  'rf2-setup': [
    {
      id: 'generic',
      name: 'Genérico',
      builtin: true,
      schema: {
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
              tire_pressure: { unit: 'kPa', min: 130,  max: 200,  step: 1,   default: 168,  adjustable: true,  sides: 'both' },
              camber:        { unit: '°',   min: -5.0, max: 0.0,  step: 0.1, default: -2.5, adjustable: true,  sides: 'both' },
              brake_disc:    { unit: 'cm',  min: 2.80, max: 3.80, step: 0.05,default: 3.20, adjustable: false, sides: 'both' }
            },
            rear_wheels: {
              tire_pressure: { unit: 'kPa', min: 130,  max: 200,  step: 1,   default: 162,  adjustable: true,  sides: 'both' },
              camber:        { unit: '°',   min: -5.0, max: 0.0,  step: 0.1, default: -1.5, adjustable: true,  sides: 'both' },
              brake_disc:    { unit: 'cm',  min: 2.80, max: 3.80, step: 0.05,default: 3.20, adjustable: false, sides: 'both' }
            },
            brakes: {
              brake_bias:         { unit: '%',  min: 50.0, max: 70.0, step: 0.5, default: 57.0, adjustable: true  },
              max_pedal_force:    { unit: '%',  min: 50,   max: 100,  step: 1,   default: 100,  adjustable: true  },
              front_brake_duct:   { unit: null, min: 0,    max: 5,    step: 1,   default: 2,    adjustable: true  },
              rear_brake_duct:    { unit: null, min: 0,    max: 5,    step: 1,   default: 1,    adjustable: true  },
              handbrake_pressure: { unit: '%',  min: 0,    max: 100,  step: 1,   default: 100,  adjustable: false }
            }
          },
          suspension_and_aero: {
            front_suspension: {
              spring_rate:        { unit: 'N/mm', min: 40, max: 160, step: 1,   default: 80,  adjustable: true,  sides: 'both' },
              tender_spring_rate: { unit: 'N/mm', min: 0,  max: 200, step: 5,   default: 0,   adjustable: false, sides: 'both' },
              packers:            { unit: 'mm',   min: 0,  max: 50,  step: 1,   default: 0,   adjustable: false, sides: 'both' },
              ride_height:        { unit: 'mm',   min: 40, max: 100, step: 1,   default: 55,  adjustable: true,  sides: 'both' },
              spring_rubber:      { unit: null,   min: 0,  max: 5,   step: 1,   default: 0,   adjustable: false, sides: 'both' }
            },
            rear_suspension: {
              spring_rate:        { unit: 'N/mm', min: 40, max: 160, step: 1,   default: 85,  adjustable: true,  sides: 'both' },
              tender_spring_rate: { unit: 'N/mm', min: 0,  max: 200, step: 5,   default: 0,   adjustable: false, sides: 'both' },
              packers:            { unit: 'mm',   min: 0,  max: 50,  step: 1,   default: 0,   adjustable: false, sides: 'both' },
              ride_height:        { unit: 'mm',   min: 40, max: 100, step: 1,   default: 58,  adjustable: true,  sides: 'both' },
              spring_rubber:      { unit: null,   min: 0,  max: 5,   step: 1,   default: 0,   adjustable: false, sides: 'both' }
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
              slow_bump:    { unit: null, min: 0, max: 20, step: 1, default: 8,  adjustable: true, sides: 'both' },
              slow_rebound: { unit: null, min: 0, max: 20, step: 1, default: 10, adjustable: true, sides: 'both' },
              fast_bump:    { unit: null, min: 0, max: 20, step: 1, default: 6,  adjustable: true, sides: 'both' },
              fast_rebound: { unit: null, min: 0, max: 20, step: 1, default: 8,  adjustable: true, sides: 'both' }
            },
            rear_dampers: {
              slow_bump:    { unit: null, min: 0, max: 20, step: 1, default: 9,  adjustable: true, sides: 'both' },
              slow_rebound: { unit: null, min: 0, max: 20, step: 1, default: 11, adjustable: true, sides: 'both' },
              fast_bump:    { unit: null, min: 0, max: 20, step: 1, default: 7,  adjustable: true, sides: 'both' },
              fast_rebound: { unit: null, min: 0, max: 20, step: 1, default: 9,  adjustable: true, sides: 'both' }
            }
          },
          chassis: {
            steering: {
              steering_lock: { unit: '°', min: 10, max: 26, step: 1, default: 17, adjustable: true }
            },
            alignment: {
              fender_flare:      { unit: 'cm', min: -5.0, max: 5.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              track_bar:         { unit: 'cm', min: -5.0, max: 5.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              caster:            { unit: '°',  min: 2.0,  max: 8.0,  step: 0.1, default: 4.5,  adjustable: true,  sides: 'both' },
              front_wheel_track: { unit: 'cm', min: -3.0, max: 3.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              rear_wheel_track:  { unit: 'cm', min: -3.0, max: 3.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' }
            },
            weight: {
              vertical:            { unit: 'cm',    min: 0,    max: 60,   step: 0.5,  default: 22.0, adjustable: false },
              lateral:             { unit: null,    min: 40.0, max: 60.0, step: 0.1,  default: 50.0, adjustable: false },
              weight_distribution: { unit: null,    min: 40.0, max: 60.0, step: 0.1,  default: 52.0, adjustable: false },
              wedge:               { unit: 'turns', min: -2.0, max: 2.0,  step: 0.01, default: 0.0,  adjustable: false }
            }
          }
        }
      }
    },
    {
      id: 'stock-car-2007-cc',
      name: 'Stock Car 2007 — CC',
      builtin: true,
      schema: {
        game: 'rFactor 2',
        categories: {
          powertrain: {
            engine: {
              radiator_size:  { unit: null,   min: 1,    max: 5,    step: 1,    default: 1,    adjustable: true }
            },
            electronics: {
              brake_map:      { unit: null,   min: 0,    max: 5,    step: 1,    default: 3,    adjustable: true },
              engine_braking: { unit: null,   min: 1,    max: 5,    step: 1,    default: 3,    adjustable: true }
            },
            gearing: {
              gear_1:       { unit: null, min: 2.50, max: 4.00, step: 0.01, default: 3.10, adjustable: false },
              gear_2:       { unit: null, min: 1.80, max: 3.20, step: 0.01, default: 2.35, adjustable: false },
              gear_3:       { unit: null, min: 1.30, max: 2.50, step: 0.01, default: 1.80, adjustable: false },
              gear_4:       { unit: null, min: 1.00, max: 1.90, step: 0.01, default: 1.40, adjustable: false },
              gear_5:       { unit: null, min: 0.75, max: 1.50, step: 0.01, default: 1.10, adjustable: false },
              final_drive:  { unit: null, min: 2.80, max: 5.20, step: 0.01, default: 3.90, adjustable: false }
            },
            differential: {
              power:   { unit: '%',  min: 0,  max: 75,  step: 5,  default: 40, adjustable: true },
              coast:   { unit: '%',  min: 0,  max: 75,  step: 5,  default: 50, adjustable: true },
              preload: { unit: null, min: 0,  max: 10,  step: 1,  default: 1,  adjustable: true }
            }
          },
          wheels_and_brakes: {
            front_wheels: {
              tire_pressure: { unit: 'kPa', min: 160,  max: 190,  step: 1,   default: 170,  adjustable: true,  sides: 'both' },
              camber:        { unit: '°',   min: -6.0, max: 2.0,  step: 0.1, default: -4.0, adjustable: true,  sides: 'both' },
              brake_disc:    { unit: 'cm',  min: 2.80, max: 3.80, step: 0.05,default: 3.50, adjustable: false, sides: 'both' }
            },
            rear_wheels: {
              tire_pressure: { unit: 'kPa', min: 160,  max: 190,  step: 1,   default: 170,  adjustable: true,  sides: 'both' },
              camber:        { unit: '°',   min: -6.0, max: 2.0,  step: 0.1, default: -1.4, adjustable: true,  sides: 'both' },
              brake_disc:    { unit: 'cm',  min: 2.80, max: 3.80, step: 0.05,default: 3.20, adjustable: false, sides: 'both' }
            },
            brakes: {
              brake_bias:         { unit: '%',  min: 35.0, max: 65.0, step: 0.5, default: 56.0, adjustable: true  },
              max_pedal_force:    { unit: '%',  min: 0,    max: 100,  step: 1,   default: 85,   adjustable: true  },
              front_brake_duct:   { unit: null, min: 1,    max: 5,    step: 1,   default: 4,    adjustable: true  },
              rear_brake_duct:    { unit: null, min: 1,    max: 5,    step: 1,   default: 1,    adjustable: false },
              handbrake_pressure: { unit: '%',  min: 0,    max: 100,  step: 1,   default: 100,  adjustable: false }
            }
          },
          suspension_and_aero: {
            front_suspension: {
              spring_rate:        { unit: 'N/mm', min: 60,  max: 70,  step: 2,   default: 60,  adjustable: true,  sides: 'both' },
              tender_spring_rate: { unit: 'N/mm', min: 0,   max: 200, step: 5,   default: 0,   adjustable: false, sides: 'both' },
              packers:            { unit: 'mm',   min: 0,   max: 50,  step: 1,   default: 0,   adjustable: false, sides: 'both' },
              ride_height:        { unit: 'cm',   min: 4.5, max: 5.5, step: 0.1, default: 4.5, adjustable: true,  sides: 'both' },
              spring_rubber:      { unit: null,   min: 0,   max: 5,   step: 1,   default: 0,   adjustable: false, sides: 'both' }
            },
            rear_suspension: {
              spring_rate:        { unit: 'N/mm', min: 110, max: 120, step: 2,   default: 110, adjustable: true,  sides: 'both' },
              tender_spring_rate: { unit: 'N/mm', min: 0,   max: 200, step: 5,   default: 0,   adjustable: false, sides: 'both' },
              packers:            { unit: 'mm',   min: 0,   max: 50,  step: 1,   default: 0,   adjustable: false, sides: 'both' },
              ride_height:        { unit: 'cm',   min: 5,   max: 6,   step: 0.1, default: 5,   adjustable: true,  sides: 'both' },
              spring_rubber:      { unit: null,   min: 0,   max: 5,   step: 1,   default: 0,   adjustable: false, sides: 'both' }
            },
            anti_roll_bars: {
              front_arb: { unit: 'N/mm', min: 0, max: 46, step: 1, default: 23, adjustable: true },
              rear_arb:  { unit: 'N/mm', min: 0, max: 30, step: 1, default: 15, adjustable: true }
            },
            toe: {
              front_toe: { unit: '°', min: -1.00, max: 1.00, step: 0.05, default: 0.00, adjustable: true },
              rear_toe:  { unit: '°', min: -1.00, max: 1.00, step: 0.05, default: 0.10, adjustable: true }
            },
            aerodynamics: {
              front_downforce: { unit: null, min: 1, max: 5, step: 1, default: 5, adjustable: true },
              rear_downforce:  { unit: null, min: 1, max: 3, step: 1, default: 3, adjustable: true }
            }
          },
          dampers: {
            front_dampers: {
              slow_bump:    { unit: null, min: 1, max: 16, step: 1, default: 8,  adjustable: true, sides: 'both' },
              slow_rebound: { unit: null, min: 1, max: 16, step: 1, default: 10, adjustable: true, sides: 'both' },
              fast_bump:    { unit: null, min: 1, max: 16, step: 1, default: 16, adjustable: true, sides: 'both' },
              fast_rebound: { unit: null, min: 1, max: 16, step: 1, default: 8,  adjustable: true, sides: 'both' }
            },
            rear_dampers: {
              slow_bump:    { unit: null, min: 1, max: 16, step: 1, default: 6,  adjustable: true, sides: 'both' },
              slow_rebound: { unit: null, min: 1, max: 16, step: 1, default: 1,  adjustable: true, sides: 'both' },
              fast_bump:    { unit: null, min: 1, max: 16, step: 1, default: 16, adjustable: true, sides: 'both' },
              fast_rebound: { unit: null, min: 1, max: 16, step: 1, default: 3,  adjustable: true, sides: 'both' }
            }
          },
          chassis: {
            steering: {
              steering_lock: { unit: '°', min: 0, max: 17.5, step: 0.2, default: 2.0, adjustable: true }
            },
            alignment: {
              fender_flare:      { unit: 'cm', min: -5.0, max: 5.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              track_bar:         { unit: 'cm', min: -5.0, max: 5.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              caster:            { unit: '°',  min: 5.0,  max: 33.0, step: 0.5, default: 15.0, adjustable: true,  sides: 'both' },
              front_wheel_track: { unit: 'cm', min: -3.0, max: 3.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' },
              rear_wheel_track:  { unit: 'cm', min: -3.0, max: 3.0,  step: 0.1, default: 0.0,  adjustable: false, sides: 'both' }
            },
            weight: {
              vertical:            { unit: 'cm',    min: 0,    max: 60,   step: 0.5,  default: 22.0, adjustable: false },
              lateral:             { unit: null,    min: 40.0, max: 60.0, step: 0.1,  default: 50.0, adjustable: false },
              weight_distribution: { unit: null,    min: 40.0, max: 60.0, step: 0.1,  default: 52.0, adjustable: false },
              wedge:               { unit: 'turns', min: -2.0, max: 2.0,  step: 0.01, default: 0.0,  adjustable: false }
            }
          }
        }
      }
    }
  ]
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
let selectedTemplateId = null;
let linkState = {}; // uid -> boolean (true = linked L+R)

// =============================================
// LINK STATE HELPERS
// =============================================
function getLinkState(uid) { return uid in linkState ? linkState[uid] : true; }
function setLinkState(uid, val) { linkState[uid] = val; }

// =============================================
// TEMPLATE HELPERS
// =============================================
function getUserTemplates(toolId) {
  try { return JSON.parse(localStorage.getItem('user-templates-' + toolId) || '[]'); }
  catch { return []; }
}

function saveUserTemplates(toolId, templates) {
  localStorage.setItem('user-templates-' + toolId, JSON.stringify(templates));
}

function getTemplateList(toolId) {
  return [...(carTemplates[toolId] || []), ...getUserTemplates(toolId)];
}

function deleteUserTemplate(toolId, templateId) {
  const list = getUserTemplates(toolId).filter(t => t.id !== templateId);
  saveUserTemplates(toolId, list);
  if (selectedTemplateId === templateId) {
    const first = getTemplateList(toolId)[0];
    selectedTemplateId = first ? first.id : null;
    currentSchema = first ? first.schema : null;
  }
  document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(toolId, currentSchema);
}

// =============================================
// LAUNCH TOOL (shows template selector + create/import choice)
// =============================================
function launchTool(toolId) {
  const templates = getTemplateList(toolId);
  if (!templates.length) return;

  document.querySelectorAll('.tool-menu-card').forEach(c => c.classList.remove('active'));
  document.getElementById('card-' + toolId)?.classList.add('active');

  if (!selectedTemplateId || currentToolId !== toolId) {
    selectedTemplateId = templates[0].id;
  }

  const tpl = templates.find(t => t.id === selectedTemplateId) || templates[0];
  currentSchema = tpl.schema;
  currentToolId = toolId;
  isInBuilder = false;

  const workspace = document.getElementById('tool-workspace');
  workspace.style.display = 'block';
  document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(toolId, currentSchema);
  setTimeout(() => workspace.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

function renderLaunchPanel(toolId, schema) {
  const allTemplates = getTemplateList(toolId);
  const templateOptions = allTemplates.map(tpl =>
    `<option value="${escapeHtml(tpl.id)}"${tpl.id === selectedTemplateId ? ' selected' : ''}>${escapeHtml(tpl.name)}</option>`
  ).join('');

  const selectedTpl = allTemplates.find(t => t.id === selectedTemplateId);
  const canDelete = selectedTpl && !selectedTpl.builtin;
  const deleteBtn = canDelete
    ? `<button class="btn-template-delete" onclick="deleteUserTemplate('${toolId}','${escapeHtml(selectedTemplateId)}')" title="${escapeHtml(getKey(t, 'ui.deleteTemplate'))}">✕</button>`
    : '';

  return `
    <div class="tool-launch-panel">
      <div class="template-selector-section">
        <div class="template-section-label">${getKey(t, 'ui.selectTemplate')}</div>
        <div class="template-selector-row">
          <select class="setup-select" onchange="onTemplateChange('${toolId}', this.value)">
            ${templateOptions}
          </select>
          ${deleteBtn}
          <button class="btn-template-action" onclick="triggerImportTemplate('${toolId}')">
            ↑ ${getKey(t, 'ui.importTemplate')}
          </button>
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
      <input type="file" id="import-template-${toolId}" accept=".json" style="display:none"
        onchange="importTemplateFile(event,'${toolId}')"/>
    </div>`;
}

function onTemplateChange(toolId, templateId) {
  selectedTemplateId = templateId;
  const tpl = getTemplateList(toolId).find(t => t.id === templateId);
  if (tpl) {
    currentSchema = tpl.schema;
    // Refresh delete button visibility
    document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(toolId, currentSchema);
  }
}

// =============================================
// CREATE NEW
// =============================================
function createNew(toolId) {
  currentSetupName = getKey(t, 'ui.newSetup');
  currentTrackName = '';
  linkState = {};
  initValues(currentSchema);
  isInBuilder = true;
  renderTool(currentSchema);
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
      const schema = currentSchema;
      if (!imported.setup) {
        if (imported.categories) {
          alert(getKey(t, 'ui.errorIsSchema'));
        } else {
          alert(getKey(t, 'ui.invalidJson'));
        }
        return;
      }

      currentValues = {};
      for (const [catKey, cat] of Object.entries(schema.categories)) {
        currentValues[catKey] = {};
        for (const [subKey, sub] of Object.entries(cat)) {
          currentValues[catKey][subKey] = {};
          for (const [fieldKey, field] of Object.entries(sub)) {
            const v = imported.setup?.[catKey]?.[subKey]?.[fieldKey];
            if (field.sides === 'both') {
              const lv = (v && typeof v === 'object') ? v.left  : (v !== undefined ? Number(v) : field.default);
              const rv = (v && typeof v === 'object') ? v.right : (v !== undefined ? Number(v) : field.default);
              currentValues[catKey][subKey][fieldKey] = {
                left:  Math.min(field.max, Math.max(field.min, lv)),
                right: Math.min(field.max, Math.max(field.min, rv))
              };
            } else {
              currentValues[catKey][subKey][fieldKey] = (v !== undefined)
                ? Math.min(field.max, Math.max(field.min, Number(v)))
                : field.default;
            }
          }
        }
      }

      currentSetupName = imported.setup_name || getKey(t, 'ui.importedSetup');
      currentTrackName = imported.track || '';
      currentSchema = schema;
      activeCategory = null;
      linkState = {};
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
// IMPORT / EXPORT TEMPLATE
// =============================================
function triggerImportTemplate(toolId) {
  document.getElementById('import-template-' + toolId)?.click();
}

function importTemplateFile(event, toolId) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.categories || typeof parsed.categories !== 'object') throw new Error('invalid');

      const userTemplates = getUserTemplates(toolId);
      const newId = 'user-' + Date.now();
      const newName = parsed.template_name || parsed.game || getKey(t, 'ui.importedTemplate');
      const newSchema = { game: parsed.game || 'rFactor 2', categories: parsed.categories };

      userTemplates.push({ id: newId, name: newName, builtin: false, schema: newSchema });
      saveUserTemplates(toolId, userTemplates);

      selectedTemplateId = newId;
      currentSchema = newSchema;
      document.getElementById('tool-renderer').innerHTML = renderLaunchPanel(toolId, currentSchema);
    } catch {
      alert(getKey(t, 'ui.invalidTemplate'));
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function exportTemplate() {
  if (!currentSchema) return;
  const tpl = getTemplateList(currentToolId).find(t => t.id === selectedTemplateId);
  const obj = {
    template_name: tpl ? tpl.name : currentSchema.game,
    game: currentSchema.game,
    categories: currentSchema.categories
  };
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (obj.template_name).replace(/[\s—]+/g, '_') + '_template.json';
  a.click();
  URL.revokeObjectURL(url);
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
        if (field.sides === 'both') {
          currentValues[catKey][subKey][fieldKey] = { left: field.default, right: field.default };
        } else {
          currentValues[catKey][subKey][fieldKey] = field.default;
        }
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
      <button class="btn btn-small" onclick="exportTemplate()">${getKey(t, 'ui.exportTemplate')}</button>
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
  const uid = `${catKey}__${subKey}__${fieldKey}`;
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';
  const isFixed = field.min === field.max;
  const isAdjustable = field.adjustable !== false;
  const isDisabled = isFixed || !isAdjustable;
  const isBoth = field.sides === 'both';

  const knowledgeKey = `${catKey}.${subKey}.${fieldKey}`;
  const knowledge = fieldKnowledge[knowledgeKey] || null;

  const rowClasses = ['field-row', isFixed ? 'field-fixed' : '', !isAdjustable ? 'field-locked' : '', isBoth ? 'field-both' : '']
    .filter(Boolean).join(' ');

  const infoTagsHtml = knowledge
    ? (knowledge.tags || []).map(tag => `<span class="field-info-tag">${tag}</span>`).join('')
    : '';
  const infoPanelHtml = knowledge
    ? `<div class="field-info" id="info-${uid}"><p class="field-info-desc">${knowledge.description}</p><div class="field-info-tags">${infoTagsHtml}</div><div class="field-info-effects" id="fx-${uid}"></div></div>`
    : '';

  const cfgPanel = `
    <div class="field-config" id="cfg-${uid}">
      <div class="cfg-inputs">
        <div class="cfg-label-input"><span class="cfg-label">min</span>
          <input type="number" class="cfg-input" value="${field.min}" step="${field.step}" onchange="updateFieldMeta('${uid}','min',this.value)"/></div>
        <div class="cfg-label-input"><span class="cfg-label">max</span>
          <input type="number" class="cfg-input" value="${field.max}" step="${field.step}" onchange="updateFieldMeta('${uid}','max',this.value)"/></div>
        <div class="cfg-label-input"><span class="cfg-label">step</span>
          <input type="number" class="cfg-input" value="${field.step}" step="any" onchange="updateFieldMeta('${uid}','step',this.value)"/></div>
        <div class="cfg-label-input"><span class="cfg-label">default</span>
          <input type="number" class="cfg-input" value="${field.default}" step="${field.step}" onchange="updateFieldMeta('${uid}','default',this.value)"/></div>
      </div>
      <label class="cfg-adjustable-row">
        <input type="checkbox" class="cfg-adjustable-check" ${isAdjustable ? 'checked' : ''} onchange="updateAdjustable('${uid}', this.checked)"/>
        <span class="cfg-toggle-track"><span class="cfg-toggle-thumb"></span></span>
        <span class="cfg-label">${getKey(t, 'ui.adjustable')}</span>
      </label>
    </div>`;

  if (isBoth) {
    const stored = currentValues[catKey]?.[subKey]?.[fieldKey];
    const vL = stored ? stored.left  : field.default;
    const vR = stored ? stored.right : field.default;
    const isLinked = getLinkState(uid);
    const lbl = getKey(t, 'ui.leftLabel');
    const rbl = getKey(t, 'ui.rightLabel');

    return `
      <div class="${rowClasses}" id="row-${uid}">
        <div class="field-header">
          <span class="field-label">${label}</span>
          <div class="field-controls">
            ${knowledge ? `<button class="field-info-btn" onclick="toggleFieldInfo('${uid}')">ℹ</button>` : ''}
            <button class="field-cfg-btn" onclick="toggleFieldConfig('${uid}')">⚙</button>
          </div>
        </div>
        <div class="sides-row">
          <div class="side-col">
            <div class="side-top">
              <span class="side-label">${lbl}</span>
              <span class="field-value" id="val-${uid}__L">${Number(vL).toFixed(decimals)}${unit}</span>
              <span class="field-diff-badge" id="diff-${uid}__L" style="display:none"></span>
            </div>
            <input type="range" class="setup-slider" id="${uid}__L"
              min="${field.min}" max="${field.max}" step="${field.step}" value="${vL}"
              oninput="updateSlider('${uid}',this.value,'L')" ${isDisabled ? 'disabled' : ''}/>
          </div>
          <button class="field-link-btn${isLinked ? ' linked' : ''}" id="link-${uid}"
            onclick="toggleLink('${uid}')" title="${getKey(t, 'ui.linked')}">🔗</button>
          <div class="side-col">
            <div class="side-top">
              <span class="side-label">${rbl}</span>
              <span class="field-value" id="val-${uid}__R">${Number(vR).toFixed(decimals)}${unit}</span>
              <span class="field-diff-badge" id="diff-${uid}__R" style="display:none"></span>
            </div>
            <input type="range" class="setup-slider" id="${uid}__R"
              min="${field.min}" max="${field.max}" step="${field.step}" value="${vR}"
              oninput="updateSlider('${uid}',this.value,'R')" ${isDisabled ? 'disabled' : ''}/>
          </div>
        </div>
        ${infoPanelHtml}
        ${cfgPanel}
      </div>`;
  }

  const value = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
  return `
    <div class="${rowClasses}" id="row-${uid}">
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
      ${cfgPanel}
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
  if (row) row.classList.toggle('field-locked', !isAdjustable);
  const isDisabled = !isAdjustable || field.min === field.max;
  if (field.sides === 'both') {
    const sL = document.getElementById(uid + '__L');
    const sR = document.getElementById(uid + '__R');
    if (sL) sL.disabled = isDisabled;
    if (sR) sR.disabled = isDisabled;
  } else {
    const slider = document.getElementById(uid);
    if (slider) slider.disabled = isDisabled;
  }
}

// =============================================
// DIFF BADGE HELPER
// =============================================
function updateDiffBadgeSide(uid, side, num, field) {
  const knowledgeKey = uid.split('__').join('.');
  if (!fieldKnowledge[knowledgeKey]) return;
  const badgeId = side ? `diff-${uid}__${side}` : `diff-${uid}`;
  const badge = document.getElementById(badgeId);
  if (!badge) return;
  const diff = num - field.default;
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';
  if (Math.abs(diff) >= field.step * 0.5) {
    badge.textContent = (diff > 0 ? '▲' : '▼') + ' ' + Number(field.default).toFixed(decimals) + unit;
    badge.className = 'field-diff-badge ' + (diff > 0 ? 'up' : 'down');
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}

// =============================================
// TOGGLE LINK (Esq. / Dir.)
// =============================================
function toggleLink(uid) {
  const isNowLinked = !getLinkState(uid);
  setLinkState(uid, isNowLinked);
  const btn = document.getElementById('link-' + uid);
  if (btn) btn.classList.toggle('linked', isNowLinked);
  if (isNowLinked) {
    // sync right to left
    const [catKey, subKey, fieldKey] = uid.split('__');
    const field = currentSchema.categories[catKey][subKey][fieldKey];
    const leftVal = currentValues[catKey][subKey][fieldKey].left;
    currentValues[catKey][subKey][fieldKey].right = leftVal;
    const sR = document.getElementById(uid + '__R');
    if (sR) sR.value = leftVal;
    const dR = document.getElementById('val-' + uid + '__R');
    const decimals = (field.step.toString().split('.')[1] || '').length;
    const unit = field.unit ? ' ' + field.unit : '';
    if (dR) dR.textContent = Number(leftVal).toFixed(decimals) + unit;
    updateDiffBadgeSide(uid, 'R', leftVal, field);
    refreshAnalyzeBadge();
  }
}

function updateSlider(uid, rawValue, side) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  const field = currentSchema.categories[catKey][subKey][fieldKey];
  const decimals = (field.step.toString().split('.')[1] || '').length;
  const unit = field.unit ? ' ' + field.unit : '';
  const num = parseFloat(rawValue);

  if (side) {
    // Two-sided field
    const sideKey = side === 'L' ? 'left' : 'right';
    currentValues[catKey][subKey][fieldKey][sideKey] = num;
    const display = document.getElementById('val-' + uid + '__' + side);
    if (display) display.textContent = num.toFixed(decimals) + unit;
    updateDiffBadgeSide(uid, side, num, field);

    if (getLinkState(uid)) {
      const otherSide = side === 'L' ? 'R' : 'L';
      const otherKey  = side === 'L' ? 'right' : 'left';
      currentValues[catKey][subKey][fieldKey][otherKey] = num;
      const sOther = document.getElementById(uid + '__' + otherSide);
      if (sOther) sOther.value = num;
      const dOther = document.getElementById('val-' + uid + '__' + otherSide);
      if (dOther) dOther.textContent = num.toFixed(decimals) + unit;
      updateDiffBadgeSide(uid, otherSide, num, field);
    }
  } else {
    currentValues[catKey][subKey][fieldKey] = num;
    const display = document.getElementById('val-' + uid);
    if (display) display.textContent = num.toFixed(decimals) + unit;
    updateDiffBadgeSide(uid, null, num, field);
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

  let current;
  if (field.sides === 'both') {
    const v = currentValues[catKey]?.[subKey]?.[fieldKey];
    current = v ? (v.left + v.right) / 2 : field.default;
  } else {
    current = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
  }
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

        if (field.sides === 'both') {
          const leftDiff  = current.left  - field.default;
          const rightDiff = current.right - field.default;
          const leftChanged  = Math.abs(leftDiff)  >= field.step * 0.5;
          const rightChanged = Math.abs(rightDiff) >= field.step * 0.5;
          if (leftChanged || rightChanged) {
            changes.push({ field, current, diff: leftChanged ? leftDiff : rightDiff,
              knowledge: fieldKnowledge[knowledgeKey], isBoth: true, leftDiff, rightDiff });
          }
        } else {
          const diff = current - field.default;
          if (Math.abs(diff) >= field.step * 0.5) {
            changes.push({ field, current, diff, knowledge: fieldKnowledge[knowledgeKey] });
          }
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
        if (field.sides === 'both') {
          const v = currentValues[catKey]?.[subKey]?.[fieldKey];
          if (!v) continue;
          updateDiffBadgeSide(uid, 'L', v.left,  field);
          updateDiffBadgeSide(uid, 'R', v.right, field);
        } else {
          const current = currentValues[catKey]?.[subKey]?.[fieldKey] ?? field.default;
          updateDiffBadgeSide(uid, null, current, field);
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
    for (const { field, current, diff, knowledge, isBoth, leftDiff, rightDiff } of changes) {
      const decimals = (field.step.toString().split('.')[1] || '').length;
      const unit = field.unit ? ' ' + field.unit : '';
      let isUp, valHtml;
      if (isBoth) {
        const lbl = getKey(t, 'ui.leftLabel');
        const rbl = getKey(t, 'ui.rightLabel');
        isUp = (Math.abs(leftDiff) >= Math.abs(rightDiff)) ? leftDiff > 0 : rightDiff > 0;
        const sameVal = Math.abs(current.left - current.right) < field.step * 0.5;
        if (sameVal) {
          valHtml = `<span class="analysis-current">${Number(current.left).toFixed(decimals)}${unit}</span>`;
        } else {
          valHtml = `<span class="analysis-current">${lbl}: ${Number(current.left).toFixed(decimals)}${unit} / ${rbl}: ${Number(current.right).toFixed(decimals)}${unit}</span>`;
        }
      } else {
        isUp = diff > 0;
        valHtml = `<span class="analysis-current">${Number(current).toFixed(decimals)}${unit}</span>`;
      }
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
            ${valHtml}
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
