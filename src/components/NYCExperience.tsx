import { Sparkles, Shield, Clock, Award, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function NYCExperience() {
  const steps = [
    {
      num: '01',
      title: 'Manhattan Style Consultation',
      subtitle: 'Typgerechte Form- & Ästhetik-Analyse',
      description: 'Vor jeder Modellage analysieren wir Nagelbett, Lebensstil und Wunschdesign. Ob Mandel, Square oder Stiletto – wir finden Ihre perfekte Silhouette.',
      badge: 'Individuell & Präzise'
    },
    {
      num: '02',
      title: 'Precision Cuticle Architecture',
      subtitle: 'Schonende Russian / Dry Maniküre',
      description: 'Mit mikroskopischer Fräser-Präzision wird die Nagelhaut sanft und rückstandslos geglättet. Das Geheimnis für bis zu 4+ Wochen unsichtbaren Rauswuchs.',
      badge: 'Clean Cuticle Tech'
    },
    {
      num: '03',
      title: 'High-End Sculpting & Art',
      subtitle: 'Flüssig-Gel, Acryl & Chrome Trends',
      description: 'Meisterhafter Aufbau der C-Kurve für maximale Stabilität. Veredelt mit Liquid Chrome, Babyboomer-Fades oder handgemalter Manhattan Minimalist Art.',
      badge: 'Meisterhandwerk by Kevin'
    },
    {
      num: '04',
      title: 'Diamond High-Gloss Shield',
      subtitle: 'Kratzfeste 4-Wochen-Versiegelung',
      description: 'Ein ultra-resistenter Diamant-Topcoat schützt Farbe und Glanz vor Verfärbungen, Absplittern und alltäglicher Beanspruchung.',
      badge: 'Anti-Scratch Finish'
    }
  ];

  const standards = [
    {
      icon: Shield,
      title: 'Medizinische Hygiene',
      text: 'Für jeden Kunden verwenden wir frisch sterilisierte Werkzeuge und sterile Einwegfeilen.'
    },
    {
      icon: Award,
      title: '4+ Wochen Haltbarkeit',
      text: 'Perfekte Statik und Premium-Materialien garantieren langanhaltenden Halt ohne Lifting.'
    },
    {
      icon: Clock,
      title: 'Express & Flexibel',
      text: 'Schnelle Terminvergabe via WhatsApp sowie flexible Termine auch nach Feierabend.'
    },
    {
      icon: Sparkles,
      title: 'Premium Trend-Palette',
      text: 'Über 500 exklusive Gel- & Chrome-Farben direkt inspiriert von den internationalen Laufstegen.'
    }
  ];

  const handleWhatsAppBooking = (topic: string) => {
    const text = encodeURIComponent(`Hallo Kevin! Ich interessiere mich für das New York Nails Ritual (${topic}) und möchte gerne einen Termin vereinbaren.`);
    window.open(`https://wa.me/4917680211120?text=${text}`, '_blank');
  };

  return (
    <section id="experience" className="py-24 bg-[#0e1017] text-slate-100 relative overflow-hidden border-y border-white/10">
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-sans font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The NYC Atelier Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-normal mb-5 leading-tight">
            Das 4-Stufen-Ritual für <span className="italic text-[#c5a059]">makellose Nägel</span>
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
            Keine Massenabfertigung, kein Kompromiss. Im New York Nails Atelier in Kerpen-Horrem durchlaufen Ihre Nägel einen präzisen, meisterhaft abgestimmten Ablauf für höchste Eleganz und dauerhafte Belastbarkeit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#141722]/80 hover:bg-[#1a1f2e] border border-white/10 hover:border-[#c5a059]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-display font-bold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                    {step.badge}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-[#dfb76c] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs font-sans font-medium text-[#c5a059] uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>
                <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors font-sans">
                <span className="font-medium">Schritt {step.num} im Salon</span>
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standard Bar */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start space-y-3 font-sans">
                  <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-semibold text-base">{item.title}</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Direct CTA inside standards */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">
                Erleben Sie den New Yorker Standard persönlich in Kerpen-Horrem
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Hauptstraße 177–179 • Termine nach Vereinbarung oder spontan nach Verfügbarkeit
              </p>
            </div>
            <button
              onClick={() => handleWhatsAppBooking('NYC Ritual Beratung')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#c5a059] hover:bg-[#dfb76c] text-[#0b0c10] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#c5a059]/20 cursor-pointer shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Termin bei Kevin anfragen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
