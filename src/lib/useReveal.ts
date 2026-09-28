import { useEffect, useState } from "react";

/**
 * Reveal observer — adds `is-visible` class to `.reveal` and `.reveal-img`
 * elements when they enter the viewport. Stagger via `data-reveal-delay` (ms).
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-img"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.revealDelay || "0", 10);
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * Scroll-progress bar — sets width on #scroll-progress element.
 */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max <= 0 ? 0 : (h.scrollTop / max) * 100;
      bar.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

/**
 * Parallax — translates elements with `data-parallax` based on scroll.
 * data-parallax="0.2"  → 20% of scroll speed.
 */
export function useParallax() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
    if (!els.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + y;
        const offset = (y - elTop) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Intro overlay — fades out after ~1.2s. Skippable, respects reduced motion.
 */
export function useIntro() {
  useEffect(() => {
    const overlay = document.getElementById("intro-overlay");
    if (!overlay) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      overlay.remove();
      return;
    }

    const dismiss = () => {
      overlay.classList.add("gone");
      setTimeout(() => overlay.remove(), 700);
    };

    // Auto dismiss
    const t = setTimeout(dismiss, 1200);

    // Skippable on click / any key
    const skip = () => {
      clearTimeout(t);
      dismiss();
    };
    overlay.addEventListener("click", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });

    return () => {
      clearTimeout(t);
      overlay.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
  }, []);
}

/**
 * Active section — returns id of the section currently in view (for nav highlight).
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] || "home");
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
}

/**
 * Open-status — checks current LA time against HOURS and returns whether
 * the salon is open, plus a friendly string.
 */
export function useOpenStatus() {
  const [status, setStatus] = useState({ open: false, label: "Closed" });

  useEffect(() => {
    const compute = () => {
      // Compute LA time
      const now = new Date();
      const laString = now.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
        weekday: "long",
      });
      // weekday e.g. "Tuesday"
      const dayMatch = laString.match(
        /Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday/
      );
      const day = dayMatch ? dayMatch[0] : "";
      const timeMatch = laString.match(/(\d{1,2}):(\d{2})/);
      const hh = timeMatch ? parseInt(timeMatch[1], 10) : 0;
      const mm = timeMatch ? parseInt(timeMatch[2], 10) : 0;
      const mins = hh * 60 + mm;

      let open = false;
      if (day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        open = mins >= 10 * 60 && mins < 18 * 60;
      } else if (day === "Saturday") {
        open = mins >= 9 * 60 && mins < 17 * 60;
      } else {
        open = false;
      }
      setStatus({
        open,
        label: open ? "Open now" : "Closed",
      });
    };
    compute();
    const t = setInterval(compute, 60_000);
    return () => clearInterval(t);
  }, []);

  return status;
}

/**
 * Smooth-scroll on hash links (anchors inside the page).
 */
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as
        | HTMLAnchorElement
        | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close mobile menu if open
      document.body.classList.remove("menu-open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
