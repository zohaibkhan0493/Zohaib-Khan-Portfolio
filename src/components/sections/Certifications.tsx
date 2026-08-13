import { Award } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/content/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative border-y border-border/60">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Microsoft Azure certified"
            description="Expert and associate credentials spanning architecture, DevOps, AI, data, and cloud administration."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <MotionReveal key={cert.name} delay={index * 0.04}>
              <article className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/40">
                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background-elevated text-accent">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
