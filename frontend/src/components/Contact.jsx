import { MessageCircle, Phone, Facebook, Instagram, MapPin, Clock } from "lucide-react";
import { buildWaLink, TEL_LINK, PHONE_DISPLAY, SOCIAL } from "@/lib/contact";

export default function Contact() {
  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Big CTA banner */}
        <div
          data-testid="contact-cta-banner"
          className="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.2),transparent_60%)]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/10 border border-black/20 rounded-full text-xs font-bold uppercase tracking-wider text-black mb-4">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                Servicio urgente
              </div>
              <h2
                data-testid="contact-heading"
                className="font-display text-3xl md:text-5xl font-black tracking-tighter text-black leading-[1.05] mb-4"
              >
                ¿Necesitas servicio urgente?
                <br />
                Contáctanos ahora.
              </h2>
              <p className="text-base md:text-lg text-black/80 max-w-xl mb-6">
                Escríbenos directo por WhatsApp y te atendemos en minutos. Sin
                complicaciones, sin intermediarios — directamente con el Ing. Luis Miguel.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-black/80 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">Villahermosa, Tabasco</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-black/30" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">Atención rápida</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold text-base md:text-lg px-6 py-5 rounded-2xl transition-all shadow-lg hover:scale-[1.02]"
              >
                <MessageCircle className="w-6 h-6" />
                Enviar mensaje por WhatsApp
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href={TEL_LINK}
                data-testid="contact-call-btn"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-900 text-white font-bold text-base md:text-lg px-6 py-5 rounded-2xl transition-all"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                {PHONE_DISPLAY}
              </a>

              {/* Social row */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-xs text-black/70 mr-2 uppercase tracking-wider font-bold">
                  Síguenos:
                </span>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-fb"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 border border-black/20 flex items-center justify-center text-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-ig"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 border border-black/20 flex items-center justify-center text-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-wa-social"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 border border-black/20 flex items-center justify-center text-black transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
