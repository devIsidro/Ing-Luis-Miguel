import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { buildWaLink } from "@/lib/contact";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-testid="whatsapp-float-button"
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebf5a] text-white font-bold px-5 py-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_50px_rgba(37,211,102,0.6)] transition-all pulse-glow ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Solicita tu cotización</span>
    </a>
  );
}
