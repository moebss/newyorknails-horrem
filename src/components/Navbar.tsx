import { Phone, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#faf7f4]/95 backdrop-blur-md border-b border-[#ebdcd2] py-3.5 px-4 sm:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#f3e7df] border border-[#dfccbf] flex items-center justify-center text-stone-900 font-serif font-bold text-lg shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <Sparkles className="w-5 h-5 text-[#b06758]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-tight text-stone-900 block leading-none">New York Nails</span>
            <span className="text-[10px] font-semibold text-[#a55f52] tracking-widest uppercase block mt-1">Studio by Kevin • Horrem</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-stone-600 uppercase tracking-wider">
          <a href="#preise" className="hover:text-stone-900 transition-colors">Behandlungen & Preise</a>
          <a href="#vorher-nachher" className="hover:text-stone-900 transition-colors">Vorher / Nachher</a>
          <a href="#rechner" className="hover:text-stone-900 transition-colors">Preiskalkulator</a>
          <a href="#instagram" className="hover:text-stone-900 transition-colors">Instagram Looks</a>
          <a href="#bewertungen" className="hover:text-stone-900 transition-colors">Bewertungen</a>
          <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:022739919337"
            aria-label="Anrufen bei New York Nails Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-stone-800 bg-[#f3e7df] hover:bg-[#ebd9cd] border border-[#dfccbf] px-3.5 py-2 rounded-full transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#b06758]" />
            <span>02273 / 9919337</span>
          </a>

          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Nachricht an New York Nails Horrem"
            className="hidden md:flex items-center gap-2 text-xs font-bold text-[#1b4332] bg-[#d8f3dc] hover:bg-[#b7e4c7] border border-[#95d5b2] px-3.5 py-2 rounded-full transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei New York Nails Horrem anfragen"
            className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs px-5 py-2.5 rounded-full shadow-sm transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-[#e0b7af]" />
            <span>Termin Anfragen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
