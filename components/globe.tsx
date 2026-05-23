export function Globe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-220 -220 440 440"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id="globe-clip">
          <circle cx="0" cy="0" r="200" />
        </clipPath>
        <radialGradient id="globe-shade" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <circle
        cx="0"
        cy="0"
        r="200"
        fill="url(#globe-shade)"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="0.8"
      />

      <g
        clipPath="url(#globe-clip)"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="0.6"
      >
        <line
          x1="-200"
          y1="0"
          x2="200"
          y2="0"
          stroke="rgba(255,255,255,0.22)"
        />
        <line x1="-200" y1="-40" x2="200" y2="-40" />
        <line x1="-200" y1="40" x2="200" y2="40" />
        <line x1="-200" y1="-80" x2="200" y2="-80" />
        <line x1="-200" y1="80" x2="200" y2="80" />
        <line x1="-200" y1="-120" x2="200" y2="-120" />
        <line x1="-200" y1="120" x2="200" y2="120" />
        <line x1="-200" y1="-160" x2="200" y2="-160" />
        <line x1="-200" y1="160" x2="200" y2="160" />
      </g>

      <g
        clipPath="url(#globe-clip)"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="0.6"
      >
        <line
          x1="0"
          y1="-200"
          x2="0"
          y2="200"
          stroke="rgba(255,255,255,0.22)"
        />
        <ellipse cx="0" cy="0" rx="40" ry="200" />
        <ellipse cx="0" cy="0" rx="80" ry="200" />
        <ellipse cx="0" cy="0" rx="120" ry="200" />
        <ellipse cx="0" cy="0" rx="160" ry="200" />
        <ellipse cx="0" cy="0" rx="190" ry="200" />
      </g>

      {/* Great-circle arc: HOME → USA — draws on load, then particle loops */}
      <path
        d="M 92,-72 Q 0,-180 -118,-58"
        fill="none"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="0.9"
        strokeDasharray="360"
        strokeDashoffset="360"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="360"
          to="0"
          dur="1.2s"
          begin="0.3s"
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4 0 0.2 1"
        />
      </path>

      {/* Traveling particle */}
      <circle r="2.4" fill="#fff" opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.95;1"
          dur="5s"
          begin="1.4s"
          repeatCount="indefinite"
        />
        <animateMotion
          dur="5s"
          begin="1.4s"
          repeatCount="indefinite"
          rotate="auto"
          path="M 92,-72 Q 0,-180 -118,-58"
        />
      </circle>
      <circle
        r="5"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.6"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0.7;0"
          keyTimes="0;0.5;1"
          dur="5s"
          begin="1.4s"
          repeatCount="indefinite"
        />
        <animateMotion
          dur="5s"
          begin="1.4s"
          repeatCount="indefinite"
          path="M 92,-72 Q 0,-180 -118,-58"
        />
      </circle>

      {/* HOME node — pulsing */}
      <g transform="translate(92,-72)">
        <circle r="3" fill="#fff" />
        <circle
          r="7"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.6"
        >
          <animate
            attributeName="r"
            values="7;12;7"
            dur="2.4s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          <animate
            attributeName="opacity"
            values="0.7;0;0.7"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="10"
          y="-6"
          fill="rgba(255,255,255,0.75)"
          fontFamily="var(--font-mono), monospace"
          fontSize="7"
          letterSpacing="0.9"
        >
          HOME
        </text>
      </g>

      {/* USA node */}
      <g transform="translate(-118,-58)">
        <circle r="3" fill="#fff" />
        <circle
          r="7"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.6"
        />
        <text
          x="-10"
          y="-6"
          textAnchor="end"
          fill="rgba(255,255,255,0.75)"
          fontFamily="var(--font-mono), monospace"
          fontSize="7"
          letterSpacing="0.9"
        >
          U.S.A.
        </text>
      </g>
    </svg>
  );
}
