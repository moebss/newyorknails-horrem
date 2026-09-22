import { useState } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import imgBefore from '../images/nail_babyboomer.jpg';
import imgAfter from '../images/nail_neumodellage.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="vorher-nachher" className="py-16 sm:py-20 bg-white border-b border-[#ebdcd2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#b06758]" />
            <span>Sichtbare Verwandlung</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Vorher & Nachher
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Vom beanspruchten Naturnagel zur formvollendeten Modellage. Ziehen Sie den Regler, um die Transformation zu sehen.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-[#ebdcd2] select-none mx-auto">
          {/* After Image (Background) */}
          <img
            src={imgAfter}
            alt="New York Nails Horrem Perfekte Neumodellage Nachher"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <span className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10">
            Nachher: New York Nails
          </span>

          {/* Before Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={imgBefore}
              alt="Vorher Zustand"
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            <span className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-stone-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10">
              Vorher: Rauswuchs / Natur
            </span>
          </div>

          {/* Slider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center border-2 border-[#b06758]">
              <MoveHorizontal className="w-5 h-5 text-[#b06758]" />
            </div>
          </div>

          {/* Interactive Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Vorher Nachher Schieberegler"
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-xs text-stone-400 font-medium">Tipp: Schieben Sie den Schieberegler mit der Maus oder dem Finger hin und her.</span>
        </div>

      </div>
    </section>
  );
}
