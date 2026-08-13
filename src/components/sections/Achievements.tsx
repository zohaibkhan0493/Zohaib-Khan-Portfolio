import { MotionReveal } from "@/components/ui/MotionReveal";
import { achievements } from "@/content/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-sky-500/10"
        aria-hidden
      />
      <div className="container-narrow relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <MotionReveal key={item.label} delay={index * 0.06}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  {item.value}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
