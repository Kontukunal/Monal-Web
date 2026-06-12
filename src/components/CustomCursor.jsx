import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useUiAnimations";

/* MONAL brand cursor colours — the single indigo brand hue, in two
   tints so it stays legible on both light and dark surfaces. */
const COLOR_ON_LIGHT = "#4f3fd6"; /* brand indigo — pops on white          */
const COLOR_ON_DARK = "#8b7cff"; /* bright indigo — pops on near-black ink  */

/* Walk up from the element under the pointer until we find a non-transparent
   background, then return its perceived luminance (0 = black, 1 = white). */
const backgroundLuminance = (x, y) => {
  let el = document.elementFromPoint(x, y);
  while (el && el !== document.documentElement) {
    const bg = getComputedStyle(el).backgroundColor;
    const m = bg.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const [r, g, b, a = "1"] = m[1].split(",").map((n) => parseFloat(n));
      if (a > 0) {
        /* Rec. 709 relative luminance, normalised to 0–1. */
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      }
    }
    el = el.parentElement;
  }
  return 1; /* default to "light" so the dark-friendly colour isn't used on white */
};

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    /* Skip entirely on touch / coarse-pointer devices and when the user
       has asked for reduced motion — fall back to the native cursor. */
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || prefersReducedMotion()) return;

    const dot = dotRef.current;
    document.body.classList.add("has-custom-cursor");

    /* Target = real mouse position. The dot lerps toward it for a soft trail. */
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;
    let visible = false;
    let raf;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        dot.classList.add("is-visible");
      }

      const lum = backgroundLuminance(mouseX, mouseY);
      dot.style.backgroundColor = lum < 0.5 ? COLOR_ON_DARK : COLOR_ON_LIGHT;

      /* Grow the dot over clickable elements for an interactive feel. */
      const interactive = e.target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="grow"]'
      );
      dot.classList.toggle("cursor-dot--hover", Boolean(interactive));
    };

    const handleLeave = () => {
      visible = false;
      dot.classList.remove("is-visible");
    };

    const handleDown = () => dot.classList.add("cursor-dot--down");
    const handleUp = () => dot.classList.remove("cursor-dot--down");

    const render = () => {
      x += (mouseX - x) * 0.22;
      y += (mouseY - y) * 0.22;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
};

export default CustomCursor;
