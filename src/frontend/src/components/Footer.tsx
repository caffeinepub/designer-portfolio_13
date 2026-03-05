import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "designer-portfolio",
  );

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {year} Sajith Surendran. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with{" "}
          <Heart
            className="h-3.5 w-3.5 text-primary fill-primary"
            aria-label="love"
          />{" "}
          using{" "}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
