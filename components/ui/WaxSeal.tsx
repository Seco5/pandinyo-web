// İmza unsuru: terfi mührü. Açılan her kariyer kademesine "basılan" mum mührü.
// Emoji değil, markaya özel çizilmiş bir SVG damga.

type Props = {
  label?: string; // mührün ortasındaki kısa kod, ör. "CEO"
  size?: number;
  tone?: "gold" | "seal"; // altın (başarı) | bordo (resmi damga)
  locked?: boolean;
  className?: string;
};

export function WaxSeal({
  label,
  size = 72,
  tone = "gold",
  locked = false,
  className = "",
}: Props) {
  const ring = tone === "gold" ? "#FF9F1C" : "#8C2F39";
  const face = tone === "gold" ? "#FFC83D" : "#A6444E";
  const ink = tone === "gold" ? "#7A4A00" : "#3A0F14";

  if (locked) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        role="img"
        aria-label="Kilitli kademe"
      >
        <circle cx="50" cy="50" r="34" fill="none" stroke="#C9C2B4" strokeWidth="2" strokeDasharray="4 5" />
        <path
          d="M42 47v-6a8 8 0 0116 0v6"
          fill="none"
          stroke="#9A9A9A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="38" y="47" width="24" height="20" rx="4" fill="#B8B1A3" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={label ? `${label} mührü` : "Terfi mührü"}
    >
      {/* dağınık mum kenarı */}
      <path
        d="M50 6c10 2 13-2 22 3s7 11 15 16 3 13 2 23-5 11-7 21-8 9-17 12-12 7-22 6-15-4-24-9-7-11-12-19-9-12-8-22 6-11 8-21 5-12 14-16S40 4 50 6z"
        fill={ring}
        opacity="0.95"
      />
      <circle cx="50" cy="50" r="33" fill={face} />
      <circle cx="50" cy="50" r="33" fill="none" stroke={ink} strokeOpacity="0.25" strokeWidth="1.5" />
      {/* iç çerçeve halkası */}
      <circle cx="50" cy="50" r="26" fill="none" stroke={ink} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="2 3" />
      {label ? (
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-mono), monospace"
          fontSize={label.length > 4 ? 13 : 17}
          fontWeight="700"
          fill={ink}
          letterSpacing="0.5"
        >
          {label}
        </text>
      ) : (
        // Panda kulak silueti — küçük marka imzası
        <g fill={ink}>
          <circle cx="40" cy="42" r="7" />
          <circle cx="60" cy="42" r="7" />
          <ellipse cx="50" cy="56" rx="14" ry="11" />
        </g>
      )}
    </svg>
  );
}
