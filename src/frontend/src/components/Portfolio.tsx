import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  users: string;
  thumbnail: string;
  problemStatement: string;
  painPoints: string[];
  approach: string[];
  outcomes: string[];
  metrics?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Led Reconciliation Platform for F&A",
    category: "Finance & Accounting · AI",
    users: "BPO Operations Teams",
    thumbnail: "/assets/generated/project-reconciliation.dim_800x450.png",
    problemStatement:
      "I led the end-to-end redesign of a manual reconciliation platform, transforming a process that was slowing down entire finance operations teams and creating systemic risk during period close.",
    painPoints: [
      "High manual effort across every reconciliation cycle",
      "Low confidence during period close due to error-prone processes",
      "Repetitive exception handling consuming significant BPO team bandwidth",
    ],
    approach: [
      "Led JTBD discovery across BPO operations to reframe user intent beyond surface tasks",
      "Directed end-to-end workflow redesign, eliminating redundant handoffs and decision bottlenecks",
      "Defined the AI-assisted matching and exception-handling experience strategy",
      "Drove experience simplification aligned to BPO user mental models and operational rhythms",
    ],
    outcomes: [
      "Transformed period-close from a high-stress bottleneck into a reliable, confident operation",
      "Established AI-assisted reconciliation as a trusted capability across the organization",
      "Created a scalable experience foundation for future automation expansion",
    ],
    metrics: ["87% reduction in manual work"],
  },
  {
    id: 2,
    title: "DOAR – Digital Operations Assets Repository",
    category: "Enterprise Platform · AI",
    users: "Product Leaders & C-Suite Executives",
    thumbnail: "/assets/generated/project-doar.dim_800x450.png",
    problemStatement:
      "I led the strategic design of an executive intelligence platform, solving a fragmented information landscape that was degrading leadership decision quality across a complex digital operations organization.",
    painPoints: [
      "Lack of centralized visibility into digital operations",
      "Poor discoverability of operational intelligence and key assets",
      "Limited executive-level clarity for timely, informed decisions",
    ],
    approach: [
      "Directed experience mapping across the full operational intelligence journey for multiple leadership personas",
      "Established role-based information architectures for PMs, directors, and executive stakeholders",
      "Defined the AI-led insight discovery strategy to surface proactive, decision-relevant intelligence",
      "Built a decision-first IA model that prioritized action and accountability at every level",
    ],
    outcomes: [
      "Gave leadership a shared operational picture — reducing misalignment and decision lag",
      "Elevated design from screen-level execution to strategic enabler of organizational clarity",
      "Established a scalable intelligence architecture that continues to grow with the organization",
    ],
  },
  {
    id: 3,
    title: "Design System for F&A Applications",
    category: "Design Systems · Enterprise",
    users: "Product, Engineering & Design Teams",
    thumbnail: "/assets/generated/project-design-system.dim_800x450.png",
    problemStatement:
      "I founded and led the design system program for a portfolio of F&A products, solving a systemic problem of design debt, inconsistency, and organizational fragmentation that was slowing delivery and eroding user trust.",
    painPoints: [
      "Fragmented user experience across multiple F&A product lines",
      "Significant rework across teams building the same components independently",
      "Accessibility gaps creating compliance risk and usability barriers",
    ],
    approach: [
      "Established the system-first design philosophy and governance model across the organization",
      "Led the creation of a scalable, enterprise-grade component library with accessibility compliance",
      "Built the cross-team adoption strategy and change management program",
      "Created the contribution model and design system governance to ensure long-term organizational ownership",
    ],
    outcomes: [
      "Unified the user experience across an entire F&A product portfolio",
      "Reduced design-to-development friction, accelerating delivery across multiple teams",
      "Established a design system culture that outlasted individual team changes",
    ],
  },
  {
    id: 4,
    title: "Self-Learning Agentic Workbench for Accounts Payable",
    category: "Invoice Processing · Agentic AI",
    users: "AP Operations & Finance Leadership",
    thumbnail: "/assets/generated/project-agentic-workbench.dim_800x450.png",
    problemStatement:
      "I led the design strategy for an agentic AI workbench for accounts payable — a product that required redefining how humans and AI share decision authority at operational scale.",
    painPoints: [
      "High exception volume overwhelming AP operations teams",
      "Repetitive manual decisions consuming expert time on routine cases",
      "Frequent policy changes requiring constant retraining and process updates",
    ],
    approach: [
      "Defined the human-in-the-loop design philosophy and the trust model for agentic decision-making",
      "Led JTBD + Wardley Mapping to establish which capabilities AI should own vs. escalate to humans",
      "Directed the design of policy-driven learning workflows that adapt to organizational rule changes",
      "Shaped the experience strategy balancing automation efficiency with human oversight and accountability",
    ],
    outcomes: [
      "Established agentic AI as a trusted, production-ready tool for AP operations teams",
      "Built a reusable human-AI collaboration design pattern now applied across the broader platform",
      "Reduced expert cognitive load by shifting routine exception handling fully to AI — with designed-in trust",
    ],
    metrics: ["80% reduction in exception processing time"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`bg-card border border-border rounded-xl overflow-hidden card-hover cursor-pointer transition-all duration-300 ${
        expanded ? "shadow-card-hover" : ""
      }`}
      onClick={() => setExpanded((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setExpanded((v) => !v);
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="text-xs font-medium bg-background/90 text-foreground border-0"
          >
            {project.category}
          </Badge>
        </div>
        {project.metrics && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground"
              >
                {metric}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground leading-snug mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-primary font-medium tracking-wide">
              Users: {project.users}
            </p>
          </div>
          <button
            type="button"
            className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Problem Statement */}
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.problemStatement}
        </p>
      </div>

      {/* Expanded Detail */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className="px-6 pb-6 border-t border-border pt-6 space-y-6">
          {/* Pain Points */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Key Pain Points
            </h4>
            <ul className="space-y-2">
              {project.painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Approach
            </h4>
            <ul className="space-y-2">
              {project.approach.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-primary/40 text-primary text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Outcome &amp; Impact
            </h4>
            {project.metrics && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="text-sm font-bold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}
            <ul className="space-y-2">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-fade py-28 px-6 max-w-6xl mx-auto"
    >
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
        Selected Work
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h2 className="font-serif text-heading font-bold text-foreground max-w-lg">
          Work I've led that created real organizational change.
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs md:text-right">
          Each case study reflects design leadership — strategy, direction, and
          outcome.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
