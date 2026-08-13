import { MapPin, Link2, Mail } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="About"
            title={`Hello, I am ${site.name.split(" ")[0]}`}
            description={site.summary}
          />
        </MotionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <MotionReveal delay={0.08}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Track record includes reducing cloud costs by 20–40% and improving
                system reliability to 99.95% uptime — while leading technical
                strategy across healthcare automation and financial platforms.
              </p>
              <p>
                Based in {site.location}, open to consulting engagements and
                architecture partnerships for teams that need .NET and Azure depth.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.14}>
            <div className="space-y-5 rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-foreground transition hover:text-accent"
              >
                <Mail size={18} className="text-accent" />
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition hover:text-accent"
              >
                <Link2 size={18} className="text-accent" />
                linkedin.com/in/zohaibkhan0493
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <MapPin size={18} className="text-accent" />
                {site.location}
              </p>
              <div className="border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Education
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-foreground">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{education.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {education.period} · {education.location}
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
