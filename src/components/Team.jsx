import React from "react";
import { team } from "../data/constants";
import { Eyebrow } from "./Decor";

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18.3h-2.6V14c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.6v4.4h-2.6V9.7H13v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5v5.3z" />
  </svg>
);

const TeamCard = ({ m, i }) => {
  const num = String(i + 1).padStart(2, "0");

  return (
    <article
      data-tilt="5"
      className="group basis-[calc(50%-0.5rem)] sm:basis-[calc(50%-0.667rem)] lg:basis-[calc(25%-0.9375rem)] max-w-90"
    >
      <div className="relative aspect-4/5 rounded-[14px] overflow-hidden border border-line bg-ink">
        {/* Real photo on the front */}
        <img
          src={m.img}
          alt={m.name}
          loading="lazy"
          crossOrigin="anonymous"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Base gradient (subtle) + hover scrim */}
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Number */}
        <span className="absolute top-3 right-3 lg:top-4 lg:right-4 font-display text-base lg:text-xl text-white/70">
          {num}
        </span>

        {/* Role */}
        <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
          <span className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-full bg-accent text-ink text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.14em]">
            {m.role}
          </span>
        </div>

        {/* Bio + LinkedIn — revealed on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 flex items-end justify-between gap-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white/85 text-xs lg:text-sm leading-relaxed flex-1">
            {m.bio}
          </p>
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name} on LinkedIn`}
            className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-accent hover:text-ink transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          </a>
        </div>
      </div>

      <div className="mt-3 lg:mt-4 text-center">
        <h4 className="font-display capitalize text-lg sm:text-xl lg:text-3xl tracking-tight leading-tight">
          {m.name}
        </h4>
      </div>
    </article>
  );
};

const Team = () => {
  return (
    <section
      id="team"
      className="relative bg-paper py-24 md:py-36 overflow-hidden border-t border-line"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-8 mb-14 md:mb-20">
          <div className="flex flex-col items-center">
            <div data-reveal="up" className="mb-6">
              <Eyebrow>The Collective</Eyebrow>
            </div>
            <h2
              data-split
              className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
            >
              Meet the team.
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="0.1"
            className="font-script-desc text-muted max-w-sm leading-relaxed"
          >
            Storytellers, animators, and visionaries crafting the next era of
            India&apos;s digital studio culture.
          </p>
        </div>

        {/* Grid */}
        <div
          data-reveal-group="up"
          className="flex flex-wrap justify-center gap-4 lg:gap-5"
        >
          {team.map((m, i) => (
            <TeamCard key={i} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
