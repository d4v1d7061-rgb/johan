import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 lg:px-10">
        <a href="#inicio" className="font-display text-2xl font-bold">
          <span className="text-foreground">By:</span>
          <span className="text-gold-gradient">Johan</span>
        </a>
        <div className="gold-divider w-24" />
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Creado por Johan con <Heart className="h-4 w-4 fill-destructive text-destructive" />
        </p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground/70">
          © {new Date().getFullYear()} By:Johan · Valencia, Venezuela
        </p>
      </div>
    </footer>
  );
}
