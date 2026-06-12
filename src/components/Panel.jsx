import React from "react";

/* ------------------------------------------------------------------ *
 *  Panel — an overlapping "stacking" section in NORMAL document flow.
 *
 *  Each panel sits in normal flow (so ALL of its content is fully
 *  scrollable & readable — nothing is clipped). It pulls up over the
 *  previous panel with a negative top margin + rounded top + upward
 *  shadow, so as you finish a section the next one rises and "opens"
 *  over it. The `data-stack-panel` hook (useUiAnimations) adds the
 *  GSAP rise/scale-in so it feels like a container opening, while the
 *  page still reads as one continuous screen.
 *
 *  `bg` must be opaque so the panel cleanly covers the one beneath.
 *
 *  Colour "skirt": as the NEXT panel rises (GSAP translates it down→up
 *  by ~120px) a band would open above it showing the white page behind.
 *  Each panel drops a strip of its OWN colour just below itself so the
 *  next panel reveals THIS section's colour in that band (and behind
 *  its rounded top corners) instead of white — the two sections read as
 *  one connected surface. At rest the next panel sits over the strip, so
 *  it is never seen on its own, and it never covers this panel's content.
 * ------------------------------------------------------------------ */
export const Panel = ({
  id,
  children,
  className = "",
  bg = "bg-paper",
  rounded = true,
}) => (
  <section
    id={id}
    data-stack-panel
    className={`relative min-h-screen w-full flex flex-col justify-center ${bg} ${
      rounded
        ? "rounded-t-[34px] md:rounded-t-[52px] -mt-12 md:-mt-16 shadow-[0_-30px_70px_-28px_rgba(20,17,30,0.3)]"
        : ""
    } ${className}`}
  >
    {children}
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-full h-40 ${bg}`}
    />
  </section>
);

export default Panel;
