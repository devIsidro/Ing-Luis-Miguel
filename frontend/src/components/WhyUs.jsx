import { Clock, Award, Sparkles, ShieldCheck, Wrench, MapPin } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Respuesta rápida",
    desc: "Llegamos en el menor tiempo posible a Villahermosa y colonias aledañas.",
    tone: "yellow",
  },
  {
    icon: Sparkles,
    title: "Trabajo limpio",
    desc: "Dejamos el área tal como la encontramos. Profesionalismo de principio a fin.",
    tone: "blue",
  },
  {
    icon: Wrench,
    title: "Herramienta completa",
    desc: "Llegamos con todo el material y equipo necesario. Resolvemos en la misma visita.",
    tone: "yellow",
  },
  {
    icon: ShieldCheck,
    title: "Servicio garantizado",
    desc: "Tu trabajo queda respaldado. Confianza y calidad en cada proyecto.",
    tone: "blue",
  },
];

const toneClasses = {
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/30",
};

export default function WhyUs() {
  return (
    <section
      id="porque"
      data-testid="why-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#08080B] border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
              — Por qué elegirnos
            </span>
            <h2
              data-testid="why-heading"
              className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05] mb-6"
            >
              No es solo un técnico.
              <br />
              Es tu <span className="text-yellow-400">solución</span> de confianza.
            </h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
              Con 5 años de experiencia sirviendo a familias y negocios en Villahermosa, el
              Ing. Luis Miguel Jiménez ha construido una reputación basada en
              responsabilidad, rapidez y calidad.
            </p>

            <div className="grid grid-cols-3 gap-4" data-testid="why-stats">
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-yellow-400 leading-none">
                  +48
                </div>
                <div className="text-xs text-zinc-400 mt-2 uppercase tracking-wider">
                  Reseñas 5★
                </div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-blue-400 leading-none">
                  5
                </div>
                <div className="text-xs text-zinc-400 mt-2 uppercase tracking-wider">
                  Años exp.
                </div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-black text-white leading-none">
                  100%
                </div>
                <div className="text-xs text-zinc-400 mt-2 uppercase tracking-wider">
                  Garantía
                </div>
              </div>
            </div>
          </div>

          {/* Right: items grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  data-testid={`why-item-${idx}`}
                  className="group bg-[#111114] border border-zinc-800 p-6 md:p-7 rounded-2xl hover:border-zinc-600 transition-all hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${toneClasses[it.tone]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {it.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{it.desc}</p>
                </div>
              );
            })}

            {/* Highlighted bento row */}
            <div
              data-testid="why-highlight"
              className="sm:col-span-2 relative overflow-hidden bg-gradient-to-br from-yellow-400/10 via-[#111114] to-blue-500/10 border border-zinc-700 p-6 md:p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-zinc-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                    Servicio en Villahermosa y alrededores
                  </h3>
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                    Cubrimos toda el área metropolitana de Villahermosa y municipios
                    aledaños como Nacajuca, Centro y Villa Ocuiltzapotlán.
                  </p>
                </div>
                <Award className="hidden md:block w-16 h-16 text-yellow-400/30 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
