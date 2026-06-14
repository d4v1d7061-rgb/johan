import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "./whatsapp";

export function Booking() {
  return (
    <section id="reservas" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Reservas</span>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display text-4xl font-bold leading-[1.1] sm:text-6xl">
          ¿Listo para renovar
          <br />
          <span className="text-gold-gradient italic">tu estilo?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Agenda tu cita en segundos. Te confirmamos disponibilidad directamente por WhatsApp.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-gold px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-gold sm:text-base"
          >
            <MessageCircle className="h-6 w-6" />
            Reservar por WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
          Respuesta inmediata · Lun – Sáb
        </p>
      </div>
    </section>
  );
}
