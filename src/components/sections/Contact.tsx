"use client";

import { FormEvent, useState } from "react";
import { Link2, Mail, MapPin, Phone, Send } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-narrow">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Contact Me"
            description="Ready to discuss architecture, delivery, or a consulting engagement? Reach out directly."
          />
        </MotionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <MotionReveal delay={0.08}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Location</p>
                  <p className="mt-1 text-sm text-muted">{site.location}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-sm text-muted transition hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm text-muted transition hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <Link2 size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">LinkedIn</p>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted transition hover:text-accent"
                  >
                    linkedin.com/in/zohaibkhan0493
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-foreground">Name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full rounded-md border border-border bg-background-elevated px-4 py-3 text-foreground outline-none transition focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-foreground">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full rounded-md border border-border bg-background-elevated px-4 py-3 text-foreground outline-none transition focus:border-accent"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm">
                <span className="mb-2 block font-medium text-foreground">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-md border border-border bg-background-elevated px-4 py-3 text-foreground outline-none transition focus:border-accent"
                  placeholder="Tell me about the project or role..."
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-teal-950 transition hover:bg-accent-strong"
              >
                <Send size={16} />
                Send Message
              </button>
              {status === "sent" && (
                <p className="mt-3 text-sm text-accent">
                  Opening your email client…
                </p>
              )}
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
