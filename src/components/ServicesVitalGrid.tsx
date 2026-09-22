import { ArrowRight, Check } from 'lucide-react';

export interface VitalService {
  id: string;
  title: string;
  category?: string;
  description: string;
  image: string;
  benefits: string[];
  durationOrBadge?: string;
}

export interface ServicesVitalGridProps {
  eyebrow?: string;
  headline: string;
  subline?: string;
  services: VitalService[];
  onSelectService?: (service: VitalService) => void;
}

export const ServicesVitalGrid = ({
  eyebrow = 'Behandlungsspektrum',
  headline = 'Moderne Therapien & Ganzheitliche Versorgung',
  subline = 'Wir bieten Ihnen individuelle Behandlungskonzepte auf dem neuesten Stand der Wissenschaft.',
  services,
  onSelectService
}: ServicesVitalGridProps) => {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3 inline-block">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
            {headline}
          </h2>
          {subline && (
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
              {subline}
            </p>
          )}
        </div>

        {/* Vital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService?.(service)}
              className="group bg-slate-50/70 rounded-3xl p-6 border border-slate-200/90 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {service.durationOrBadge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-emerald-800 shadow-xs">
                      {service.durationOrBadge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  {service.category && (
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600 mb-1.5 block">
                      {service.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}

                <div className="pt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  <span>Mehr Details erfahren</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
