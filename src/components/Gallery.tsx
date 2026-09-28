import { useEffect, useMemo, useState } from "react";
import { FILTER_CHIPS, GALLERY, SALON } from "../lib/data";

type Filter = (typeof FILTER_CHIPS)[number];

const ASPECT_CLASS: Record<string, string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return GALLERY;
    return GALLERY.filter((g) => g.category === filter);
  }, [filter]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  // Keyboard nav
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) =>
          i === null ? null : (i + 1) % filtered.length
        );
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, filtered.length]);

  // Touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) {
      if (dx < 0)
        setLightboxIdx((i) =>
          i === null ? null : (i + 1) % filtered.length
        );
      else
        setLightboxIdx((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length
        );
    }
    setTouchStart(null);
  };

  return (
    <section
      id="gallery"
      className="relative bg-charcoal text-offwhite py-24 md:py-36 overflow-hidden"
      aria-label="Gallery"
    >
      <div
        className="absolute -top-6 right-4 md:right-10 section-number pointer-events-none select-none"
        aria-hidden
      >
        04
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <p className="label-eyebrow text-amber reveal">05 — Gallery</p>
            <h2
              className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-5"
              data-reveal-delay="80"
            >
              Find us on{" "}
              <a
                href={SALON.instagram}
                className="italic text-amber hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                @worksofarthair
              </a>
            </h2>
          </div>

          {/* Filter chips */}
          <div
            className="flex flex-wrap gap-2 reveal"
            data-reveal-delay="200"
            role="tablist"
            aria-label="Filter gallery"
          >
            {FILTER_CHIPS.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`label-eyebrow px-4 py-2 border transition-all duration-300 ${
                  filter === c
                    ? "bg-amber text-black border-amber"
                    : "border-white/20 text-offwhite/70 hover:border-amber hover:text-amber"
                }`}
                data-cursor="cta"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {filtered.map((g, i) => (
            <button
              key={`${g.src}-${i}`}
              type="button"
              className={`gallery-item relative overflow-hidden ${
                ASPECT_CLASS[g.aspect] || "aspect-square"
              }`}
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${
                  (i % 6) * 80
                }ms forwards`,
              }}
              onClick={() => setLightboxIdx(i)}
              aria-label={`Open image: ${g.alt}`}
              data-cursor="view"
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                style={{ objectPosition: g.objectPosition || "center" }}
                width={700}
                height={900}
                loading="lazy"
              />
              <div className="overlay">
                <span className="label-eyebrow text-offwhite/80">
                  {g.category}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-offwhite"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 text-center reveal"
          data-reveal-delay="200"
        >
          <a
            href={SALON.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            data-cursor="cta"
          >
            Follow on Instagram
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setLightboxIdx(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 label-eyebrow text-offwhite/80">
            {String(lightboxIdx + 1).padStart(2, "0")} /{" "}
            {String(filtered.length).padStart(2, "0")}
          </div>

          {/* Close */}
          <button
            type="button"
            className="absolute top-6 right-6 text-offwhite/80 hover:text-amber transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(null);
            }}
            aria-label="Close"
            data-cursor="cta"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-offwhite/80 hover:text-amber p-3"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(
                (lightboxIdx - 1 + filtered.length) % filtered.length
              );
            }}
            aria-label="Previous image"
            data-cursor="cta"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-offwhite/80 hover:text-amber p-3"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % filtered.length);
            }}
            aria-label="Next image"
            data-cursor="cta"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <img
            src={filtered[lightboxIdx].src}
            alt={filtered[lightboxIdx].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeInUp 0.4s cubic-bezier(0.22,1,0.36,1)" }}
          />

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-md text-center">
            <p className="label-eyebrow text-amber">
              {filtered[lightboxIdx].category}
            </p>
            <p className="mt-2 text-offwhite/85 text-sm">
              {filtered[lightboxIdx].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
