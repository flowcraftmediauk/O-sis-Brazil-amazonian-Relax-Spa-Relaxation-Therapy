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
            Transparent Audit Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            Preliminary Price Schedule
          </h2>
          <p className="text-sm text-[#736960] font-light leading-relaxed">
            The rates below are transcribed verbatim from WhatsApp promotional flyers. They remain explicitly classified as <em>Preliminary</em> pending final verification from the client.
          </p>
        </div>

        {/* Pricing Comparison Table Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8DDD2] overflow-hidden shadow-sm">
          <div className="p-6 bg-[#F4EFEB] border-b border-[#E8DDD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-medium text-[#27211D]">
                Promotional Catalog Verification Status
              </h3>
              <p className="text-xs text-[#736960]">
                Extracted from client WhatsApp profile images • 4 services identified
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-xs text-[#27211D] font-medium bg-[#FAF7F2] border border-[#DFCFC1] px-3.5 py-2 rounded-lg hover:bg-white transition-colors cursor-pointer self-start sm:self-auto"
            >
              <FileText className="w-3.5 h-3.5 text-[#B68D5D]" />
              <span>View Client Question #1</span>
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
                    {s.name} • {s.description}
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
                      Needs Client Confirmation
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#736960] max-w-xl">
              *Notice to Client: Once confirmed, these tags will be updated to finalized published prices and unlocked across the automated booking system.
            </p>
            <a
              href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Hello%20O%C3%A1sis%20Brazil%2C%20I%20am%20reviewing%20the%20website%20preview%20and%20confirming%20the%20preliminary%20massage%20prices.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#27211D] text-[#FAF7F2] hover:bg-[#3E342B] px-4 py-2 text-xs uppercase tracking-wider font-medium flex items-center gap-2 shrink-0 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Confirm Rates on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
