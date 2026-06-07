import { useState } from "react";
import { Plus, MessageCircle, HelpCircle } from "lucide-react";
import { buildWaLink } from "@/lib/contact";

const faqs = [
  {
    q: "¿Cuánto cuesta una visita o un diagnóstico?",
    a: "El diagnóstico inicial es gratuito si te decides a realizar el trabajo con nosotros. Para cotizar te pedimos que nos envíes fotos o videos por WhatsApp y, con base en eso, te damos un presupuesto claro antes de iniciar — sin sorpresas ni costos ocultos.",
  },
  {
    q: "¿Atienden emergencias fuera de horario?",
    a: "Sí. Aunque nuestro horario formal es de lunes a viernes 9 a.m.–5 p.m. y sábados/domingos por la mañana, atendemos emergencias (fugas mayores, cortos eléctricos, sin agua) fuera de horario por WhatsApp. Escríbenos y te respondemos lo antes posible.",
  },
  {
    q: "¿En cuánto tiempo llegan a mi domicilio?",
    a: "En Villahermosa y colonias aledañas normalmente llegamos el mismo día, dependiendo de la zona y la urgencia. En casos urgentes hacemos lo posible por estar contigo en pocas horas.",
  },
  {
    q: "¿Sus trabajos tienen garantía?",
    a: "Sí. Todos nuestros trabajos están garantizados. Si presenta alguna falla relacionada con el trabajo realizado dentro del periodo de garantía, regresamos a corregirlo sin costo adicional.",
  },
  {
    q: "¿Llegan con material y herramienta o tengo que comprarla yo?",
    a: "Llegamos con herramienta profesional completa. En cuanto al material, te recomendamos las marcas líderes (Helvex, Urrea, Coflex, Rotoplas) y podemos suministrarlo nosotros o tú lo compras — como tú prefieras.",
  },
  {
    q: "¿Qué zonas de Villahermosa cubren?",
    a: "Atendemos toda Villahermosa centro, colonias aledañas, Nacajuca, Villa Ocuiltzapotlán y municipios cercanos del Estado de Tabasco. Si tienes duda sobre tu zona, pregúntanos por WhatsApp.",
  },
  {
    q: "¿Aceptan transferencia o solo efectivo?",
    a: "Aceptamos efectivo y transferencia bancaria (SPEI). Te damos los datos al confirmar el servicio. Pago al finalizar el trabajo y siempre con tu visto bueno.",
  },
  {
    q: "¿Hacen instalaciones en obra nueva o solo reparaciones?",
    a: "Hacemos ambos: reparaciones puntuales (fugas, cortos, destapados) e instalaciones completas en obra nueva o remodelaciones (eléctrico, plomería, gas, minisplits, paneles solares). Cuéntanos tu proyecto y te asesoramos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#08080B] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase mb-4">
              — Preguntas frecuentes
            </span>
            <h2
              data-testid="faq-heading"
              className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05] mb-6"
            >
              ¿Aún tienes{" "}
              <span className="text-yellow-400">dudas</span>?
              <br />
              Estas son las más{" "}
              <span className="text-blue-400">comunes</span>.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed mb-8">
              Si tu pregunta no aparece aquí, escríbenos directo por WhatsApp. Te
              respondemos de manera personal en cuestión de minutos.
            </p>

            <a
              href={buildWaLink("Hola, tengo una duda sobre sus servicios. ¿Me puede ayudar?")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="faq-whatsapp-cta"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold text-base px-6 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Hacer una pregunta
            </a>

            <div
              className="hidden lg:flex items-center gap-3 mt-10 p-4 bg-[#111114] border border-zinc-800 rounded-2xl"
              data-testid="faq-help-note"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Respuesta rápida</div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  En horario laboral respondemos en menos de 30 minutos.
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-3" data-testid="faq-list">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    data-testid={`faq-item-${i}`}
                    className={`border rounded-2xl overflow-hidden transition-colors ${
                      isOpen
                        ? "bg-[#13131A] border-yellow-400/40"
                        : "bg-[#111114] border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      data-testid={`faq-toggle-${i}`}
                      className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6 group"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span
                          className={`shrink-0 font-display text-sm font-black tracking-tight ${
                            isOpen ? "text-yellow-400" : "text-zinc-500"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`text-base md:text-lg font-semibold leading-snug ${
                            isOpen ? "text-white" : "text-zinc-200 group-hover:text-white"
                          }`}
                        >
                          {f.q}
                        </h3>
                      </div>
                      <Plus
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-yellow-400" : "text-zinc-500"
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          data-testid={`faq-answer-${i}`}
                          className="px-5 md:px-6 pb-6 pl-14 md:pl-[60px] text-sm md:text-base text-zinc-300 leading-relaxed"
                        >
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
