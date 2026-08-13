import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="section-pad relative border-y border-border/60">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Services"
            title="What I deliver"
            description="Capabilities shaped by a decade of mission-critical .NET and Azure delivery in healthcare and fintech."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionReveal key={service.title} delay={index * 0.05}>
                <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:border-accent/40 hover:bg-accent-soft">
                  <div className="mb-5 inline-flex rounded-lg border border-border bg-background-elevated p-3 text-accent transition group-hover:border-accent/40">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
