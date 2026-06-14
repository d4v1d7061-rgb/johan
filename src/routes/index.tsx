import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "By:Johan — Barbería Exclusiva en Valencia, Venezuela" },
      {
        name: "description",
        content:
          "Barbería premium en Valencia, Venezuela. Cortes clásicos, modernos, barba, diseños personalizados y tratamientos capilares. Reserva por WhatsApp.",
      },
      { property: "og:title", content: "By:Johan — El estilo que define tu presencia" },
      {
        property: "og:description",
        content:
          "Experiencia premium de barbería en Valencia, Venezuela. Reserva tu cita por WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "By:Johan",
          description: "Barbería exclusiva en Valencia, Venezuela.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Valencia",
            addressRegion: "Carabobo",
            addressCountry: "VE",
          },
          areaServed: "Valencia, Venezuela",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
