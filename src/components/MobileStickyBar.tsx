import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200 p-2.5 px-3 flex items-center gap-2 shadow-2xl font-sans">
      <a
        href="tel:022739919337"
        aria-label="New York Nails Horrem anrufen"
        className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
      >
        <Phone className="w-4 h-4 text-[#9b7428]" />
        <span>Anrufen</span>
      </a>

      <a
        href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp an New York Nails Horrem"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenContact}
        aria-label="Wunschtermin anfragen"
        className="flex-1 bg-[#b88e38] hover:bg-[#9b7428] text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Termin</span>
      </button>
    </div>
  );
}
