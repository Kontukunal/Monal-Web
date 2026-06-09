import React from "react";
import { projects } from "../data/constants";
import { Eyebrow, Asterisk, Pill } from "./Decor";

const FEATURES = [
  { title: "Original IP", desc: "developed and owned in-house." },
  { title: "End-to-end production", desc: "from first script to final render." },
  { title: "Global distribution", desc: "across OTT, broadcast and digital." },
];

const STATS = [
  { n: "10", suffix: "+", label: "Years of craft" },
  { n: "100", suffix: "+", label: "Artists & creators" },
  { n: "25", suffix: "M+", label: "Subscribers reached" },
  { n: "40", suffix: "+", label: "Projects delivered" },
];

const imgMain = projects[2].img; // Wands And Wings key art
const imgSide = projects[0].img; // Zappy Toons key art

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-mist py-24 md:py-36 overflow-hidden border-t border-line"
    >
      {/* Faint dotted texture + decorative asterisks */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <Asterisk className="absolute -top-12 -left-12 w-44 text-accent/15 hidden md:block animate-spin-rev" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div data-reveal="up" className="mb-6">
            <Eyebrow>About Monal</Eyebrow>
          </div>
          <h2
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(2rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
          >
            Who we are.
          </h2>
        </div>

        {/* Main split — image collage + story */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image collage */}
          <div data-reveal="left" className="relative">
            {/* Main image */}
            <div className="relative aspect-4/5 rounded-[28px] overflow-hidden ring-1 ring-line shadow-[0_40px_90px_-40px_rgba(12,12,12,0.45)] bg-ink">
              <img
                src={imgMain}
                alt="Monal Digital key art"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                <Asterisk className="w-3 h-3 text-accent" spin />
                In-house original
              </div>
            </div>

            {/* Overlapping secondary image */}
            <div className="absolute -bottom-8 -right-5 md:-right-8 w-36 md:w-52 aspect-3/4 rounded-[22px] overflow-hidden ring-[6px] ring-mist shadow-[0_30px_60px_-25px_rgba(12,12,12,0.5)] hidden sm:block">
              <img
                src={imgSide}
                alt="Monal Digital production still"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -top-6 -left-3 md:-left-8 bg-paper border border-line rounded-2xl px-5 py-4 shadow-[0_24px_50px_-24px_rgba(12,12,12,0.4)] animate-float">
              <div className="font-display text-3xl md:text-4xl leading-none text-ink">
                10+
              </div>
              <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Years of magic
              </div>
            </div>

            <Asterisk className="absolute -top-8 right-8 w-14 text-accent hidden md:block" spin />
          </div>

          {/* Story */}
          <div data-reveal="right" className="flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink mb-5 inline-flex items-center gap-2">
              <Asterisk className="w-3.5 h-3.5 text-accent" spin />
              Our Story
            </p>
            <h3 className="font-display capitalize text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.03em] mb-7">
              We turn imagination into{" "}
              <span className="headline-vibrant">moving art.</span>
            </h3>

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

            {/* Feature points */}
            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-accent text-ink shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

            <div>
              <Pill as="a" href="#team">
                Meet the team
              </Pill>
            </div>

            {/* Stats */}
            <div
              data-reveal-group="up"
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-10"
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-left">
                  <div
                    data-counter={s.n}
                    data-counter-suffix={s.suffix}
                    className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none text-ink"
                  >
                    {s.n}
                    {s.suffix}
                  </div>
                  <div className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
