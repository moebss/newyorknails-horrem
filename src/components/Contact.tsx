import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Neumodellage (Gel & Acryl)',
    date: '',
    time: 'Vormittags',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppLink = () => {
    let msg = `Hallo Kevin! Ich möchte gerne einen Termin im New York Nails Horrem vereinbaren:
`;
    if (formData.name) msg += `• Name: ${formData.name}
`;
    if (formData.phone) msg += `• Telefon: ${formData.phone}
`;
    msg += `• Behandlung: ${formData.service}
`;
    if (formData.date) msg += `• Wunschdatum: ${formData.date}
`;
    if (formData.time) msg += `• Uhrzeit: ${formData.time}
`;
    if (formData.note) msg += `• Notiz/Design: ${formData.note}
`;
    return `https://wa.me/4917680211120?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-20 bg-white border-b border-[#ebdcd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#a55f52] uppercase bg-[#f3e7df] border border-[#dfccbf] px-4 py-1.5 rounded-full mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#b06758]" />
                <span>Terminbuchung & Kontakt</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
                Ihr nächster <br />
                <span className="italic font-light text-[#b06758]">Traumtermin</span>
              </h2>
              <p className="text-stone-600 text-base mt-3 leading-relaxed">
                Wählen Sie Ihren bevorzugten Weg: Senden Sie uns eine direkte WhatsApp-Nachricht, rufen Sie im Studio an oder nutzen Sie das Schnellformular.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/4917680211120?text=Hallo%20Kevin!%20Ich%20m%C3%B6chte%20gerne%20einen%20Termin%20im%20New%20York%20Nails%20Horrem%20vereinbaren."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d8f3dc] border border-[#95d5b2] p-5 rounded-2xl flex items-center gap-4 hover:bg-[#b7e4c7] transition-all block group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d6a4f] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif font-bold text-[#1b4332] text-base block">WhatsApp Sofortkontakt</span>
                  <span className="text-xs text-[#2d6a4f] font-semibold block mt-0.5">0176 80211120 • Schnellste Antwort</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:022739919337"
                className="bg-[#faf7f4] border border-[#ebdcd2] p-5 rounded-2xl flex items-center gap-4 hover:bg-[#f3e7df] transition-all block group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f3e7df] text-[#b06758] border border-[#dfccbf] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif font-bold text-stone-900 text-base block">Studio Festnetz</span>
                  <span className="text-xs text-stone-600 font-semibold block mt-0.5">02273 / 9919337</span>
                </div>
              </a>

              {/* Address Card */}
              <div className="bg-[#faf7f4] border border-[#ebdcd2] p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f3e7df] text-[#b06758] border border-[#dfccbf] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif font-bold text-stone-900 text-base block">Studio-Standort</span>
                  <span className="text-xs text-stone-600 block mt-0.5">Hauptstraße 177-179, 50169 Kerpen-Horrem</span>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-[#faf7f4] border border-[#ebdcd2] p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f3e7df] text-[#b06758] border border-[#dfccbf] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif font-bold text-stone-900 text-base block">Öffnungszeiten</span>
                  <span className="text-xs text-stone-600 block mt-0.5">Mo–Fr 09:30–19:00 Uhr • Sa 09:30–17:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:col-span-7 bg-[#faf7f4] border border-[#ebdcd2] p-6 sm:p-10 rounded-3xl shadow-lg">
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">Termin-Konfigurator</h3>
            <p className="text-stone-600 text-sm mb-6">Füllen Sie das Formular aus – Ihre Daten werden direkt per WhatsApp an Stylist Kevin übertragen.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Ihr Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="z.B. Sarah Müller"
                    className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Telefon / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="z.B. 0176 12345678"
                    className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Gewünschte Behandlung</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                >
                  <option value="Neumodellage (Gel & Acryl)">Neumodellage (Gel & Acryl) – ab 42 €</option>
                  <option value="Auffüllen / Refill">Auffüllen / Refill – ab 32 €</option>
                  <option value="Babyboomer & French Ombré">Babyboomer & French Ombré – ab 38 €</option>
                  <option value="Shellac Naturnagel">Shellac Naturnagel – ab 28 €</option>
                  <option value="Wellness Pediküre">Wellness Pediküre – ab 35 €</option>
                  <option value="Klassische Maniküre">Klassische Maniküre – ab 22 €</option>
                  <option value="Nail Art & Individuelles Design">Nail Art & Individuelles Design – nach Absprache</option>
                  <option value="Express Nagelreparatur">Express Nagelreparatur – ab 4 €</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Wunschdatum (optional)</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Bevorzugte Tageszeit</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                  >
                    <option value="Vormittags (09:30 - 12:00)">Vormittags (09:30 - 12:00)</option>
                    <option value="Mittags (12:00 - 15:00)">Mittags (12:00 - 15:00)</option>
                    <option value="Nachmittags (15:00 - 18:00)">Nachmittags (15:00 - 18:00)</option>
                    <option value="Spätnachmittag / Feierabend">Spätnachmittag / Feierabend</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">Notiz / Farbwunsch (optional)</label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Haben Sie ein Foto oder spezielle Wünsche bezüglich Länge, Form oder Glitzer?"
                  className="w-full bg-white border border-[#ebdcd2] rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#b06758]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#b7e4c7]" />
                <span>Termin über WhatsApp an Kevin senden</span>
              </button>

              <p className="text-[11px] text-stone-400 text-center">
                Ihre Daten werden vertraulich behandelt und ausschließlich zur Terminabstimmung verwendet. Keine Werbeanrufe.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
