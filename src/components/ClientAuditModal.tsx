import React, { useState } from 'react';
import { X, HelpCircle, Check, Copy, AlertTriangle, MessageSquare, Send } from 'lucide-react';
import { MISSING_CLIENT_QUESTIONS, VERIFIED_BUSINESS_INFO } from '../data/servicesData';

interface ClientAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientAuditModal: React.FC<ClientAuditModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-3xl w-full border border-[#DFCFC1] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#27211D] text-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium tracking-wide">
                Information Missing — Ask the Client
              </h3>
              <p className="text-xs text-[#FAF7F2]/70 mt-0.5">
                Client Review Checklist • Handled strictly one question at a time
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#FAF7F2]/70 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Priority Focus: Question #1 */}
        <div className="p-5 bg-amber-50 border-b border-amber-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                Active Question #1 to Ask Now
              </span>
              <h4 className="font-serif text-lg font-medium text-amber-950 mt-1.5">
                {MISSING_CLIENT_QUESTIONS[0].title}
              </h4>
              <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                "{MISSING_CLIENT_QUESTIONS[0].questionForClient}"
              </p>
            </div>
            <button
              onClick={() => handleCopy(MISSING_CLIENT_QUESTIONS[0].id, MISSING_CLIENT_QUESTIONS[0].questionForClient)}
              className="shrink-0 bg-[#27211D] text-[#FAF7F2] hover:bg-[#3E342B] px-3.5 py-2 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedId === MISSING_CLIENT_QUESTIONS[0].id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Question</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Full Missing Details List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <p className="text-xs text-[#736960] leading-relaxed">
            Per strict project instructions, we never invent client business information or fill blanks with assumptions. Below is the complete catalogue of items to clarify sequentially with the client:
          </p>

          <div className="divide-y divide-[#E8DDD2] border border-[#E8DDD2] rounded-xl overflow-hidden bg-white">
            {MISSING_CLIENT_QUESTIONS.map((item, index) => (
              <div key={item.id} className="p-4 hover:bg-[#FAF7F2] transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#27211D]">
                        #{index + 1}. {item.title}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          item.currentStatus === 'Missing'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : item.currentStatus === 'Clarification Needed'
                            ? 'bg-purple-100 text-purple-800 border border-purple-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {item.currentStatus}
                      </span>
                    </div>

                    <p className="text-xs text-[#736960]">
                      {item.detail}
                    </p>

                    <p className="text-xs text-[#27211D] italic bg-[#FAF7F2] p-2 rounded border border-[#E8DDD2]/60 mt-2">
                      "{item.questionForClient}"
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.questionForClient)}
                    title="Copy question text"
                    className="shrink-0 p-2 text-[#736960] hover:text-[#27211D] hover:bg-[#F4EFEB] rounded border border-[#E8DDD2] transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E8DDD2] flex items-center justify-between text-xs text-[#736960]">
          <span>Ask only ONE question at a time. The preview website updates upon confirmation.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#27211D] text-[#FAF7F2] rounded text-xs uppercase tracking-wider font-medium hover:bg-[#3E342B] cursor-pointer"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
