import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';
import heroImg from '../assets/images/oasis_spa_hero_1793384039896.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onInquiryClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E8DDD2]">
          {/* Background Image with subtle warm overlay */}
          <div className="relative h-[480px] sm:h-[580px] lg:h-[640px] w-full">
            <img
              src={heroImg}
              alt="Oásis Brazil amazonian Relax therapy environment"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle multi-stop gradient for readable high-contrast luxury editorial look */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent sm:bg-gradient-to-r sm:from-[#FAF7F2]/90 sm:via-[#FAF7F2]/60 sm:to-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-6 sm:px-12 py-10">
              {/* Category & Location Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#DFCFC1] rounded-full text-xs font-medium text-[#736960] tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B68D5D]" />
                <span>{VERIFIED_BUSINESS_INFO.category} • Faro</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#27211D] font-normal leading-[1.12] mb-5">
                Find Serenity <br />
                <span className="italic font-light">in Every Touch</span>
              </h1>

              {/* Verified Subtitle */}
              <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed mb-8 max-w-xl font-light">
                Dedicated relaxation therapies in Faro designed to soothe accumulated physical tension and restore peaceful balance. Provided exclusively by prior appointment.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Hello%20O%C3%A1sis%20Brazil%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#27211D] hover:bg-[#3E342B] text-[#FAF7F2] px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span>Inquire via WhatsApp</span>
                </a>

                <button
                  onClick={onExploreClick}
                  className="border border-[#27211D] text-[#27211D] hover:bg-[#27211D] hover:text-[#FAF7F2] px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 cursor-pointer bg-[#FAF7F2]/80 backdrop-blur-sm"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Preliminary Rate Notice Pill */}
              <div className="mt-8 pt-4 border-t border-[#DFCFC1]/60 flex items-center gap-2 text-xs text-[#736960]">
                <ShieldCheck className="w-4 h-4 text-[#B68D5D] shrink-0" />
                <span>
                  Strictly verified WhatsApp Business info • Booking by Appointment Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
