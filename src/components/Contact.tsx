import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'The Manhattan Full Set (Gel & Acryl)',
    date: '',
    time: 'Vormittags (09:30 - 12:00)',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppLink = () => {
    let msg = `Hallo Kevin! Ich möchte gerne einen Termin im New York Nails Atelier Horrem vereinbaren:\n`;
    if (formData.name) msg += `• Name: ${formData.name}\n`;
    if (formData.phone) msg += `• Telefon: ${formData.phone}\n`;
    msg += `• Behandlung: ${formData.service}\n`;
    if (formData.date) msg += `• Wunschdatum: ${formData.date}\n`;
    if (formData.time) msg += `• Bevorzugte Zeit: ${formData.time}\n`;
    if (formData.note) msg += `• Design / Notiz: ${formData.note}\n`;
    return `https://wa.me/4917680211120?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 sm:py-24 bg-[#0b0c10] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-sans font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Terminbuchung & VIP Kontakt</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-normal leading-tight">
                Ihr nächster <br />
                <span className="italic text-[#c5a059]">Wunschtermin</span>
              </h2>
              <p className="font-sans text-slate-300 text-base mt-3 leading-relaxed">
                Wählen Sie Ihren bevorzugten Kontaktweg: Senden Sie Stylist Kevin eine direkte WhatsApp-Nachricht, rufen Sie im Atelier an oder nutzen Sie das Schnellformular.
              </p>
            </div>

            <div className="space-y-4 font-sans">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20vereinbaren."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/60 border border-emerald-500/30 p-5 rounded-2xl flex items-center gap-4 hover:bg-emerald-900/60 transition-all block group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-[#0b0c10] flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-base block">WhatsApp Direktanfrage an Kevin</span>
                  <span className="text-xs text-emerald-300 font-medium block mt-0.5">0176 80211120 • Schnellste Terminabstimmung</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:022739919337"
                className="bg-[#141722] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all block group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-base block">Atelier Festnetz</span>
                  <span className="text-xs text-slate-300 font-medium block mt-0.5">02273 / 9919337 • Direkt im Salon</span>
                </div>
              </a>

              {/* Address Card */}
              <div className="bg-[#141722] border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-base block">Atelier-Standort</span>
                  <span className="text-xs text-slate-300 block mt-0.5">Hauptstraße 177–179, 50169 Kerpen-Horrem</span>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-[#141722] border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-base block">Öffnungszeiten</span>
                  <span className="text-xs text-slate-300 block mt-0.5">Mo–Fr 09:30–19:00 Uhr • Sa 09:30–17:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:col-span-7 bg-[#12141c] border border-white/10 p-7 sm:p-10 rounded-3xl shadow-2xl font-sans">
            <h3 className="font-display font-semibold text-2xl text-white mb-2">Termin-Konfigurator</h3>
            <p className="text-slate-300 text-sm mb-6">Wählen Sie Ihre Wünsche – Ihre Angaben werden direkt in eine vorgefertigte WhatsApp-Nachricht an Kevin übernommen.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Ihr Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="z.B. Jessica Keller"
                    className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Telefon / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="z.B. 0176 12345678"
                    className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Gewünschte Behandlung</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="The Manhattan Full Set (Neumodellage)">The Manhattan Full Set (Neumodellage) – ab 42 €</option>
                  <option value="Madison Avenue Refill (Auffüllen)">Madison Avenue Refill (Auffüllen) – ab 32 €</option>
                  <option value="Upper East Babyboomer Fade">Upper East Babyboomer Fade – ab 38 €</option>
                  <option value="Tribeca Shellac Naturnagel">Tribeca Shellac Naturnagel – ab 28 €</option>
                  <option value="5th Avenue Spa Pediküre">5th Avenue Spa Pediküre – ab 35 €</option>
                  <option value="Clean Manicure Essentials">Clean Manicure Essentials – ab 22 €</option>
                  <option value="Liquid Chrome & Nail Art">Liquid Chrome & Nail Art – nach Aufwand</option>
                  <option value="Express Nagelreparatur">Express Nagelreparatur – ab 4 €</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Wunschdatum (optional)</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Bevorzugte Tageszeit</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Vormittags (09:30 - 12:00)">Vormittags (09:30 - 12:00)</option>
                    <option value="Mittags (12:00 - 15:00)">Mittags (12:00 - 15:00)</option>
                    <option value="Nachmittags (15:00 - 18:00)">Nachmittags (15:00 - 18:00)</option>
                    <option value="Feierabend (ab 18:00)">Feierabend (ab 18:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Notiz / Farbwunsch (optional)</label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Haben Sie ein Foto oder spezielle Wünsche bezüglich Form, C-Kurve oder Chrome-Finish?"
                  className="w-full bg-[#181b26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100" />
                <span>Termin per WhatsApp an Kevin senden</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Ihre Daten werden vertraulich behandelt und ausschließlich zur persönlichen Terminvereinbarung verwendet.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
