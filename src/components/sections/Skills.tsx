import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative border-y border-border/60">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            description="The stack I use to design, ship, and operate distributed systems."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <MotionReveal key={group.category} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-accent">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background-elevated px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
