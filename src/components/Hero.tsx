import { Star, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, MapPin, Sparkles, Clock, Award } from 'lucide-react';
import heroImg from '../images/hero_nails.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const tickerItems = [
    'MANHATTAN NAIL PRECISION',
    'STUDIO BY KEVIN HORREM',
    'RUSSIAN CUTICLE CARE',
    'LIQUID CHROME & 3D ART',
    '4+ WOCHEN HALTBARKEIT',
    '500+ LUXUS-NUANCEN',
    '100% STERILE INSTRUMENTE',
    'TERMINE & WALK-IN'
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b0c10] text-slate-100 border-b border-white/10">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto min-h-[calc(90vh-5rem)] flex flex-col lg:flex-row items-stretch relative z-10">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-7/12 px-4 sm:px-6 lg:px-8 py-14 lg:py-24 flex flex-col justify-center">
          
          {/* Eyebrow Trust Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-lg w-fit mb-8 backdrop-blur-md">
            <div className="flex items-center gap-1 text-[#c5a059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
              ))}
            </div>
            <span className="text-xs font-sans font-semibold text-slate-200 tracking-wider uppercase">
              4.8 ★ (77+ Bewertungen) • Kerpen-Horrem
            </span>
          </div>

          {/* Main Headline with stately Playfair Display */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-normal leading-[1.18] mb-6">
            Manhattan Precision. <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] via-[#c5a059] to-[#dfb76c]">
              Studio by Kevin.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-sans font-normal">
            Erleben Sie makellose C-Kurven, schonende Russian Cuticle Care, Trend-Designs wie Glazed Chrome & Babyboomer sowie langanhaltende Neumodellage mit meisterhafter Präzision – direkt auf der Hauptstraße in Kerpen-Horrem.
          </p>

          {/* Key USPs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-10 max-w-xl font-sans">
            <div className="bg-[#12141c] border border-white/10 p-3.5 rounded-xl flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span className="text-xs font-medium text-slate-200">100% Sterile Tools</span>
            </div>
            <div className="bg-[#12141c] border border-white/10 p-3.5 rounded-xl flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span className="text-xs font-medium text-slate-200">4+ Wochen Halt</span>
            </div>
            <div className="bg-[#12141c] border border-white/10 p-3.5 rounded-xl flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span className="text-xs font-medium text-slate-200">500+ Nuancen</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              onClick={onOpenContact}
              className="bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-sans font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Termin bei Kevin anfragen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Mo–Fr 09:30–19:00 • Sa 09:30–17:00 • Hauptstr. 177–179, Horrem</span>
          </div>

        </div>

        {/* Right Image / Visual Column */}
        <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-full overflow-hidden bg-[#12141c]">
          <img
            src={heroImg}
            alt="New York Nails Horrem Meisterhafte Maniküre & Nageldesign by Kevin"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/20 to-transparent lg:bg-gradient-to-r lg:from-[#0b0c10] lg:via-transparent lg:to-transparent" />
          
          {/* Floating Studio Info Glass Card */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-xs bg-[#12141c]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center font-bold text-lg shrink-0 border border-[#c5a059]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-semibold text-white block text-sm leading-tight">Hauptstraße 177–179</span>
                <span className="text-xs text-slate-400 font-sans font-normal block mt-0.5">50169 Kerpen-Horrem</span>
              </div>
            </div>
            <div className="text-[11px] font-sans text-slate-300 pt-2.5 border-t border-white/10 flex items-center justify-between">
              <span className="text-[#c5a059] font-medium">Zentrale Lage</span>
              <a href="tel:022739919337" className="text-white hover:underline font-semibold">02273 / 9919337</a>
            </div>
          </div>

        </div>

      </div>

      {/* Infinite NYC Marquee Ribbon */}
      <div className="bg-[#12141c] border-t border-white/10 py-3.5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase font-semibold shrink-0">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
