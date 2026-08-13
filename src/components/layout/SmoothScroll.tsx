"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        autoRaf: true,
      });
    } catch {
      // Smooth scroll is progressive enhancement only
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
