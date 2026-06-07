import { Zap, Droplet, Wrench, Check, ArrowRight } from "lucide-react";
import { buildWaLink } from "@/lib/contact";

const categories = [
  {
    id: "electricidad",
    label: "Electricidad",
    accent: "yellow",
    icon: Zap,
    img: "https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    services: [
      "Instalaciones eléctricas residenciales e industriales",
      "Reparación de fallas eléctricas y cortos",
      "Instalación de paneles solares",
      "Iluminación y tableros eléctricos",
    ],
    msg: "Hola, necesito un servicio de electricidad. ¿Pueden ayudarme?",
  },
  {
    id: "plomeria",
    label: "Plomería",
    accent: "blue",
    icon: Droplet,
    img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    services: [
      "Reparación de fugas de agua y drenaje",
      "Instalación de tuberías (PPR, agua potable, drenaje)",
      "Destapado de drenajes",
      "Instalación de tinacos y bombas",
    ],
    msg: "Hola, necesito un servicio de plomería. ¿Pueden ayudarme?",
  },
  {
    id: "especiales",
    label: "Servicios Especiales",
    accent: "mixed",
    icon: Wrench,
    img: "https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=940",
    services: [
      "Instalación de minisplits",
      "Sistemas de bombeo",
      "Instalaciones de gas",
      "Remodelaciones eléctricas completas",
    ],
    msg: "Hola, necesito un servicio especial. ¿Pueden ayudarme?",
  },
];

const accentClasses = {
  yellow: {
    chip: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30",
    ring: "hover:border-yellow-400/60",
    icon: "text-yellow-400",
    iconBg: "bg-yellow-400/10 border-yellow-400/30",
    check: "text-yellow-400",
    button: "bg-yellow-400 hover:bg-yellow-300 text-black",
  },
  blue: {
    chip: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    ring: "hover:border-blue-500/60",
    icon: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    check: "text-blue-400",
    button: "bg-blue-500 hover:bg-blue-400 text-white",
  },
  mixed: {
    chip: "bg-gradient-to-r from-yellow-400/10 to-blue-500/10 text-white border-zinc-600",
    ring: "hover:border-white/40",
    icon: "text-white",
    iconBg:
      "bg-gradient-to-br from-yellow-400/20 to-blue-500/20 border-zinc-600",
    check: "text-white",
    button: "bg-white hover:bg-zinc-200 text-black",
  },
};

export default function Services() {
  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase mb-4">
            — Nuestros Servicios
          </span>
          <h2
            data-testid="services-heading"
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.05]"
          >
            Todo lo que tu hogar o negocio{" "}
            <span className="text-zinc-500">necesita.</span>
            <br />
            Un solo técnico de{" "}
            <span className="text-yellow-400">confianza</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const cls = accentClasses[cat.accent];
            return (
              <article
                key={cat.id}
                data-testid={`service-card-${cat.id}`}
                className={`group relative flex flex-col bg-[#111114] border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 ${cls.ring} hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/40 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${cls.chip}`}
                  >
                    {cat.label}
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-5 ${cls.iconBg}`}
                  >
                    <Icon className={`w-7 h-7 ${cls.icon}`} />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-5">
                    {cat.label}
                  </h3>

                  <ul className="space-y-3 mb-8 flex-1">
                    {cat.services.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 shrink-0 ${cls.check}`}
                        />
                        <span className="text-sm text-zinc-300 leading-relaxed">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWaLink(cat.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`service-cta-${cat.id}`}
                    className={`inline-flex items-center justify-center gap-2 w-full font-bold text-sm px-5 py-3.5 rounded-full transition-all ${cls.button}`}
                  >
                    Solicitar {cat.label.toLowerCase()}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
