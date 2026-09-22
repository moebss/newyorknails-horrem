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
        subtitle: "Auffüllen Gel / Acryl nach 3-4 Wochen",
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
    <section id="preise" className="py-20 sm:py-24 bg-[#0b0c10] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manhattan Atelier Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Behandlungen & <span className="text-[#c5a059]">Preise</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Transparente Festpreise ohne versteckte Aufschläge. Höchste Handwerkskunst, erstklassige Premium-Marken und meisterhafte Haltbarkeit.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-[#12141c] rounded-2xl max-w-md mx-auto border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab('modellage')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'modellage'
                  ? 'bg-[#c5a059] text-[#0b0c10] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gel & Acryl
            </button>
            <button
              onClick={() => setActiveTab('pflege')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'pflege'
                  ? 'bg-[#c5a059] text-[#0b0c10] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Shellac & Spa
            </button>
            <button
              onClick={() => setActiveTab('extras')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'extras'
                  ? 'bg-[#c5a059] text-[#0b0c10] shadow-md'
                  : 'text-slate-400 hover:text-white'
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
              className={`relative bg-[#141722] border rounded-2xl p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-[#c5a059]/60 hover:bg-[#181d2b] ${
                item.popular ? 'border-[#c5a059]/40 ring-1 ring-[#c5a059]/20' : 'border-white/10'
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 right-6 bg-[#c5a059] text-[#0b0c10] text-[10px] font-extrabold tracking-widest uppercase py-1 px-3 rounded-full shadow-md">
                  Signature Look
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white leading-snug">{item.name}</h3>
                    <span className="text-xs font-medium text-[#c5a059] block mt-0.5">{item.subtitle}</span>
                  </div>
                  <span className="font-mono font-bold text-2xl text-[#c5a059] shrink-0">{item.price}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 block mb-4">{item.duration}</span>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{item.desc}</p>

                <ul className="space-y-2.5 mb-6 border-t border-white/10 pt-4">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20h%C3%A4tte%20Interesse%20an:%20${encodeURIComponent(item.name)}%20(${item.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 py-2.5 px-4 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Anfrage</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="p-2.5 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
                  title="Wunschtermin anfragen"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 max-w-5xl mx-auto bg-[#12141c] border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">Eigene Design-Idee von Instagram oder Pinterest?</h4>
            <p className="text-sm text-slate-400">Senden Sie Kevin einfach Ihr Wunschfoto per WhatsApp. Er berät Sie sofort zu Machbarkeit, Nuancen und Dauer.</p>
          </div>
          <a
            href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20habe%20ein%20Foto%20von%20meinem%20Wunsch-Design%20und%20m%C3%B6chte%20einen%20Termin%20anfragen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-xl shrink-0 shadow-lg transition-all"
          >
            Design-Foto per WhatsApp senden
          </a>
        </div>

      </div>
    </section>
  );
}
