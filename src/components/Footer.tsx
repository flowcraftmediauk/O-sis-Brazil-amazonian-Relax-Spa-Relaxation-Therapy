import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, ExternalLink, Youtube, Shield } from 'lucide-react';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-[#27211D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3E342B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight block">
              {VERIFIED_BUSINESS_INFO.name}
            </span>
            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed max-w-sm font-light">
              Relaxation therapy and dedicated spa sessions crafted to ease tension and restore wellness. Operating strictly by appointment in Faro, Portugal.
            </p>
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook Verified Link */}
              <a
                href={VERIFIED_BUSINESS_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-[#FAF7F2] transition-colors"
              >
                <span>Facebook: {VERIFIED_BUSINESS_INFO.facebook.name}</span>
                <ExternalLink className="w-3 h-3 text-[#FAF7F2]/70" />
              </a>

              {/* YouTube Incomplete Link Notice */}
              <div
                title="Full YouTube URL pending client confirmation (begins with https://youtube.com/@massage...)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-[#FAF7F2]/50 cursor-help"
              >
                <Youtube className="w-3.5 h-3.5 text-red-400/60" />
                <span>YouTube: @massage... (Pending link)</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-serif text-lg font-medium tracking-wide text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Sanctuary
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Massage & Spa Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Preliminary Price Schedule
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual Atmosphere
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location in Faro
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Booking & WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-serif text-lg font-medium tracking-wide text-white">
              Verified Contacts
            </h5>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B68D5D]" />
                <a href={`tel:${VERIFIED_BUSINESS_INFO.phoneClean}`} className="hover:underline">
                  {VERIFIED_BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B68D5D]" />
                <a href={`mailto:${VERIFIED_BUSINESS_INFO.email}`} className="hover:underline break-all">
                  {VERIFIED_BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B68D5D]" />
                <span>Faro, Portugal (Appointment only)</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <a
                  href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-400"
                >
                  WhatsApp Booking Line
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="text-[11px] text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                Missing Information — Client Clarification List
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
          <p>© {new Date().getFullYear()} Oásis Brazil amazonian Relax. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#B68D5D]" />
            <span>Built exclusively with verified business details • No assumed claims</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
