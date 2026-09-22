import { Clock, MapPin, Phone, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import interiorImg from '../images/studio_interior.jpg';

interface AboutUsProps {
  onOpenContact: () => void;
}

export default function AboutUs({ onOpenContact }: AboutUsProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#b06758]" />
              <span>Ihr Studio in Horrem</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Ihr Wohlfühlort für <br />
              <span className="italic font-light text-[#b06758]">gepflegte Hände & Füße</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Bei <strong>New York Nails</strong> steht der persönliche Service an erster Stelle. Stylist Kevin legt größten Wert auf individuelle Beratung, modernste Farbkollektionen und schonende Behandlungsmethoden für Ihren Naturnagel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#faf7f4] border border-[#ebdcd2] p-4 rounded-xl">
                <span className="font-serif font-bold text-stone-900 block text-sm">Adresse</span>
                <span className="text-xs text-stone-600 block mt-1">Hauptstraße 177-179<br />50169 Kerpen-Horrem</span>
              </div>
              <div className="bg-[#faf7f4] border border-[#ebdcd2] p-4 rounded-xl">
                <span className="font-serif font-bold text-stone-900 block text-sm">Öffnungszeiten</span>
                <span className="text-xs text-stone-600 block mt-1">Mo–Fr: 09:30–19:00 Uhr<br />Sa: 09:30–17:00 Uhr</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Hauptstraße+177+50169+Kerpen-Horrem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full shadow-sm transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#e0b7af]" />
                <span>Google Maps Route</span>
              </a>

              <a
                href="tel:022739919337"
                className="inline-flex items-center gap-2 bg-[#f3e7df] hover:bg-[#ead6c9] text-stone-900 text-xs font-semibold py-3 px-5 rounded-full border border-[#dfccbf] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#b06758]" />
                <span>02273 / 9919337</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl border border-[#ebdcd2] aspect-[4/3]">
            <img
              src={interiorImg}
              alt="New York Nails Horrem Studio Atmosphäre"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
