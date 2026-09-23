import { useState } from 'react';
import { Phone, Calendar, MessageCircle, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-stone-200/80 py-3.5 px-4 sm:px-8 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#b88e38]/10 border border-[#b88e38]/30 flex items-center justify-center text-[#9b7428] group-hover:scale-105 group-hover:bg-[#b88e38] group-hover:text-white transition-all shadow-xs shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-[#111318] block leading-none">
              New York Nails
            </span>
            <span className="text-[9px] font-sans font-semibold text-[#9b7428] tracking-[0.22em] uppercase block mt-1">
              Studio by Kevin • Horrem
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) - Clean, balanced & sorted */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-sans font-semibold text-stone-600 uppercase tracking-wider">
          <a href="#preise" className="hover:text-[#9b7428] transition-colors">Preise</a>
          <a href="#experience" className="hover:text-[#9b7428] transition-colors">Studio</a>
          <a href="#instagram" className="hover:text-[#9b7428] transition-colors">Lookbook</a>
          <a href="#bewertungen" className="hover:text-[#9b7428] transition-colors">Bewertungen</a>
          <a href="#faq" className="hover:text-[#9b7428] transition-colors">FAQ</a>
          <a href="#kontakt" className="hover:text-[#9b7428] transition-colors">Kontakt</a>
        </nav>

        {/* Action Elements - Harmonized luxury hierarchy */}
        <div className="flex items-center gap-3">
          
          {/* Direct Phone Link */}
          <a
            href="tel:022739919337"
            aria-label="Anrufen bei New York Nails Horrem"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-sans font-medium text-stone-600 hover:text-[#9b7428] transition-colors py-1.5 px-2.5 rounded-lg hover:bg-stone-100/80"
          >
            <Phone className="w-3.5 h-3.5 text-[#9b7428]" />
            <span>02273 / 9919337</span>
          </a>

          <span className="hidden xl:inline-block w-px h-4 bg-stone-200" />

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Nachricht an New York Nails Horrem"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-700 hover:text-emerald-700 bg-stone-100/80 hover:bg-emerald-50 border border-stone-200/90 hover:border-emerald-200 px-3 py-2 rounded-xl transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Standout Primary CTA Button */}
          <button
            onClick={onOpenContact}
            aria-label="Termin bei New York Nails Horrem anfragen"
            className="bg-[#b88e38] hover:bg-[#9b7428] text-white font-sans font-bold text-xs px-4 sm:px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Termin Anfragen</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-black hover:bg-stone-100 border border-stone-200"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 mt-3 pt-4 pb-3 px-3 flex flex-col space-y-2 text-xs uppercase tracking-wider font-sans font-medium text-stone-700 bg-white rounded-2xl shadow-lg border border-stone-100">
          <a
            href="#preise"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Preise & Behandlungen</span>
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Studio & Standards</span>
          </a>
          <a
            href="#instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Lookbook & Galerie</span>
          </a>
          <a
            href="#bewertungen"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Kundenbewertungen</span>
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Häufige Fragen (FAQ)</span>
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#9b7428] py-2.5 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
          >
            <span>Kontakt & Anfahrt</span>
          </a>
          
          <div className="pt-3 border-t border-stone-200/80 flex flex-col gap-2">
            <a
              href="tel:022739919337"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-100 text-stone-900 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#9b7428]" />
              02273 / 9919337
            </a>
            <a
              href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              WhatsApp Direktanfrage
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
