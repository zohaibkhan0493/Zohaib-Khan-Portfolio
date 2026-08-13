import { Link2, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-elevated">
      <div className="container-narrow flex flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="font-display text-lg font-bold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={site.phoneHref}
            className="rounded-md border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
