import { Award, MessageCircle, Star, Zap, Droplet, Shield, BadgeCheck } from "lucide-react";
import { buildWaLink } from "@/lib/contact";

export default function About() {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,rgba(234,179,8,0.06),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-yellow-400/20 to-transparent blur-3xl rounded-full"
              />
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#0F0F13] shadow-2xl">
                <img
                  src="/brand/luis-miguel-jimenez.png"
                  alt="Ing. Luis Miguel Jiménez — Maestro Plomero y Electricista en Villahermosa"
                  className="w-full h-auto object-contain"
                  data-testid="about-owner-image"
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <div
                data-testid="about-verified-badge"
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#25D366] text-white px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center gap-2"
              >
                <BadgeCheck className="w-5 h-5" />
                <div className="leading-tight">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                    Verificado
                  </div>
                  <div className="text-sm font-bold">Google 5★</div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div
                data-testid="about-experience-badge"
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-yellow-400 text-black px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(234,179,8,0.4)] flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                <div className="leading-tight">
                  <div className="text-[10px] font-black uppercase tracking-wider">
                    Maestro
                  </div>
                  <div className="text-sm font-black">5+ años</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
              — Sobre el técnico
            </span>
            <h2
              data-testid="about-heading"
              className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05] mb-6"
            >
              Conoce al{" "}
              <span className="text-yellow-400">Ing. Luis Miguel</span>
              <br />
              tu maestro plomero y{" "}
              <span className="text-blue-400">electricista</span> de confianza.
            </h2>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-5">
              Soy <strong className="text-white">Luis Miguel Jiménez</strong>, técnico
              certificado con más de <strong className="text-yellow-400">5 años</strong>{" "}
              resolviendo problemas de plomería y electricidad en Villahermosa y sus
              alrededores. Atiendo cada servicio de manera personal — desde la fuga más
              pequeña hasta instalaciones completas.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed mb-8">
              Mi compromiso es simple: <strong className="text-white">llegar a tiempo</strong>,
              trabajar con <strong className="text-white">herramienta profesional</strong> y
              dejar tu hogar o negocio <strong className="text-white">impecable</strong>.
            </p>

            {/* Credentials chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8" data-testid="about-credentials">
              <div className="flex items-center gap-2 bg-[#111114] border border-zinc-800 rounded-xl px-3 py-3">
                <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-xs font-semibold text-zinc-200">
                  Electricista certificado
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#111114] border border-zinc-800 rounded-xl px-3 py-3">
                <Droplet className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-zinc-200">Maestro plomero</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111114] border border-zinc-800 rounded-xl px-3 py-3">
                <Shield className="w-5 h-5 text-white shrink-0" />
                <span className="text-xs font-semibold text-zinc-200">Trabajo garantizado</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111114] border border-zinc-800 rounded-xl px-3 py-3 col-span-2 sm:col-span-3">
                <div className="flex shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-200">
                  +48 clientes satisfechos en Google Reviews
                </span>
              </div>
            </div>

            <a
              href={buildWaLink("Hola Luis Miguel, vi tu página y me gustaría solicitar un servicio.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-whatsapp-cta"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold text-base px-6 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar con Luis Miguel por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
