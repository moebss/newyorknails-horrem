import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0b0c10]/95 backdrop-blur-xl border-t border-white/10 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
      <a
        href="tel:022739919337"
        aria-label="New York Nails Horrem anrufen"
        className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-white/10"
      >
        <Phone className="w-4 h-4 text-[#c5a059]" />
        <span>Anrufen</span>
      </a>

      <a
        href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp an New York Nails Horrem"
        className="flex-1 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenContact}
        aria-label="Wunschtermin anfragen"
        className="flex-1 bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#0b0c10]" />
        <span>Termin</span>
      </button>
    </div>
  );
}
