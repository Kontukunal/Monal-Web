import React from "react";
import { team } from "../data/constants";
import { Panel } from "./Panel";
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
      data-tilt="4"
      className="group basis-[calc(50%-0.5rem)] sm:basis-[calc(50%-0.667rem)] lg:basis-[calc(25%-0.9375rem)] max-w-80"
    >
      <div className="rounded-[26px] bg-paper border border-line p-3 shadow-[0_24px_55px_-34px_rgba(20,17,30,0.4)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_42px_80px_-40px_rgba(236,72,153,0.55)]">
        {/* Matted portrait — desaturated, blooms to colour on hover */}
        <div className="relative overflow-hidden rounded-[18px] aspect-4/5 bg-mist">
          <img
            src={m.img}
            alt={m.name}
            loading="lazy"
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
          />
          {/* Logo-painted index */}
          <span className="headline-vibrant absolute top-3 left-4 font-display text-4xl lg:text-5xl leading-none">
            {num}
          </span>
        </div>

        {/* Name + role below, with an outlined connect button */}
        <div className="px-2 pt-4 pb-1.5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h4 className="font-display text-ink text-xl lg:text-[1.35rem] leading-tight truncate transition-colors duration-500 group-hover:text-white">
                {m.name}
              </h4>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors duration-500 group-hover:text-white/80">
                {m.role}
              </p>
            </div>
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="shrink-0 grid place-items-center w-10 h-10 rounded-full border border-line text-ink transition-all duration-300 group-hover:bg-white group-hover:text-accent group-hover:border-white hover:scale-115"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Bio — revealed on hover */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden">
              <p className="mt-3 text-[13px] leading-snug text-white/85">
                {m.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Team = () => {
  return (
    <Panel id="team" bg="bg-mist">
      <div className="absolute inset-0 bg-facets pointer-events-none" />
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-28 w-full">
        <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
          <div data-reveal="up">
            <Eyebrow dot="bg-mint">The Collective</Eyebrow>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="0.08"
            className="font-display capitalize text-ink text-[clamp(2rem,7vw,5.5rem)] leading-[0.94] max-w-3xl"
          >
            Meet the <span className="headline-vibrant">team.</span>
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.14"
            className="text-muted max-w-md leading-relaxed"
          >
            Artists, storytellers, strategists, and builders shaping the future
            of children&apos;s entertainment.
          </p>
        </div>

        <div data-reveal-group="up" className="flex flex-wrap justify-center gap-4 lg:gap-5">
          {team.map((m, i) => (
            <TeamCard key={i} m={m} i={i} />
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default Team;
