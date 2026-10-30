import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Clock,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType, signInWithPopup, googleProvider } from '../firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { VERIFIED_BUSINESS_INFO, PRELIMINARY_SERVICES } from '../data/servicesData';
import { AppointmentInquiry } from '../types';

interface AppointmentInquirySectionProps {
  currentUser: FirebaseUser | null;
  preselectedService?: string;
}

export const AppointmentInquirySection: React.FC<AppointmentInquirySectionProps> = ({
  currentUser,
  preselectedService,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [serviceName, setServiceName] = useState(
    preselectedService || PRELIMINARY_SERVICES[0].name
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // User inquiries history
  const [myInquiries, setMyInquiries] = useState<AppointmentInquiry[]>([]);

  useEffect(() => {
    if (preselectedService) {
      setServiceName(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.displayName && !clientName) {
        setClientName(currentUser.displayName);
      }
      if (currentUser.email && !clientEmail) {
        setClientEmail(currentUser.email);
      }
    }
  }, [currentUser]);

  // Fetch inquiries for signed-in user
  useEffect(() => {
    if (!currentUser) {
      setMyInquiries([]);
      return;
    }

    const path = 'appointment_inquiries';
    const q = query(
      collection(db, path),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: AppointmentInquiry[] = [];
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, ...(doc.data() as Omit<AppointmentInquiry, 'id'>) });
        });
        setMyInquiries(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, path);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!clientName.trim() || !clientPhone.trim() || !serviceName.trim()) {
      setErrorMessage('Please provide your name, phone number, and selected service.');
      return;
    }

    setSubmitting(true);
    const path = 'appointment_inquiries';

    try {
      const payload: Record<string, any> = {
        clientName: clientName.trim(),
        clientPhone: clientPhone.trim(),
        serviceName: serviceName.trim(),
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      if (clientEmail.trim()) {
        payload.clientEmail = clientEmail.trim();
      }
      if (preferredDate.trim()) {
        payload.preferredDate = preferredDate.trim();
      }
      if (notes.trim()) {
        payload.notes = notes.trim();
      }
      if (currentUser) {
        payload.userId = currentUser.uid;
      }

      await addDoc(collection(db, path), payload);

      setSubmittedSuccess(true);
      setNotes('');
    } catch (err) {
      console.error('Submission failed:', err);
      try {
        handleFirestoreError(err, OperationType.CREATE, path);
      } catch (e: any) {
        setErrorMessage('Unable to save inquiry. Please use direct WhatsApp for immediate booking.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] font-medium">
            Reservations & Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#27211D]">
            Book an Appointment
          </h2>
          <p className="text-sm text-[#736960] font-light leading-relaxed">
            All relaxation therapies are provided strictly by appointment. Reach out directly via WhatsApp for fastest confirmation, or submit an online request below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct WhatsApp & Verified Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="bg-[#27211D] text-[#FAF7F2] p-8 rounded-2xl shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl" />

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded-full text-[11px] font-medium text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Recommended & Fastest Booking</span>
                </div>
                <h3 className="font-serif text-2xl font-medium">
                  Instant WhatsApp Scheduling
                </h3>
                <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-light">
                  Message directly to check availability, confirm preliminary therapy details, and reserve your private time slot.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Hello%20O%C3%A1sis%20Brazil%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-lg font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat ({VERIFIED_BUSINESS_INFO.phone})</span>
                </a>

                <p className="text-[11px] text-[#FAF7F2]/60 text-center">
                  Verified International Line: {VERIFIED_BUSINESS_INFO.phone}
                </p>
              </div>
            </div>

            {/* Verified Contact Details Card */}
            <div className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#E8DDD2] space-y-5">
              <h4 className="font-serif text-lg font-medium text-[#27211D]">
                Verified Business Directory
              </h4>

              <div className="space-y-4 divide-y divide-[#E8DDD2]">
                <div className="flex items-start gap-3 pt-2">
                  <Phone className="w-4 h-4 text-[#B68D5D] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] text-[#8C8075] uppercase tracking-wider block">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href={`tel:${VERIFIED_BUSINESS_INFO.phoneClean}`}
                      className="text-sm font-medium text-[#27211D] hover:underline"
                    >
                      {VERIFIED_BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Mail className="w-4 h-4 text-[#B68D5D] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] text-[#8C8075] uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${VERIFIED_BUSINESS_INFO.email}`}
                      className="text-sm font-medium text-[#27211D] hover:underline break-all"
                    >
                      {VERIFIED_BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Clock className="w-4 h-4 text-[#B68D5D] shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] text-[#8C8075] uppercase tracking-wider block">
                      Schedule Policy
                    </span>
                    <p className="text-sm font-medium text-[#27211D]">
                      Strictly Appointment Only
                    </p>
                    <span className="text-[11px] text-[#8C8075]">
                      No walk-ins accepted without prior reservation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Inquiry Form (Firestore Persisted) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#E8DDD2] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8DDD2] mb-6 gap-3">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#27211D]">
                    Online Inquiry Request
                  </h3>
                  <p className="text-xs text-[#736960] mt-0.5">
                    Submissions are safely recorded for the therapist's review
                  </p>
                </div>

                {/* Google Sign-in prompt for user identification */}
                {!currentUser ? (
                  <button
                    type="button"
                    onClick={() => signInWithPopup(auth, googleProvider)}
                    className="text-xs text-[#5C5248] hover:text-[#27211D] border border-[#D5C7B8] px-3 py-1.5 rounded flex items-center gap-1.5 self-start sm:self-auto hover:bg-[#F4EFEB] transition-colors cursor-pointer font-medium"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Sign in with Google</span>
                  </button>
                ) : (
                  <div className="text-xs text-[#5C5248] flex items-center gap-1.5 self-start sm:self-auto bg-[#F4EFEB] px-2.5 py-1 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Identified as {currentUser.displayName || currentUser.email}</span>
                  </div>
                )}
              </div>

              {submittedSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-[#27211D]">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#736960] max-w-md mx-auto">
                    Thank you! Your inquiry for <strong>{serviceName}</strong> has been logged. You can also send this directly to WhatsApp to accelerate confirmation.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${VERIFIED_BUSINESS_INFO.phoneClean}?text=Hello%20O%C3%A1sis%20Brazil%2C%20I%20just%20submitted%20an%20online%20inquiry%20for%20${encodeURIComponent(serviceName)}%20under%20the%20name%20${encodeURIComponent(clientName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-5 py-2.5 rounded text-xs uppercase tracking-wider font-medium flex items-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmittedSuccess(false)}
                      className="text-xs text-[#5C5248] underline py-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-800 rounded flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Maria Silva"
                        className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="e.g. +351 912 345 678"
                        className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                        Selected Therapy Service *
                      </label>
                      <select
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors"
                      >
                        {PRELIMINARY_SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} ({s.duration} — {s.preliminaryPrice}*)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                        Preferred Date / Time Window
                      </label>
                      <input
                        type="text"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        placeholder="e.g. Next Tuesday afternoon"
                        className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. yourname@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5C5248] font-medium mb-1.5">
                      Notes or Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any particular focus areas (neck, shoulders) or questions for the therapist..."
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B8] focus:border-[#27211D] focus:ring-0 px-3.5 py-2.5 text-sm rounded outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#27211D] hover:bg-[#3E342B] text-[#FAF7F2] py-3.5 px-6 rounded text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting Inquiry...' : 'Submit Booking Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Display user's saved inquiries from Firestore */}
              {currentUser && myInquiries.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#E8DDD2]">
                  <h4 className="font-serif text-base font-medium text-[#27211D] mb-3">
                    Your Previous Inquiries (Logged in as {currentUser.displayName || currentUser.email})
                  </h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {myInquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-3 bg-[#F4EFEB] rounded border border-[#E8DDD2] text-xs flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-[#27211D]">{inq.serviceName}</p>
                          <p className="text-[11px] text-[#736960]">
                            {inq.preferredDate || 'Flexible timing'} • Logged{' '}
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">
                          {inq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
