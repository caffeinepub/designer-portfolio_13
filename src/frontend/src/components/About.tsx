import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const emphasisPoints = [
  {
    title: "Design Practice Leadership",
    description:
      "I build and scale design teams, establish shared standards, and create the conditions for design to have strategic influence across the organization.",
  },
  {
    title: "Product Strategy & Vision",
    description:
      "I work at the intersection of user insight and business strategy, helping product organizations translate ambiguity into a clear, defensible product direction.",
  },
  {
    title: "Org-Level Systems Thinking",
    description:
      "Using JTBD, Wardley Mapping, and service blueprinting, I align design decisions across teams and help organizations see how product experiences connect to their larger strategic system.",
  },
  {
    title: "Design for Trust at Scale",
    description:
      "I lead design for enterprise products where millions of decisions depend on the experience being reliable, trustworthy, and built to evolve — not just usable today.",
  },
];

export function About() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-fade py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Section label */}
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
        About
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <div>
          <h2 className="font-serif text-heading font-bold text-foreground mb-6">
            Leading design that moves organizations forward.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With 20+ years of experience leading product design in enterprise
              environments, I build teams, shape design culture, and drive the
              strategic direction of complex digital products. My work spans
              AI-led platforms, Finance &amp; Accounting systems, and
              large-scale design programs — always at the intersection of
              experience quality and business value.
            </p>
            <p>
              I specialize in the hardest problems enterprise design faces — not
              just designing the right experience, but creating the
              organizational conditions for design to succeed at scale. From
              shaping design strategy with C-suite stakeholders to mentoring and
              growing design teams, I work at the level where design decisions
              become business decisions.
            </p>
            <p>
              My approach combines strategic frameworks — Jobs-to-be-Done,
              Wardley Mapping, systems thinking — with hands-on design
              leadership. I partner with product, engineering, and executive
              leadership to build the shared language, shared standards, and
              shared trust that great products require.
            </p>
          </div>
        </div>

        {/* Right: Illustration + Emphasis Points */}
        <div className="space-y-8">
          {/* Profile illustration */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src="/assets/generated/profile-illustration.dim_400x400.png"
                alt="Profile illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Emphasis points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emphasisPoints.map((point) => (
              <div
                key={point.title}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-3" />
                <h3 className="font-serif text-sm font-semibold text-foreground mb-1">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
