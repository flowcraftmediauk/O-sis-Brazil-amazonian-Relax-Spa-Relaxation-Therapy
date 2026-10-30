import React from 'react';
import { MapPin, Navigation, Calendar, ShieldCheck } from 'lucide-react';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F4EFEB]/50 border-t border-[#E8DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
            Algarve Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            Located in Faro, Portugal
          </h2>
          <p className="text-sm text-[#736960] font-light leading-relaxed">
            Conveniently situated in the historic coastal city of Faro in the southern Algarve region.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-2xl border border-[#E8DDD2] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
          {/* Left Info Panel */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEB] rounded-full text-xs font-medium text-[#736960] border border-[#E8DDD2]">
                <MapPin className="w-3.5 h-3.5 text-[#B68D5D]" />
                <span>Verified City: Faro, Portugal</span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#27211D]">
                Private Studio Setting
              </h3>

              <p className="text-xs sm:text-sm text-[#5C5248] leading-relaxed font-light">
                To guarantee maximum peace, privacy, and personal attention for every guest, treatments are conducted exclusively on an appointment-only schedule.
              </p>

              <div className="p-4 bg-[#F4EFEB] rounded-xl border border-[#E8DDD2] space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#27211D]">
                  <Calendar className="w-4 h-4 text-[#B68D5D]" />
                  <span>Strict Appointment Policy</span>
                </div>
                <p className="text-xs text-[#736960] leading-relaxed">
                  Exact studio door number and access directions are shared directly with confirmed clients upon booking reservation.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD2]">
              <span className="text-[11px] text-[#8C8075] uppercase tracking-wider block mb-1">
                Pending Client Clarification:
              </span>
              <p className="text-xs text-[#5C5248]">
                Exact street address and postal code will be linked to an interactive Google Maps pin as soon as provided by the client.
              </p>
            </div>
          </div>

          {/* Right Visual Map Presentation */}
          <div className="relative min-h-[300px] bg-[#EFE8DE] flex items-center justify-center p-8 border-t md:border-t-0 md:border-l border-[#E8DDD2]">
            <div className="text-center space-y-3 max-w-xs">
              <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#DFCFC1] mx-auto flex items-center justify-center shadow-sm">
                <Navigation className="w-6 h-6 text-[#B68D5D] animate-pulse" />
              </div>
              <h4 className="font-serif text-xl font-medium text-[#27211D]">
                Faro, Algarve
              </h4>
              <p className="text-xs text-[#736960] leading-relaxed">
                Portugal's southern gateway of sunshine, ocean air, and serene rejuvenation.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Hello%20O%C3%A1sis%20Brazil%2C%20what%20is%20the%20exact%20location%20address%20in%20Faro%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs uppercase tracking-wider font-medium text-[#27211D] underline hover:text-[#B68D5D] transition-colors"
                >
                  Request Exact Studio Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
