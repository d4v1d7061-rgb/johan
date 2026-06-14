import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Corte de precisión By:Johan", span: "lg:row-span-2" },
  { src: g2, alt: "Resultado de corte moderno con barba" },
  { src: g3, alt: "Herramientas de barbería premium" },
  { src: g5, alt: "Fade clásico vista trasera", span: "lg:row-span-2" },
  { src: g4, alt: "Perfilado de barba detallado" },
  { src: g6, alt: "Aplicación de producto y estilizado" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Galería</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Nuestro <span className="text-gold-gradient italic">trabajo</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Una muestra de los cortes y estilos que llevamos a cada cliente.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3 lg:auto-rows-[280px]">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="h-px w-10 bg-gold" />
                <p className="mt-3 text-sm font-medium uppercase tracking-widest text-foreground">
                  By:Johan
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
