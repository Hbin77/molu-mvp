import type { ReactElement } from "react";

export type IconName =
  | "camera"
  | "play"
  | "warn"
  | "check"
  | "sparkle"
  | "shield"
  | "book"
  | "bolt"
  | "chevronR"
  | "chevronL"
  | "close"
  | "search"
  | "source";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  ariaLabel?: string;
};

const PATHS: Record<IconName, ReactElement> = {
  camera: (
    <g>
      <path d="M3 8a2 2 0 012-2h2.5l1.5-2h6l1.5 2H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </g>
  ),
  play: (
    <g>
      <path d="M7 4l13 8-13 8V4z" />
    </g>
  ),
  warn: (
    <g>
      <path d="M12 4l9 16H3l9-16z" />
      <path d="M12 10v5M12 18v0.5" />
    </g>
  ),
  check: (
    <g>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </g>
  ),
  sparkle: (
    <g>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
    </g>
  ),
  shield: (
    <g>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </g>
  ),
  book: (
    <g>
      <path d="M4 5a2 2 0 012-2h12v15H6a2 2 0 00-2 2V5z" />
      <path d="M4 19a2 2 0 012-2h12" />
    </g>
  ),
  bolt: (
    <g>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </g>
  ),
  chevronR: (
    <g>
      <path d="M9 5l7 7-7 7" />
    </g>
  ),
  chevronL: (
    <g>
      <path d="M15 5l-7 7 7 7" />
    </g>
  ),
  close: (
    <g>
      <path d="M5 5l14 14M19 5L5 19" />
    </g>
  ),
  search: (
    <g>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4-4" />
    </g>
  ),
  source: (
    <g>
      <path d="M4 4h12l4 4v12H4z" />
      <path d="M16 4v4h4" />
      <path d="M8 13h8M8 17h5" />
    </g>
  ),
};

export function Icon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 1.7,
  className,
  ariaLabel,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {PATHS[name]}
    </svg>
  );
}
