import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Eyebrow, ArrowGlyph, Facets } from "../components/Decor";
import { projects } from "../data/constants";
import { useUiAnimations } from "../hooks/useUiAnimations";

const AllWork = () => {
  useUiAnimations();

  return (
    <>
      <Header />

      {/* ---------------------------------------------------------- *
       *  Hero
       * ---------------------------------------------------------- */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 bg-facets-dark pointer-events-none" />
        <Facets className="absolute -top-10 -right-10 w-160 h-auto" opacity={0.08} />

        {/* Back link */}
        <div className="absolute top-28 md:top-32 left-6 md:left-12 z-10">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
          >
            <ArrowGlyph className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
        </div>

        <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-14 md:pb-20 text-center">
          <div data-reveal="up" className="mb-6 flex justify-center">
            <Eyebrow tone="light">The full catalog</Eyebrow>
          </div>
          <h1
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(2.8rem,11vw,8.5rem)] leading-[0.82] tracking-[-0.04em]"
          >
            Work
          </h1>
          <p
            data-reveal="up"
            data-reveal-delay="0.12"
            className="font-script-desc mt-7 text-white/60 text-lg leading-relaxed max-w-xl mx-auto"
          >
            Original IPs, co-productions, and series — every story we&apos;ve
            had the privilege to bring to life.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- *
       *  Gallery
       * ---------------------------------------------------------- */}
      <section className="relative bg-paper py-14 md:py-20">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div
            data-reveal-group="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
          >
            {projects.map((p, i) => (
              <article
                key={p.title}
                data-tilt="6"
                className="work-card group cursor-pointer"
              >
                <div className="relative aspect-2/3 rounded-2xl overflow-hidden border border-line bg-ink">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Index */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-paper text-ink flex items-center justify-center text-[10px] font-bold z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title - Made larger and responsive to card size */}
                  <div className="absolute bottom-0 inset-x-0 p-3 md:p-5 text-paper z-10">
                    <h3 className="font-display capitalize text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] tracking-tight font-bold">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AllWork;
