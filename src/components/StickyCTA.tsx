// Template Component — Website Generator v14.0
// Copy to project and replace {{PLACEHOLDERS}} with actual values

import React from 'react';
import { Phone, Send } from 'lucide-react';

export interface StickyCTAProps {
  phone: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ phone, ctaText, onCtaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] sm:hidden">
      <div className="flex p-3 gap-3">
        <a 
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 py-3 px-4 bg-slate-100 text-slate-900 font-medium rounded-xl hover:bg-slate-200 transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span>Anrufen</span>
        </a>
        <button 
          onClick={onCtaClick}
          className="flex flex-1 items-center justify-center gap-2 py-3 px-4 bg-[var(--color-accent)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity active:scale-95 shadow-md shadow-[var(--color-accent)]/20"
        >
          <Send className="w-5 h-5" />
          <span>{ctaText}</span>
        </button>
      </div>
    </div>
  );
};
