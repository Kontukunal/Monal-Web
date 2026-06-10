import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../hooks/useUiAnimations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ *
 *  Shared graphic + UI primitives — the visual language of the site.
 * ------------------------------------------------------------------ */

/* Radiant asterisk / burst flower */
export const Asterisk = ({ className = "", spin = false, petals = 12 }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden="true"
    className={`${className} ${spin ? "animate-spin-slow" : ""}`}
  >
    {Array.from({ length: petals }).map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="26"
        rx="6.4"
        ry="24"
        transform={`rotate(${(i * 360) / petals} 50 50)`}
      />
    ))}
  </svg>
);

/* Chunky up-right pointing arrow */
export const Arrow = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
    stroke="currentColor"
    strokeWidth="19"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M30 90 L95 25" />
    <path d="M55 25 L95 25 L95 65" />
  </svg>
);

/* Small inline arrow glyph */
export const ArrowGlyph = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

/* Section eyebrow — a small rounded chip with a coloured dot.
   tone "light" sits on light backgrounds, "dark" on dark panels. */
export const Eyebrow = ({
  children,
  className = "",
  dot = "bg-royal",
  tone = "light",
}) => {
  const tones = {
    light: "bg-mist border-line text-ink/70",
    dark: "bg-white/10 border-white/20 text-white/80",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] ${tones[tone]} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      {children}
    </span>
  );
};

/* Pill button — the single CTA component across the site.
   variants: primary (purple) · dark (black) · light (white/outline) · ghost (on dark) */
export const Pill = ({
  as = "button",
  children,
  className = "",
  variant = "primary",
  magnetic = true,
  ...rest
}) => {
  const Tag = as;
  const styles = {
    primary: "bg-royal text-white hover:bg-violet shadow-[0_14px_30px_-12px_rgba(91,70,232,0.7)]",
    dark: "bg-ink text-white hover:bg-royal",
    light: "bg-paper text-ink border border-line hover:border-ink/30",
    ghost: "bg-transparent text-white border border-white/35 hover:bg-white hover:text-ink",
  };
  return (
    <Tag
      {...(magnetic ? { "data-magnetic": "0.3" } : {})}
      className={`group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-semibold tracking-[0.02em] transition-all duration-300 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      <ArrowGlyph className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Tag>
  );
};

/* Scroll-velocity reactive infinite marquee */
export const Marquee = ({
  children,
  className = "",
  speed = 30,
  reverse = false,
}) => {
  const trackRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const track = trackRef.current;

      gsap.set(track, { xPercent: reverse ? -50 : 0 });
      const tween = gsap.to(track, {
        xPercent: reverse ? 0 : -50,
        duration: speed,
        ease: "none",
        repeat: -1,
      });

      let current = 1;
      let target = 1;
      const tick = () => {
        target += (1 - target) * 0.05;
        current += (target - current) * 0.2;
        tween.timeScale(current);
      };
      gsap.ticker.add(tick);

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          target = 1 + gsap.utils.clamp(0, 5, Math.abs(self.getVelocity()) / 380);
        },
      });

      return () => {
        gsap.ticker.remove(tick);
        st.kill();
        tween.kill();
      };
    },
    { scope: trackRef },
  );

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className={`flex w-max ${className}`}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
