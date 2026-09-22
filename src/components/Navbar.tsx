import { useState } from 'react';
import { Phone, Calendar, MessageCircle, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-xl border-b border-white/10 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:scale-105 transition-all shadow-md">
            <Sparkles className="w-5 h-5 text-[#c5a059]" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wide text-white block leading-none">
              NEW YORK NAILS
            </span>
            <span className="text-[10px] font-semibold text-[#c5a059] tracking-[0.2em] uppercase block mt-1">
              STUDIO BY KEVIN • HORREM
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300 uppercase tracking-widest">
          <a href="#preise" className="hover:text-[#c5a059] transition-colors">Behandlungen & Preise</a>
          <a href="#experience" className="hover:text-[#c5a059] transition-colors">NYC Ritual</a>
          <a href="#rechner" className="hover:text-[#c5a059] transition-colors">Preiskalkulator</a>
          <a href="#instagram" className="hover:text-[#c5a059] transition-colors">Lookbook</a>
          <a href="#bewertungen" className="hover:text-[#c5a059] transition-colors">Kundenstimmen</a>
          <a href="#faq" className="hover:text-[#c5a059] transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:022739919337"
            aria-label="Anrufen bei New York Nails Horrem"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>02273 / 9919337</span>
          </a>

          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Nachricht an New York Nails Horrem"
            className="hidden md:flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 px-3.5 py-2 rounded-xl transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp VIP</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Termin bei New York Nails Horrem anfragen"
            className="bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0b0c10]" />
            <span>Termin Anfragen</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 mt-3 pt-4 pb-2 px-2 flex flex-col space-y-3 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a
            href="#preise"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            Behandlungen & Preise
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            NYC Ritual
          </a>
          <a
            href="#rechner"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            Preiskalkulator
          </a>
          <a
            href="#instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            Lookbook & Galerie
          </a>
          <a
            href="#bewertungen"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            Bewertungen
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#c5a059] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:022739919337"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              02273 / 9919337
            </a>
            <a
              href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Direktanfrage
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
