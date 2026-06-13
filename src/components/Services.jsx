import React from "react";
import { Link } from "react-router-dom";
import { services, brands } from "../data/constants";
import { Panel } from "./Panel";
import { Eyebrow, ArrowGlyph, Facets } from "./Decor";

/* The popped-out character's height per card. (GR sits a touch larger.)
   The plate behind each character is a premium translucent ink panel —
   colour comes only from the artwork itself. */
const CARDS = [
  { imgClass: "h-80 md:h-88" },
  { imgClass: "h-72 md:h-80" },
  { imgClass: "h-72 md:h-80" },
];

/* One service card: a paper tile with a compact colour plate at the bottom and
   the character popping out the top (half in / half out) for a 3D lift. */
const ServiceCard = ({ service, imgClass, num }) => (
  <Link
    to={`/services/${service.slug}`}
    data-tilt="4"
    className="group flex flex-col h-full rounded-[30px] bg-white/4 border border-white/10 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/6"
  >
    <div className="px-2 pt-3 pb-6 text-center">
      <p className="font-display text-2xl md:text-3xl leading-tight text-white">
        {service.eyebrow}
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-white/55">
        {service.tagline}
      </p>
    </div>

    <div className="relative h-70 md:h-80 flex items-end mt-auto">
      {/* Plate container — NOT clipped, so the character can pop out the top */}
      <div className="relative w-full h-40 md:h-44 flex items-end">
        {/* Clipped background — white plate that turns pink on card hover */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-paper border border-line transition-colors duration-300 group-hover:bg-accent group-hover:border-accent" />

        {/* Character — taller than the plate, so it sits half-in / half-out */}
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          className={`pointer-events-none absolute left-1/2 bottom-0 w-auto -translate-x-1/2 object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.4)] transition-[translate,scale,filter] duration-700 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:drop-shadow-[0_32px_50px_rgba(0,0,0,0.55)] ${imgClass}`}
        />

        {/* Number + arrow, on top of the character */}
        <div className="relative z-10 w-full p-5 text-ink transition-colors duration-300 group-hover:text-white">
          <div className="flex items-end justify-between">
            <span className="font-display leading-none text-[clamp(2.2rem,5vw,3.5rem)]">
              {num}
            </span>
            <span className="shrink-0 w-11 h-11 rounded-full bg-ink/10 backdrop-blur-sm grid place-items-center transition-all duration-300 group-hover:bg-white group-hover:text-accent">
              <ArrowGlyph className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const Services = () => {
  const keys = Object.keys(services);

  return (
    <Panel id="services" bg="bg-ink">
      <div className="absolute inset-0 bg-facets-dark pointer-events-none" />
      <Facets className="absolute -top-10 -right-10 w-160 h-auto" opacity={0.07} />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-28 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
          <div data-reveal="up">
            <Eyebrow tone="dark" dot="bg-sun">
              Services
            </Eyebrow>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="0.08"
            className="font-display capitalize text-white text-[clamp(2rem,7vw,5.5rem)] leading-[0.94] max-w-3xl"
          >
            What we <span className="headline-vibrant">create.</span>
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.14"
            className="text-white/60 max-w-md leading-relaxed"
          >
            From concept to audience, all within one integrated creative and
            distribution pipeline.
          </p>
        </div>

        {/* Three service cards */}
        <div
          data-reveal-group="up"
          className="grid items-stretch gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {keys.map((k, i) => {
            const card = CARDS[i % CARDS.length];
            return (
              <ServiceCard
                key={k}
                service={services[k]}
                imgClass={card.imgClass}
                num={String(i + 1).padStart(2, "0")}
              />
            );
          })}
        </div>

        {/* ---- Trusted by: creative brand plates ---- */}
        <div className="mt-28 md:mt-40 pt-20 md:pt-28 border-t border-white/10">
          <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
            <div data-reveal="up">
              <Eyebrow tone="dark" dot="bg-accent">
                Our Partners
              </Eyebrow>
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="0.08"
              className="font-display capitalize text-white text-[clamp(2rem,6.5vw,5rem)] leading-[0.96] max-w-3xl"
            >
              Trusted by creators &amp; studios{" "}
              <span className="headline-vibrant">worldwide.</span>
            </h2>
            <p
              data-reveal="up"
              data-reveal-delay="0.14"
              className="text-white/60 max-w-md leading-relaxed"
            >
              Collaborating with partners who believe great stories deserve
              great audiences.
            </p>
          </div>

          <div
            data-reveal-group="up"
            className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {brands.map((b, i) => (
              <div
                key={b.name}
                data-tilt="4"
                className={`group relative overflow-hidden rounded-[28px] p-8 md:p-9 min-h-52 flex items-center justify-center bg-white/3 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 ${
                  i === 1 ? "lg:-mt-8" : ""
                }`}
              >
                {/* Faint faceted brand light, revealed on hover */}
                <div className="absolute inset-0 bg-facets-dark opacity-60 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

                {/* Logo — rendered in clean white for a unified mono wall */}
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  className={`relative max-h-14 md:max-h-16 max-w-[70%] w-auto object-contain opacity-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 ${
                    b.name === "Adruto"
                      ? "scale-150 group-hover:scale-[1.6]"
                      : ""
                  }`}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Services;
