import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Download } from "lucide-react";

const highlights = [
  { label: "Domain Focus", value: "F&A & AI" },
  { label: "Design Scope", value: "Enterprise" },
  { label: "Design Level", value: "Leadership" },
];

const competencies = [
  {
    title: "Design Leadership & Practice Building",
    items: [
      "Team building, mentorship, and design culture development",
      "Design system architecture, governance & cross-team adoption",
      "Design critique frameworks and quality standards",
      "Hiring, onboarding, and growing high-performing design teams",
    ],
  },
  {
    title: "Product Strategy & AI Platform Leadership",
    items: [
      "Product vision, roadmap influence, and design strategy",
      "Agentic AI and human-in-the-loop experience strategy",
      "Jobs-to-be-Done + Wardley Mapping for capability and prioritization decisions",
      "Self-learning system design and policy-driven UX strategy",
    ],
  },
  {
    title: "Enterprise & F&A Domain Leadership",
    items: [
      "F&A workflow strategy: reconciliation, AP/AR, period close",
      "BPO operations experience and efficiency transformation",
      "Executive decision-intelligence platform design",
      "Cross-functional stakeholder leadership and C-suite alignment",
    ],
  },
];

const keyHighlights = [
  "Extensive experience leading product design in enterprise environments",
  "Built and scaled design teams across complex, multi-product organizations",
  "AI-led platform strategy — from vision through org adoption",
  "Finance & Accounting domain depth across reconciliation, AP/AR, and decision intelligence",
  "Design practice builder: systems, governance, culture, and mentorship",
];

export function Resume() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="section-fade py-28 px-6 max-w-6xl mx-auto"
    >
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
        Experience
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <h2 className="font-serif text-heading font-bold text-foreground mb-4">
            A career of design leadership — from pixels to practice to program.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            I've spent my career leading design in enterprise environments —
            building teams, shaping product strategy, and creating the
            organizational conditions for design to drive real business
            outcomes. My career spans AI-led platforms, Finance &amp; Accounting
            systems, and large-scale design programs where design leadership
            meant more than craft — it meant building trust, setting direction,
            and changing how organizations think about experience.
          </p>
        </div>
        <Button
          size="lg"
          className="flex-shrink-0 rounded-full px-8 font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          asChild
        >
          <a
            href="/assets/resume/sajith-surendran-resume.pdf"
            download="sajith-surendran-resume.pdf"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume (PDF)
          </a>
        </Button>
      </div>

      {/* Experience Highlights */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="p-6 rounded-xl border border-border bg-card text-center hover:border-primary/30 transition-colors"
          >
            <p className="font-serif text-3xl font-bold text-primary mb-1">
              {h.value}
            </p>
            <p className="text-xs text-muted-foreground tracking-wide uppercase">
              {h.label}
            </p>
          </div>
        ))}
      </div>

      {/* Key Highlights */}
      <div className="mb-16">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
          Key Highlights
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {keyHighlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Competencies */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-8">
          Core Competencies
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => (
            <div
              key={comp.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h4 className="font-serif text-base font-semibold text-foreground mb-4">
                {comp.title}
              </h4>
              <ul className="space-y-2">
                {comp.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
