import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Benötige ich vorab einen Termin bei New York Nails Horrem?",
      a: "Sie können sowohl spontan ohne Termin vorbeikommen als auch vorab Ihren Wunschtermin telefonisch unter 02273/9919337 oder per WhatsApp unter 0176 80211120 reservieren. Mit Voranmeldung vermeiden Sie etwaige Wartezeiten zu Stoßzeiten."
    },
    {
      q: "Wie lange hält eine Neumodellage oder ein Auffüllen?",
      a: "Unsere professionellen Gel- und Acrylmodellagen halten in der Regel 3 bis 5 Wochen zuverlässig und splitterfrei. Wir empfehlen ein Auffüllen alle 3 bis 4 Wochen, um den gesunden Naturnagel zu schonen."
    },
    {
      q: "Kann ich ein eigenes Design von Instagram oder Pinterest mitbringen?",
      a: "Absolut! Kevin setzt individuelle Nail Art, Fotos von Instagram, Farbkombinationen oder spezielle Formen (Mandel, Stiletto, Ballerina, Coffin) detailgetreu und mit großer Präzision um."
    },
    {
      q: "Wo befindet sich das Studio und gibt es Parkplätze?",
      a: "Das Studio liegt verkehrsgünstig direkt auf der Hauptstraße 177-179 in 50169 Kerpen-Horrem. Kostenfreie und günstige Parkplätze finden Sie entlang der Hauptstraße und in den benachbarten Seitenstraßen."
    },
    {
      q: "Welche Zahlungsmöglichkeiten werden akzeptiert?",
      a: "Wir akzeptieren bequeme Barzahlung vor Ort im Studio."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#faf7f4] border-b border-[#ebdcd2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#b06758]" />
            <span>Häufige Fragen</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Fragen & Antworten
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Alles Wichtige rund um Ihren Besuch bei New York Nails Horrem auf einen Blick.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#ebdcd2] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                    {f.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#f3e7df] flex items-center justify-center text-stone-800 shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-stone-900 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-600 text-sm leading-relaxed border-t border-[#f5ede7] pt-4">
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
