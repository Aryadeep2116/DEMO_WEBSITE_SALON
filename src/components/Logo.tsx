type Props = {
  className?: string;
  /** "dark" = black on light; "light" = white on dark (default) */
  variant?: "dark" | "light";
  /** Size scale — small | medium | large | hero */
  size?: "sm" | "md" | "lg" | "hero";
  align?: "left" | "center";
};

export default function Logo({
  className = "",
  variant = "light",
  size = "md",
  align = "left",
}: Props) {
  const color = variant === "dark" ? "text-black" : "text-offwhite";
  const sizes = {
    sm: { line1: "text-[10px]", line2: "text-[8px]", line3: "text-[14px]" },
    md: { line1: "text-[15px]", line2: "text-[11px]", line3: "text-[22px]" },
    lg: { line1: "text-[22px]", line2: "text-[15px]", line3: "text-[32px]" },
    hero: { line1: "text-[5vw]", line2: "text-[3vw]", line3: "text-[8vw]" },
  } as const;
  const s = sizes[size];
  const tracking = "tracking-[0.32em]";

  return (
    <div
      className={`font-sans ${color} ${className} ${
        align === "center" ? "text-center" : "text-left"
      } leading-none select-none`}
      aria-label="Works of ART Hair Salon"
    >
      <div className={`${s.line1} font-medium uppercase ${tracking}`}>
        Works
      </div>
      <div className={`${s.line2} font-light uppercase ${tracking} my-[0.35em]`}>
        of
      </div>
      <div className={`${s.line3} font-semibold uppercase ${tracking}`}>
        <span className="text-amber">Art</span>
      </div>
    </div>
  );
}
