import { Phone, AlertTriangle, Clock, MapPin } from 'lucide-react';

export interface EmergencyBannerProps {
  serviceName?: string;
  phone: string;
  city: string;
  responseTime?: string;
  isAvailable247?: boolean;
}

export const EmergencyBanner = ({
  serviceName = 'Schlüsseldienst & Notfall-Reparatur',
  phone,
  city,
  responseTime = '20–40 Minuten vor Ort',
  isAvailable247 = true
}: EmergencyBannerProps) => {
  const cleanPhone = phone.replace(/\s+/g, '');

  return (
    <div className="bg-red-600 text-white shadow-xl relative z-30">
      <div className="container mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Status & Service */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <AlertTriangle className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs uppercase tracking-widest font-black text-amber-200">
                  {isAvailable247 ? '24h Notdienst aktiv' : 'Notfall-Service'}
                </span>
                <span className="text-xs text-white/80">· {serviceName}</span>
              </div>
              <div className="text-sm sm:text-base font-bold flex items-center justify-center md:justify-start gap-3 mt-0.5">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {responseTime}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Einsatzgebiet {city}</span>
              </div>
            </div>
          </div>

          {/* Quick Dial Button */}
          <a
            href={`tel:${cleanPhone}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white text-red-700 font-extrabold text-base shadow-lg hover:bg-amber-100 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Jetzt Notdienst anrufen: {phone}</span>
          </a>

        </div>
      </div>
    </div>
  );
};
