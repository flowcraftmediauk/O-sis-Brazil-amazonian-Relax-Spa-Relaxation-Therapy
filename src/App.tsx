import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from './firebase';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OverviewStrip } from './components/OverviewStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PriceConfirmationSection } from './components/PriceConfirmationSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentInquirySection } from './components/AppointmentInquirySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ClientAuditModal } from './components/ClientAuditModal';

export default function App() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectService = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiryClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#27211D] font-sans flex flex-col selection:bg-[#E8DDD2] selection:text-[#27211D]">
      {/* 1. Header & Navigation */}
      <Navbar
        currentUser={currentUser}
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenInquiry={handleSelectService}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onInquiryClick={handleInquiryClick}
        />

        {/* 4-Column Metric Overview Strip (as in design reference) */}
        <OverviewStrip />

        {/* 3. About the Business */}
        <AboutSection />

        {/* 4. Massage and Spa Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Service Prices (Preliminary Confirmation Schedule) */}
        <PriceConfirmationSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* 6. Photo Gallery / Atmosphere */}
        <GallerySection />

        {/* 7. Contact and WhatsApp Booking + Firestore Persistence */}
        <AppointmentInquirySection
          currentUser={currentUser}
          preselectedService={preselectedService}
        />

        {/* 8. Location in Faro, Portugal */}
        <LocationSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Interactive Missing Information Audit Modal */}
      <ClientAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
