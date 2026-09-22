import { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [treatment, setTreatment] = useState<'neu' | 'refill' | 'shellac' | 'pedikuere'>('neu');
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
    const treatText = treatment === 'neu' ? 'The Manhattan Full Set (Neumodellage)' : treatment === 'refill' ? 'Madison Avenue Refill (Auffüllen)' : treatment === 'shellac' ? 'Tribeca Shellac' : '5th Avenue Pediküre';
    const finishText = finish === 'babyboomer' ? 'Babyboomer Fade' : finish === 'french' ? 'Classic French' : finish === 'chrome' ? 'Liquid Chrome Glaze' : 'Uni Farblackierung';
    return `Hallo Kevin! Ich habe meinen Wunschlook im New York Nails Kalkulator zusammengestellt:
• Behandlung: ${treatText}
• Finish: ${finishText}
• Nail-Art Akzente: ${nailArtCount} Nägel
• Geschätzter Preis: ca. ${total} €
Wann hättest du den nächsten freien Termin für mich im Horrem Atelier?`;
  };

  return (
    <section id="rechner" className="py-20 sm:py-24 bg-[#0e1017] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-sans font-semibold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Manhattan Atelier Konfigurator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-normal mb-4">
            Kalkulieren Sie Ihren <span className="italic text-[#c5a059]">Signature Look</span>
          </h2>
          <p className="font-sans text-slate-300 text-base leading-relaxed">
            Wählen Sie Basis, Veredelung und Nail-Art für eine sofortige transparente Kosteneinschätzung vor Ihrem Besuch.
          </p>
        </div>

        <div className="bg-[#12141c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden font-sans">
          <div className="space-y-8">
            
            {/* 1. Step: Treatment */}
            <div>
              <label className="font-display text-white text-base block mb-3 font-semibold">
                1. Basis-Behandlung wählen:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'neu', label: 'The Full Set', sub: 'Neumodellage', price: 'ab 42 €' },
                  { id: 'refill', label: 'Refill', sub: 'Auffüllen', price: 'ab 32 €' },
                  { id: 'shellac', label: 'Tribeca Shellac', sub: 'Naturnagel', price: 'ab 28 €' },
                  { id: 'pedikuere', label: '5th Ave Pediküre', sub: 'Fußbad & Pflege', price: 'ab 35 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTreatment(item.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      treatment === item.id
                        ? 'border-[#c5a059] bg-[#c5a059]/15 shadow-md ring-1 ring-[#c5a059]'
                        : 'border-white/10 bg-[#161924] hover:border-white/30 text-slate-300'
                    }`}
                  >
                    <span className="font-semibold text-xs text-white block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{item.sub}</span>
                    <span className="text-xs text-[#c5a059] font-bold mt-2 block">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Step: Style / Finish */}
            <div>
              <label className="font-display text-white text-base block mb-3 font-semibold">
                2. Finish & Trend-Effekt wählen:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'uni', label: 'High Gloss Uni', price: '+0 €' },
                  { id: 'babyboomer', label: 'Babyboomer Fade', price: '+6 €' },
                  { id: 'french', label: 'French Precision', price: '+5 €' },
                  { id: 'chrome', label: 'Liquid Chrome Glaze', price: '+8 €' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFinish(item.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      finish === item.id
                        ? 'border-[#c5a059] bg-[#c5a059]/15 shadow-md ring-1 ring-[#c5a059]'
                        : 'border-white/10 bg-[#161924] hover:border-white/30 text-slate-300'
                    }`}
                  >
                    <span className="font-semibold text-xs text-white block">{item.label}</span>
                    <span className="text-xs text-[#c5a059] font-medium mt-1 block">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Step: Nail Art Count */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-display text-white text-base font-semibold">
                  3. Handgemalte Nail-Art / Schmucksteine:
                </label>
                <span className="font-bold text-xs text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-full border border-[#c5a059]/30">
                  {nailArtCount} Akzent-Nägel (+{(nailArtCount * 2.5).toFixed(0)} €)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="2"
                value={nailArtCount}
                onChange={(e) => setNailArtCount(Number(e.target.value))}
                className="w-full accent-[#c5a059] cursor-pointer bg-white/10 h-2 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>0 Nägel (Pur)</span>
                <span>2 Akzente</span>
                <span>4 Nägel</span>
                <span>Full Set (10 Nägel)</span>
              </div>
            </div>

          </div>

          {/* Result Bottom Bar */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0e1017] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Geschätzter Gesamtpreis:</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display font-bold text-4xl text-[#c5a059]">ca. {total} €</span>
                <span className="text-xs text-slate-400 font-normal">inkl. Cuticle Care & Versiegelung</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/4917680211120?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konfiguration per WhatsApp an Kevin</span>
              </a>

              <button
                onClick={onOpenContact}
                className="bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Termin anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
