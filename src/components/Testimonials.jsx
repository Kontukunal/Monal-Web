import React from "react";
import { Eyebrow, Asterisk, Marquee } from "./Decor";

/* Dummy testimonials — split across two opposing marquee rows. */
const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Creative Director · Lunar-X",
    quote:
      "Monal turned a loose brief into a world our audience instantly fell for. Their craft is unreal.",
    color: "#ec4899",
  },
  {
    name: "Sophie Bennett",
    role: "Head of Content · Adruto",
    quote:
      "From storyboard to final render, every frame felt intentional. A genuine creative partner.",
    color: "#3b6dff",
  },
  {
    name: "Daniel Cruz",
    role: "Showrunner · The Boldeye",
    quote:
      "They don't just animate — they build characters that live rent-free in kids' heads.",
    color: "#10b981",
  },
  {
    name: "Priya Nair",
    role: "Brand Lead · Skyline Media",
    quote:
      "Deadlines, polish, originality — Monal delivered on all three without blinking.",
    color: "#f59e0b",
  },
  {
    name: "Marcus Hale",
    role: "Producer · Nimbus Toons",
    quote:
      "Our series found a global audience because Monal made it look genuinely world-class.",
    color: "#8b5cf6",
  },
  {
    name: "Lena Park",
    role: "Marketing Head · BrightKids",
    quote:
      "Working with Monal feels like adding a senior creative team to ours overnight.",
    color: "#06b6d4",
  },
  {
    name: "Rohan Kapoor",
    role: "Founder · PixelPlay",
    quote:
      "The IP they developed for us is now our most-loved property. The numbers don't lie.",
    color: "#ef4444",
  },
  {
    name: "Amara Okafor",
    role: "Director · StoryForge",
    quote:
      "Imagination, discipline, and heart — rare to find all three in a single studio.",
    color: "#f97316",
  },
];

const rowOne = TESTIMONIALS.slice(0, 4);
const rowTwo = TESTIMONIALS.slice(4);

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

const TestimonialCard = ({ t }) => (
  <div className="group w-[320px] md:w-[400px] shrink-0 mr-4 md:mr-5 py-2">
    <div className="relative h-full rounded-[24px] bg-paper text-ink p-6 md:p-7 ring-1 ring-transparent shadow-[0_30px_70px_-35px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:ring-2 group-hover:ring-accent group-hover:shadow-[0_45px_90px_-30px_rgba(236,72,153,0.55)]">
      {/* Big quote mark */}
      <span
        className="absolute top-4 right-6 font-display text-6xl leading-none select-none opacity-15 transition-all duration-300 group-hover:opacity-30 group-hover:scale-110"
        style={{ color: t.color }}
        aria-hidden="true"
      >
        &rdquo;
      </span>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, k) => (
          <Asterisk
            key={k}
            className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-110"
          />
        ))}
      </div>

      <p className="relative text-ink/80 leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 border-t border-line pt-4">
        <span
          className="grid place-items-center w-11 h-11 rounded-full text-paper font-bold shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
          style={{ background: t.color }}
        >
          {initials(t.name)}
        </span>
        <div className="leading-tight">
          <div className="font-display capitalize text-base text-ink">
            {t.name}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mt-1">
            {t.role}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Texture + decorative asterisks */}
      <div className="absolute inset-0 bg-dots-light opacity-20 pointer-events-none" />
      <Asterisk className="absolute -top-12 -right-12 w-48 text-accent/15 hidden md:block" spin />
      <Asterisk className="absolute -bottom-16 -left-16 w-56 text-white/[0.04] hidden md:block animate-spin-rev" />

      {/* Header */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mb-14 md:mb-20">
        <div data-reveal="up" className="mb-2">
          <Eyebrow tone="light">Testimonials</Eyebrow>
        </div>
        <h2
          data-split
          className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.04em]"
        >
          Loved by creators.
        </h2>
        <p
          data-reveal="up"
          data-reveal-delay="0.1"
          className="font-script-desc text-white/55 max-w-md leading-relaxed"
        >
          Studios, networks, and founders on what it&apos;s like to build worlds
          with Monal.
        </p>
      </div>

      {/* Two opposing marquee rows */}
      <div className="relative flex flex-col gap-4 md:gap-5">
        <Marquee speed={55}>
          {[...rowOne, ...rowOne].map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </Marquee>
        <Marquee speed={55} reverse>
          {[...rowTwo, ...rowTwo].map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </Marquee>

        {/* Edge fades so cards melt into the section sides */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-ink to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-ink to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
