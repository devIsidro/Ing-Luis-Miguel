import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { buildWaLink, TEL_LINK, PHONE_DISPLAY } from "@/lib/contact";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#porque" },
    { label: "Galería", href: "#galeria" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Sobre el técnico", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-2 font-display font-black text-xl md:text-2xl tracking-tight shrink-0"
        >
          <span className="text-yellow-400">J&amp;H</span>
          <span className="hidden sm:inline text-white whitespace-nowrap">
            Electricidad <span className="text-zinc-500">/</span>{" "}
            <span className="text-blue-400">Plomería</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.replace("#", "")}`}
              className="text-xs xl:text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TEL_LINK}
            data-testid="header-call-btn"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-yellow-400 transition-colors px-3 py-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={buildWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-whatsapp-btn"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            aria-label="Abrir menú"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800 px-4 py-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.href.replace("#", "")}`}
              className="text-base font-medium text-zinc-200 hover:text-yellow-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TEL_LINK}
            data-testid="mobile-call"
            className="text-base font-semibold text-yellow-400 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
