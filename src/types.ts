export interface ServiceItem {
  id: string;
  name: string;
  portugueseName: string;
  duration: string;
  preliminaryPrice: string;
  description: string;
  features: string[];
  image: string;
  status: 'preliminary_unconfirmed';
}

export interface AppointmentInquiry {
  id?: string;
  clientName: string;
  clientEmail?: string;
  clientPhone: string;
  serviceName: string;
  preferredDate?: string;
  notes?: string;
  status: 'pending' | 'contacted' | 'completed';
  userId?: string;
  createdAt: string;
}

export interface MissingClientItem {
  id: string;
  title: string;
  currentStatus: 'Missing' | 'Preliminary' | 'Clarification Needed';
  detail: string;
  questionForClient: string;
}
