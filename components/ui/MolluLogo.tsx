import type { CSSProperties } from "react";

type Variant = "mark" | "inline" | "stack";

type Props = {
  size?: number;
  variant?: Variant;
  color?: string;
  sub?: string;
  className?: string;
};

export function MolluLogo({
  size = 90,
  variant = "mark",
  color,
  sub,
  className,
}: Props) {
  const c = color ?? "var(--color-brown-500)";

  const markStyle: CSSProperties = {
    fontFamily: "var(--font-cal)",
    fontSize: size,
    lineHeight: 0.9,
    color: c,
    letterSpacing: "-0.04em",
    fontWeight: 700,
    display: "inline-block",
    transform: "rotate(-4deg)",
  };
  const questionStyle: CSSProperties = {
    display: "inline-block",
    transform: "translate(-4px, -12px) rotate(8deg)",
    fontSize: size * 0.85,
  };

  const mark = (
    <span style={markStyle} className={className} aria-label="몰루?">
      몰루
      <span style={questionStyle}>?</span>
    </span>
  );

  if (variant === "mark") return mark;

  if (variant === "inline") {
    return (
      <span
        style={{ display: "inline-flex", alignItems: "baseline", gap: 6 }}
        className={className}
        aria-label="몰루?"
      >
        <span
          style={{
            fontFamily: "var(--font-cal)",
            fontSize: size,
            color: c,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          몰루?
        </span>
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
      className={className}
    >
      {mark}
      {sub && (
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: size * 0.32,
            color: "var(--color-brown-700)",
            letterSpacing: "-0.02em",
          }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}
