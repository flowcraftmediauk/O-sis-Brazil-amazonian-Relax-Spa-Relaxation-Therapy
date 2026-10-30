import { ServiceItem, MissingClientItem } from '../types';

import heroImg from '../assets/images/oasis_spa_hero_1793384039896.jpg';
import stonesImg from '../assets/images/oasis_hot_stones_1793384054843.jpg';
import massageImg from '../assets/images/oasis_massage_serene_1793384069562.jpg';

export const VERIFIED_BUSINESS_INFO = {
  name: 'Oásis Brazil amazonian Relax',
  category: 'Terapia de Relaxamento / Centro de Spa',
  phone: '+351 966 897 721',
  phoneClean: '351966897721',
  email: 'oasisfilialalgarve@gmail.com',
  location: 'Faro, Portugal',
  bookingRule: 'Apenas por agendamento prévio',
  facebook: {
    name: 'Massage relaxante Faro',
    likes: 42,
    url: 'https://www.facebook.com/share/1VS32GKVSC/',
  },
  youtube: {
    partialUrl: 'https://youtube.com/@massage...',
    status: 'Ligação incompleta no perfil — a aguardar confirmação do cliente',
  },
};

export const PRELIMINARY_SERVICES: ServiceItem[] = [
  {
    id: 'back-cervical',
    name: 'Massagem nas Costas e Cervical',
    portugueseName: 'Massagem nas costas e cervical',
    duration: '50 minutos',
    preliminaryPrice: '45 €',
    description: 'Terapia focada e profunda destinada a aliviar a rigidez muscular no pescoço, ombros e zona dorsal superior.',
    features: [
      'Alívio de tensões cervicais e nos ombros',
      'Descompressão suave da coluna',
      'Óleos essenciais naturais e aquecidos',
    ],
    image: massageImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'brazilian-premium-relax',
    name: 'Massagem Brasileira Premium Relax',
    portugueseName: 'Massagem Brasileira Premium Relax',
    duration: '1 hora (60 min)',
    preliminaryPrice: '75 €',
    description: 'Tratamento de assinatura que une movimentos fluídos e contínuos de técnicas brasileiras a um relaxamento sensorial pleno.',
    features: [
      'Toque ritmado e contínuo de corpo inteiro',
      'Aromas botânicos de inspiração amazónica',
      'Alívio integral do stress e renovação de energias',
    ],
    image: heroImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'premium-stones-candles',
    name: 'Massagem Premium (Pedras Quentes ou Velas)',
    portugueseName: 'Massagem Premium (Pedras Quentes ou Velas)',
    duration: '1 hora (60 min)',
    preliminaryPrice: '75 €',
    description: 'Calor terapêutico com pedras vulcânicas de basalto aquecidas ou vela vegetal morna aromática para descontrair a musculatura.',
    features: [
      'Pedras de basalto quentes ou cera morna de massagem',
      'Relaxamento térmico profundo e reconfortante',
      'Ambiente intimista e acolhedor à luz de velas',
    ],
    image: stonesImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'pack-spa-day',
    name: 'Pack Spa Day',
    portugueseName: 'Pack Spa Day (Com Cartão Presente / Gift Card)',
    duration: '2 horas de tratamento (120 min)',
    preliminaryPrice: '120 €',
    description: 'Um ritual completo de 2 horas para uma renovação física e mental profunda. Opção ideal para si ou para oferecer como presente.',
    features: [
      'Sessão integrada multietapas de bem-estar',
      'Disponível como Cartão de Oferta / Gift Card',
      'Harmonia e descanso absoluto da mente e corpo',
    ],
    image: massageImg,
    status: 'preliminary_unconfirmed',
  },
];

export const HELD_BACK_ITEMS = [
  {
    title: 'Tratamentos de Spa no Alojamento ou Eventos',
    reason: 'Mencionado numa imagem promocional, mas as condições e raio de deslocação no Algarve não foram confirmados pelo cliente. Retido para não fazer promessas sem validação.',
  },
  {
    title: 'Planos de Utilização de Espaço a 1,77 € por Hora',
    reason: 'Visível em publicações, mas o significado exato (aluguer de sala, plano de horas ou sauna/cabine) requer esclarecimento. Excluído até ser esclarecido.',
  },
];

