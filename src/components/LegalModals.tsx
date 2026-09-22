import { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (type) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-[#ebdcd2] text-stone-800 rounded-3xl shadow-2xl flex flex-col z-10"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain text-stone-600 text-sm leading-relaxed space-y-4">
          {type === 'impressum' ? (
            <>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Angaben gemäß § 5 DDG</h3>
              <p>
                <strong>New York Nails Horrem</strong><br />
                Inhaber: Kevin<br />
                Hauptstraße 177-179<br />
                50169 Kerpen-Horrem<br />
                Deutschland
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">Kontakt</h4>
              <p>
                Telefon: 02273 / 9919337<br />
                Mobil / WhatsApp: 0176 80211120<br />
                E-Mail: kontakt@newyorknails-horrem.de
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">Gewerbeanmeldung</h4>
              <p>
                Gewerbeanmeldung nach § 14 GewO erteilt durch die Stadt Kerpen.
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-serif font-bold text-stone-900 text-lg">Datenschutzerklärung</h3>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO).
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">1. Verantwortliche Stelle</h4>
              <p>
                New York Nails Horrem, Hauptstraße 177-179, 50169 Kerpen-Horrem.<br />
                Telefon: 02273 / 9919337 • E-Mail: kontakt@newyorknails-horrem.de
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">2. Datenerfassung auf dieser Website</h4>
              <p>
                Diese Website setzt keine invasiven Tracking-Cookies oder Werbe-Pixel ein. Wenn Sie uns per WhatsApp oder Telefon kontaktieren, werden Ihre übermittelten Kontaktdaten ausschließlich für die Bearbeitung Ihrer Terminanfrage gespeichert und verarbeitet.
              </p>

              <h4 className="font-serif font-bold text-stone-900 text-base pt-2">3. Ihre Rechte</h4>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
