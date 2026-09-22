import { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import imgNeumodellage from '../images/nail_neumodellage.jpg';
import imgBabyboomer from '../images/nail_babyboomer.jpg';
import imgPortfolio from '../images/portfolio_nails.jpg';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const [activeTab, setActiveTab] = useState<'modellage' | 'pflege' | 'extras'>('modellage');

  const categories = {
    modellage: [
      {
        name: "Neumodellage Gel",
        price: "ab 42 €",
        duration: "ca. 60 Min.",
        desc: "Nagelverlängerung mit Schablone oder Tips. Perfekte Stabilität, Formung und langanhaltender Glanz.",
        highlights: ["Inkl. Formfeilen & Nagelhautpflege", "Natürlich dünner Aufbau", "Splitterfest für 4+ Wochen"],
        popular: true
      },
      {
        name: "Neumodellage Acryl / Pulver",
        price: "ab 42 €",
        duration: "ca. 60 Min.",
        desc: "Extrem widerstandsfähig für stark beanspruchte Hände. Ideal für lange Nagellängen.",
        highlights: ["Höchste Bruchsicherheit", "Präzise Modellierung", "Versiegelung nach Wahl"]
      },
      {
        name: "Auffüllen / Refill (Gel / Acryl)",
        price: "ab 32 €",
        duration: "ca. 45-50 Min.",
        desc: "Ausgleich des Herauswuchses nach 3–4 Wochen inklusive Fräser-Pflege und Farbauffrischung.",
        highlights: ["Altes Material sanft abtragen", "Perfekte C-Kurve erneuern", "Glatte Übergänge"],
        popular: true
      },
      {
        name: "Babyboomer & French Ombré",
        price: "ab 38 €",
        duration: "ca. 60 Min.",
        desc: "Der zeitlose Liebling in Horrem: Sanfter, nahtloser Farbverlauf von zartem Nude-Rosé zu Weiß.",
        highlights: ["Elegantes Alltags- & Hochzeitsdesign", "Kein harter Ansatz", "Sehr gepflegter Look"]
      }
    ],
    pflege: [
      {
        name: "Shellac / UV-Lack Naturnagel",
        price: "ab 28 €",
        duration: "ca. 40 Min.",
        desc: "Schonende Naturnagelverstärkung mit kratzfestem UV-Color-Lack. Hält bis zu 3 Wochen ohne Absplittern.",
        highlights: ["Ohne Verlängerung", "Sofort trocken unter LED", "Glanz wie am ersten Tag"],
        popular: true
      },
      {
        name: "Wellness Pediküre mit Fußbad",
        price: "ab 35 €",
        duration: "ca. 50 Min.",
        desc: "Entspannendes Fußbad, Hornhautentfernung, Nagelhautbehandlung und Formfeilen.",
        highlights: ["Wohltuende Fußmassage", "Inkl. Pflegecreme", "Optional mit langanhaltendem Farbgel (+10 €)"]
      },
      {
        name: "Klassische Maniküre",
        price: "ab 22 €",
        duration: "ca. 30 Min.",
        desc: "Professionelle Basispflege für Sie & Ihn. Schneiden, Formen, Nagelhautpflege und Polieren.",
        highlights: ["Auch für Herren geeignet", "Nährstoffreiches Nagelöl", "Natürlicher Glanz"]
      }
    ],
    extras: [
      {
        name: "Individuelle Nail Art & Handmalerei",
        price: "ab 5 €",
        duration: "nach Aufwand",
        desc: "Filigrane Linien, Blumen, Swirls oder geometrische Muster handgemalt von Stylist Kevin.",
        highlights: ["Eigene Instagram-Ideen willkommen", "Präzise Pinselarbeit", "Einzigartiges Unikat"]
      },
      {
        name: "Chrome, Glitzer & Steinchen (Swarovski)",
        price: "ab 5 €",
        duration: "nach Aufwand",
        desc: "Spiegeleffekte (Hailey Bieber Glazed Donut Look), Glitzer-Fading oder funkelnde Kristallsteine.",
        highlights: ["Hochglanz-Chrome Pigmente", "Sicher versiegelt", "Trendige Akzentnägel"]
      },
      {
        name: "Express Reparatur (pro Nagel)",
        price: "ab 4 €",
        duration: "ca. 10 Min.",
        desc: "Schnelle Soforthilfe bei abgebrochenem oder gespaltenem Nagel.",
        highlights: ["Spontan ohne lange Wartezeit", "Exakte Anpassung an restliche Nägel"]
      }
    ]
  };

  return (
    <section id="preise" className="py-16 sm:py-20 bg-[#faf7f4] border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#b06758]" />
            <span>Transparente Menü-Übersicht</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Behandlungen & Preise
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Faire, ehrliche Festpreise ohne versteckte Kosten. Höchste Handwerkskunst und erstklassige Markenprodukte für langanhaltende Schönheit.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-[#f3e7df] rounded-full max-w-md mx-auto border border-[#dfccbf]">
            <button
              onClick={() => setActiveTab('modellage')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'modellage'
                  ? 'bg-stone-900 text-stone-50 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Gel & Acryl
            </button>
            <button
              onClick={() => setActiveTab('pflege')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'pflege'
                  ? 'bg-stone-900 text-stone-50 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Shellac & Pflege
            </button>
            <button
              onClick={() => setActiveTab('extras')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'extras'
                  ? 'bg-stone-900 text-stone-50 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Nail Art & Extras
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeTab].map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-white border rounded-2xl p-6 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                item.popular ? 'border-[#b06758] ring-1 ring-[#b06758]/20' : 'border-[#ebdcd2]'
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 right-6 bg-[#b06758] text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full shadow-xs">
                  Beliebt
                </span>
              )}

              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">{item.name}</h3>
                  <span className="font-serif font-bold text-xl text-[#a55f52] shrink-0">{item.price}</span>
                </div>
                <span className="text-[11px] font-medium text-stone-400 block mb-3">{item.duration}</span>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{item.desc}</p>

                <ul className="space-y-2 mb-6 border-t border-[#f5ede7] pt-4">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#f5ede7] flex items-center justify-between gap-2">
                <a
                  href={`https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20h%C3%A4tte%20Interesse%20an:%20${encodeURIComponent(item.name)}%20(${item.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1b4332] bg-[#d8f3dc] hover:bg-[#b7e4c7] py-2 px-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  <span>WhatsApp Anfrage</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="p-2 text-stone-600 hover:text-stone-900 hover:bg-[#f3e7df] rounded-xl transition-colors cursor-pointer"
                  title="Wunschtermin anfragen"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#f3e7df] border border-[#dfccbf] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg text-stone-900">Eigene Design-Idee von Instagram oder Pinterest?</h4>
            <p className="text-sm text-stone-600">Bringen Sie einfach Ihr Wunschfoto mit. Kevin berät Sie direkt vor Ort zu Machbarkeit und Farbnuancen.</p>
          </div>
          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20habe%20ein%20Foto%20von%20meinem%20Wunsch-Design%20und%20m%C3%B6chte%20einen%20Termin%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shrink-0 shadow-sm transition-all"
          >
            Design-Foto per WhatsApp senden
          </a>
        </div>

      </div>
    </section>
  );
}
