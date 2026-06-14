import { MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-barbershop.jpg";
import { whatsappUrl } from "./whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior de barbería de lujo By:Johan"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Valencia · Venezuela
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            El estilo que define
            <br />
            <span className="text-gold-gradient italic">tu presencia</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos una barbería exclusiva en Valencia, Venezuela, dedicada a ofrecer
            cortes modernos, clásicos y una experiencia única para cada cliente.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-gold hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-gold"
            >
              Ver servicios
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { v: "+8", l: "Años" },
              { v: "+5K", l: "Clientes" },
              { v: "5★", l: "Reseñas" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
