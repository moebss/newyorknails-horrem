import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      author: "Laura M.",
      location: "Kerpen-Horrem",
      rating: 5,
      date: "vor 2 Wochen",
      text: "Ich bin seit über einem Jahr Stammkundin bei Kevin. Meine Gelnägel halten locker 4 bis 5 Wochen, ohne dass etwas absplittert oder einreißt. Er arbeitet super sauber, schnell und extrem präzise. Bestes Nagelstudio in ganz Horrem!"
    },
    {
      author: "Sarah B.",
      location: "Sindorf",
      rating: 5,
      date: "vor 1 Monat",
      text: "Wunderschöner Babyboomer! Ich hatte ein Foto von Instagram dabei und Kevin hat es 1:1 genau so umgesetzt. Hygiene ist hier top – Instrumente werden ordentlich desinfiziert. Komme immer wieder gerne hierher."
    },
    {
      author: "Jennifer K.",
      location: "Bergheim",
      rating: 5,
      date: "vor 3 Wochen",
      text: "Große Empfehlung! Super freundlich, spontane Terminabsprache über WhatsApp klappt reibungslos und die Pediküre mit Farbgel war ein Traum. Sehr entspannte Atmosphäre."
    }
  ];

  return (
    <section id="bewertungen" className="py-20 sm:py-24 bg-[#faf9f6] text-[#111318] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#b88e38]/10 border border-[#b88e38]/30 px-4 py-1.5 rounded-full shadow-xs mb-4">
            <div className="flex items-center gap-1 text-[#b88e38]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#b88e38] text-[#b88e38]" />
              ))}
            </div>
            <span className="text-xs font-sans font-semibold text-stone-800 tracking-wider uppercase">
              Google & Fresha 4.8 von 5 Sternen
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111318] tracking-normal mb-4">
            Echte Stimmen aus <span className="italic text-[#b88e38]">Kerpen-Horrem</span>
          </h2>
          <p className="font-sans text-stone-600 text-base leading-relaxed">
            Über 77 verifizierte Bewertungen bestätigen unsere Leidenschaft für kompromisslose Haltbarkeit, saubere Fräsertechnik und herzlichen Service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 hover:border-[#b88e38]/50 rounded-2xl p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#b88e38]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#b88e38] text-[#b88e38]" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">{rev.date}</span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="font-display font-semibold text-stone-900 text-base block leading-tight">{rev.author}</span>
                  <span className="text-xs text-stone-500 block mt-0.5">{rev.location}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Verifiziert</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
