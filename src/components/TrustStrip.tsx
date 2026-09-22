import { Award, Clock, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    { icon: Award, title: "Meisterhafte Präzision", desc: "Über 8 Jahre Expertise von Stylist Kevin" },
    { icon: ShieldCheck, title: "100% Hygiene-Standard", desc: "Sterilisierte Instrumente & Einwegfeilen" },
    { icon: Sparkles, title: "Premium Gel & Acryl", desc: "Schonende, geruchsarme Spitzenprodukte" },
    { icon: Clock, title: "Spontane Termine möglich", desc: "Mo-Fr bis 19:00 Uhr • Sa bis 17:00 Uhr" }
  ];

  return (
    <div className="bg-[#f3e7df] border-b border-[#ebdcd2] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#dfccbf] flex items-center justify-center text-[#b06758] shrink-0 shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-stone-900 text-sm block leading-tight">{p.title}</span>
                <span className="text-xs text-stone-600 block mt-0.5">{p.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
