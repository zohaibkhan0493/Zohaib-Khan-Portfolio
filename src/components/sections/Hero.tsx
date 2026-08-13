"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const motionProps =
    reduce || !ready
      ? {}
      : {
          initial: { y: 16 },
          animate: { y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[color:var(--accent)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />

      <div className="container-narrow section-pad relative z-10 w-full !pt-10 !pb-24">
        <motion.div {...motionProps} className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Hey! I&apos;m {site.name.split(" ")[0]}
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {site.name}
          </h1>

          <p className="mt-5 font-display text-xl font-semibold text-foreground/90 sm:text-2xl">
            {site.title}
            <span className="mx-2 text-accent">·</span>
            <span className="text-muted">{site.tagline}</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.pitch}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={site.resumePath} download>
              <Download size={16} />
              Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              Hire Me
              <ArrowDownRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
