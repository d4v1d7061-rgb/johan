import { Scissors, Wind, type LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; desc: string; price?: string };

// Custom inline icons for variety
const BeardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11V8a7 7 0 0 1 14 0v3" />
    <path d="M5 11c0 4 3 8 7 8s7-4 7-8" />
    <path d="M9 14c.8.6 1.8 1 3 1s2.2-.4 3-1" />
  </svg>
);

const RazorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l6-6" />
    <rect x="8" y="3" width="13" height="6" rx="1" transform="rotate(45 14.5 6)" />
    <path d="M9 14l1 1" />
  </svg>
);

const services: Service[] = [
  { icon: Scissors, title: "Corte Clásico", desc: "Cortes atemporales ejecutados con técnica tradicional y precisión absoluta.", price: "Desde $10" },
  { icon: Scissors, title: "Corte Moderno", desc: "Estilos contemporáneos: fades, texturizados y tendencias actuales.", price: "Desde $12" },
  { icon: BeardIcon as unknown as LucideIcon, title: "Barba & Perfilado", desc: "Diseño y perfilado de barba con toalla caliente y aceites premium.", price: "Desde $8" },
  { icon: RazorIcon as unknown as LucideIcon, title: "Diseño Personalizado", desc: "Líneas, figuras y diseños únicos creados a la medida de tu estilo.", price: "Desde $15" },
  { icon: Wind, title: "Tratamientos Capilares", desc: "Hidratación, mascarillas y cuidado profesional para tu cabello.", price: "Desde $20" },
];

export function Services() {
  return (
    <section id="servicios" className="relative border-y border-border/60 bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Servicios</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Servicios <span className="text-gold-gradient italic">de autor</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Cada servicio está diseñado para realzar tu estilo y entregar una experiencia inolvidable.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold transition-transform duration-500 group-hover:scale-110">
                <s.icon className="h-7 w-7" />
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              {s.price && (
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Precio</span>
                  <span className="font-display text-lg font-semibold text-gold">{s.price}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
