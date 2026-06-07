import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  MapPin,
  Zap,
  Droplet,
} from "lucide-react";
import { buildWaLink, TEL_LINK, PHONE_DISPLAY, SOCIAL } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-black border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-black tracking-tight mb-3">
              <span className="text-yellow-400">J&amp;H</span>{" "}
              <span className="text-white">Electricidad</span>{" "}
              <span className="text-zinc-600">/</span>{" "}
              <span className="text-blue-400">Plomería</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mb-6">
              Ing. Luis Miguel Jiménez — Electricista y Plomero profesional en
              Villahermosa, Tabasco. Calidad, seguridad y confianza en cada
              proyecto.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-facebook"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500/20 border border-zinc-800 hover:border-blue-500/50 flex items-center justify-center text-zinc-300 hover:text-blue-400 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-instagram"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-pink-500/20 border border-zinc-800 hover:border-pink-500/50 flex items-center justify-center text-zinc-300 hover:text-pink-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-whatsapp"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#25D366]/20 border border-zinc-800 hover:border-[#25D366]/50 flex items-center justify-center text-zinc-300 hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" /> Electricidad
              </li>
              <li className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-blue-400" /> Plomería
              </li>
              <li>Minisplits</li>
              <li>Bombeo y tinacos</li>
              <li>Instalaciones de gas</li>
              <li>Paneles solares</li>
              <li>Otros servicios</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={TEL_LINK}
                  data-testid="footer-phone"
                  className="flex items-center gap-3 text-zinc-300 hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="flex items-center gap-3 text-zinc-300 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Atención por WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>Villahermosa y alrededores</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500" data-testid="footer-copyright">
            © {year} J&amp;H Electricidad y Plomería · Ing. Luis Miguel Jiménez.
            Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-wider">
            Villahermosa · Tabasco · México
          </p>
        </div>
      </div>
    </footer>
  );
}
