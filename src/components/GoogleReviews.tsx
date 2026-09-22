import { Star, CheckCircle, Quote } from 'lucide-react';

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
    <section id="bewertungen" className="py-16 sm:py-20 bg-[#faf7f4] border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full shadow-xs mb-3">
            <div className="flex items-center gap-1 text-[#d97706]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-800 tracking-wider uppercase">
              Google & Fresha 4.8 von 5 Sternen
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Was unsere Kundinnen sagen
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Über 77 echte Bewertungen sprechen für sich: Höchste Qualität, beste Haltbarkeit und herzlicher Service im Herzen von Horrem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebdcd2] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#d97706]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d97706] text-[#d97706]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f5ede7] flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-stone-900 text-sm block leading-tight">{rev.author}</span>
                  <span className="text-xs text-stone-500 block mt-0.5">{rev.location}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2d6a4f] bg-[#d8f3dc] px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 text-[#2d6a4f]" />
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
