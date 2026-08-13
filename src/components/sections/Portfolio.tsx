"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/content/projects";

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section-pad relative">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Work"
            description="Selected clients and platforms across healthcare, pharmacy, verification, and fintech."
          />
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-accent text-teal-950"
                      : "border border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-28px_var(--glow)]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition group-hover:text-accent">
                Visit site
                <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
