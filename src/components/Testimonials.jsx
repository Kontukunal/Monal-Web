import React from "react";
import { Panel } from "./Panel";
import { Eyebrow } from "./Decor";

/* Real partner testimonials. Replace the placeholder quote and contact
   fields below with authentic statements as they come in. */
const TESTIMONIALS = [
  {
    name: "Add contact name",
    role: "Lunar X",
    quote:
      "[Replace with an authentic testimonial from Lunar X about working with Monal.]",
    color: "#5b46e8",
  },
  {
    name: "Add contact name",
    role: "Shemaroo",
    quote:
      "[Replace with an authentic testimonial from Shemaroo about working with Monal.]",
    color: "#ec4899",
  },
  {
    name: "Add contact name",
    role: "FreeBird",
    quote:
      "[Replace with an authentic testimonial from FreeBird about working with Monal.]",
    color: "#fb7a3c",
  },
];

const TestimonialCard = ({ t }) => (
  <article className="group mb-5 md:mb-6 break-inside-avoid rounded-[26px] bg-mist border border-line p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-40px_rgba(20,17,30,0.4)]">
    <span
      className="headline-vibrant block font-display text-5xl leading-none select-none mb-3"
      aria-hidden="true"
    >
      &rdquo;
    </span>

    <p className="text-ink/80 leading-relaxed mb-7">{t.quote}</p>

    <div className="flex items-center gap-3 border-t border-line pt-5">
      <span
        className="grid place-items-center w-11 h-11 rounded-full shrink-0 font-display text-base text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{ backgroundColor: t.color }}
        aria-hidden="true"
      >
        {t.role.charAt(0)}
      </span>
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
      <div className="absolute inset-0 bg-facets pointer-events-none" />
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
            Loved by <span className="headline-vibrant">partners.</span>
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.14"
            className="text-muted max-w-md leading-relaxed"
          >
            What studios, creators, and brands say about working with Monal.
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
