import React from 'react';
import { Calendar, MapPin, Sparkles, Clock } from 'lucide-react';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';

export const OverviewStrip: React.FC = () => {
  const items = [
    {
      title: 'Disponibilidade',
      detail: 'Apenas por Agendamento',
      icon: Calendar,
      caption: 'Reserva prévia necessária',
    },
    {
      title: 'Localização',
      detail: VERIFIED_BUSINESS_INFO.location,
      icon: MapPin,
      caption: 'Região do Algarve',
    },
    {
      title: 'Categoria',
      detail: VERIFIED_BUSINESS_INFO.category,
      icon: Sparkles,
      caption: 'Espaço de relaxamento',
    },
    {
      title: 'Sessões',
      detail: '50 / 60 / 120 min',
      icon: Clock,
      caption: 'Durações preliminares',
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-8 sm:py-12 border-y border-[#E8DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8DDD2]">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? 'pt-4 md:pt-0 md:px-4' : 'md:pr-4'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#F4EFEB] flex items-center justify-center mb-2.5 text-[#B68D5D]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#27211D] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#5C5248] mt-0.5">
                  {item.detail}
                </p>
                <span className="text-[11px] text-[#8C8075] mt-0.5 italic">
                  {item.caption}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
