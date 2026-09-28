import { SALON } from "../lib/data";

export default function MobileBar() {
  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=4655+1%2F2+Hollywood+Blvd+Los+Angeles+CA+90027";

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-black/95 backdrop-blur border-t border-white/10 px-4 py-3 flex items-center gap-3"
      role="region"
      aria-label="Quick actions"
    >
      <a
        href={`tel:${SALON.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-amber text-black label-eyebrow py-3.5"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92V21a1 1 0 01-1.09 1A19.86 19.86 0 012 4.09 1 1 0 013 3h4.09a1 1 0 011 .75 12.83 12.83 0 00.7 2.81 1 1 0 01-.23 1L6.91 9.09a16 16 0 006 6l1.53-1.55a1 1 0 011-.23 12.83 12.83 0 002.81.7 1 1 0 01.75 1z" />
        </svg>
        Call Now
      </a>
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 border border-white/30 text-offwhite label-eyebrow py-3.5"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Directions
      </a>
    </div>
  );
}
