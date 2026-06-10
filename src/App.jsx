import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import AllWork from "./pages/AllWork";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

/* Keeps scroll position sensible across client-side navigation:
   - a `#section` hash scrolls to that element (used by header/footer nav),
   - otherwise each new page opens from the top rather than inheriting
     the previous page's offset.

   When returning to the home page from a sub-page, heavy media above the
   target (hero video, project images) loads *after* mount and shifts the
   layout — so a single scroll lands in the wrong place. We re-anchor to the
   element a few times as it settles, and once more on window load. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let cancelled = false;

      const anchor = () => {
        if (cancelled) return false;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "instant", block: "start" });
          return true;
        }
        return false;
      };

      const timers = [0, 120, 300, 600].map((d) => setTimeout(anchor, d));
      window.addEventListener("load", anchor);

      return () => {
        cancelled = true;
        timers.forEach(clearTimeout);
        window.removeEventListener("load", anchor);
      };
    }
    /* Instant jump (not the CSS smooth-scroll) so a new page always opens
       from the very top instead of animating from the previous offset. */
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body overflow-x-clip antialiased">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<AllWork />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
