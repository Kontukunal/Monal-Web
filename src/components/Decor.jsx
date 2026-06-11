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

/* Facets — an abstract field of low-poly triangular shards echoing the
   faceted MONAL logo. Purely decorative ambient brand texture; keep the
   opacity low (it's meant to be felt, not seen). Position it absolutely
   on a section and let it bleed off an edge. */
const FACET_SHARDS = [
  { p: "0,40 46,8 30,72", c: "#1e40af" },
  { p: "46,8 96,30 30,72", c: "#be185d" },
  { p: "96,30 30,72 92,96", c: "#ec4899" },
  { p: "92,96 30,72 140,86", c: "#fb7185" },
  { p: "96,30 158,12 140,86", c: "#f97316" },
  { p: "158,12 200,52 140,86", c: "#facc15" },
  { p: "200,52 140,86 196,112", c: "#7c5cff" },
  { p: "46,8 96,30 100,-6", c: "#3b82f6" },
];

export const Facets = ({ className = "", opacity = 0.1 }) => (
  <svg
    viewBox="0 0 200 110"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
    style={{ opacity }}
    className={`pointer-events-none ${className}`}
  >
    {FACET_SHARDS.map((s, i) => (
      <polygon key={i} points={s.p} fill={s.c} />
    ))}
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
   The filled variants (primary/dark/accent) "paint" themselves with the
   MONAL logo artwork via .bg-pill-vibrant, so buttons share the same
   multi-colour brand identity as the headline highlights.
   variants: primary · dark · accent (logo-fill) · light · ghost (outlined) */
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
    primary: "bg-pill-vibrant text-white shadow-[0_14px_30px_-12px_rgba(20,17,30,0.55)]",
    dark: "bg-pill-vibrant text-white",
    accent: "bg-pill-vibrant text-white",
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
