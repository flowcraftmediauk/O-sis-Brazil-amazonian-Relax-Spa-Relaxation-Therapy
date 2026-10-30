import React from 'react';
import { Clock, Tag, MessageCircle, AlertCircle, Info, Sparkles, Gift } from 'lucide-react';
import { PRELIMINARY_SERVICES, HELD_BACK_ITEMS, VERIFIED_BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4EFEB]/50 border-t border-[#E8DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
            Massagens e Terapias de Relaxamento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            Escolha o Seu Tratamento
          </h2>
          <p className="text-sm sm:text-base text-[#736960] font-light leading-relaxed">
            Serviços preliminares identificados a partir do material promocional do WhatsApp da empresa. Sessões realizadas estritamente por agendamento prévio em Faro, Portugal.
          </p>

          {/* Client Confirmation Warning Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-900 mt-2 text-left">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Preços Preliminares:</strong> Os valores e durações abaixo foram extraídos de folhetos promocionais e carecem de validação final do cliente antes da publicação definitiva.
            </span>
          </div>
        </div>

        {/* Services Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRELIMINARY_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E8DDD2] shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Service Image */}
              <div className="relative h-52 w-full overflow-hidden bg-[#EFE8DE]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-[#27211D] border border-[#E8DDD2] flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#B68D5D]" />
                  <span>{service.duration}</span>
                </div>

                {service.id === 'pack-spa-day' && (
                  <div className="absolute top-3 right-3 bg-[#27211D] text-[#FAF7F2] px-2 py-0.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Gift className="w-3 h-3 text-amber-300" />
                    <span>Cartão Presente</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#B68D5D] font-medium mb-1">
                    {service.portugueseName}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#27211D] leading-snug group-hover:text-[#B68D5D] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#5C5248] leading-relaxed mt-2.5 font-light">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-1.5 border-t border-[#E8DDD2]/60 pt-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-[11px] text-[#736960] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#B68D5D]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-[#E8DDD2] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-[#8C8075] uppercase tracking-wider block">
                        Valor Promocional*
                      </span>
                      <span className="font-serif text-2xl font-normal text-[#27211D]">
                        {service.preliminaryPrice}
                      </span>
                    </div>
                    <span className="text-[10px] text-amber-800 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded font-medium">
                      Aguardando Confirmação
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectService(service.name)}
                      className="w-full text-center py-2 text-xs uppercase tracking-wider font-medium text-[#27211D] border border-[#27211D] hover:bg-[#27211D] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                    >
                      Pedido Online
                    </button>

                    <a
                      href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Ol%C3%A1%20O%C3%A1sis%20Brazil%2C%20gostaria%20de%20saber%20mais%20e%20agendar%20a%20sess%C3%A3o%20de%20${encodeURIComponent(service.name)}%20(${encodeURIComponent(service.duration)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 text-xs uppercase tracking-wider font-medium bg-[#27211D] text-[#FAF7F2] hover:bg-[#3E342B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Held Back Services Explanatory Box */}
        <div className="mt-16 bg-[#FAF7F2] rounded-xl border border-[#DFCFC1] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-[#B68D5D]" />
            <h4 className="font-serif text-xl font-medium text-[#27211D]">
              Serviços em Espera (Garantia de Rigor e Transparência)
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#736960] mb-6">
            Em conformidade com a regra de exibir apenas informação estritamente confirmada, os seguintes itens promocionais foram retidos temporariamente do catálogo público até validação com o proprietário:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HELD_BACK_ITEMS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#F4EFEB] border border-[#E8DDD2]">
                <div className="flex items-center gap-2 text-[#27211D] font-medium text-sm mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#736960] leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
