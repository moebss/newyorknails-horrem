import { Star, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#faf7f4] border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content Column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Trust Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full shadow-xs w-fit mb-6">
            <div className="flex items-center gap-1 text-[#d97706]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-800 tracking-wider uppercase">
              4.8 ★ (77+ Bewertungen) • Kerpen-Horrem
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.12] mb-6">
            Perfekte Nägel & <span className="italic font-light text-[#b06758]">strahlende Eleganz</span> in Horrem.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-stone-600 mb-8 max-w-xl font-normal leading-relaxed">
            Willkommen bei <strong className="text-stone-900 font-semibold">New York Nails by Kevin</strong> in der Hauptstraße 177-179. Ob makellose Neumodellage (Gel & Acryl), langanhaltender Babyboomer, zarter Shellac oder trendiges Nail Art – wir setzen Ihre Wünsche meisterhaft um.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-base px-8 py-4 rounded-full shadow-md transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 text-[#b7e4c7]" />
              <span>WhatsApp Sofort-Termin</span>
            </a>

            <button
              onClick={onOpenContact}
              className="bg-[#f3e7df] hover:bg-[#ead6c9] text-stone-900 font-bold text-base px-6 py-4 rounded-full border border-[#dfccbf] shadow-xs transition-colors text-center flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>Termin-Anfrage</span>
              <ArrowRight className="w-4 h-4 text-[#b06758]" />
            </button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-stone-700 border-t border-[#ebdcd2] pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>Mit & ohne Termin</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>Höchste Hygiene & Sterilität</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>4+ Wochen Haltbarkeit</span>
            </div>
          </div>

        </div>

        {/* Right 50% Image Column */}
        <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-full overflow-hidden bg-[#f3e7df]">
          <img
            src={heroImg}
            alt="New York Nails Horrem Meisterhafte Maniküre & Nageldesign"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f4] via-transparent to-transparent lg:hidden" />
          
          {/* Floating Studio Badge */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-xs bg-[#faf7f4]/95 backdrop-blur-md p-4 rounded-2xl border border-[#ebdcd2] shadow-xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f3e7df] text-[#b06758] flex items-center justify-center font-bold text-lg shrink-0 border border-[#dfccbf]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-stone-900 block text-sm leading-tight">Hauptstraße 177-179</span>
                <span className="text-xs text-stone-500 font-medium block">50169 Kerpen-Horrem • Zentral</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