export const MISSING_CLIENT_QUESTIONS: MissingClientItem[] = [
  {
    id: 'q1',
    title: 'Confirmação dos Preços e Durações Promocionais',
    currentStatus: 'Preliminary',
    detail: 'As imagens promocionais indicam: Costas e cervical (45 € / 50 min), Brasileira Premium Relax (75 € / 1h), Pedras Quentes ou Velas (75 € / 1h), Pack Spa Day (120 € / 2h).',
    questionForClient: 'Poderia confirmar se os 4 preços e durações promocionais (Costas: 45 € / 50 min; Brasileira Relax: 75 € / 1h; Pedras ou Velas: 75 € / 1h; Pack Spa Day: 120 € / 2h) estão corretos e confirmados para a versão final do website?',
  },
  {
    id: 'q2',
    title: 'Morada Exata do Espaço em Faro',
    currentStatus: 'Missing',
    detail: 'Apenas surge "Faro, Portugal". É necessária a morada com rua, número e código postal para partilha e localização no mapa.',
    questionForClient: 'Qual é a morada exata (rua, número de porta e código postal) do espaço em Faro para orientação dos clientes?',
  },
  {
    id: 'q3',
    title: 'Descrição e História Oficial da Empresa',
    currentStatus: 'Missing',
    detail: 'Um pequeno parágrafo oficial sobre a filosofia e o conceito do "Oásis Brazil amazonian Relax" no Algarve.',
    questionForClient: 'Que apresentação ou texto institucional gostaria de ver no website sobre a história e a filosofia do Oásis Brazil amazonian Relax?',
  },
  {
    id: 'q4',
    title: 'Nome e Biografia do(a) Terapeuta',
    currentStatus: 'Missing',
    detail: 'O perfil atual não indica o nome dos terapeutas, formação ou certificações profissionais.',
    questionForClient: 'Gostaria de apresentar o(a) terapeuta pelo nome, anos de experiência ou especializações no website?',
  },
  {
    id: 'q5',
    title: 'Horário de Funcionamento e Atendimento',
    currentStatus: 'Missing',
    detail: 'O perfil indica apenas "Por marcação", sem especificar dias da semana ou intervalo de horas.',
    questionForClient: 'Em que dias da semana e horários diários estão disponíveis as vagas para agendamento?',
  },
  {
    id: 'q6',
    title: 'Esclarecimento sobre Massagens ao Domicílio ou Eventos',
    currentStatus: 'Clarification Needed',
    detail: 'Um anúncio referiu tratamentos no alojamento do cliente ou em eventos.',
    questionForClient: 'Disponibiliza massagens no domicílio, alojamento de férias ou eventos privados no Algarve? Se sim, sob que condições?',
  },
  {
    id: 'q7',
    title: 'Significado do Valor de 1,77 € / Hora',
    currentStatus: 'Clarification Needed',
    detail: 'Uma imagem continha a menção a planos de espaço a 1,77 € por hora.',
    questionForClient: 'Poderia esclarecer a que se refere a menção promocional de 1,77 € por hora (ex.: aluguer de gabinete, plano mensal)?',
  },
  {
    id: 'q8',
    title: 'Ligação Completa do Canal de YouTube',
    currentStatus: 'Missing',
    detail: 'O link visível está incompleto ("https://youtube.com/@massage...").',
    questionForClient: 'Qual é o link ou identificador completo (@...) do vosso canal no YouTube?',
  },
  {
    id: 'q9',
    title: 'Idioma Principal do Website',
    currentStatus: 'Preliminary',
    detail: 'Website configurado totalmente em Português conforme instrução atual.',
    questionForClient: 'O website está agora em Português. Deseja manter apenas Português ou adicionar também versão em Inglês para turistas?',
  },
  {
    id: 'q10',
    title: 'Fotografias Reais do Espaço',
    currentStatus: 'Missing',
    detail: 'Fotografias autênticas do gabinete, marquesa, receção e entrada em Faro.',
    questionForClient: 'Dispõe de fotografias em boa resolução do espaço real em Faro para substituir as imagens de inspiração estética?',
  },
];
