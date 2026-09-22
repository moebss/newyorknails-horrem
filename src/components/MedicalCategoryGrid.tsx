import { useState } from 'react';
import { Calendar, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export interface TreatmentDetail {
  id: string;
  category: string;
  title: string;
  targetGroup: string;
  duration: string;
  coverage: string;
  description: string;
  benefits: string[];
}

export interface MedicalCategoryGridProps {
  eyebrow?: string;
  headline: string;
  subline?: string;
  treatments: TreatmentDetail[];
  onBookTreatment?: (treatment: TreatmentDetail) => void;
}

export const MedicalCategoryGrid = ({
  eyebrow = 'Diagnostik & Behandlungsmethoden',
  headline = 'Moderne Zahnmedizin & Schonende Therapien',
  subline = 'Wählen Sie Ihren Behandlungsschwerpunkt und informieren Sie sich über Ablauf, Dauer und Kassenübernahme.',
  treatments,
  onBookTreatment
}: MedicalCategoryGridProps) => {
  const categories = ['Alle', ...Array.from(new Set(treatments.map((t) => t.category)))];
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredTreatments = activeCategory === 'Alle'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="behandlungen" className="py-20 lg:py-28 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-100/60 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
            {subline}
          </p>
        </div>

        {/* Category Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {t.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.coverage}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t.title}
                </h3>

                <p className="text-xs text-slate-500 mb-4 font-medium">
                  Zielgruppe / Indikation: <span className="text-slate-700">{t.targetGroup}</span>
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {t.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {t.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer with Duration & Booking Trigger */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.duration}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onBookTreatment?.(t)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Termin anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
