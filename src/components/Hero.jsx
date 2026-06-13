import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow, Pill, Asterisk } from "./Decor";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import mascot from "../assets/Moonies.png";
import monkey from "../assets/MONKEY.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VIDEO_SRC = "/showreel/Showreel.mp4";
const VIDEO_POSTER = "/showreel/Showreel-poster.webp";

const CLIP_REST = "inset(42% 17% 0% 17% round 44px)";
const CLIP_FULL = "inset(0% 0% 0% 0% round 0px)";

const Hero = () => {
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const monkeyRef = useRef(null);
  const monkeyImgRef = useRef(null);
  const mascotWrapRef = useRef(null);
  const mascotImgRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      videoRef.current?.requestFullscreen?.();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  React.useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      /* Monkey drops in on its vine, then keeps swinging from the
         top-right corner where the vine leaves the screen. */
      gsap
        .timeline({ delay: 0.3 })
        .from(monkeyRef.current, {
          yPercent: -120,
          rotation: 18,
          transformOrigin: "100% 0%",
          duration: 1.1,
          ease: "bounce.out",
        })
        .to(monkeyRef.current, {
          rotation: -4,
          duration: 0.9,
          ease: "sine.inOut",
        })
        .to(monkeyRef.current, {
          rotation: 4,
          duration: 1.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

      /* Moonies peeks up from below the edge, then bobs in place. */
      gsap
        .timeline({ delay: 0.5 })
        .from(mascotWrapRef.current, {
          yPercent: 110,
          rotation: -8,
          transformOrigin: "50% 100%",
          duration: 0.9,
          ease: "back.out(1.6)",
        })
        .to(mascotWrapRef.current, {
          y: -10,
          duration: 1.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Card expands from the resting card window to a full-bleed cover. */
      tl.fromTo(
        cardRef.current,
        { clipPath: CLIP_REST, rotation: -2 },
        { clipPath: CLIP_FULL, rotation: 0, ease: "none", duration: 1 },
        0,
      );

      /* Colourful layers behind it slide down & fade as the card grows. */
      tl.to("[data-hero-layers]", { autoAlpha: 0, y: 70, duration: 0.34 }, 0);

      /* Title lifts away over the first stretch. */
      tl.to(
        titleRef.current,
        { yPercent: -45, autoAlpha: 0, ease: "power1.in", duration: 0.42 },
        0,
      );

      /* Caption fades in only once the card is near full-screen. */
      tl.fromTo(
        "[data-hero-caption]",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.25 },
        0.72,
      );
    },
    { scope: rootRef },
  );

  /* Monkey bounces down its vine on hover, springs back on leave. */
  const onMonkeyEnter = contextSafe(() => {
    if (prefersReducedMotion()) return;
    gsap.to(monkeyImgRef.current, {
      scale: 1.07,
      y: 14,
      transformOrigin: "100% 0%",
      duration: 0.45,
      ease: "back.out(2.5)",
    });
  });

  const onMonkeyLeave = contextSafe(() => {
    if (prefersReducedMotion()) return;
    gsap.to(monkeyImgRef.current, {
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  });

  /* Moonies gets excited on hover: leans in, scales up, wiggles. */
  const onMascotEnter = contextSafe(() => {
    if (prefersReducedMotion()) return;
    gsap.to(mascotImgRef.current, {
      scale: 1.08,
      rotation: 5,
      transformOrigin: "50% 100%",
      duration: 0.45,
      ease: "back.out(2.5)",
    });
  });

  const onMascotLeave = contextSafe(() => {
    if (prefersReducedMotion()) return;
    gsap.to(mascotImgRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.55,
      ease: "elastic.out(1, 0.55)",
    });
  });

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative h-screen bg-paper overflow-hidden"
    >
      {/* Backdrop — minimal-luxe: faint faceted brand light + grain */}
      <div className="absolute inset-0 bg-facets pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.025] pointer-events-none" />

      {/* <Asterisk
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-60 md:w-72 lg:w-96 xl:w-md text-royal/40"
        spin
      /> */}

      <div
        ref={monkeyRef}
        onMouseEnter={onMonkeyEnter}
        onMouseLeave={onMonkeyLeave}
        className="absolute top-0 right-0 w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 z-20 select-none will-change-transform"
      >
        <img
          ref={monkeyImgRef}
          src={monkey}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full drop-shadow-[0_18px_26px_rgba(0,0,0,0.22)] transition-[filter] duration-300 hover:drop-shadow-[0_26px_40px_rgba(0,0,0,0.35)] will-change-transform"
        />
      </div>


      <div
        ref={mascotWrapRef}
        onMouseEnter={onMascotEnter}
        onMouseLeave={onMascotLeave}
        className="absolute bottom-0 left-0 -translate-x-[27%] w-52 sm:w-64 md:w-72 lg:w-80 xl:w-104 z-20 select-none will-change-transform"
      >
        <img
          ref={mascotImgRef}
          src={mascot}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full drop-shadow-[0_18px_26px_rgba(0,0,0,0.22)] transition-[filter] duration-300 hover:drop-shadow-[0_26px_40px_rgba(37,99,235,0.35)] will-change-transform"
        />
      </div>

      {/* ---- Title ---- */}
      <div
        ref={titleRef}
        className="absolute top-0 inset-x-0 z-20 pt-28 md:pt-44 px-6 flex flex-col items-center text-center"
      >


        <h1
          data-reveal="up"
          data-reveal-delay="0.08"
          className="font-display capitalize text-ink leading-[0.92] tracking-[-0.03em] text-[clamp(1.5rem,6.2vw,5.6rem)] whitespace-nowrap"
        >
          Building worlds <span className="headline-vibrant">children</span> love.
        </h1>


      </div>

      {/* Colourful card layers tucked BEHIND the video card — brand tones */}
      <div
        data-hero-layers
        className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
      >
        <div
          className="absolute rounded-[44px] bg-sun shadow-[0_30px_70px_-30px_rgba(20,17,30,0.35)]"
          style={{
            top: "39%",
            left: "14%",
            right: "22%",
            bottom: "2%",
            transform: "rotate(-6deg)",
          }}
        />
        <div
          className="absolute rounded-[44px] bg-accent shadow-[0_30px_70px_-30px_rgba(20,17,30,0.35)]"
          style={{
            top: "39%",
            left: "15.5%",
            right: "19%",
            bottom: "1%",
            transform: "rotate(-3deg)",
          }}
        />
      </div>

      {/* ---- Expanding video card (clip-path window, full-screen layer) ---- */}
      <div
        ref={cardRef}
        style={{ clipPath: CLIP_REST, willChange: "clip-path, transform" }}
        className="absolute inset-0 z-30 overflow-hidden bg-ink"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_SRC}
          poster={VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

        {/* Live badge (clipped at rest, appears once full-screen) */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 border border-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          Reel · 2026
        </div>

        {/* Caption (fades in near full-screen) */}
        <div
          data-hero-caption
          className="absolute bottom-0 inset-x-0 px-6 md:px-12 py-6 md:py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3 bg-linear-to-t from-black/75 to-transparent"
        >
          <div className="font-display text-white text-2xl md:text-5xl leading-none tracking-tight">
            Showreel.
          </div>

          {/* Video controls — live inside the card, fading in with the
              caption once the card grows toward full-screen. */}
          <div className="flex items-center gap-2">
            {/* Sound toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/35 border border-white/20 backdrop-blur-md text-white/90 hover:bg-black/55 transition-colors"
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>

            {/* Fullscreen toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/35 border border-white/20 backdrop-blur-md text-white/90 hover:bg-black/55 transition-colors"
            >
              {isFullscreen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 9H4m0 0V4m0 5 6-6m5 5h5m0 0V4m0 5-6-6M9 15H4m0 0v5m0-5 6 6m5-6h5m0 0v5m0-5-6 6" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-ink/50 pointer-events-none">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
          Scroll
        </span>
        <span className="w-px h-8 bg-linear-to-b from-ink/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
