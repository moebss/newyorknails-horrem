import { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [treatment, setTreatment] = useState<'neu' | 'refill' | 'shellac' | 'pedikuere'>('neu');
  const [material, setMaterial] = useState<'gel' | 'acryl'>('gel');
  const [finish, setFinish] = useState<'uni' | 'babyboomer' | 'french' | 'chrome'>('babyboomer');
  const [nailArtCount, setNailArtCount] = useState<number>(2);

  const calculateTotal = () => {
    let base = 0;
    if (treatment === 'neu') base = 42;
    else if (treatment === 'refill') base = 32;
    else if (treatment === 'shellac') base = 28;
    else if (treatment === 'pedikuere') base = 35;

    // Finish surcharge
    let finishPrice = 0;
    if (finish === 'babyboomer') finishPrice = 6;
    else if (finish === 'french') finishPrice = 5;
    else if (finish === 'chrome') finishPrice = 8;

    // Nail Art
    const nailArtPrice = nailArtCount * 2.5;

    return base + finishPrice + nailArtPrice;
  };

  const total = calculateTotal();

  const getWhatsAppMessage = () => {
    const treatText = treatment === 'neu' ? 'Neumodellage' : treatment === 'refill' ? 'Auffüllen' : treatment === 'shellac' ? 'Shellac' : 'Pediküre';
    const finishText = finish === 'babyboomer' ? 'Babyboomer' : finish === 'french' ? 'French' : finish === 'chrome' ? 'Chrome Glaze' : 'Uni Farbe';
    return `Hallo Kevin! Ich habe meinen Wunschlook im Style-Rechner kalkuliert:
• Behandlung: ${treatText}
• Stil: ${finishText}
• Nail-Art Akzente: ${nailArtCount} Nägel
• Geschätzter Preis: ca. ${total} €
Wann wäre der nächste freie Termin für mich?`;
  };

  return (
    <section id="rechner" className="py-16 sm:py-20 bg-[#faf7f4] border-b border-[#ebdcd2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#b06758]" />
            <span>Interaktiver Style-Kalkulator</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Was kostet Ihr Wunsch-Look?
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Stellen Sie Ihre Wunschbehandlung zusammen und erhalten Sie eine transparente Sofort-Schätzung vor Ihrem Termin.
          </p>
        </div>

        <div className="bg-white border border-[#ebdcd2] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="space-y-8">
            
            {/* 1. Step: Treatment */}
            <div>
              <label className="font-serif font-bold text-stone-900 text-base block mb-3">1. Wählen Sie Ihre Basis-Behandlung:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'neu', label: 'Neumodellage', price: 'ab 42 €' },
                  { id: 'refill', label: 'Auffüllen', price: 'ab 32 €' },
                  { id: 'shellac', label: 'Shellac Natur', price: 'ab 28 €' },
                  { id: 'pedikuere', label: 'Pediküre', price: 'ab 35 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTreatment(item.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      treatment === item.id
                        ? 'border-[#b06758] bg-[#fdf5f2] ring-2 ring-[#b06758]/20'
                        : 'border-[#ebdcd2] bg-[#faf7f4] hover:border-stone-400'
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900 block">{item.label}</span>
                    <span className="text-[11px] text-[#a55f52] font-semibold mt-1 block">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Step: Style / Finish */}
            <div>
              <label className="font-serif font-bold text-stone-900 text-base block mb-3">2. Welcher Style / Finish soll es sein?</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'uni', label: 'Klassisch Uni', price: '+0 €' },
                  { id: 'babyboomer', label: 'Babyboomer', price: '+6 €' },
                  { id: 'french', label: 'French Classic', price: '+5 €' },
                  { id: 'chrome', label: 'Glazed Chrome', price: '+8 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFinish(item.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      finish === item.id
                        ? 'border-[#b06758] bg-[#fdf5f2] ring-2 ring-[#b06758]/20'
                        : 'border-[#ebdcd2] bg-[#faf7f4] hover:border-stone-400'
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900 block">{item.label}</span>
                    <span className="text-[11px] text-stone-500 font-medium mt-1 block">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Step: Nail Art Count */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-serif font-bold text-stone-900 text-base">3. Nail Art / Schmucksteine / Handmalerei:</label>
                <span className="font-bold text-xs text-[#a55f52]">{nailArtCount} Akzent-Nägel (+{(nailArtCount * 2.5).toFixed(0)} €)</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="2"
                value={nailArtCount}
                onChange={(e) => setNailArtCount(Number(e.target.value))}
                className="w-full accent-[#b06758] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>Keine Nail Art</span>
                <span>2 Akzentnägel</span>
                <span>4 Nägel</span>
                <span>Alle 10 Nägel</span>
              </div>
            </div>

          </div>

          {/* Result Card */}
          <div className="mt-8 pt-6 border-t border-[#ebdcd2] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#faf7f4] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div>
              <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">Geschätzter Gesamtwert:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif font-bold text-4xl text-stone-900">ca. {total} €</span>
                <span className="text-xs text-stone-500 font-normal">inkl. Vorbereitung & Versiegelung</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/4917680211120?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#b7e4c7]" />
                <span>Auswahl per WhatsApp buchen</span>
              </a>

              <button
                onClick={onOpenContact}
                className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Terminanfrage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
