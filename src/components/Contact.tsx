import { useMemo, useState } from "react";
import type { ReactElement } from "react";
import { HOURS, SALON } from "../lib/data";

function IconPhone() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92V21a1 1 0 01-1.09 1A19.86 19.86 0 012 4.09 1 1 0 013 3h4.09a1 1 0 011 .75 12.83 12.83 0 00.7 2.81 1 1 0 01-.23 1L6.91 9.09a16 16 0 006 6l1.53-1.55a1 1 0 011-.23 12.83 12.83 0 002.81.7 1 1 0 01.75 1z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconCard() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 17l4-5 3 5v3h-7M2 17v-3l3-5 9-1 4 5v4H2z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

// Card brand SVG marks
function CardMark({ name }: { name: string }) {
  const map: Record<string, ReactElement> = {
    Visa: (
      <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Visa">
        <text
          x="24"
          y="22"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="16"
          fill="currentColor"
        >
          VISA
        </text>
      </svg>
    ),
    "American Express": (
      <svg viewBox="0 0 60 32" width="60" height="32" aria-label="American Express">
        <rect
          x="1"
          y="1"
          width="58"
          height="30"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text
          x="30"
          y="14"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="7"
          fill="currentColor"
        >
          AMERICAN
        </text>
        <text
          x="30"
          y="24"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="7"
          fill="currentColor"
        >
          EXPRESS
        </text>
      </svg>
    ),
    Discover: (
      <svg viewBox="0 0 56 32" width="56" height="32" aria-label="Discover">
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="13"
          fill="currentColor"
        >
          DISCOVER
        </text>
        <circle cx="48" cy="16" r="4" fill="#f0a23a" />
      </svg>
    ),
    Mastercard: (
      <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Mastercard">
        <circle cx="18" cy="16" r="10" fill="#eb001b" opacity="0.85" />
        <circle cx="30" cy="16" r="10" fill="#f79e1b" opacity="0.85" />
      </svg>
    ),
  };
  return <div className="text-offwhite/70">{map[name]}</div>;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Cut",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Highlight today's row
  const hoursWithToday = useMemo(() => {
    const today = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "long",
    });
    return HOURS.map((h) => ({ ...h, isToday: h.day === today }));
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!/^[0-9()+\-.\s]{7,}$/.test(form.phone))
      e.phone = "That doesn't look like a valid phone number.";
    if (!form.message.trim()) e.message = "Tell us a little about your hair.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: This form is client-only. To actually send, wire to a
    // service like Formspree, Netlify Forms, Basin, or a custom endpoint.
    // Example: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: ... })
    setSent(true);
  };

  // Map URL
  const mapEmbed =
    "https://www.google.com/maps?q=4655+1%2F2+Hollywood+Blvd,+Los+Angeles,+CA+90027&output=embed";
  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=4655+1%2F2+Hollywood+Blvd+Los+Angeles+CA+90027";

  return (
    <section
      id="contact"
      className="relative bg-black text-offwhite py-24 md:py-36 overflow-hidden grain"
      aria-label="Contact"
    >
      <div
        className="absolute -top-6 left-4 md:left-10 section-number pointer-events-none select-none"
        aria-hidden
      >
        05
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="label-eyebrow text-amber reveal">06 — Appointments</p>
          <h2
            className="reveal font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight mt-5"
            data-reveal-delay="80"
          >
            Give us a call
            <br />
            <span className="italic text-amber">to book.</span>
          </h2>
          <p
            className="reveal mt-7 text-offwhite/70 max-w-2xl text-base md:text-lg leading-relaxed"
            data-reveal-delay="180"
          >
            We certainly realize we live in an internet age where business gets
            done over email and text, but we are very proud of our personal
            service. If we can't meet you in person, a phone call is the next
            best thing. Give us a call any time, and if it's after hours please
            DO leave a message and we will return your call just as soon as we
            are back in the studio.
          </p>
        </div>

        {/* Phone CTA block */}
        <div
          className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          data-reveal-delay="220"
        >
          <div className="lg:col-span-5">
            <div className="border-t border-white/15 pt-8">
              <p className="label-eyebrow text-offwhite/55">Main Number</p>
              <a
                href={`tel:${SALON.phoneRaw}`}
                className="block font-display text-7xl md:text-8xl leading-none text-amber mt-3 hover:text-amber-bright transition-colors"
                data-cursor="cta"
              >
                {SALON.phone}
              </a>
              <div className="mt-7">
                <a
                  href={`tel:${SALON.phoneRaw}`}
                  className="btn-amber"
                  data-cursor="cta"
                >
                  Call Us
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
          </div>

          {/* Info grid */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-white/10">
            {/* Address */}
            <div className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-2 text-amber">
                <IconPin />
              </div>
              <div className="col-span-10 md:col-span-8">
                <p className="label-eyebrow text-offwhite/55 mb-2">Address</p>
                <p className="font-display text-2xl md:text-3xl leading-tight">
                  {SALON.address.street}
                  <br />
                  {SALON.address.city}, {SALON.address.region}{" "}
                  {SALON.address.postal}
                </p>
              </div>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="label-eyebrow text-amber hover:underline underline-offset-4"
                >
                  Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-2 text-amber">
                <IconPhone />
              </div>
              <div className="col-span-10 md:col-span-8">
                <p className="label-eyebrow text-offwhite/55 mb-2">Phone</p>
                <a
                  href={`tel:${SALON.phoneRaw}`}
                  className="font-display text-2xl md:text-3xl leading-tight hover:text-amber transition-colors"
                >
                  {SALON.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-2 text-amber">
                <IconClock />
              </div>
              <div className="col-span-10">
                <p className="label-eyebrow text-offwhite/55 mb-3">Hours</p>
                <ul className="divide-y divide-white/5">
                  {hoursWithToday.map((h) => (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between py-2.5 text-[15px] ${
                        h.isToday
                          ? "text-amber"
                          : "text-offwhite/80"
                      }`}
                    >
                      <span
                        className={`label-eyebrow ${
                          h.isToday ? "text-amber" : "text-offwhite/65"
                        }`}
                      >
                        {h.day}
                        {h.isToday && (
                          <span className="ml-2 text-[9px] align-middle">
                            • TODAY
                          </span>
                        )}
                      </span>
                      <span
                        className={
                          h.hours === "Closed"
                            ? "italic text-offwhite/55"
                            : ""
                        }
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-offwhite/50 italic">
                  Sunday–Monday: Closed (or by special appointment).
                </p>
              </div>
            </div>

            {/* We Accept */}
            <div className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-2 text-amber">
                <IconCard />
              </div>
              <div className="col-span-10">
                <p className="label-eyebrow text-offwhite/55 mb-3">
                  We Accept
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <CardMark name="Visa" />
                  <CardMark name="Mastercard" />
                  <CardMark name="American Express" />
                  <CardMark name="Discover" />
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-2 text-amber">
                <IconCar />
              </div>
              <div className="col-span-10">
                <p className="label-eyebrow text-offwhite/55 mb-2">Parking</p>
                <p className="text-offwhite/80 text-[15px] leading-relaxed max-w-md">
                  There is metered street parking, please read signs carefully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map + Form */}
        <div className="mt-20 md:mt-28 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="reveal" data-reveal-delay="160">
            <p className="label-eyebrow text-amber mb-4">Find Us</p>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <iframe
                title="Works of ART Hair Salon on Google Maps"
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Custom amber pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  fill="none"
                >
                  <path
                    d="M20 0C8.95 0 0 8.95 0 20c0 14 20 30 20 30s20-16 20-30C40 8.95 31.05 0 20 0z"
                    fill="#E8952B"
                  />
                  <circle cx="20" cy="20" r="7" fill="#0B0B0B" />
                </svg>
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto bg-amber text-black label-eyebrow px-5 py-3 inline-flex items-center justify-center gap-2 hover:bg-amber-bright transition-colors"
                data-cursor="cta"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" data-reveal-delay="220">
            <p className="label-eyebrow text-amber mb-4">Send a Message</p>
            {sent ? (
              <div className="border border-amber/40 p-8 bg-amber/5">
                <h3 className="font-display text-3xl md:text-4xl text-amber">
                  Thanks, {form.name || "friend"}.
                </h3>
                <p className="mt-4 text-offwhite/75 max-w-md">
                  We've received your note. For fastest service, please call us
                  at{" "}
                  <a
                    href={`tel:${SALON.phoneRaw}`}
                    className="text-amber underline underline-offset-4"
                  >
                    {SALON.phone}
                  </a>
                  . We'll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      phone: "",
                      service: "Cut",
                      message: "",
                    });
                  }}
                  className="mt-6 label-eyebrow text-offwhite/65 hover:text-amber transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="space-y-5"
                aria-label="Contact form"
              >
                <p className="text-xs text-offwhite/45 italic">
                  NOTE: This form is client-only. Wire to Formspree / Netlify
                  Forms / Basin to actually deliver.
                </p>
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />
                <Field
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                />
                <div>
                  <label
                    htmlFor="service"
                    className="label-eyebrow text-offwhite/65 block mb-2"
                  >
                    Preferred Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-offwhite focus:border-amber outline-none transition-colors"
                    data-cursor="cta"
                  >
                    <option className="bg-black">Cut</option>
                    <option className="bg-black">Color</option>
                    <option className="bg-black">Balayage / Ombré</option>
                    <option className="bg-black">Men's Cut</option>
                    <option className="bg-black">Repair</option>
                    <option className="bg-black">Blowout / Style</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="label-eyebrow text-offwhite/65 block mb-2"
                  >
                    Tell us about your hair
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-offwhite focus:border-amber outline-none transition-colors resize-none"
                    data-cursor="cta"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-amber">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn-amber w-full sm:w-auto"
                  data-cursor="cta"
                >
                  Send Message
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
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-eyebrow text-offwhite/65 block mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-transparent border px-4 py-3 text-offwhite outline-none transition-colors ${
          error
            ? "border-amber focus:border-amber"
            : "border-white/15 focus:border-amber"
        }`}
        data-cursor="cta"
      />
      {error && <p className="mt-1.5 text-xs text-amber">{error}</p>}
    </div>
  );
}
