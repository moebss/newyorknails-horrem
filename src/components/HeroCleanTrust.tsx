import { Calendar, Phone, Clock, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

export interface HeroCleanTrustProps {
  city: string;
  badge?: string;
  headlineMain: string;
  headlineHighlight: string;
  subline: string;
  primaryCtaText?: string;
  phone: string;
  openingHours?: string;
  doctorOrTeamImage: string;
  badges?: string[];
  onBookAppointment?: () => void;
}

export const HeroCleanTrust = ({
  city,
  badge = 'Moderne Praxis & Herzliche Betreuung',
  headlineMain = 'Ihre Gesundheit & Ihr Wohlbefinden in',
  headlineHighlight = 'besten Händen.',
  subline = 'Mit modernster Diagnostik, schonenden Behandlungsmethoden und viel Einfühlungsvermögen sind wir in unserer barrierefreien Praxis für Sie da.',
  primaryCtaText = 'Online-Termin buchen',
  phone,
  openingHours = 'Mo–Fr: 08:00 – 18:00 Uhr',
  doctorOrTeamImage,
  badges = ['Alle Kassen & Privat', 'Kurze Wartezeiten', 'Barrierefreier Zugang'],
  onBookAppointment
}: HeroCleanTrustProps) => {
  const cleanPhone = phone.replace(/\s+/g, '');

  return (
    <section className="relative bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 text-slate-900 py-16 lg:py-24 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status & Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <HeartPulse className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>{badge} · {city}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.18] text-balance">
              {headlineMain}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                {headlineHighlight}
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
              {subline}
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {badges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-2 rounded-xl shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Actions & Hours */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 active:scale-[0.99] transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>{primaryCtaText}</span>
              </button>

              {phone && (
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-base hover:bg-slate-50 transition-all shadow-xs"
                >
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span>{phone}</span>
                </a>
              )}
            </div>

            {/* Opening Hours Strip */}
            <div className="flex items-center gap-3 pt-4 text-xs sm:text-sm text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Sprechzeiten: <strong className="font-semibold text-slate-700">{openingHours}</strong> · Termine nach Vereinbarung</span>
            </div>
          </div>

          {/* Right Column (Team Image + Quick Trust Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/10 border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src={doctorOrTeamImage}
                  alt={headlineMain}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Quality Stamp */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zertifizierte Fachpraxis</div>
                  <div className="text-[11px] text-slate-500">Höchste Hygiene- & Behandlungsstandards</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
