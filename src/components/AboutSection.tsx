import React from 'react';
import { ThumbsUp, Shield, HelpCircle, ExternalLink } from 'lucide-react';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';
import interiorImg from '../assets/images/oasis_massage_serene_1793384069562.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait / Aesthetic Room */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD2] shadow-sm">
                <img
                  src={interiorImg}
                  alt="Ambiente acolhedor no Oásis Brazil amazonian Relax em Faro"
                  className="w-full h-[440px] sm:h-[500px] object-cover"
                />
              </div>

              {/* Verified Facebook Card Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#FAF7F2] border border-[#E8DDD2] p-4 rounded-xl shadow-md max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#27211D]">
                      {VERIFIED_BUSINESS_INFO.facebook.name}
                    </p>
                    <p className="text-[11px] text-[#736960]">
                      {VERIFIED_BUSINESS_INFO.facebook.likes} gostos na comunidade Facebook
                    </p>
                  </div>
                </div>
                <a
                  href={VERIFIED_BUSINESS_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 text-[11px] font-medium text-[#27211D] hover:underline flex items-center gap-1"
                >
                  <span>Ver página no Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Verified Facts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
                O Refúgio em Faro
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#27211D] leading-tight">
                Dedicado à Paz, Equilíbrio e Relaxamento Profundo
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed font-light">
              O <strong className="font-normal text-[#27211D]">Oásis Brazil amazonian Relax</strong> é um espaço especializado em terapias de relaxamento e spa sediado em Faro, Portugal. Pensado como um santuário de tranquilidade face ao ritmo acelerado do quotidiano, cada sessão é desenhada para descontrair a musculatura, aliviar a sobrecarga física e acalmar os sentidos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F4EFEB] rounded-xl border border-[#E8DDD2]">
                <h4 className="font-serif text-lg font-medium text-[#27211D] mb-1">
                  Atendimento Individualizado
                </h4>
                <p className="text-xs text-[#736960] leading-relaxed">
                  Todas as terapias decorrem exclusivamente com marcação prévia, garantindo total privacidade, silêncio e dedicação integral.
                </p>
              </div>

              <div className="p-4 bg-[#F4EFEB] rounded-xl border border-[#E8DDD2]">
                <h4 className="font-serif text-lg font-medium text-[#27211D] mb-1">
                  Harmonia Sensorial
                </h4>
                <p className="text-xs text-[#736960] leading-relaxed">
                  Técnicas de relaxamento inspiradas no bem-estar brasileiro, aliadas a aromas botânicos suaves e conforto térmico revigorante.
                </p>
              </div>
            </div>

            {/* Strict Client Transparency Callout */}
            <div className="p-4 bg-[#EFE8DE]/60 rounded-xl border border-[#DFCFC1] flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#B68D5D] shrink-0 mt-0.5" />
              <div className="text-xs text-[#5C5248] space-y-1">
                <p className="font-medium text-[#27211D]">
                  Nota de Transparência do Website
                </p>
                <p>
                  Para preservar a máxima integridade e veracidade dos dados, as qualificações, certificações oficiais e a biografia detalhada do(a) terapeuta aguardam confirmação do cliente para inclusão nesta secção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
