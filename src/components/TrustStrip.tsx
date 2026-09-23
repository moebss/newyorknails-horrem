import { Award, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    { icon: Award, title: "Meisterhafte Präzision", desc: "Über 8 Jahre Expertise von Stylist Kevin" },
    { icon: ShieldCheck, title: "100% Hygiene-Standard", desc: "Sterilisierte Instrumente & Einwegfeilen" },
    { icon: Sparkles, title: "Premium Gel & Acryl", desc: "Schonende, geruchsarme Spitzenprodukte" },
    { icon: Clock, title: "Spontane Termine möglich", desc: "Mo–Fr bis 19:00 Uhr • Sa bis 17:00 Uhr" }
  ];

  return (
    <div className="bg-[#ffffff] border-b border-stone-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="flex items-center gap-4 bg-[#faf9f6] border border-stone-200/60 p-4 rounded-xl shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#b88e38]/10 border border-[#b88e38]/30 flex items-center justify-center text-[#9b7428] shrink-0 shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-semibold text-stone-900 text-sm block leading-tight">{p.title}</span>
                <span className="text-xs font-sans text-stone-500 block mt-1">{p.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
