import { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export interface GoogleReviewItem {
  id?: string;
  author: string;
  avatarLetter?: string;
  rating: number;
  date: string;
  serviceCategory?: string;
  text: string;
  ownerReply?: string;
}

export interface GoogleReviewsShowcaseProps {
  overallRating: number;
  totalReviews: number;
  companyName: string;
  city: string;
  reviews: GoogleReviewItem[];
  writeReviewUrl?: string;
}

const GoogleGLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const GoogleReviewsShowcase = ({
  overallRating,
  totalReviews,
  companyName,
  city,
  reviews,
  writeReviewUrl = '#'
}: GoogleReviewsShowcaseProps) => {
  const [filter, setFilter] = useState<string>('Alle');

  const categories = ['Alle', ...Array.from(new Set(reviews.map((r) => r.serviceCategory).filter(Boolean))) as string[]];
  const filteredReviews = filter === 'Alle'
    ? reviews
    : reviews.filter((r) => r.serviceCategory === filter);

  return (
    <section id="bewertungen" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/90 rounded-3xl border border-slate-800 p-6 sm:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Google Rating Big Score */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
                <GoogleGLogo />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-3xl sm:text-4xl font-black text-white">{overallRating.toFixed(1)}</span>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Hervorragend · Basierend auf <strong>{totalReviews} echten Google-Rezensionen</strong>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all shadow-sm"
            >
              <ThumbsUp className="w-4 h-4 text-amber-400" />
              <span>Auf Google bewerten</span>
            </a>

          </div>
        </div>

        {/* Filter Pills */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[var(--color-accent,#f59e0b)] text-slate-950'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <div
              key={rev.id || idx}
              className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                {/* Header with avatar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-bold flex items-center justify-center text-sm">
                      {rev.avatarLetter || rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                      </h4>
                      <span className="text-[11px] text-slate-500">{rev.date}</span>
                    </div>
                  </div>
                  <GoogleGLogo />
                </div>

                {/* Stars & Category Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {rev.serviceCategory && (
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                      {rev.serviceCategory}
                    </span>
                  )}
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Owner Reply (if present) */}
              {rev.ownerReply && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 bg-slate-900/40 p-2.5 rounded-lg">
                  <strong className="text-slate-300 block mb-0.5">Antwort von {companyName}:</strong>
                  <span>{rev.ownerReply}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
