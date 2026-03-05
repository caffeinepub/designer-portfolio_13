import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-fade py-28 px-6 max-w-6xl mx-auto"
    >
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
        Get in Touch
      </p>

      <div className="max-w-2xl">
        <h2 className="font-serif text-heading font-bold text-foreground mb-6">
          Let's build something that matters — together.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Whether you're looking for a design leader to join your executive
          team, a strategic partner to shape your AI or enterprise product
          direction, or a design practice builder for a complex organization —
          I'd welcome the conversation. I typically respond within 48 hours.
        </p>

        {/* Contact links */}
        <div className="flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/sajith-suru-5627527/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </span>
            Connect on LinkedIn
          </a>

          <a
            href="mailto:sajithsuru@gmail.com"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
            </span>
            sajithsuru@gmail.com
          </a>

          <a
            href="tel:+918105000133"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
            </span>
            +91 8105000133
          </a>
        </div>
      </div>
    </section>
  );
}
