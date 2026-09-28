type Props = {
  text?: string;
  variant?: "dark" | "light";
};

const DEFAULT = "Cut · Color · Style · Repair · Blowout · Balayage · Ombré";

export default function Marquee({
  text = DEFAULT,
  variant = "dark",
}: Props) {
  const items = Array.from({ length: 4 }); // repeat to be safe on wide screens
  return (
    <div
      className={`relative w-full overflow-hidden border-y ${
        variant === "dark"
          ? "bg-black border-white/10"
          : "bg-offwhite border-black/10"
      }`}
      aria-hidden
    >
      <div className="marquee py-5">
        <div className="marquee-track gap-12">
          {items.map((_, i) => (
            <span
              key={i}
              className={`font-display text-3xl md:text-5xl tracking-tight flex items-center gap-12 pr-12 ${
                variant === "dark" ? "text-offwhite" : "text-black"
              }`}
            >
              <span className="italic">{text}</span>
              <span className={variant === "dark" ? "text-amber" : "text-amber"}>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
