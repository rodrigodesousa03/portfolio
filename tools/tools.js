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
      rightLabel: 'Dir.',
      hideFixed: 'Ocultar campos fixos',
      showFixed: 'Mostrar campos fixos',
      symWarning: 'Idealmente Esq. = Dir.'
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
      rightLabel: 'R',
      hideFixed: 'Hide fixed fields',
      showFixed: 'Show fixed fields',
      symWarning: 'Ideally L = R'
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

