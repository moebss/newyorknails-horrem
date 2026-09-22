import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Benötige ich vorab einen Termin bei New York Nails Horrem?",
      a: "Sie können sowohl spontan ohne Termin vorbeikommen als auch vorab Ihren Wunschtermin telefonisch unter 02273 / 9919337 oder per WhatsApp unter 0176 80211120 reservieren. Mit Voranmeldung vermeiden Sie etwaige Wartezeiten zu beliebten Stoßzeiten."
    },
    {
      q: "Wie lange hält eine Modellage oder ein Auffüllen?",
      a: "Unsere professionellen Gel- und Acrylmodellagen halten in der Regel 4 bis 5 Wochen absolut zuverlässig und splitterfrei. Wir empfehlen ein Auffüllen nach circa 3 bis 4 Wochen, um den gesunden Naturnagel zu schonen."
    },
    {
      q: "Kann ich ein eigenes Design von Instagram oder Pinterest mitbringen?",
      a: "Absolut! Kevin setzt individuelle Nail Art, Fotos von Instagram, Farbkombinationen oder spezielle Formen (Mandel, Stiletto, Ballerina, Coffin) detailgetreu und mit großer Präzision um."
    },
    {
      q: "Wo befindet sich das Studio und gibt es Parkplätze?",
      a: "Das Studio liegt verkehrsgünstig direkt auf der Hauptstraße 177–179 in 50169 Kerpen-Horrem. Kostenfreie und bequeme Parkmöglichkeiten finden Sie entlang der Hauptstraße und in den benachbarten Seitenstraßen."
    },
    {
      q: "Welche Zahlungsmöglichkeiten werden akzeptiert?",
      a: "Wir akzeptieren bequeme Barzahlung vor Ort im Studio."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#0e1017] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Fragen & <span className="text-[#c5a059]">Antworten</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Alles Wichtige rund um Ihren Besuch bei New York Nails Horrem auf einen Blick.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#141722] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-white text-base sm:text-lg">
                    {f.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a059] shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#c5a059] text-[#0b0c10]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
