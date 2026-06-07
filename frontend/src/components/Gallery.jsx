import { useState } from "react";
import { Camera, X } from "lucide-react";

// Real photos of Ing. Luis Miguel + remaining placeholders (will be replaced with more real photos)
const images = [
  {
    src: "/gallery/01.jpg",
    caption: "Preparación de tubería hidráulica",
    real: true,
  },
  {
    src: "/gallery/02.jpg",
    caption: "Servicio de cisterna",
    real: true,
  },
  {
    src: "/gallery/03.jpg",
    caption: "Instalación eléctrica en poste",
    real: true,
  },
  {
    src: "/gallery/04.jpg",
    caption: "Instalación de tablero eléctrico",
    real: true,
  },
  {
    src: "/gallery/05.png",
    caption: "Instalación de lavabo",
    real: true,
  },
  {
    src: "/gallery/06.jpg",
    caption: "Reparación de tubería industrial",
    real: true,
  },
  {
    src: "/gallery/07.jpg",
    caption: "Instalación de tubería doméstica",
    real: true,
  },
  {
    src: "/gallery/08.jpg",
    caption: "Reparación de tubería a presión",
    real: true,
  },
  {
    src: "/gallery/09.jpg",
    caption: "Reparación de contacto eléctrico",
    real: true,
  },
  {
    src: "/gallery/10.jpg",
    caption: "Unidad de servicio J&H",
    real: true,
  },
  {
    src: "/gallery/11.png",
    caption: "Mantenimiento de tinaco",
    real: true,
  },
  {
    src: "/gallery/12.jpg",
    caption: "Instalación eléctrica residencial",
    real: true,
  },
  {
    src: "/gallery/13.png",
    caption: "Instalación de soporte para TV",
    real: true,
  },
  {
    src: "/gallery/14.png",
    caption: "Reparación de sistema de bombeo",
    real: true,
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="galeria"
      data-testid="gallery-section"
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#08080B] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase mb-4">
              — Galería de trabajos
            </span>
            <h2
              data-testid="gallery-heading"
              className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05]"
            >
              Resultados <span className="text-blue-400">reales</span>,
              <br />
              trabajos <span className="text-yellow-400">profesionales</span>.
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#111114] border border-zinc-800 px-4 py-3 rounded-xl">
            <Camera className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-zinc-300">
              <strong className="text-white">+100</strong> Servicios realizados
            </span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              data-testid={`gallery-item-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-yellow-400/60 transition-all aspect-square ${
                // Make some items taller for visual interest
                i === 0 || i === 5 || i === 10
                  ? "md:row-span-2 md:aspect-[1/2]"
                  : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-left">
                <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-wider text-yellow-400 mb-1">
                  Trabajo {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs md:text-sm font-semibold text-white leading-tight">
                  {img.caption}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4 text-white" />
              </div>
              {img.real && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-lg">
                  Foto real
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          data-testid="gallery-lightbox"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            data-testid="lightbox-close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[active].src}
              alt={images[active].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-zinc-800"
            />
            <figcaption className="text-center mt-4 text-sm md:text-base text-zinc-300">
              <span className="font-bold text-yellow-400 mr-2">
                Trabajo {String(active + 1).padStart(2, "0")} —
              </span>
              {images[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
