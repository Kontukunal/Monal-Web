import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/constants";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import { Eyebrow, ArrowGlyph } from "./Decor";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContentLibrary = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();

      /* ---- Desktop: pin the panel, scroll cards horizontally ---- */
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const distance = () => track.scrollWidth - window.innerWidth + 96;

        const horizontal = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: () => "+=" + distance(),
            pin: pinRef.current,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current)
                gsap.set(progressRef.current, { scaleX: self.progress });
            },
          },
        });

        gsap.utils.toArray(".cl-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            yPercent: 12,
            scale: 0.9,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontal,
              start: "left 96%",
              end: "left 58%",
              scrub: 1,
            },
          });
        });
      });

      /* ---- Mobile: swipeable row with a staggered reveal ---- */
      mm.add("(max-width: 767px)", () => {
        gsap.from(".cl-card", {
          opacity: 0,
          y: 56,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: trackRef.current, start: "top 86%" },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-paper pt-14 md:pt-28 pb-14 md:pb-28 my-10 md:my-24"
    >
      <div
        ref={pinRef}
        className="relative md:h-screen overflow-visible flex flex-col justify-center py-14 md:py-0"
      >
        {/* Header */}
        <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 shrink-0">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex flex-col items-center">
              <div data-reveal="up" className="mb-6">
                <Eyebrow>Content Library</Eyebrow>
              </div>
              <h2
                data-split
                className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.04em]"
              >
                Award-winning stories.
              </h2>
            </div>
            <p
              data-reveal="up"
              data-reveal-delay="0.1"
              className="text-muted max-w-sm leading-relaxed"
            >
              A curated catalog of original IPs, co-productions, and series â€”
              keep scrolling to travel the catalog.
            </p>
          </div>

          {/* Horizontal scroll progress */}
          <div className="mt-9 hidden md:flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
              Scroll
            </span>
            <div className="relative h-[2px] flex-1 bg-line rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="absolute inset-0 origin-left scale-x-0 bg-accent"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
              {String(projects.length).padStart(2, "0")} works
            </span>
          </div>
        </div>

        {/* Horizontal card track */}
        <div className="mt-8 md:mt-10 overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-6 px-6 md:px-12 overflow-x-auto md:overflow-visible no-scrollbar"
          >
            {projects.map((p, i) => (
              <article
                key={i}
                data-tilt="5"
                className="cl-card group flex-none cursor-pointer"
              >
                <div className="relative w-[68vw] sm:w-[42vw] md:w-auto h-auto md:h-[80vh] aspect-2/3 rounded-[18px] overflow-visible border border-line bg-ink">
                  <div className="relative h-full w-full rounded-[18px] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Index */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center text-[12px] font-bold z-10">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 inset-x-0 p-6 text-paper z-10">
                      <h3 className="font-display capitalize text-2xl md:text-3xl leading-tight tracking-tight">
                        {p.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <span className="w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center">
                          <ArrowGlyph className="w-3 h-3" />
                        </span>
                        View case study
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Trailing "view all" card */}
            <article className="cl-card flex-none flex items-center">
              <Link
                to="/work"
                className="group flex flex-col items-center justify-center gap-5 w-[68vw] sm:w-[42vw] md:w-auto h-auto md:h-[80vh] aspect-2/3 rounded-[18px] border border-dashed border-ink/25 hover:border-accent hover:bg-mist transition-colors"
              >
                <span className="w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-colors">
                  <ArrowGlyph className="w-6 h-6" />
                </span>
                <span className="font-display capitalize text-2xl tracking-tight">
                  View all work
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
                  Full catalog
                </span>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
