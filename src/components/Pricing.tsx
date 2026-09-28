import { PRICING, SALON } from "../lib/data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-offwhite text-black py-24 md:py-36 overflow-hidden"
      aria-label="Pricing"
    >
      <div
        className="absolute -top-6 left-4 md:left-10 section-number light pointer-events-none select-none"
        aria-hidden
      >
        03
      </div>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label-eyebrow text-amber reveal">04 — The Menu</p>
          <h2
            className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-5"
            data-reveal-delay="80"
          >
            Pricing,{" "}
            <span className="italic text-amber">simply</span> put.
          </h2>
          <p
            className="reveal mt-5 text-black/60 text-base md:text-lg"
            data-reveal-delay="160"
          >
            Honest pricing from an honest salon. Color and specialty services
            priced at consultation.
          </p>
        </div>

        <ul className="mt-16 md:mt-24 divide-y divide-black/15 border-y border-black/15">
          {PRICING.map((p, i) => (
            <li
              key={p.service}
              className="reveal grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-baseline"
              data-reveal-delay={i * 100}
            >
              <div className="md:col-span-3">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                  {p.service}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-black/70 text-[15px] md:text-base leading-relaxed max-w-xl">
                  {p.desc}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="font-display text-5xl md:text-7xl text-amber leading-none">
                  {p.price}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 reveal"
          data-reveal-delay="300"
        >
          <p className="text-sm text-black/55 max-w-md">
            Color and specialty services priced at consultation. Call{" "}
            <a
              href={`tel:${SALON.phoneRaw}`}
              className="text-amber hover:underline underline-offset-4"
            >
              {SALON.phone}
            </a>
            .
          </p>
          <a href={`tel:${SALON.phoneRaw}`} className="btn-amber" data-cursor="cta">
            Book by Phone
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M22 16.92V21a1 1 0 01-1.09 1A19.86 19.86 0 012 4.09 1 1 0 013 3h4.09a1 1 0 011 .75 12.83 12.83 0 00.7 2.81 1 1 0 01-.23 1L6.91 9.09a16 16 0 006 6l1.53-1.55a1 1 0 011-.23 12.83 12.83 0 002.81.7 1 1 0 01.75 1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
