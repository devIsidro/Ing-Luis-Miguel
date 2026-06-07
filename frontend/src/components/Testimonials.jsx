import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Debora Edith Espinosa Sarabia",
    text: "Técnico muy profesional, responsable y eficiente. Realizó la instalación de un contactor con excelente calidad y además explicó claramente su funcionamiento. Dejó todo limpio y ordenado. Lo recomiendo al 100%.",
  },
  {
    name: "Ilimay Eez",
    text: "Después de varios plomeros sin resolver el problema, finalmente encontró la solución. Reparó el sistema de agua de forma rápida y efectiva. Excelente servicio y atención técnica.",
  },
  {
    name: "Juan Lopez Balboa",
    text: "Muy satisfecho con el servicio, la atención y el profesionalismo con el que trabaja. Totalmente recomendado.",
  },
  {
    name: "Alfonso Tagle Martinez",
    text: "Excelente servicio y gran profesionalismo. Muy responsable, rápido y eficiente. 100% recomendable.",
  },
  {
    name: "Alejandra Padilla",
    text: "Excelente servicio. Cumplió con el trabajo en el tiempo acordado y con una calidad impecable.",
  },
  {
    name: "Nine",
    text: "Resolví todos los problemas de mi hogar gracias a su trabajo. Servicio limpio, rápido y puntual. Llegó exactamente en la fecha acordada.",
  },
  {
    name: "César Emilio",
    text: "Excelente servicio. Muy profesional, rápido y eficiente. Solucionó el problema de plomería de manera impecable. Lo recomiendo ampliamente.",
  },
  {
    name: "Snowhead BS",
    text: "Tenía un problema con el llenado del tinaco y lo solucionó perfectamente. El trabajo quedó estético y además recomendó los mejores materiales. Excelente servicio.",
  },
];

// Pleasant background colors for avatars
const avatarColors = [
  "from-yellow-400 to-yellow-600",
  "from-blue-400 to-blue-600",
  "from-emerald-400 to-emerald-600",
  "from-rose-400 to-rose-600",
  "from-purple-400 to-purple-600",
  "from-orange-400 to-orange-600",
  "from-cyan-400 to-cyan-600",
  "from-pink-400 to-pink-600",
];

function initials(name) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]).join("").toUpperCase();
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase mb-4">
              — Testimonios reales
            </span>
            <h2
              data-testid="testimonials-heading"
              className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05]"
            >
              Lo que dicen nuestros{" "}
              <span className="text-yellow-400">clientes</span>.
            </h2>
          </div>
          <div
            className="flex items-center gap-3 bg-[#111114] border border-zinc-800 px-5 py-4 rounded-2xl"
            data-testid="testimonials-rating-summary"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-none">
                5.0
              </div>
              <div className="text-xs text-zinc-400 mt-1">Más de 48 reseñas en Google</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              data-testid={`testimonial-${idx}`}
              className="relative bg-[#111114] border border-zinc-800 p-6 rounded-2xl flex flex-col hover:border-yellow-400/40 transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-zinc-800" />
              <div className="flex gap-1 mb-3" data-testid={`testimonial-stars-${idx}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-sm md:text-base text-zinc-200 leading-relaxed mb-5 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center font-display font-black text-black text-sm shrink-0`}
                >
                  {initials(t.name)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate" title={t.name}>
                    {t.name}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Cliente verificado · Google
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
