import { Award, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    { icon: Award, title: "Meisterhafte Präzision", desc: "Über 8 Jahre Expertise von Stylist Kevin" },
    { icon: ShieldCheck, title: "100% Hygiene-Standard", desc: "Sterilisierte Instrumente & Einwegfeilen" },
    { icon: Sparkles, title: "Premium Gel & Acryl", desc: "Schonende, geruchsarme Spitzenprodukte" },
    { icon: Clock, title: "Spontane Termine möglich", desc: "Mo–Fr bis 19:00 Uhr • Sa bis 17:00 Uhr" }
  ];

  return (
    <div className="bg-[#0e1017] border-b border-white/10 py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 bg-[#141722]/60 border border-white/5 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block leading-tight">{p.title}</span>
                <span className="text-xs text-slate-400 block mt-0.5">{p.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
