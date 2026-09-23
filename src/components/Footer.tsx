import { Sparkles, Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#111318] text-stone-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
        
        {/* Studio Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#b88e38]/20 border border-[#b88e38]/40 flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-xl text-white">New York Nails</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Ihr exklusives Manhattan Nail Studio & Behandlungs-Atelier für langlebige Neumodellage, Russian Cuticle Care, Chrome Trends und Pediküre in Kerpen-Horrem.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/newyorknails_horrem/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profil von New York Nails Horrem"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#b88e38] hover:text-white border border-white/10 flex items-center justify-center text-stone-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <span className="font-display font-semibold text-white text-sm block mb-4 uppercase tracking-wider">Navigation</span>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li><a href="#preise" className="hover:text-[#d4af37] transition-colors">Preise & Behandlungen</a></li>
            <li><a href="#experience" className="hover:text-[#d4af37] transition-colors">Studio & Standards</a></li>
            <li><a href="#instagram" className="hover:text-[#d4af37] transition-colors">Lookbook & Galerie</a></li>
            <li><a href="#bewertungen" className="hover:text-[#d4af37] transition-colors">Kundenstimmen</a></li>
            <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">Häufige Fragen (FAQ)</a></li>
            <li><a href="#kontakt" className="hover:text-[#d4af37] transition-colors">Termin anfragen</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <span className="font-display font-semibold text-white text-sm block mb-4 uppercase tracking-wider">Kontakt</span>
          <ul className="space-y-3 text-xs text-stone-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Hauptstraße 177–179<br />50169 Kerpen-Horrem</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <a href="tel:022739919337" className="hover:text-white transition-colors">02273 / 9919337</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://wa.me/4917680211120" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">0176 80211120 (WhatsApp)</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <span className="font-display font-semibold text-white text-sm block mb-4 uppercase tracking-wider">Öffnungszeiten</span>
          <ul className="space-y-2 text-xs text-stone-400">
            <li className="flex justify-between">
              <span>Mo – Fr:</span>
              <span className="text-white font-medium">09:30 – 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Samstag:</span>
              <span className="text-white font-medium">09:30 – 17:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sonntag:</span>
              <span className="text-stone-500">Geschlossen</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <span>© {new Date().getFullYear()} New York Nails Horrem (Studio by Kevin). Alle Rechte vorbehalten.</span>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onOpenLegal('impressum')}
            className="hover:text-stone-300 transition-colors cursor-pointer"
          >
            Impressum
          </button>
          <button
            onClick={() => onOpenLegal('datenschutz')}
            className="hover:text-stone-300 transition-colors cursor-pointer"
          >
            Datenschutz
          </button>
        </div>
      </div>
    </footer>
  );
}
