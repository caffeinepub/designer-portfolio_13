import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const handleViewWork = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1440x900.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      {/* Subtle radial accent */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.13 65), transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl animate-fade-in-up">
        {/* Eyebrow */}
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
          Product Design Leader
        </p>

        {/* Headline */}
        <h1 className="font-serif text-display font-bold text-foreground mb-6 leading-tight">
          Leading design that shapes systems, strategy, and business outcomes.
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-light">
          I build and lead design practices for AI-driven, enterprise-scale
          products — where complexity demands clarity and strategy demands
          craft.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={handleViewWork}
            size="lg"
            className="rounded-full px-8 font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-medium border-foreground/20 hover:border-primary hover:text-primary transition-colors"
            asChild
          >
            <a
              href="/assets/resume/sajith-surendran-resume.pdf"
              download="sajith-surendran-resume.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
