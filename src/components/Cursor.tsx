import { useEffect } from "react";

/**
 * Custom cursor — desktop only, disabled on touch / reduced motion.
 * Listens for `data-cursor="view"` and `data-cursor="cta"` on hoverable
 * elements to morph the ring state.
 */
export default function Cursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (!t) return;
      ring.classList.remove("hovering", "hovering-cta");
      if (t.dataset.cursor === "view") ring.classList.add("hovering");
      if (t.dataset.cursor === "cta") ring.classList.add("hovering-cta");
    };

    const onOut = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (t) ring.classList.remove("hovering", "hovering-cta");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" className="cursor-dot" aria-hidden />
      <div id="cursor-ring" className="cursor-ring" aria-hidden />
    </>
  );
}
