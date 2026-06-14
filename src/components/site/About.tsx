import { Award, Scissors, Sparkles } from "lucide-react";

const values = [
  { icon: Award, title: "Excelencia", desc: "Cortes de alta calidad ejecutados con precisión." },
  { icon: Scissors, title: "Maestría", desc: "Técnicas clásicas y contemporáneas en cada servicio." },
  { icon: Sparkles, title: "Exclusividad", desc: "Atención personalizada en un ambiente único." },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
                Sobre Nosotros
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Una experiencia <span className="text-gold-gradient italic">premium</span> donde cada detalle importa
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">By:Johan</span> nace con la idea de ofrecer
              una experiencia premium donde cada detalle importa. Nuestro compromiso es brindar
              cortes de alta calidad, atención personalizada y un ambiente exclusivo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Más que una barbería, somos un espacio dedicado al hombre moderno que valora
              el estilo, la precisión y la elegancia atemporal.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-gold/40 hover:shadow-elegant"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gold/5 blur-2xl transition-all group-hover:bg-gold/10" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
