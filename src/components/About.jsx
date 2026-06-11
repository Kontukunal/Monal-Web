import React from "react";
import { Eyebrow } from "./Decor";
import pearl from "../assets/Pearl.png";

/* Hexagon plate with softly ROUNDED corners (quadratic curves at each
   vertex), used as a mask so the gradient + stripes clip to the shape. */
const HEX_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M35 0 L65 0 Q75 0 79.47 8.94 L95.53 41.06 Q100 50 95.53 58.94 L79.47 91.06 Q75 100 65 100 L35 100 Q25 100 20.53 91.06 L4.47 58.94 Q0 50 4.47 41.06 L20.53 8.94 Q25 0 35 0 Z' fill='black'/%3E%3C/svg%3E\")";

const HEX_MASK_STYLE = {
  WebkitMaskImage: HEX_MASK,
  maskImage: HEX_MASK,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

/* Diagonal stripe texture overlay. */
const STRIPES = {
  backgroundImage:
    "repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 2px, transparent 2px, transparent 16px)",
};

const FEATURES = [
  { title: "Original IP", desc: "developed and owned in-house." },
  { title: "End-to-end production", desc: "from first script to final render." },
  { title: "Global distribution", desc: "across OTT, broadcast and digital." },
];

const STATS = [
  { n: "10", suffix: "+", label: "Years of craft", color: "#5b46e8" },
  { n: "25", suffix: "M+", label: "Subscribers reached", color: "#ec4899" },
  { n: "200", suffix: "+", label: "Projects delivered", color: "#fb7a3c" },
  { n: "12", suffix: "+", label: "Industry awards", color: "#3b82f6" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-mist py-12 md:py-16 overflow-hidden border-t border-line"
    >
      {/* Faint faceted brand light + grain */}
      <div className="absolute inset-0 bg-facets pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      <div className="relative max-w-295 mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <div data-reveal="up" className="mb-6">
            <Eyebrow>About Monal</Eyebrow>
          </div>
          <h2
            data-split
            className="font-display capitalize text-ink text-[clamp(2rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
          >
            Who we <span className="headline-vibrant">are.</span>
          </h2>
        </div>

        {/* Main split — Pearl image (left) + story & features (right) */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Pearl on a striped hexagon plate, breaking out for a 3-D pop */}
          <div data-reveal="left" className="relative flex justify-center">
            <div data-tilt="7" className="relative w-full max-w-sm aspect-square">
              {/* Soft pink glow complementing the lavender section */}
              <div className="absolute inset-6 rounded-full bg-accent/35 blur-[65px]" />

              {/* Hexagon plate — pink→violet brand plate against the lavender,
                  with softly rounded corners. Outer div carries a shape-
                  following drop shadow; inner div is masked to the hexagon. */}
              <div className="absolute inset-0 drop-shadow-[0_40px_60px_rgba(236,72,153,0.45)]">
                <div
                  className="absolute inset-0 bg-linear-to-br from-accent via-accent to-violet"
                  style={HEX_MASK_STYLE}
                >
                  <div className="absolute inset-0" style={STRIPES} />
                  <div className="absolute -top-6 -right-6 w-44 h-44 rounded-full bg-white/15 blur-2xl" />
                </div>
              </div>

              {/* Pearl — bigger, breaks out above the hexagon for depth */}
              <img
                src={pearl}
                alt="Monal Pearl"
                loading="lazy"
                draggable="false"
                className="absolute left-1/2 -translate-x-1/2 -top-[24%] w-[110%] max-w-none z-10 origin-bottom animate-dance drop-shadow-[0_40px_55px_rgba(20,17,30,0.5)] transition-[scale,filter] duration-300 hover:scale-105 hover:drop-shadow-[0_46px_65px_rgba(251,122,60,0.55)] select-none"
              />
            </div>
          </div>

          {/* Story + feature points */}
          <div data-reveal="right" className="flex flex-col justify-center">
            <p className="font-script-desc text-muted text-lg leading-relaxed mb-5 max-w-xl">
              Founded in 2015 in Haldwani, Monal Digital is a premium animation
              studio crafting cinematic stories, original IPs, and next-gen
              visual experiences for audiences around the world.
            </p>
            <p className="text-muted leading-relaxed mb-8 max-w-xl">
              From the first sketch to the final frame, our artists, directors,
              and engineers work as one — obsessed with detail, driven by story,
              and building worlds that travel from our desks to millions of
              screens.
            </p>

            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="group flex items-center gap-4 rounded-2xl bg-paper border border-line px-4 py-3.5 transition-all duration-300 hover:border-ink/20 hover:shadow-[0_16px_40px_-26px_rgba(12,12,12,0.5)]"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink/6 text-ink shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <p className="text-ink leading-snug">
                    <span className="font-semibold">{f.title}</span>{" "}
                    <span className="text-muted">{f.desc}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats — full-width band */}
        <div
          data-reveal-group="up"
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl bg-paper border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-26px_rgba(12,12,12,0.45)]"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-ink/15 transition-all duration-300 group-hover:w-1.5 group-hover:bg-accent" />
              <div
                data-counter={s.n}
                data-counter-suffix={s.suffix}
                className="headline-vibrant font-display text-[clamp(2.2rem,4.5vw,3.2rem)] leading-none"
              >
                {s.n}
                {s.suffix}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
