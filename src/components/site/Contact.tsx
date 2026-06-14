import { MapPin, Clock, MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import { whatsappUrl } from "./whatsapp";

const info = [
  {
    icon: MapPin,
    title: "Ubicación",
    lines: ["Valencia, Carabobo", "Venezuela"],
  },
  {
    icon: Clock,
    title: "Horarios",
    lines: ["Lun – Vie: 9:00 AM – 8:00 PM", "Sábado: 9:00 AM – 6:00 PM"],
  },
  {
    icon: MessageCircle,
    title: "Contacto directo",
    lines: ["Reserva al instante", "vía WhatsApp"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
];

export function Contact() {
  return (
    <section id="contacto" className="relative border-t border-border/60 bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Contacto</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Estamos aquí <span className="text-gold-gradient italic">para ti</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {info.map((i) => (
            <div
              key={i.title}
              className="group rounded-2xl border border-border/60 bg-card p-8 text-center transition-all hover:border-gold/40 hover:shadow-elegant"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{i.title}</h3>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                {i.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-gold hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-gold hover:text-gold"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
