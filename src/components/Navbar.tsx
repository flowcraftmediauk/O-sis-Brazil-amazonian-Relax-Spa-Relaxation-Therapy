import React, { useState } from 'react';
import { MessageCircle, Menu, X, User, LogOut, CheckCircle2, AlertCircle } from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signOut } from '../firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { VERIFIED_BUSINESS_INFO } from '../data/servicesData';

interface NavbarProps {
  currentUser: FirebaseUser | null;
  onOpenAudit: () => void;
  onOpenInquiry: (prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser, onOpenAudit, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setAuthLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error('Erro ao iniciar sessão:', err);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Erro ao terminar sessão:', err);
    }
  };

  const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Tabela Preliminar', href: '#pricing' },
    { label: 'Ambiente', href: '#gallery' },
    { label: 'Localização', href: '#location' },
    { label: 'Marcações', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD2] transition-all">
      {/* Top Client Preview Status Bar */}
      <div className="bg-[#27211D] text-[#FAF7F2] text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="font-medium tracking-wide">
            Pré-visualização do Website — Baseado Estritamente em Informações Oficiais
          </span>
        </div>
        <button
          onClick={onOpenAudit}
          className="text-amber-300 hover:text-amber-200 underline flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Informações em Falta (Perguntar ao Cliente)</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#27211D] leading-tight font-medium">
              Oásis Brazil
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#736960] font-medium -mt-0.5">
              Amazonian Relax • Faro
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#5C5248] hover:text-[#27211D] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Auth Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-[#F4EFEB] px-2.5 py-1.5 rounded-full border border-[#E8DDD2] text-xs">
                <div className="w-6 h-6 rounded-full bg-[#27211D] text-[#FAF7F2] flex items-center justify-center text-xs font-serif font-bold">
                  {currentUser.displayName ? currentUser.displayName[0] : 'U'}
                </div>
                <span className="max-w-[100px] truncate text-[#27211D] font-medium">
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  title="Terminar sessão"
                  className="text-[#736960] hover:text-red-700 ml-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                disabled={authLoading}
                className="text-xs px-3 py-1.5 border border-[#D5C7B8] rounded text-[#5C5248] hover:bg-[#F4EFEB] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <User className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>
            )}

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Ol%C3%A1%20O%C3%A1sis%20Brazil%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20e%20agendar%20uma%20sess%C3%A3o%20de%20relaxamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#27211D] text-[#FAF7F2] hover:bg-[#3E342B] px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
              <span>Agendar via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#27211D] hover:bg-[#F4EFEB] rounded-md transition-colors"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DDD2] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="space-y-3 pb-4 border-b border-[#E8DDD2]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider text-[#3E342B] font-medium hover:text-[#27211D]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Ol%C3%A1%20O%C3%A1sis%20Brazil%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20relaxamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#27211D] text-[#FAF7F2] py-2.5 px-4 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Agendar no WhatsApp ({VERIFIED_BUSINESS_INFO.phone})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-[#EFE8DE] text-[#27211D] py-2 px-3 text-xs tracking-wider font-medium flex items-center justify-center gap-2 border border-[#DFCFC1]"
            >
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Ver Lista de Informações em Falta</span>
            </button>

            {currentUser ? (
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#F4EFEB] rounded">
                <span>Sessão iniciada como {currentUser.displayName || currentUser.email}</span>
                <button onClick={handleLogout} className="text-red-700 font-medium">
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full py-2 border border-[#D5C7B8] text-xs font-medium text-[#27211D] flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Entrar com Google</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
