import { Sparkles, Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Studio Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-[#e0b7af]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-xl text-white">New York Nails</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Ihr Fachstudio für Nageldesign, Neumodellage, Auffüllen, Babyboomer und Fußpflege in Kerpen-Horrem.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.instagram.com/newyorknails_horrem/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profil von New York Nails Horrem"
              className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#b06758] flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <span className="font-serif font-bold text-white text-sm block mb-4">Navigation</span>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#preise" className="hover:text-white transition-colors">Behandlungen & Preise</a></li>
            <li><a href="#vorher-nachher" className="hover:text-white transition-colors">Vorher / Nachher</a></li>
            <li><a href="#rechner" className="hover:text-white transition-colors">Preiskalkulator</a></li>
            <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Galerie</a></li>
            <li><a href="#bewertungen" className="hover:text-white transition-colors">Kundenstimmen</a></li>
            <li><a href="#kontakt" className="hover:text-white transition-colors">Termin anfragen</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <span className="font-serif font-bold text-white text-sm block mb-4">Kontakt</span>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#e0b7af] shrink-0 mt-0.5" />
              <span>Hauptstraße 177-179<br />50169 Kerpen-Horrem</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#e0b7af] shrink-0" />
              <a href="tel:022739919337" className="hover:text-white">02273 / 9919337</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#b7e4c7] shrink-0" />
              <a href="https://wa.me/4917680211120" target="_blank" rel="noopener noreferrer" className="hover:text-white">0176 80211120 (WhatsApp)</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <span className="font-serif font-bold text-white text-sm block mb-4">Öffnungszeiten</span>
          <ul className="space-y-1.5 text-xs text-stone-400">
            <li className="flex justify-between">
              <span>Montag – Freitag:</span>
              <span className="text-white font-medium">09:30 – 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Samstag:</span>
              <span className="text-white font-medium">09:30 – 17:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sonntag & Feiertage:</span>
              <span className="text-stone-500">Geschlossen</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <span>© {new Date().getFullYear()} New York Nails Horrem (Inh. Kevin). Alle Rechte vorbehalten.</span>
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
