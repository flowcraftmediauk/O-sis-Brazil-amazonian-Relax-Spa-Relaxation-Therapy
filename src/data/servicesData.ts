import { ServiceItem, MissingClientItem } from '../types';

import heroImg from '../assets/images/oasis_spa_hero_1793384039896.jpg';
import stonesImg from '../assets/images/oasis_hot_stones_1793384054843.jpg';
import massageImg from '../assets/images/oasis_massage_serene_1793384069562.jpg';

export const VERIFIED_BUSINESS_INFO = {
  name: 'Oásis Brazil amazonian Relax',
  category: 'Relaxation Therapy / Spa Center',
  phone: '+351 966 897 721',
  phoneClean: '351966897721',
  email: 'oasisfilialalgarve@gmail.com',
  location: 'Faro, Portugal',
  bookingRule: 'Appointment only',
  facebook: {
    name: 'Massage relaxante Faro',
    likes: 42,
    url: 'https://www.facebook.com/share/1VS32GKVSC/',
  },
  youtube: {
    partialUrl: 'https://youtube.com/@massage...',
    status: 'Incomplete URL visible in profile — pending client confirmation',
  },
};

export const PRELIMINARY_SERVICES: ServiceItem[] = [
  {
    id: 'back-cervical',
    name: 'Back & Cervical Massage',
    portugueseName: 'Massagem nas costas e cervical',
    duration: '50 minutes',
    preliminaryPrice: '€45',
    description: 'Targeted soothing therapy focusing on alleviating neck tension, upper back knots, and shoulder stiffness.',
    features: [
      'Focused neck and shoulder pressure points',
      'Gentle spinal alignment relaxation',
      'Warm essential oils',
    ],
    image: massageImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'brazilian-premium-relax',
    name: 'Brazilian Premium Relax Massage',
    portugueseName: 'Massagem Brasileira Premium Relax',
    duration: '1 hour (60 min)',
    preliminaryPrice: '€75',
    description: 'Signature relaxation experience combining traditional Brazilian rhythmic smoothing touches with deep sensory calm.',
    features: [
      'Full body continuous gentle flow',
      'Harmonizing Amazonian botanical aroma',
      'Complete stress dissipation',
    ],
    image: heroImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'premium-stones-candles',
    name: 'Premium Massage (Hot Stones or Warm Candles)',
    portugueseName: 'Massagem Premium (Pedras Quentes ou Velas)',
    duration: '1 hour (60 min)',
    preliminaryPrice: '€75',
    description: 'Therapeutic warmth utilizing smooth basalt hot stones or melting aromatic soy wax candles to melt muscular tightness.',
    features: [
      'Heated basalt stones or warm candle wax',
      'Deep thermal muscle relaxation',
      'Sensory ambient candlelight',
    ],
    image: stonesImg,
    status: 'preliminary_unconfirmed',
  },
  {
    id: 'pack-spa-day',
    name: 'Pack Spa Day',
    portugueseName: 'Pack Spa Day (Com Cartão Presente / Gift Card)',
    duration: '2 hours of treatment (120 min)',
    preliminaryPrice: '€120',
    description: 'A comprehensive 2-hour rejuvenation ritual. Ideal for personal renewal or gifting via specialized Gift Card.',
    features: [
      'Comprehensive multi-phase relaxation',
      'Gift Card / Voucher option available',
      'Complete mind and body reset',
    ],
    image: massageImg,
    status: 'preliminary_unconfirmed',
  },
];

export const HELD_BACK_ITEMS = [
  {
    title: 'Accommodation or Event Spa Treatments',
    reason: 'Mentioned on a promotional flyer, but service parameters and on-site travel coverage are not yet confirmed by the client. Held back to prevent false promises.',
  },
  {
    title: 'Room-Use Plans (€1.77 per hour)',
    reason: 'Visible in image snippets, but meaning (workspace, therapy room rental, or tanning/sauna) is ambiguous. Excluded until clarified.',
  },
];

export const MISSING_CLIENT_QUESTIONS: MissingClientItem[] = [
  {
    id: 'q1',
    title: 'Confirmation of Promotional Prices & Durations',
    currentStatus: 'Preliminary',
    detail: 'Promotional images list: Back & Cervical (€45/50m), Brazilian Premium Relax (€75/1h), Hot Stones/Candles (€75/1h), Spa Day (€120/2h).',
    questionForClient: 'Could you confirm whether the 4 promotional prices and treatment durations (Costas €45, Brasileira Relax €75, Pedras/Velas €75, Spa Day €120) are current and finalized for the website?',
  },
  {
    id: 'q2',
    title: 'Exact Studio Address in Faro',
    currentStatus: 'Missing',
    detail: 'Only "Faro, Portugal" is listed. An exact street address or Google Maps pin is needed for clients receiving confirmations.',
    questionForClient: 'What is the exact street address, postal code, or location landmark of the studio in Faro for appointment directions?',
  },
  {
    id: 'q3',
    title: 'Official Business Description & Story',
    currentStatus: 'Missing',
    detail: 'A short authentic paragraph explaining the inspiration behind "Oásis Brazil amazonian Relax" in the Algarve.',
    questionForClient: 'What official introduction or description would you like to share about Oásis Brazil amazonian Relax and its philosophy?',
  },
  {
    id: 'q4',
    title: 'Therapist Name & Professional Bio',
    currentStatus: 'Missing',
    detail: 'Client profile does not mention therapist names, certifications, or background.',
    questionForClient: 'Would you like to introduce the therapist(s) by name, experience, or certifications on the website?',
  },
  {
    id: 'q5',
    title: 'Opening & Appointment Hours',
    currentStatus: 'Missing',
    detail: 'Profile states "Appointment only", but specific days and daily hours for booking are not stated.',
    questionForClient: 'Which days of the week and daily hours are appointments available for booking?',
  },
  {
    id: 'q6',
    title: 'Clarification on Accommodation / Event Treatments',
    currentStatus: 'Clarification Needed',
    detail: 'One image mentioned visits to guest accommodations or private events.',
    questionForClient: 'Do you offer mobile treatments at client accommodations, villas, or events in the Algarve, and what are the conditions?',
  },
  {
    id: 'q7',
    title: 'Meaning of the €1.77 / Hour Room Plan',
    currentStatus: 'Clarification Needed',
    detail: 'An image mentions room use at €1.77/hour, which could be room rental, cabin hire, or membership.',
    questionForClient: 'Could you clarify the promotional reference to room plans at €1.77 per hour so we can present it accurately?',
  },
  {
    id: 'q8',
    title: 'Complete YouTube Channel Link',
    currentStatus: 'Missing',
    detail: 'The link is clipped at "https://youtube.com/@massage...".',
    questionForClient: 'What is the full URL or handle of your YouTube channel?',
  },
  {
    id: 'q9',
    title: 'Preferred Primary Website Language',
    currentStatus: 'Missing',
    detail: 'Whether the website should be primarily in Portuguese, English, or bilingual (Portuguese / English) for Faro tourists and locals.',
    questionForClient: 'Do you prefer the final website primarily in Portuguese, English, or with a bilingual language switcher?',
  },
  {
    id: 'q10',
    title: 'Actual Studio Photographs',
    currentStatus: 'Missing',
    detail: 'Real photos of the therapy room, reception, and entrance in Faro.',
    questionForClient: 'Do you have high-resolution photos of your actual treatment space in Faro to replace our editorial preview images?',
  },
];
