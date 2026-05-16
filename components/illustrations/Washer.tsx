type Props = {
  size?: number;
  color?: string;
  error?: boolean;
};

export function WasherIllustration({
  size = 130,
  color = "var(--color-brown-500)",
  error = false,
}: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden={true}>
      <g
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="32" y="24" width="136" height="152" rx="10" />
        <line x1="32" y1="56" x2="168" y2="56" />
        <circle cx="56" cy="40" r="3.5" />
        <circle cx="74" cy="40" r="3.5" />
        <rect x="138" y="34" width="22" height="12" rx="2" />
        <circle cx="100" cy="118" r="42" />
        <circle
          cx="100"
          cy="118"
          r="32"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <circle cx="100" cy="118" r="6" />
      </g>
      {error && (
        <g>
          <rect
            x="138"
            y="34"
            width="22"
            height="12"
            rx="2"
            fill="#F8DDDD"
            stroke="#B33A1D"
            strokeWidth="1.5"
          />
          <text
            x="149"
            y="44"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            fontWeight="700"
            fill="#B33A1D"
          >
            E13
          </text>
        </g>
      )}
    </svg>
  );
}
