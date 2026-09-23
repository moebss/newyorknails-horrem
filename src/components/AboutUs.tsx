import { Clock, MapPin, Phone, MessageCircle, Navigation, ShieldCheck, Sparkles } from 'lucide-react';
import interiorImg from '../images/studio_interior.jpg';

interface AboutUsProps {
  onOpenContact: () => void;
}

export default function AboutUs({ onOpenContact }: AboutUsProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#ffffff] text-[#111318] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b88e38]/10 border border-[#b88e38]/30 text-[#9b7428] text-xs font-sans font-semibold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Studio by Kevin • Kerpen-Horrem</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111318] tracking-normal leading-tight">
              Manhattan Spirit. <br />
              <span className="italic text-[#b88e38]">Persönliche Meisterkunst.</span>
            </h2>

            <p className="font-sans text-stone-600 text-base leading-relaxed">
              Bei <strong>New York Nails</strong> auf der Hauptstraße 177–179 in Kerpen-Horrem erwartet Sie keine unpersönliche Fließbandarbeit, sondern individuelle Nagelarchitektur. Stylist Kevin vereint moderne internationale Trends – von Russian Manicure bis hin zu Liquid Chrome – mit handwerklicher Sorgfalt und lückenloser Sterilhygiene.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              <div className="bg-[#faf9f6] border border-stone-200 p-5 rounded-2xl">
                <span className="font-display font-semibold text-stone-900 block text-base">Adresse</span>
                <span className="text-xs text-stone-600 block mt-1.5 leading-relaxed">
                  Hauptstraße 177–179<br />50169 Kerpen-Horrem
                </span>
              </div>
              <div className="bg-[#faf9f6] border border-stone-200 p-5 rounded-2xl">
                <span className="font-display font-semibold text-stone-900 block text-base">Öffnungszeiten</span>
                <span className="text-xs text-stone-600 block mt-1.5 leading-relaxed">
                  Mo–Fr: 09:30–19:00 Uhr<br />Sa: 09:30–17:00 Uhr
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-sans">
              <a
                href="https://maps.google.com/?q=Hauptstraße+177+50169+Kerpen-Horrem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b88e38] hover:bg-[#9b7428] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps Route</span>
              </a>

              <a
                href="tel:022739919337"
                className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold py-3.5 px-6 rounded-xl border border-stone-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9b7428]" />
                <span>02273 / 9919337</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
            <img
              src={interiorImg}
              alt="New York Nails Horrem Studio Atmosphäre by Kevin"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 text-xs text-stone-700 font-sans shadow-md">
              <span className="text-[#9b7428] font-bold block mb-0.5">Atelier & Nail Bar Horrem</span>
              Komfortable Behandlungsplätze mit professioneller Staubabsaugung und modernster LED-Technik.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
