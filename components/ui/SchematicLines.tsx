"use client";

interface SchematicLinesProps {
  className?: string;
  variant?: "hero" | "divider";
}

/**
 * Decorative single-line-diagram motif. Purely ornamental (aria-hidden).
 * References the P&IDs / single-line diagrams the client's own engineers produce.
 */
export function SchematicLines({ className = "", variant = "hero" }: SchematicLinesProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 1200 60"
        className={className}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="30" x2="1200" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" opacity="0.3" />
        {[0, 200, 400, 600, 800, 1000, 1200].map((x) => (
          <circle key={x} cx={x} cy="30" r="2.5" fill="currentColor" opacity="0.5" />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M40 120 H340 V260 H620" strokeDasharray="3 6" />
        <path d="M100 400 H260 V620 H540 V500" strokeDasharray="3 6" />
        <path d="M480 80 V240 H760" strokeDasharray="3 6" />
        <path d="M40 560 H180 V720" strokeDasharray="3 6" />
        <circle cx="40" cy="120" r="4" fill="currentColor" stroke="none" />
        <circle cx="340" cy="120" r="4" fill="currentColor" stroke="none" />
        <circle cx="340" cy="260" r="4" fill="currentColor" stroke="none" />
        <circle cx="620" cy="260" r="4" fill="currentColor" stroke="none" className="animate-pulse-node" />
        <circle cx="100" cy="400" r="4" fill="currentColor" stroke="none" />
        <circle cx="260" cy="400" r="4" fill="currentColor" stroke="none" />
        <circle cx="260" cy="620" r="4" fill="currentColor" stroke="none" />
        <circle cx="540" cy="620" r="4" fill="currentColor" stroke="none" />
        <circle cx="540" cy="500" r="4" fill="currentColor" stroke="none" className="animate-pulse-node" />
        <circle cx="480" cy="80" r="4" fill="currentColor" stroke="none" />
        <circle cx="480" cy="240" r="4" fill="currentColor" stroke="none" />
        <circle cx="760" cy="240" r="4" fill="currentColor" stroke="none" className="animate-pulse-node" />
        <circle cx="40" cy="560" r="4" fill="currentColor" stroke="none" />
        <circle cx="180" cy="560" r="4" fill="currentColor" stroke="none" />
        <circle cx="180" cy="720" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
