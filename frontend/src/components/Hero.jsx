import { MessageCircle, Phone, Star, MapPin, Zap, Droplet, Award, BadgeCheck } from "lucide-react";
import { buildWaLink, TEL_LINK, PHONE_DISPLAY } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633319987325-aae32f3d8dd3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 fade-up">
          {/* Location badge */}
          <div
            data-testid="hero-location-badge"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-zinc-700 rounded-full mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-zinc-200">
              Villahermosa, Tabasco · Servicio en la ciudad y alrededores
            </span>
          </div>

          {/* Heading */}
          <h1
            data-testid="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] mb-6"
          >
            Electricista y plomero
            <br />
            <span className="inline-flex items-center gap-3">
              <Zap className="w-10 h-10 lg:w-16 lg:h-16 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">de confianza</span>
            </span>
            <br />
            en{" "}
            <span className="text-blue-400 inline-flex items-center gap-3">
              Villahermosa
              <Droplet className="w-8 h-8 lg:w-12 lg:h-12 text-blue-400 fill-blue-400" />
            </span>
          </h1>

          <p
            data-testid="hero-subheading"
            className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8"
          >
            Respuesta rápida, trabajo limpio y garantizado. Con 5 años de experiencia
            resolviendo fugas, fallas eléctricas, instalaciones y emergencias.
          </p>

          {/* Social proof row */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10" data-testid="hero-social-proof">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                +48 reseñas 5★ en Google
              </span>
            </div>
            <div className="h-6 w-px bg-zinc-700" />
            <span className="text-sm font-semibold text-white">5 años de experiencia</span>
            <div className="h-6 w-px bg-zinc-700" />
            <span className="text-sm font-semibold text-white">Garantía total</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-cta"
              className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold text-base md:text-lg px-8 py-5 rounded-full transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar servicio por WhatsApp
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
            <a
              href={TEL_LINK}
              data-testid="hero-call-cta"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border-2 border-zinc-700 hover:border-yellow-400 text-white font-bold text-base md:text-lg px-8 py-5 rounded-full transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-yellow-400" />
              Llamar {PHONE_DISPLAY}
            </a>
          </div>
          </div>

          {/* Logo column */}
          <div className="lg:col-span-4 order-first lg:order-last flex justify-center lg:justify-end fade-up">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              {/* Glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-yellow-400/20 to-transparent blur-3xl rounded-full"
              />
              <div className="relative rounded-3xl overflow-hidden border border-zinc-700/80 bg-[#0F0F13]/60 backdrop-blur-sm shadow-2xl">
                <img
                  src="/brand/luis-miguel-jimenez.png"
                  alt="Ing. Luis Miguel Jiménez — Maestro Plomero y Electricista"
                  data-testid="hero-brand-logo"
                  className="relative w-full h-auto object-contain"
                />
              </div>

              {/* Maestro badge — top left */}
              <div
                data-testid="hero-experience-badge"
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-yellow-400 text-black px-3 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(234,179,8,0.4)] flex items-center gap-2"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="leading-tight">
                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                    Maestro
                  </div>
                  <div className="text-xs sm:text-sm font-black">5+ años</div>
                </div>
              </div>

              {/* Verified badge — bottom right */}
              <div
                data-testid="hero-verified-badge"
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#25D366] text-white px-3 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.5)] flex items-center gap-2"
              >
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="leading-tight">
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider opacity-90">
                    Verificado
                  </div>
                  <div className="text-xs sm:text-sm font-bold">Google 5★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none z-[5]" />
    </section>
  );
}
