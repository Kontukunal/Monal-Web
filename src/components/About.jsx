import React from "react";
import { Eyebrow, Asterisk } from "./Decor";
import pearl from "../assets/Pearl.png";

/* Flat-top hexagon mask for the image plate. */
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

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
      {/* Faint dotted texture + decorative asterisks */}
      {/* <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" /> */}
      {/* <Asterisk className="absolute -top-12 -left-12 w-44 text-accent/15 hidden md:block animate-spin-rev" /> */}

      <div className="relative max-w-295 mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <div data-reveal="up" className="mb-6">
            <Eyebrow>About Monal</Eyebrow>
          </div>
          <h2
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(2rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
          >
            Who we <span className="text-royal">are.</span>
          </h2>
        </div>

        {/* Main split — Pearl image (left) + story & features (right) */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Pearl on a striped hexagon plate, breaking out for a 3-D pop */}
          <div data-reveal="left" className="relative flex justify-center">
            <div data-tilt="7" className="relative w-full max-w-sm aspect-square">
              {/* Soft warm glow */}
              <div className="absolute inset-8 rounded-full bg-tangerine/35 blur-[70px]" />

              {/* Hexagon plate — warm gradient + diagonal stripes */}
              <div
                className="absolute inset-0 bg-linear-to-br from-tangerine via-accent to-sun shadow-[0_50px_100px_-30px_rgba(251,122,60,0.6)]"
                style={{ clipPath: HEX_CLIP }}
              >
                <div className="absolute inset-0" style={STRIPES} />
                <div className="absolute -top-6 -right-6 w-44 h-44 rounded-full bg-white/15 blur-2xl" />
              </div>

              {/* Floating accents */}
              <span className="absolute top-8 right-10 w-4 h-4 rounded-full bg-royal animate-float" />
              <span className="absolute bottom-10 left-8 w-3.5 h-3.5 rounded-md rotate-12 bg-sky animate-float-slow" />
              <Asterisk className="absolute -bottom-2 right-8 w-14 text-royal z-10" spin />

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
                  className="group flex items-center gap-4 rounded-2xl bg-paper border border-line px-4 py-3.5 transition-all duration-300 hover:border-royal/30 hover:shadow-[0_16px_40px_-26px_rgba(12,12,12,0.5)]"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-royal/12 text-royal shrink-0 transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
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
              <span
                className="absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                style={{ background: s.color }}
              />
              <div
                data-counter={s.n}
                data-counter-suffix={s.suffix}
                className="font-display text-[clamp(2.2rem,4.5vw,3.2rem)] leading-none"
                style={{ color: s.color }}
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
