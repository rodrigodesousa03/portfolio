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
    label: 'Diferencial (Potência)',
    description: 'Travamento do diferencial sob aceleração. Controla a distribuição de força entre as rodas traseiras na saída de curvas.',
    effects: {
      increase: ['Mais tração na saída; impede roda de dentro de girar sozinha', 'Tendência a subesterço ao acelerar em curvas lentas'],
      decrease: ['Mais rotação disponível na saída; carro mais vivo', 'Menor tração em saídas com piso molhado ou degradado']
    },
    tags: ['saida', 'tracao', 'diferencial']
  },
  'powertrain.differential.coast': {
    label: 'Diferencial (Desaceleração)',
    description: 'Travamento do diferencial ao soltar o acelerador. Afeta estabilidade e rotação na entrada de curva.',
    effects: {
      increase: ['Entrada de curva mais estável e previsível', 'Reduz capacidade de rotação no ápice'],
      decrease: ['Entrada mais agressiva e rotativa', 'Risco de instabilidade traseira ao frear dentro da curva']
    },
    tags: ['entrada', 'estabilidade', 'diferencial']
  },
  'powertrain.differential.preload': {
    label: 'Pré-Carga do Diferencial',
    description: 'Tensão mínima constante no diferencial, independente do acelerador. Suaviza as transições de carga.',
    effects: {
      increase: ['Transições de aceleração/desaceleração mais suaves', 'Menos reativo a mudanças bruscas de carga em chicanes'],
      decrease: ['Diferencial mais reativo e nervoso', 'Mais instável em chicanes e em trechos de frenagem intensa']
    },
    tags: ['transicao', 'estabilidade', 'diferencial']
  },
  'wheels_and_brakes.front_wheels.tire_pressure': {
    label: 'Pressão do Pneu Dianteiro',
    description: 'Pressão interna do pneu dianteiro. Afeta área de contato, temperatura de trabalho e grip lateral.',
    effects: {
      increase: ['Menor área de contato; menos grip na entrada de curva', 'Pneu supera-aquece em pistas quentes; desgaste irregular'],
      decrease: ['Maior área de contato; melhor aderência na entrada', 'Pneu demora mais a atingir temperatura em pistas frias']
    },
    tags: ['entrada', 'grip', 'temperatura']
  },
  'wheels_and_brakes.rear_wheels.tire_pressure': {
    label: 'Pressão do Pneu Traseiro',
    description: 'Pressão interna do pneu traseiro. Influencia tração e aquecimento na saída de curva.',
    effects: {
      increase: ['Menor aderência traseira; dificuldade para tracionar na saída', 'Risco de superaquecimento e desgaste irregular'],
      decrease: ['Mais grip na saída; melhor tração em piso frio', 'Desgaste acelerado se pressionado abaixo do limite']
    },
    tags: ['saida', 'tracao', 'temperatura']
  },
  'wheels_and_brakes.front_wheels.camber': {
    label: 'Câmber Dianteiro',
    description: 'Inclinação do pneu dianteiro. Valores negativos (rodas fechadas no topo) aumentam o contato no meio de curva.',
    effects: {
      increase: ['Mais aderência na entrada e no ápice; favorece curvas rápidas', 'Desgaste acelerado na borda interna; perde grip em retas'],
      decrease: ['Melhor contato em retas e frenagens; pneu trabalha mais plano', 'Menor grip lateral no meio e saída de curva']
    },
    tags: ['entrada', 'grip', 'desgaste']
  },
  'wheels_and_brakes.rear_wheels.camber': {
    label: 'Câmber Traseiro',
    description: 'Inclinação do pneu traseiro. Impacta tração lateral e desgaste na saída de curva.',
    effects: {
      increase: ['Mais grip lateral em curvas; favorece curvas rápidas', 'Reduz área de contato em reta; desgaste interno acelerado'],
      decrease: ['Melhor tração e estabilidade em retas e frenagens', 'Menor aderência lateral em curvas; mais subesterço']
    },
    tags: ['meio', 'saida', 'grip']
  },
  'wheels_and_brakes.brakes.brake_bias': {
    label: 'Distribuição de Freio',
    description: 'Proporção da força de frenagem entre dianteiro e traseiro (ex: 57 / 43 = 57% na frente). Afeta estabilidade e rotação na frenagem.',
    effects: {
      increase: ['Frenagem mais estável; frente carrega mais carga', 'Tendência a subesterço no fim da freada; dianteiro bloqueia antes'],
      decrease: ['Melhor rotação na entrada; traseiro ativa mais', 'Risco de trava traseira e instabilidade em frenagens fortes']
    },
    tags: ['frenagem', 'entrada', 'estabilidade']
  },
  'suspension_and_aero.toe.front_toe': {
    label: 'Convergência Dianteira',
    description: 'Ângulo das rodas dianteiras. Positivo (abertura / toe-out) aumenta agilidade; negativo (fechamento / toe-in) aumenta estabilidade.',
    effects: {
      increase: ['Entrada de curva mais ágil e direta', 'Instabilidade e desgaste acelerado em retas de alta velocidade'],
      decrease: ['Maior estabilidade em retas e frenagens', 'Entrada de curva mais lenta; carro mais neutro']
    },
    tags: ['entrada', 'direcao', 'estabilidade']
  },
  'suspension_and_aero.toe.rear_toe': {
    label: 'Convergência Traseira',
    description: 'Ângulo das rodas traseiras. Fechamento (toe-in) aumenta estabilidade; abertura (toe-out) aumenta rotação e risco de instabilidade.',
    effects: {
      increase: ['Traseira mais estável em retas e curvas rápidas', 'Menor capacidade de rotação; carro mais subesterçante'],
      decrease: ['Carro mais rotativo e ágil', 'Risco de instabilidade traseira em curvas de alta velocidade']
    },
    tags: ['estabilidade', 'saida', 'reta']
  },
  'suspension_and_aero.anti_roll_bars.front_arb': {
    label: 'Barra Estabilizadora Dianteira',
    description: 'Resistência à rolagem da carroceria na dianteira. Afeta a distribuição de carga e o grip dianteiro em curvas.',
    effects: {
      increase: ['Menos rolagem; transferência de carga mais rápida', 'Reduz grip dianteiro em curvas lentas e piso irregular'],
      decrease: ['Mais aderência na dianteira; favorece chicanes e curvas técnicas', 'Maior rolagem da carroceria; plataforma aerodinâmica menos estável']
    },
    tags: ['entrada', 'equilibrio', 'aero']
  },
  'suspension_and_aero.anti_roll_bars.rear_arb': {
    label: 'Barra Estabilizadora Traseira',
    description: 'Resistência à rolagem traseira. Impacta tração na saída e tendência ao sobresterço.',
    effects: {
      increase: ['Menos grip traseiro; tende ao sobresterço; mais rotação disponível', 'Instabilidade em saídas de curvas lentas com piso irregular'],
      decrease: ['Mais tração e aderência traseira; saídas mais estáveis', 'Maior rolagem; carro mais subesterçante em curvas rápidas']
    },
    tags: ['saida', 'equilibrio', 'tracao']
  },
  'dampers.front_dampers.slow_bump': {
    label: 'Compressão Lenta Dianteira',
    description: 'Resiste a movimentos lentos de compressão na frente (frenagem, transferência de peso em curva). Não afeta impactos rápidos como zebras.',
    effects: {
      increase: ['Menor mergulho na frenagem; plataforma aerodinâmica mais estável', 'Pneu deforma menos a geometria; reduz grip em curvas lentas'],
      decrease: ['Mais aderência na entrada; dianteiro segue melhor o solo', 'Maior mergulho na frenagem; maior variação de câmber dinâmico']
    },
    tags: ['frenagem', 'entrada', 'aero']
  },
  'dampers.rear_dampers.slow_rebound': {
    label: 'Extensão Lenta Traseira',
    description: 'Controla com que velocidade a traseira sobe após compressão lenta (aceleração, saída de curva).',
    effects: {
      increase: ['Transferência de peso mais controlada; mais tração sustentada na saída', 'Menos ágil em mudanças rápidas de direção'],
      decrease: ['Traseira reage mais rápido; favorece curvas rápidas', 'Menos tração sustentada; risco de perder aderência sob aceleração intensa']
    },
    tags: ['saida', 'tracao', 'peso']
  },
  'powertrain.engine.radiator_size': {
    label: 'Abertura do Radiador',
    description: 'Controla o fluxo de ar para resfriamento do motor. Há um custo aerodinâmico direto ao abrir mais.',
    effects: {
      increase: ['Motor trabalha mais frio; essencial em pistas quentes ou longas', 'Aumenta arrasto; perde tempo mensurável em retas de alta velocidade'],
      decrease: ['Menos arrasto; ganho real de velocidade em retas', 'Risco de superaquecimento em circuitos lentos ou em condições quentes']
    },
    tags: ['reta', 'motor', 'temperatura']
  },
  'powertrain.electronics.brake_map': {
    label: 'Mapa de Freio Motor',
    description: 'Define a intensidade do freio motor ao soltar o acelerador. Afeta desaceleração e equilíbrio na entrada de curva.',
    effects: {
      increase: ['Mais desaceleração sem usar o pedal; entrada de curva mais estável', 'Pode travar a traseira se excessivo em curvas lentas'],
      decrease: ['Carro desliza mais ao soltar; permite mais rotação na entrada', 'Exige mais uso do pedal; piloto controla mais a desaceleração']
    },
    tags: ['entrada', 'frenagem', 'estabilidade']
  },
  'powertrain.electronics.engine_braking': {
    label: 'Freio Motor',
    description: 'Nível geral de frenagem exercida pelo motor na desaceleração.',
    effects: {
      increase: ['Ajuda a desacelerar em trechos longos sem usar o pedal', 'Pode causar instabilidade traseira em curvas de baixa velocidade'],
      decrease: ['Entrada de curva mais suave e previsível', 'Exige mais do pedal de freio; piloto controla o equilíbrio com mais precisão']
    },
    tags: ['entrada', 'estabilidade', 'frenagem']
  },
  'powertrain.gearing.gear_1': {
    label: '1ª Marcha',
    description: 'Relação da primeira marcha. Afeta a aceleração de saída em curvas muito lentas e largada.',
    effects: {
      increase: ['Mais torque disponível na largada e saídas lentas', 'Menor velocidade máxima na marcha; troca mais cedo para a 2ª'],
      decrease: ['Maior velocidade máxima na marcha; mais fluído', 'Menos torque em saídas muito lentas']
    },
    tags: ['saida', 'aceleracao']
  },
  'powertrain.gearing.gear_2': {
    label: '2ª Marcha',
    description: 'Relação da segunda marcha. Frequentemente usada em chicanes e curvas médias-lentas.',
    effects: {
      increase: ['Mais aceleração em curvas lentas a médias', 'Troca mais cedo para a 3ª; menor velocidade máxima'],
      decrease: ['Melhor continuidade de velocidade; menos trocas', 'Menos torque em saídas de curvas lentas']
    },
    tags: ['saida', 'aceleracao']
  },
  'powertrain.gearing.gear_3': {
    label: '3ª Marcha',
    description: 'Relação da terceira marcha. Usada em curvas médias e no início de retas.',
    effects: {
      increase: ['Mais aceleração no início da reta; ideal para circuitos técnicos', 'Menor velocidade no topo da marcha'],
      decrease: ['Mais velocidade máxima na marcha; favorece circuitos rápidos', 'Menos resposta ao sair de curvas médias']
    },
    tags: ['meio', 'aceleracao']
  },
  'powertrain.gearing.gear_4': {
    label: '4ª Marcha',
    description: 'Relação da quarta marcha. Impacta a velocidade no meio e topo das retas.',
    effects: {
      increase: ['Mais aceleração; melhor em retas médias', 'Atinge rotação máxima antes do fim da reta'],
      decrease: ['Maior velocidade máxima na marcha; favorece retas longas', 'Menos resposta ao acelerar no início da reta']
    },
    tags: ['reta', 'aceleracao']
  },
  'powertrain.gearing.gear_5': {
    label: '5ª Marcha',
    description: 'Relação da quinta marcha. Crítica para a velocidade máxima em retas longas.',
    effects: {
      increase: ['Mais aceleração ao entrar na reta; sai melhor da última curva', 'Atinge o limitador antes do fim de retas longas'],
      decrease: ['Maior velocidade final; essencial em pistas de alta velocidade', 'Menos aceleração ao sair da última curva antes da reta']
    },
    tags: ['reta', 'velocidade_maxima']
  },
  'powertrain.gearing.final_drive': {
    label: 'Relação Final',
    description: 'Multiplicador geral de todas as marchas. O ajuste mais direto entre aceleração e velocidade máxima.',
    effects: {
      increase: ['Mais aceleração em todas as marchas; mais torque disponível', 'Menor velocidade máxima; motor bate no limitador antes do fim da reta'],
      decrease: ['Maior velocidade máxima; ideal para pistas de alta velocidade', 'Menor aceleração; saídas de curva menos responsivas']
    },
    tags: ['reta', 'aceleracao', 'velocidade_maxima']
  },
  'wheels_and_brakes.brakes.max_pedal_force': {
    label: 'Força Máxima do Pedal',
    description: 'Sensibilidade e força máxima do pedal de freio. Afeta a precisão e o esforço na modulação.',
    effects: {
      increase: ['Pedal mais firme e linear; maior precisão na modulação', 'Exige mais esforço físico; menos tolerante a erros de pisada'],
      decrease: ['Pedal mais leve e sensível; menos cansativo em corridas longas', 'Menor controle na zona limite; risco de trava acidental']
    },
    tags: ['frenagem', 'controle']
  },
  'wheels_and_brakes.brakes.front_brake_duct': {
    label: 'Duto de Freio Dianteiro',
    description: 'Fluxo de ar para resfriamento dos freios dianteiros. Equilíbrio entre temperatura de trabalho e arrasto.',
    effects: {
      increase: ['Freios dianteiros mais frios; consistência em corridas longas e pistas quentes', 'Leve aumento de arrasto; perda mínima de velocidade em reta'],
      decrease: ['Menos arrasto; freios chegam à temperatura de trabalho mais rápido', 'Risco de superaquecimento e perda de eficiência em corridas com muitas frenagens']
    },
    tags: ['frenagem', 'temperatura', 'consistencia']
  },
  'wheels_and_brakes.brakes.rear_brake_duct': {
    label: 'Duto de Freio Traseiro',
    description: 'Fluxo de ar para resfriamento dos freios traseiros.',
    effects: {
      increase: ['Freios traseiros mais frios; reduz risco de trava em freadas longas', 'Leve aumento de arrasto na traseira'],
      decrease: ['Menos arrasto; freios traseiros aquecem mais rápido', 'Risco de superaquecimento e perda de modulação do traseiro']
    },
    tags: ['frenagem', 'temperatura']
  },
  'suspension_and_aero.front_suspension.spring_rate': {
    label: 'Rigidez da Mola Dianteira',
    description: 'Rigidez da mola dianteira. Afeta rolagem, altura dinâmica e aderência em pistas irregulares.',
    effects: {
      increase: ['Menor rolagem; plataforma aerodinâmica mais constante em alta velocidade', 'Menos aderência em pisos irregulares; pneu perde contato nas ondulações'],
      decrease: ['Mais grip em pistas com irregularidades; melhor absorção de impactos', 'Maior rolagem; altura dinâmica varia mais em frenagem e curvas']
    },
    tags: ['entrada', 'aero', 'equilibrio']
  },
  'suspension_and_aero.rear_suspension.spring_rate': {
    label: 'Rigidez da Mola Traseira',
    description: 'Rigidez da mola traseira. Afeta tração na saída, tendência ao sobresterço e equilíbrio.',
    effects: {
      increase: ['Transferência de peso mais rápida; maior tendência ao sobresterço', 'Menos aderência em saídas irregulares; pneu perde contato'],
      decrease: ['Mais tração traseira na saída; melhor absorção de irregularidades', 'Maior rolagem traseira; plataforma aerodinâmica menos estável']
    },
    tags: ['saida', 'tracao', 'equilibrio']
  },
  'suspension_and_aero.front_suspension.ride_height': {
    label: 'Altura de Rodagem Dianteira',
    description: 'Altura do carro na dianteira. Impacta efeito solo, geometria de suspensão e risco de raspar.',
    effects: {
      increase: ['Mais viagem de suspensão; mais estável em pistas irregulares', 'Perde downforce por efeito solo; menor eficiência aerodinâmica'],
      decrease: ['Mais downforce por efeito solo; menor centro de gravidade', 'Risco de raspar o fundo em curvas rápidas ou lombadas']
    },
    tags: ['aero', 'altura', 'efeito_solo']
  },
  'suspension_and_aero.rear_suspension.ride_height': {
    label: 'Altura de Rodagem Traseira',
    description: 'Altura traseira do carro. Afeta a eficiência do difusor e o equilíbrio aerodinâmico.',
    effects: {
      increase: ['Mais estabilidade em retas; mais folga ao solo', 'Reduz eficiência do difusor traseiro; perde carga aerodinâmica na traseira'],
      decrease: ['Difusor trabalha melhor; mais carga aerodinâmica traseira', 'Risco de raspar o fundo; sensível a ondulações do circuito']
    },
    tags: ['aero', 'altura', 'efeito_solo']
  },
  'suspension_and_aero.aerodynamics.front_downforce': {
    label: 'Pressão Aerodinâmica Dianteira',
    description: 'Carga aerodinâmica gerada na dianteira (asas, splitter). Afeta grip e velocidade em retas.',
    effects: {
      increase: ['Melhor grip e estabilidade na frenagem e entrada de curva', 'Mais arrasto; perda de velocidade em retas longas'],
      decrease: ['Maior velocidade máxima em retas', 'Menos grip dianteiro; subesterço em curvas de alta velocidade']
    },
    tags: ['entrada', 'aero', 'reta']
  },
  'suspension_and_aero.aerodynamics.rear_downforce': {
    label: 'Pressão Aerodinâmica Traseira',
    description: 'Carga aerodinâmica traseira (asa traseira, difusor). Impacta estabilidade e velocidade máxima.',
    effects: {
      increase: ['Mais tração e estabilidade em curvas rápidas e na saída', 'Mais arrasto; perde velocidade máxima em retas'],
      decrease: ['Maior velocidade máxima; vantagem em pistas de alta velocidade', 'Carro instável em curvas rápidas; sobresterço no limite']
    },
    tags: ['saida', 'aero', 'reta']
  },
  'dampers.front_dampers.slow_rebound': {
    label: 'Extensão Lenta Dianteira',
    description: 'Velocidade com que a dianteira sobe após compressão lenta (frenagem, curva). Controla a redistribuição de peso.',
    effects: {
      increase: ['Transferência de peso mais controlada; dianteira não oscila após curvas', 'Reduz a rotação; carro mais neutro no ápice'],
      decrease: ['Dianteira sobe mais rápido; mais ágil em chicanes', 'Menos controle de peso; pode oscilar em sequências de curvas']
    },
    tags: ['entrada', 'peso', 'apex']
  },
  'dampers.front_dampers.fast_bump': {
    label: 'Compressão Rápida Dianteira',
    description: 'Resiste a impactos rápidos na dianteira (zebras, meios-fios). Não afeta movimentos lentos da carroceria.',
    effects: {
      increase: ['Geometria mais estável em meios-fios; menos deformação brusca', 'Menos absorção; risco de salto e perda de contato em bordas de pista'],
      decrease: ['Absorve melhor zebras; permite usar bordas de pista agressivamente', 'Dianteira mais instável em impactos; geometria varia mais']
    },
    tags: ['zebra', 'irregularidade']
  },
  'dampers.front_dampers.fast_rebound': {
    label: 'Extensão Rápida Dianteira',
    description: 'Velocidade com que a dianteira sobe após um impacto rápido (zebra, ondulação).',
    effects: {
      increase: ['Dianteira mais estável após impacto; menos oscilação em sequências', 'Pneu demora para retornar ao solo; perda de grip momentânea'],
      decrease: ['Pneu retorna ao solo mais rápido; mais aderência após zebra', 'Dianteira mais agitada em sequências de irregularidades']
    },
    tags: ['zebra', 'irregularidade', 'grip']
  },
  'dampers.rear_dampers.slow_bump': {
    label: 'Compressão Lenta Traseira',
    description: 'Resiste a compressões lentas na traseira (aceleração, saída de curva). Afeta tração e transferência de peso.',
    effects: {
      increase: ['Menor afundamento ao acelerar; saída mais estável', 'Pode reduzir tração em saídas muito lentas ou irregulares'],
      decrease: ['Traseira comprime mais ao acelerar; mais tração disponível', 'Mais instável em saídas rápidas; altura dinâmica varia mais']
    },
    tags: ['saida', 'tracao', 'peso']
  },
  'dampers.rear_dampers.fast_bump': {
    label: 'Compressão Rápida Traseira',
    description: 'Resiste a impactos rápidos na traseira. Afeta comportamento em zebras e pistas irregulares.',
    effects: {
      increase: ['Traseira mais rígida em impactos; geometria menos afetada', 'Menor absorção; instabilidade após meios-fios traseiros'],
      decrease: ['Absorve melhor irregularidades traseiras; mais tração em pistas irregulares', 'Traseira mais reativa; risco de sobresterço após impactos']
    },
    tags: ['zebra', 'irregularidade', 'saida']
  },
  'dampers.rear_dampers.fast_rebound': {
    label: 'Extensão Rápida Traseira',
    description: 'Velocidade com que a traseira sobe após um impacto rápido.',
    effects: {
      increase: ['Traseira mais estável após impacto; menos oscilação', 'Pneu traseiro demora a retornar ao solo; perda de tração momentânea'],
      decrease: ['Pneu traseiro retorna rápido; mais tração após zebra', 'Traseira mais agitada em sequências de irregularidades']
    },
    tags: ['zebra', 'tracao', 'irregularidade']
  },
  'chassis.steering.steering_lock': {
    label: 'Ângulo de Volante',
    description: 'Ângulo máximo de esterço das rodas dianteiras. Afeta manobrabilidade em curvas fechadas e chicanes.',
    effects: {
      increase: ['Mais capacidade de virada; útil em traçados técnicos com curvas lentas', 'Requer mais movimentação do volante; pode reduzir precisão em curvas rápidas'],
      decrease: ['Movimentos menores e mais precisos; ideal para traçados rápidos', 'Menor capacidade em curvas muito fechadas; dificulta manobras']
    },
    tags: ['direcao', 'manobrabilidade']
  },
  'chassis.alignment.caster': {
    label: 'Cáster',
    description: 'Ângulo de inclinação do pivô de direção. Gera câmber dinâmico ao esterçar, melhorando o grip em curvas rápidas.',
    effects: {
      increase: ['Mais câmber dinâmico; melhor grip em curvas rápidas e esterços amplos', 'Direção mais pesada; auto-centragem mais forte ao sair da curva'],
      decrease: ['Direção mais leve; menos esforço físico em ruas e chicanes', 'Menos câmber dinâmico; menor grip em curvas de alta velocidade']
    },
    tags: ['direcao', 'grip', 'curva_rapida']
  },
  'wheels_and_brakes.front_wheels.brake_disc': {
    label: 'Disco de Freio Dianteiro',
    description: 'Tamanho ou composto do disco de freio dianteiro. Afeta eficiência, resistência ao fading e massa não suspensa.',
    effects: {
      increase: ['Maior capacidade de frenagem; resistência ao fading em corridas longas', 'Maior massa não suspensa; pode afetar levemente a resposta da suspensão'],
      decrease: ['Menor massa; disco atinge temperatura ideal mais rápido em pistas frias', 'Menor resistência ao fading; pode perder eficiência em corridas longas']
    },
    tags: ['frenagem', 'temperatura', 'consistencia']
  },
  'wheels_and_brakes.rear_wheels.brake_disc': {
    label: 'Disco de Freio Traseiro',
    description: 'Tamanho ou composto do disco traseiro. Impacta estabilidade na frenagem e eficiência geral.',
    effects: {
      increase: ['Mais força de frenagem traseira; útil em distribuições mais traseiras', 'Maior risco de instabilidade se o traseiro bloquear'],
      decrease: ['Traseiro bloqueia menos; mais estabilidade na frenagem', 'Menor eficiência total de frenagem']
    },
    tags: ['frenagem', 'estabilidade']
  },
  'wheels_and_brakes.brakes.handbrake_pressure': {
    label: 'Pressão do Freio de Mão',
    description: 'Força aplicada pelo freio de mão nas rodas traseiras. Usado para rotação forçada em curvas muito lentas.',
    effects: {
      increase: ['Maior capacidade de travar as rodas traseiras; mais rotação em hairpins', 'Risco de girar o carro se usado em velocidade elevada'],
      decrease: ['Menos interferência do freio de mão; mais seguro', 'Menor capacidade de rotação forçada; menos eficiente em hairpins']
    },
    tags: ['hairpin', 'manobrabilidade', 'baixa_velocidade']
  },
  'suspension_and_aero.front_suspension.tender_spring_rate': {
    label: 'Mola Auxiliar Dianteira',
    description: 'Mola de baixa rigidez que atua antes da mola principal. Suaviza o início da compressão em baixas cargas.',
    effects: {
      increase: ['Transição inicial mais rígida; menos compressão em baixa carga', 'Menor absorção em irregularidades suaves'],
      decrease: ['Compressão inicial mais suave; melhor contato em ondulações', 'Pode permitir que a mola principal trabalhe antes do esperado']
    },
    tags: ['conforto', 'transicao', 'irregularidade']
  },
  'suspension_and_aero.front_suspension.packers': {
    label: 'Espaçadores Dianteiros',
    description: 'Limitam o curso de compressão da suspensão dianteira. Usados para controlar a altura mínima e o comportamento aerodinâmico.',
    effects: {
      increase: ['Menor curso de compressão; controle mais preciso da altura em alta velocidade', 'Suspensão chega mais rápido ao batente; pode bater em pisos irregulares'],
      decrease: ['Mais curso disponível; melhor absorção de pisos irregulares', 'Altura dinâmica varia mais; impacto na eficiência aerodinâmica']
    },
    tags: ['aero', 'altura', 'curso']
  },
  'suspension_and_aero.front_suspension.spring_rubber': {
    label: 'Borracha de Mola Dianteira',
    description: 'Inserto de borracha que adiciona rigidez progressiva ao final do curso da mola dianteira.',
    effects: {
      increase: ['Mais rigidez ao final do curso; limita compressão máxima', 'Reduz absorção de irregularidades quando a suspensão está comprimida'],
      decrease: ['Suspensão mais linear; mais curso suave disponível', 'Menor controle da altura mínima em compressão máxima']
    },
    tags: ['progressividade', 'curso', 'altura']
  },
  'suspension_and_aero.rear_suspension.tender_spring_rate': {
    label: 'Mola Auxiliar Traseira',
    description: 'Mola de baixa rigidez na traseira. Suaviza o início da compressão para melhorar a tração na saída.',
    effects: {
      increase: ['Transição inicial mais rígida; menos sensível a micro-ondulações', 'Menor tração em saídas de curva em piso irregular'],
      decrease: ['Compressão inicial mais suave; mais tração em saídas', 'Pode deixar a traseira mais baixa antes de acionar a mola principal']
    },
    tags: ['saida', 'tracao', 'transicao']
  },
  'suspension_and_aero.rear_suspension.packers': {
    label: 'Espaçadores Traseiros',
    description: 'Limitam o curso de compressão da suspensão traseira. Impactam tração e estabilidade na saída.',
    effects: {
      increase: ['Menor compressão traseira; controle de altura mais preciso', 'Menos tração em saídas com transferência de peso intensa'],
      decrease: ['Mais curso; melhor tração em saídas e pistas irregulares', 'Altura traseira varia mais; dificulta ajuste de equilíbrio aerodinâmico']
    },
    tags: ['saida', 'tracao', 'curso']
  },
  'suspension_and_aero.rear_suspension.spring_rubber': {
    label: 'Borracha de Mola Traseira',
    description: 'Inserto de borracha que adiciona progressividade ao final do curso da mola traseira.',
    effects: {
      increase: ['Mais rigidez em compressão total; controla melhor o fundo do curso', 'Pode reduzir tração ao endurecer a traseira no limite'],
      decrease: ['Suspensão traseira mais linear; mais tração disponível', 'Menor controle da altura mínima ao acelerar']
    },
    tags: ['saida', 'progressividade', 'tracao']
  },
  'chassis.alignment.fender_flare': {
    label: 'Expansão do Para-lama',
    description: 'Acomoda pneus mais largos ou variações de câmber. Ajuste principalmente estrutural e regulamentar.',
    effects: {
      increase: ['Acomoda bitola mais larga ou mais câmber negativo', 'Possível aumento de arrasto lateral dependendo da regulagem'],
      decrease: ['Bitola mais estreita; menor arrasto lateral', 'Limita o câmber máximo ou a largura de pneu utilizada']
    },
    tags: ['geometria', 'regulamento']
  },
  'chassis.alignment.track_bar': {
    label: 'Barra Panhard',
    description: 'Controla a posição lateral do eixo traseiro (em carros com eixo rígido). Afeta o centro de rolagem traseiro.',
    effects: {
      increase: ['Centro de rolagem traseiro mais alto; menos rolagem lateral', 'Altera equilíbrio entre curvas para esquerda e direita'],
      decrease: ['Centro de rolagem mais baixo; mais rolagem; mais grip em curvas lentas', 'Mudança de comportamento assimétrico entre os lados do circuito']
    },
    tags: ['equilibrio', 'rolagem', 'eixo_rigido']
  },
  'chassis.alignment.front_wheel_track': {
    label: 'Bitola Dianteira',
    description: 'Distância entre os centros das rodas dianteiras. Afeta estabilidade lateral e resposta na entrada de curva.',
    effects: {
      increase: ['Mais estabilidade lateral em retas e curvas rápidas', 'Menor agilidade em mudanças bruscas de direção'],
      decrease: ['Mais agilidade e rotação; carro responde mais rápido na entrada', 'Menor estabilidade lateral em curvas de alta velocidade']
    },
    tags: ['entrada', 'estabilidade', 'geometria']
  },
  'chassis.alignment.rear_wheel_track': {
    label: 'Bitola Traseira',
    description: 'Distância entre os centros das rodas traseiras. Afeta estabilidade e tração na saída.',
    effects: {
      increase: ['Mais estabilidade lateral traseira; reduz tendência ao sobresterço', 'Menos rotação disponível na entrada de curva'],
      decrease: ['Carro mais rotativo; mais sobresterço disponível', 'Menor estabilidade traseira em curvas rápidas']
    },
    tags: ['saida', 'estabilidade', 'geometria']
  },
  'chassis.weight.vertical': {
    label: 'Centro de Gravidade Vertical',
    description: 'Altura do centro de massa do carro. Quanto mais baixo, menor a transferência de peso em curvas.',
    effects: {
      increase: ['Maior transferência de peso lateral; mais rolagem em curvas', 'Maior sensibilidade a mudanças bruscas de direção'],
      decrease: ['Menor transferência de peso; mais estável em curvas rápidas', 'Menos rolagem; plataforma aerodinâmica mais constante']
    },
    tags: ['peso', 'estabilidade', 'equilibrio']
  },
  'chassis.weight.lateral': {
    label: 'Centro de Gravidade Lateral',
    description: 'Distribuição lateral do peso. Afeta o comportamento assimétrico em circuitos com curvas predominantes para um lado.',
    effects: {
      increase: ['Mais carga em um lado; favorece curvas nesse sentido', 'Assimetria de comportamento entre curvas à esquerda e à direita'],
      decrease: ['Distribuição mais centralizada; comportamento mais simétrico', 'Pode prejudicar curvas onde mais carga lateral ajudaria']
    },
    tags: ['equilibrio', 'simetria', 'peso']
  },
  'chassis.weight.weight_distribution': {
    label: 'Distribuição de Peso',
    description: 'Proporção do peso total entre eixo dianteiro e traseiro. Afeta diretamente a tendência de subesterço ou sobresterço.',
    effects: {
      increase: ['Mais peso na dianteira; melhor frenagem; tendência a subesterço', 'Menor tração na saída de curva'],
      decrease: ['Mais peso na traseira; melhor tração; tendência ao sobresterço', 'Menor estabilidade na frenagem']
    },
    tags: ['entrada', 'saida', 'equilibrio']
  },
  'chassis.weight.wedge': {
    label: 'Cunha (Peso Diagonal)',
    description: 'Ajuste do peso diagonal do carro (ex: dianteiro esquerdo + traseiro direito). Usado para compensar o carregamento unilateral em óvalos.',
    effects: {
      increase: ['Mais carga no par diagonal; melhora estabilidade em curvas para um lado', 'Cria assimetria; pode prejudicar curvas no sentido oposto'],
      decrease: ['Menor assimetria diagonal; comportamento mais simétrico', 'Pode reduzir estabilidade em circuitos ovalados']
    },
    tags: ['equilibrio', 'ovalo', 'peso']
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
let showFixedFields = true;
let activeTagFilter = new Set();

// Fields where L === R is ideal (symmetric setup warning)
const symmetricFields = new Set([
  'brake_disc', 'spring_rate', 'packers', 'spring_rubber', 'tender_spring_rate',
  'ride_height', 'slow_bump', 'fast_bump', 'slow_rebound', 'fast_rebound',
  'front_wheel_track', 'rear_wheel_track'
]);

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

  if (typeof isFuelCalcOpen !== 'undefined') isFuelCalcOpen = false;

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
  if (!document.body.dataset.tool) {
    setTimeout(() => workspace.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
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
  activeTagFilter = new Set();
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
      activeTagFilter = new Set();
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

  const allSchemaTags = getSchemaKnowledgeTags(schema);
  const tagBtnsHtml = allSchemaTags.map(tag =>
    `<button class="tag-filter-btn${activeTagFilter.has(tag) ? ' active' : ''}" data-tag="${tag}" onclick="toggleTagFilter('${tag}')">${tag}</button>`
  ).join('');

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
    <div class="tag-filter-bar" id="tag-filter-bar">
      <span class="tag-filter-label">Filtrar:</span>
      ${tagBtnsHtml}
      <button class="tag-filter-clear" id="tag-filter-clear" onclick="clearTagFilter()" style="${activeTagFilter.size > 0 ? '' : 'display:none'}">✕ limpar</button>
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
      <button class="btn btn-small btn-toggle-fixed" id="btn-toggle-fixed" onclick="toggleFixedFields()">${showFixedFields ? getKey(t, 'ui.hideFixed') : getKey(t, 'ui.showFixed')}</button>
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
    const isSym = symmetricFields.has(fieldKey);
    const asymmetric = isSym && Math.abs(vL - vR) >= field.step * 0.5;
    const symSpan = isSym
      ? `<span class="field-sym-warn${asymmetric ? ' visible' : ''}" id="sym-${uid}" title="${getKey(t, 'ui.symWarning')}">⚠</span>`
      : '';

    return `
      <div class="${rowClasses}" id="row-${uid}">
        <div class="field-header">
          <div class="field-label-wrap">
            <span class="field-label">${label}</span>${symSpan}
          </div>
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
            onclick="toggleLink('${uid}')" title="${getKey(t, 'ui.linked')}">${isLinked ? '🔒' : '🔓'}</button>
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
          <span class="field-value" id="val-${uid}">${formatFieldDisplay(fieldKey, Number(value), decimals, unit)}</span>
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
// =============================================
// FIELD VISIBILITY (campos fixos + filtro por tag)
// =============================================
function applyFieldVisibility() {
  document.querySelectorAll('.field-row[id^="row-"]').forEach(row => {
    const uid = row.id.replace('row-', '');
    const isFixed = row.classList.contains('field-fixed') || row.classList.contains('field-locked');

    if (!showFixedFields && isFixed) {
      row.style.display = 'none';
      return;
    }

    if (activeTagFilter.size > 0) {
      const knowledge = fieldKnowledge[uid.split('__').join('.')];
      const matches = (knowledge?.tags || []).some(tag => activeTagFilter.has(tag));
      row.style.display = matches ? '' : 'none';
      return;
    }

    row.style.display = '';
  });

  // Colapsa subcategorias onde todos os campos estão ocultos
  document.querySelectorAll('.subcat-block').forEach(block => {
    const anyVisible = [...block.querySelectorAll('.field-row[id^="row-"]')].some(f => f.style.display !== 'none');
    block.style.display = anyVisible ? '' : 'none';
  });

  const btn = document.getElementById('btn-toggle-fixed');
  if (btn) btn.textContent = showFixedFields ? getKey(t, 'ui.hideFixed') : getKey(t, 'ui.showFixed');
}

function applyFixedVisibility() { applyFieldVisibility(); }

function toggleFixedFields() {
  showFixedFields = !showFixedFields;
  applyFieldVisibility();
}

// =============================================
// TAG FILTER
// =============================================
function getSchemaKnowledgeTags(schema) {
  const tags = new Set();
  for (const [catKey, cat] of Object.entries(schema.categories)) {
    for (const [subKey, sub] of Object.entries(cat)) {
      for (const fieldKey of Object.keys(sub)) {
        const k = fieldKnowledge[`${catKey}.${subKey}.${fieldKey}`];
        if (k) for (const tag of (k.tags || [])) tags.add(tag);
      }
    }
  }
  return [...tags].sort();
}

function toggleTagFilter(tag) {
  if (activeTagFilter.has(tag)) activeTagFilter.delete(tag);
  else activeTagFilter.add(tag);
  updateTagFilterUI();
  applyFieldVisibility();
}

function clearTagFilter() {
  activeTagFilter.clear();
  updateTagFilterUI();
  applyFieldVisibility();
}

function updateTagFilterUI() {
  document.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.classList.toggle('active', activeTagFilter.has(btn.dataset.tag));
  });
  const clearBtn = document.getElementById('tag-filter-clear');
  if (clearBtn) clearBtn.style.display = activeTagFilter.size > 0 ? '' : 'none';
}

// =============================================
// SYMMETRIC WARNING
// =============================================
function updateSymWarning(uid) {
  const [catKey, subKey, fieldKey] = uid.split('__');
  if (!symmetricFields.has(fieldKey)) return;
  const field = currentSchema?.categories[catKey]?.[subKey]?.[fieldKey];
  if (!field) return;
  const v = currentValues[catKey]?.[subKey]?.[fieldKey];
  if (!v) return;
  const warn = document.getElementById('sym-' + uid);
  if (warn) warn.classList.toggle('visible', Math.abs(v.left - v.right) >= field.step * 0.5);
}

function toggleLink(uid) {  const isNowLinked = !getLinkState(uid);
  setLinkState(uid, isNowLinked);
  const btn = document.getElementById('link-' + uid);
  if (btn) {
    btn.classList.toggle('linked', isNowLinked);
    btn.textContent = isNowLinked ? '🔒' : '🔓';
  }
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
    updateSymWarning(uid);
    refreshAnalyzeBadge();
  }
}

function formatFieldDisplay(fieldKey, num, decimals, unit) {
  if (fieldKey === 'brake_bias') {
    const rear = (100 - num).toFixed(decimals);
    return `${num.toFixed(decimals)} / ${rear}${unit}`;
  }
  return num.toFixed(decimals) + unit;
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
    updateSymWarning(uid);
  } else {
    currentValues[catKey][subKey][fieldKey] = num;
    const display = document.getElementById('val-' + uid);
    if (display) display.textContent = formatFieldDisplay(fieldKey, num, decimals, unit);
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

if (document.body.dataset.tool === 'rf2-setup') {
  launchTool('rf2-setup');
}
