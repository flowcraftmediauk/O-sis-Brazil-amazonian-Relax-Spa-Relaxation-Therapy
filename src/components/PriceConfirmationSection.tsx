import React from 'react';
import { CheckCircle2, Clock, HelpCircle, MessageCircle, FileText } from 'lucide-react';
import { PRELIMINARY_SERVICES, VERIFIED_BUSINESS_INFO } from '../data/servicesData';

interface PriceConfirmationSectionProps {
  onOpenAudit: () => void;
}

export const PriceConfirmationSection: React.FC<PriceConfirmationSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
            Tabela de Auditoria e Validação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            Tabela Preliminar de Preços
          </h2>
          <p className="text-sm text-[#736960] font-light leading-relaxed">
            Os valores apresentados foram transcritos das publicações do perfil do WhatsApp Business. Encontram-se categorizados como <em>Preliminares</em> até validação formal pelo responsável.
          </p>
        </div>

        {/* Pricing Comparison Table Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8DDD2] overflow-hidden shadow-sm">
          <div className="p-6 bg-[#F4EFEB] border-b border-[#E8DDD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-medium text-[#27211D]">
                Estado de Verificação do Catálogo Promocional
              </h3>
              <p className="text-xs text-[#736960]">
                Retirado das imagens do WhatsApp da empresa • 4 tratamentos identificados
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-xs text-[#27211D] font-medium bg-[#FAF7F2] border border-[#DFCFC1] px-3.5 py-2 rounded-lg hover:bg-white transition-colors cursor-pointer self-start sm:self-auto"
            >
              <FileText className="w-3.5 h-3.5 text-[#B68D5D]" />
              <span>Ver Pergunta #1 para o Cliente</span>
            </button>
          </div>

          <div className="divide-y divide-[#E8DDD2]">
            {PRELIMINARY_SERVICES.map((s) => (
              <div
                key={s.id}
                className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F4EFEB]/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg font-medium text-[#27211D]">
                      {s.portugueseName}
                    </span>
                  </div>
                  <p className="text-xs text-[#736960]">
                    {s.description}
                  </p>
                </div>

                <div className="flex items-center sm:text-right justify-between sm:justify-end gap-6 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-[#736960]">
                    <Clock className="w-3.5 h-3.5 text-[#B68D5D]" />
                    <span>{s.duration}</span>
                  </div>

                  <div className="text-right">
                    <span className="font-serif text-2xl font-medium text-[#27211D]">
                      {s.preliminaryPrice}
                    </span>
                    <span className="block text-[10px] text-amber-800 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mt-0.5">
                      Aguardando Confirmação
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#736960] max-w-xl">
              *Nota: Assim que validados pelo cliente, estes preços serão atualizados para a versão definitiva e desbloqueados no fluxo de agendamento automático.
            </p>
            <a
              href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Ol%C3%A1%20O%C3%A1sis%20Brazil%2C%20estou%20a%20verificar%20a%20pr%C3%A9-visualiza%C3%A7%C3%A3o%20do%20site%20e%20a%20confirmar%20os%20pre%C3%A7os%20preliminares%20das%20massagens.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#27211D] text-[#FAF7F2] hover:bg-[#3E342B] px-4 py-2 text-xs uppercase tracking-wider font-medium flex items-center gap-2 shrink-0 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Confirmar Preços no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
