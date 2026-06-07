import { MapPin, Clock } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "9:00 a.m. – 5:00 p.m." },
  { day: "Martes", hours: "9:00 a.m. – 5:00 p.m." },
  { day: "Miércoles", hours: "9:00 a.m. – 5:00 p.m." },
  { day: "Jueves", hours: "9:00 a.m. – 5:00 p.m." },
  { day: "Viernes", hours: "9:00 a.m. – 5:00 p.m." },
  { day: "Sábado", hours: "7:00 – 9:00 a.m." },
  { day: "Domingo", hours: "7:00 – 9:00 a.m." },
];

function todayIdx() {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

export default function LocationHours() {
  const today = todayIdx();
  return (
    <section
      id="ubicacion"
      data-testid="location-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#08080B] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
            — Ubicación y horarios
          </span>
          <h2
            data-testid="location-heading"
            className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05]"
          >
            Encuéntranos en{" "}
            <span className="text-blue-400">Villahermosa</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Map */}
          <div
            data-testid="map-container"
            className="lg:col-span-8 bg-[#111114] border border-zinc-800 rounded-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8 border-b border-zinc-800">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                Villahermosa, Tabasco
              </h3>
              <p className="text-sm text-zinc-400">
                Centro y colonias aledañas · Villa Ocuiltzapotlán
              </p>
            </div>
            <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-black">
              <iframe
                title="Ubicación J&H Electricidad y Plomería"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.8720640991432!2d-92.8629926!3d18.123698300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee712691cf01b1%3A0xd4a7529eb75f330c!2sIng.%20Luis%20Miguel%20Jim%C3%A9nez%20%5B%20Electricista%2C%20Plomero%20%5D!5e0!3m2!1ses-419!2smx!4v1777491731263!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-map-iframe"
              />
            </div>
          </div>

          {/* Hours */}
          <div
            data-testid="hours-container"
            className="lg:col-span-4 bg-[#111114] border border-zinc-800 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-yellow-400" />
              Horario de atención
            </h3>
            <ul className="divide-y divide-zinc-800">
              {schedule.map((s, i) => (
                <li
                  key={s.day}
                  data-testid={`schedule-${i}`}
                  className={`flex items-center justify-between py-3 ${
                    i === today ? "text-yellow-400 font-bold" : "text-zinc-300"
                  }`}
                >
                  <span className="text-sm uppercase tracking-wider flex items-center gap-2">
                    {i === today && <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />}
                    {s.day}
                  </span>
                  <span className="text-sm">{s.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
              <p className="text-xs text-yellow-300 leading-relaxed">
                <strong>Emergencias:</strong> escríbenos por WhatsApp fuera de horario
                y te respondemos lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
