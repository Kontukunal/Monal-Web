import React from "react";
import { Panel } from "./Panel";
import { Eyebrow } from "./Decor";

const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Creative Director · Lunar-X",
    quote:
      "Monal turned a loose brief into a world our audience instantly fell for. With streamlined production and a relentless eye for craft, every frame felt intentional. Their work is unreal.",
    color: "#5b46e8",
    photo: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophie Bennett",
    role: "Head of Content · Adruto",
    quote:
      "From storyboard to final render, every frame felt intentional. A genuine creative partner.",
    color: "#ec4899",
    photo: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Daniel Cruz",
    role: "Showrunner · The Boldeye",
    quote:
      "They don't just animate — they build characters that live rent-free in kids' heads. Of all the studios we've worked with, this one stands out for taste and reliability.",
    color: "#fb7a3c",
    photo: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Priya Nair",
    role: "Brand Lead · Skyline Media",
    quote:
      "Deadlines, polish, originality — Monal delivered on all three without blinking.",
    color: "#22c55e",
    photo: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Marcus Hale",
    role: "Producer · Nimbus Toons",
    quote:
      "Our series found a global audience because Monal made it look genuinely world-class. Their intuitive process and real-time updates make them an indispensable asset.",
    color: "#3b82f6",
    photo: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Lena Park",
    role: "Marketing Head · BrightKids",
    quote:
      "Working with Monal feels like adding a senior creative team to ours overnight.",
    color: "#facc15",
    photo: "https://i.pravatar.cc/150?img=44",
  },
];

const TestimonialCard = ({ t }) => (
  <article className="group mb-5 md:mb-6 break-inside-avoid rounded-[26px] bg-mist border border-line p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-40px_rgba(20,17,30,0.4)]">
    <span
      className="block font-display text-5xl leading-none select-none mb-3"
      style={{ color: t.color }}
      aria-hidden="true"
    >
      &rdquo;
    </span>

    <p className="text-ink/80 leading-relaxed mb-7">{t.quote}</p>

    <div className="flex items-center gap-3 border-t border-line pt-5">
      <img
        src={t.photo}
        alt={t.name}
        loading="lazy"
        className="w-11 h-11 rounded-full object-cover shrink-0 border-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{ borderColor: t.color }}
      />
      <div className="leading-tight">
        <div className="font-display text-base text-ink">{t.name}</div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mt-1">
          {t.role}
        </div>
      </div>
    </div>
  </article>
);

const Testimonials = () => {
  return (
    <Panel id="testimonials" bg="bg-paper">
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-28 w-full">
        <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-16">
          <div data-reveal="up">
            <Eyebrow dot="bg-accent">Testimonials</Eyebrow>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="0.08"
            className="font-display capitalize text-ink text-[clamp(2rem,6.5vw,5rem)] leading-[0.96] max-w-3xl"
          >
            Loved by <span className="headline-vibrant">creators.</span>
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.14"
            className="text-muted max-w-md leading-relaxed"
          >
            Studios, networks, and founders on what it&apos;s like to build
            worlds with Monal.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default Testimonials;
