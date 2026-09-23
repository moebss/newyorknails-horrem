import { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const [activeTab, setActiveTab] = useState<'modellage' | 'pflege' | 'extras'>('modellage');

  const categories = {
    modellage: [
      {
        name: "The Manhattan Full Set (Gel)",
        subtitle: "Premium Neumodellage mit Schablone / Tips",
        price: "ab 42 €",
        duration: "ca. 60 Min.",
        desc: "Präzise Nagelverlängerung mit optimaler C-Kurven-Architektur für perfekte Statik, splitterfreien Halt und makellosen Glanz.",
        highlights: ["Inkl. Formfeilen & Russian Nagelhautpflege", "Natürlich schlanker Aufbau", "Splitterfest für 4+ Wochen"],
        popular: true
      },
      {
        name: "SoHo Acryl & Dipping System",
        subtitle: "Maximale Belastbarkeit & Stabilität",
        price: "ab 42 €",
        duration: "ca. 60 Min.",
        desc: "Extrem bruchsicher für höchste Beanspruchung. Ideal für anspruchsvolle Längen und scharfkantige C-Kurven (Ballerina / Stiletto).",
        highlights: ["Höchste Stoßfestigkeit", "Exakte C-Kurven-Modellierung", "Versiegelung nach Wahl"]
      },
      {
        name: "Madison Avenue Refill",
        subtitle: "Auffüllen Gel / Acryl nach 3–4 Wochen",
        price: "ab 32 €",
        duration: "ca. 45–50 Min.",
        desc: "Sanftes Abtragen des Altmaterials, Erneuerung der Statik, Fräser-Cuticle-Care und frisches Farb- oder Gloss-Finish.",
        highlights: ["Schonende Fräsertechnik", "Glatte Übergänge ohne Absätze", "Erneuerung des Diamant-Glanzes"],
        popular: true
      },
      {
        name: "Upper East Babyboomer Fade",
        subtitle: "Zeitloser Nude-zu-Weiß Farbverlauf",
        price: "ab 38 €",
        duration: "ca. 60 Min.",
        desc: "Der ikonische Liebling: Ein nahtloser, seidiger Übergang von natürlichem Rosé in strahlendes Soft-White. Eleganz pur.",
        highlights: ["Perfekter Farbverlauf ohne Kanten", "Ultra-natürlicher Rauswuchs", "Beliebt für Business & Hochzeit"]
      }
    ],
    pflege: [
      {
        name: "Tribeca Shellac / UV-Lack",
        subtitle: "Naturnagelverstärkung mit Hochglanz",
        price: "ab 28 €",
        duration: "ca. 40 Min.",
        desc: "Schonende Veredelung Ihres Naturnagels mit kratzfestem UV-Color-Lack. Hält bis zu 3 Wochen ohne Absplittern.",
        highlights: ["Kein Anrauen des Naturnagels nötig", "Sofort trocken unter LED", "Glanz wie am ersten Tag"],
        popular: true
      },
      {
        name: "5th Avenue Spa Pediküre",
        subtitle: "Wellness-Fußbad, Peeling & Pflege",
        price: "ab 35 €",
        duration: "ca. 50 Min.",
        desc: "Verwöhnendes Fußbad, sanfte Hornhautentfernung, Nagelhautbehandlung, Formfeilen und entspannende Massage.",
        highlights: ["Wohltuendes Aroma-Fußbad", "Inkl. Intensiv-Pflegebalsam", "Optional mit Farbgel / Shellac (+10 €)"]
      },
      {
        name: "Clean Manicure Essentials",
        subtitle: "Professionelle Basispflege für Sie & Ihn",
        price: "ab 22 €",
        duration: "ca. 30 Min.",
        desc: "Schneiden, Feilen, Nagelhautbehandlung und Politur für natürlich gepflegte Hände im minimalistischen Clean-Girl Look.",
        highlights: ["Auch ideal für Herren", "Nährendes Bio-Nagelöl", "Gesunder Naturglanz"]
      }
    ],
    extras: [
      {
        name: "Liquid Chrome & Glazed Finish",
        subtitle: "Hailey Bieber & Mirror Chrome Pigmente",
        price: "ab 5 €",
        duration: "ca. 10 Min.",
        desc: "Hochglänzende Perlmutt- und Spiegeleffekte, die im Licht irisieren. Auf jede Grundfarbe auftragbar.",
        highlights: ["Trendsetter-Look aus New York", "Nahtlose Einbettung", "Extremer Glanzeffekt"]
      },
      {
        name: "Atelier Nail Art & Swirls",
        subtitle: "Handgemalte Details by Stylist Kevin",
        price: "ab 5 €",
        duration: "nach Aufwand",
        desc: "Filigrane Linien, minimalistische French-Variationen, Marmor-Effekte oder 3D-Akzente individuell für Sie kreiert.",
        highlights: ["Eigene Instagram-Vorlagen willkommen", "Präzise Pinselarbeit", "Exklusives Unikat"]
      },
      {
        name: "Express Emergency Repair",
        subtitle: "Soforthilfe pro Nagel",
        price: "ab 4 €",
        duration: "ca. 10 Min.",
        desc: "Schnelle Rettung bei abgebrochenem oder eingerissenem Nagel ohne lange Wartezeiten.",
        highlights: ["Spontaner Walk-in möglich", "Exakte Farbanpassung an Restmodellage"]
      }
    ]
  };

  return (
    <section id="preise" className="py-20 sm:py-24 bg-[#ffffff] text-[#111318] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b88e38]/10 border border-[#b88e38]/30 text-[#9b7428] text-xs font-sans font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manhattan Atelier Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111318] tracking-normal mb-4">
            Behandlungen & <span className="italic text-[#b88e38]">Preise</span>
          </h2>
          <p className="font-sans text-stone-600 text-base leading-relaxed">
            Transparente Festpreise ohne versteckte Aufschläge. Höchste Handwerkskunst, erstklassige Premium-Marken und meisterhafte Haltbarkeit.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-stone-100 rounded-2xl max-w-md mx-auto border border-stone-200">
            <button
              onClick={() => setActiveTab('modellage')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'modellage'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              Gel & Acryl
            </button>
            <button
              onClick={() => setActiveTab('pflege')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'pflege'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              Shellac & Spa
            </button>
            <button
              onClick={() => setActiveTab('extras')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'extras'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              Nail Art & Extras
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories[activeTab].map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-[#faf9f6] border rounded-2xl p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-[#b88e38]/60 hover:shadow-md ${
                item.popular ? 'border-[#b88e38]/50 ring-1 ring-[#b88e38]/20 bg-white' : 'border-stone-200'
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 right-6 bg-[#b88e38] text-white text-[10px] font-sans font-bold tracking-widest uppercase py-1 px-3 rounded-full shadow-xs">
                  Signature Look
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#111318] leading-snug">{item.name}</h3>
                    <span className="text-xs font-sans font-medium text-[#9b7428] block mt-1">{item.subtitle}</span>
                  </div>
                  <span className="font-sans font-bold text-2xl text-[#9b7428] shrink-0">{item.price}</span>
                </div>
                <span className="text-xs font-sans text-stone-400 block mb-4 mt-1">{item.duration}</span>
                <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6">{item.desc}</p>

                <ul className="space-y-2.5 mb-6 border-t border-stone-200/60 pt-4 font-sans">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-[#9b7428] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20h%C3%A4tte%20Interesse%20an:%20${encodeURIComponent(item.name)}%20(${item.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-sans font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 py-2.5 px-4 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Anfrage</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="p-2.5 text-stone-600 hover:text-black bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-colors cursor-pointer"
                  title="Wunschtermin anfragen"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 max-w-5xl mx-auto bg-[#faf9f6] border border-stone-200 rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center sm:text-left font-sans">
            <h4 className="font-display font-semibold text-lg sm:text-xl text-[#111318]">Eigene Design-Idee von Instagram oder Pinterest?</h4>
            <p className="text-sm text-stone-600">Senden Sie Kevin einfach Ihr Wunschfoto per WhatsApp. Er berät Sie sofort zu Machbarkeit, Nuancen und Dauer.</p>
          </div>
          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20habe%20ein%20Foto%20von%20meinem%20Wunsch-Design%20und%20m%C3%B6chte%20einen%20Termin%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b88e38] hover:bg-[#9b7428] text-white font-sans font-bold text-xs uppercase tracking-wider py-4 px-7 rounded-xl shrink-0 shadow-md hover:shadow-lg transition-all"
          >
            Design-Foto per WhatsApp senden
          </a>
        </div>

      </div>
    </section>
  );
}
