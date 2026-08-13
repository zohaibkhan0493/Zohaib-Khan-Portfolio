import { ExternalLink } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Experience"
            title="My Experience"
            description="A decade building and scaling healthcare and fintech platforms — from ASP.NET modules to Azure microservices."
          />
        </MotionReveal>

        <div className="relative mt-14 space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-px">
          {experience.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <MotionReveal key={`${job.company}-${job.period}`} delay={index * 0.06}>
                <article className="relative grid gap-4 md:grid-cols-2 md:gap-10">
                  <div
                    className={`absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2 ${
                      isLeft ? "" : ""
                    }`}
                    aria-hidden
                  />

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <p className="text-sm font-semibold text-accent">{job.period}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    <div
                      className={`mt-1 flex items-center gap-2 text-muted ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-foreground transition hover:text-accent"
                        >
                          {job.company}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">{job.company}</span>
                      )}
                      <span>·</span>
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>

                  <ul
                    className={`space-y-2 pl-12 text-sm leading-relaxed text-muted md:pl-0 ${
                      isLeft
                        ? "md:col-start-2 md:pl-12"
                        : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"
                    }`}
                  >
                    {job.bullets.slice(0, 5).map((bullet) => (
                      <li key={bullet} className="relative">
                        <span className="md:hidden">• </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
