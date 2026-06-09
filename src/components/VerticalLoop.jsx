import React from "react";
import { prefersReducedMotion } from "../hooks/useUiAnimations";

/* Build a stepped vertical-scroll keyframe set: each still rests in place for
   `holdFraction` of its slot, then slides to the next. The track carries two
   copies of the slide list and travels exactly one copy (-50%), so the loop
   restarts on an identical frame — seamless, and with no double-length pause at
   the seam (which previously made the rail look like it had stopped). */
const buildScrollKeyframes = (n, name, holdFraction = 0.66) => {
  const segPct = 100 / n; // share of the timeline per still
  const segPos = 50 / n; // translate distance per still (% of the track)
  let frames = "";
  for (let k = 0; k < n; k++) {
    const pos = (-(k * segPos)).toFixed(4);
    frames += `${(k * segPct).toFixed(4)}% { transform: translateY(${pos}%); }`;
    frames += `${(k * segPct + holdFraction * segPct).toFixed(4)}% { transform: translateY(${pos}%); }`;
  }
  frames += `100% { transform: translateY(-50.0000%); }`;
  return `@keyframes ${name} { ${frames} }`;
};

/* ------------------------------------------------------------------ *
 *  VerticalLoop — a full-bleed conveyor. Each still holds for ~3s, then
 *  slides to the next, looping forever without ever stopping:
 *    • direction "up"   → stills rest, then rise   (bottom→top)
 *    • direction "down" → stills rest, then descend (top→bottom, reversed)
 *
 *  Driven by a stepped CSS keyframe animation, so timing stays perfectly
 *  regular and the wrap is invisible. Honours prefers-reduced-motion.
 * ------------------------------------------------------------------ */
export const VerticalLoop = ({ slides, direction = "up", secondsPerSlide = 4.6 }) => {
  const reduce = prefersReducedMotion();
  const n = slides.length;
  const loop = [...slides, ...slides]; // two copies for a seamless wrap
  const name = `conv-${n}`;
  const duration = n * secondsPerSlide;

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-ink"
      aria-hidden="true"
    >
      {!reduce && <style>{buildScrollKeyframes(n, name)}</style>}
      <div
        style={{
          height: `${loop.length * 100}%`,
          animation: reduce
            ? "none"
            : `${name} ${duration}s cubic-bezier(0.76,0,0.24,1) infinite`,
          animationDirection: direction === "down" ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {loop.map((s, i) => (
          <div key={i} style={{ height: `${100 / loop.length}%` }} className="w-full">
            <img
              src={s.img}
              alt={s.title}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalLoop;
