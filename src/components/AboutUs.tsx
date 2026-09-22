import { Clock, MapPin, Phone, MessageCircle, Navigation, ShieldCheck, Sparkles } from 'lucide-react';
import interiorImg from '../images/studio_interior.jpg';

interface AboutUsProps {
  onOpenContact: () => void;
}

export default function AboutUs({ onOpenContact }: AboutUsProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#0b0c10] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Studio by Kevin • Kerpen-Horrem</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Manhattan Spirit. <br />
              <span className="text-[#c5a059]">Persönliche Meisterkunst.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Bei <strong>New York Nails</strong> auf der Hauptstraße 177–179 in Kerpen-Horrem erwartet Sie keine unpersönliche Fließbandarbeit, sondern individuelle Nagelarchitektur. Stylist Kevin vereint moderne internationale Trends – von Russian Manicure bis hin zu Liquid Chrome – mit handwerklicher Sorgfalt und lückenloser Sterilhygiene.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#141722] border border-white/10 p-5 rounded-2xl">
                <span className="font-display font-bold text-white block text-sm">Adresse</span>
                <span className="text-xs text-slate-400 block mt-1.5 leading-relaxed">
                  Hauptstraße 177–179<br />50169 Kerpen-Horrem
                </span>
              </div>
              <div className="bg-[#141722] border border-white/10 p-5 rounded-2xl">
                <span className="font-display font-bold text-white block text-sm">Öffnungszeiten</span>
                <span className="text-xs text-slate-400 block mt-1.5 leading-relaxed">
                  Mo–Fr: 09:30–19:00 Uhr<br />Sa: 09:30–17:00 Uhr
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Hauptstraße+177+50169+Kerpen-Horrem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] text-xs font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps Route</span>
              </a>

              <a
                href="tel:022739919337"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold py-3.5 px-6 rounded-xl border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>02273 / 9919337</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-[#141722]">
            <img
              src={interiorImg}
              alt="New York Nails Horrem Studio Atmosphäre by Kevin"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0b0c10]/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
              <span className="text-[#c5a059] font-bold block mb-0.5">Atelier & Nail Bar Horrem</span>
              Komfortable Behandlungsplätze mit professioneller Staubabsaugung und modernster LED-Technik.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
