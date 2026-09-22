import { useState, type FormEvent } from 'react';
import { Check, ArrowRight, ArrowLeft, Send, ShieldCheck } from 'lucide-react';

export interface ServiceOption {
  id: string;
  label: string;
  sub?: string;
  iconName?: string;
}

export interface MultiStepInquiryProps {
  headline?: string;
  subline?: string;
  services?: ServiceOption[];
  onSubmit?: (data: {
    service: string;
    timeline: string;
    details: string;
    name: string;
    phone: string;
    email: string;
    location: string;
  }) => void;
}

export const MultiStepInquiry = ({
  headline = 'In 3 Schritten zum Festpreis-Angebot',
  subline = 'Kostenlos, unverbindlich und innerhalb von 24 Stunden in Ihrem Postfach.',
  services = [
    { id: 'sanierung', label: 'Komplettsanierung', sub: 'Bad, Wohnung oder Haus' },
    { id: 'reparatur', label: 'Reparatur & Wartung', sub: 'Schnelle Problembehebung' },
    { id: 'neubau', label: 'Neubau & Montage', sub: 'Fachgerechte Neuinstallation' },
    { id: 'beratung', label: 'Individuelle Beratung', sub: 'Vor-Ort-Besichtigung' }
  ],
  onSubmit
}: MultiStepInquiryProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(services[0]?.label || '');
  const [timeline, setTimeline] = useState<string>('Schnellstmöglich');
  const [details, setDetails] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [gdprAccepted, setGdprAccepted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!gdprAccepted) return;
    setIsSubmitted(true);
    onSubmit?.({
      service: selectedService,
      timeline,
      details,
      name,
      phone,
      email,
      location
    });
  };

  return (
    <section id="anfrage" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[var(--color-accent,#f59e0b)] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Schritt-für-Schritt Anfrage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 text-balance">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed text-pretty">
            {subline}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-black/80">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                <span className={step >= 1 ? 'text-[var(--color-accent,#f59e0b)]' : ''}>1. Leistung</span>
                <span className={step >= 2 ? 'text-[var(--color-accent,#f59e0b)]' : ''}>2. Details</span>
                <span className={step >= 3 ? 'text-[var(--color-accent,#f59e0b)]' : ''}>3. Kontakt</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent,#f59e0b)] transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Success State */}
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Wir haben Ihre Angaben erhalten und prüfen diese umgehend. Sie erhalten innerhalb von 24 Stunden eine Rückmeldung oder Ihr kostenloses Angebot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white mb-4">Welche Leistung benötigen Sie?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.label)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          selectedService === s.label
                            ? 'border-[var(--color-accent,#f59e0b)] bg-slate-800/90 shadow-md ring-1 ring-[var(--color-accent,#f59e0b)]'
                            : 'border-slate-800 bg-slate-950/50 hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                        {s.sub && <div className="text-xs text-slate-400">{s.sub}</div>}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent,#f59e0b)] text-slate-950 font-bold text-sm hover:brightness-110 transition-all"
                    >
                      <span>Weiter zu Schritt 2</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white">Wann soll das Projekt starten?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Schnellstmöglich', 'In den nächsten 4 Wochen', 'In 2–3 Monaten'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-3.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                          timeline === t
                            ? 'border-[var(--color-accent,#f59e0b)] bg-slate-800 text-white'
                            : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="project-details" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Kurze Projektbeschreibung (optional):
                    </label>
                    <textarea
                      id="project-details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      rows={3}
                      placeholder="z. B. Bad ca. 12m², alte Fliesen entfernen, neue Dusche einbauen..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white placeholder-slate-600 focus:outline-hidden focus:border-[var(--color-accent,#f59e0b)]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Zurück</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent,#f59e0b)] text-slate-950 font-bold text-sm hover:brightness-110"
                    >
                      <span>Weiter zu Schritt 3</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-bold text-white mb-2">Wohin dürfen wir Ihr Angebot senden?</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-400 mb-1">Ihr Name *</label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Max Mustermann"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-[var(--color-accent,#f59e0b)] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-slate-400 mb-1">Telefonnummer (für Rückfragen) *</label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0170 1234567"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-[var(--color-accent,#f59e0b)] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-400 mb-1">E-Mail-Adresse *</label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="max@beispiel.de"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-[var(--color-accent,#f59e0b)] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry-location" className="block text-xs font-semibold text-slate-400 mb-1">PLZ / Ort des Projekts</label>
                      <input
                        id="inquiry-location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="z. B. 50667 Köln"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-[var(--color-accent,#f59e0b)] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* GDPR Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={gdprAccepted}
                        onChange={(e) => setGdprAccepted(e.target.checked)}
                        className="mt-1 rounded-sm border-slate-700 bg-slate-950 text-[var(--color-accent,#f59e0b)] focus:ring-0"
                      />
                      <span className="text-xs text-slate-400 leading-normal">
                        Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage erhoben und verarbeitet werden. (Jederzeit widerrufbar, siehe Datenschutzerklärung).
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Zurück</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!gdprAccepted}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-accent,#f59e0b)] text-slate-950 font-bold text-sm hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[var(--color-accent,#f59e0b)]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Jetzt Angebot anfordern</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}

          {/* Privacy & Trust Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>100% kostenfrei & unverbindlich · Keine Weitergabe Ihrer Daten</span>
          </div>

        </div>

      </div>
    </section>
  );
};
