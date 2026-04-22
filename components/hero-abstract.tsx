export function HeroAbstract() {
  return (
    <svg
      viewBox="0 0 1200 800"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg" x1="600" y1="0" x2="600" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B0B0B" />
          <stop offset="100%" stopColor="#090909" />
        </linearGradient>

        <radialGradient id="softHaze" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(860 520) rotate(180) scale(220 180)">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="45%" stopColor="#A3A3A3" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#0B0B0B" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="topPlane" x1="820" y1="600" x2="1160" y2="405" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#121212" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>

        <linearGradient id="frontPlane" x1="980" y1="470" x2="1100" y2="705" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B1B1B" />
          <stop offset="100%" stopColor="#0C0C0C" />
        </linearGradient>

        <linearGradient id="sidePlane" x1="1080" y1="500" x2="1150" y2="730" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#101010" />
          <stop offset="100%" stopColor="#060606" />
        </linearGradient>

        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glowBig" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" result="blur1" />
          <feGaussianBlur stdDeviation="28" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="800" fill="url(#bg)" />
      <rect width="1200" height="800" fill="url(#softHaze)" />

      {/* grid muy sutil */}
      <g stroke="#FFFFFF" strokeOpacity="0.035" strokeWidth="1">
        <line x1="0" y1="260" x2="1200" y2="260" />
        <line x1="0" y1="560" x2="1200" y2="560" />
        <line x1="560" y1="0" x2="560" y2="800" />
        <line x1="760" y1="0" x2="760" y2="800" />
        <line x1="940" y1="0" x2="940" y2="800" />
      </g>

      {/* dots */}
      <g opacity="0.38">
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={940 + col * 14}
              cy={140 + row * 14}
              r="1.2"
              fill="#00FF9C"
              className="franja-dot"
              style={{ animationDelay: `${(row + col) * 0.1}s` }}
            />
          ))
        )}
      </g>

      {/* líneas base */}
      <g strokeLinecap="round" fill="none">
        <path
          d="M690 710L950 555L1200 405"
          stroke="#00FF9C"
          strokeOpacity="0.18"
          strokeWidth="1.6"
        />
        <path
          d="M820 730L1020 605L1180 505"
          stroke="#FFFFFF"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      </g>

      {/* masa principal */}
      <g opacity="0.96">
        <path
          d="M840 612L1200 405V470L915 640L840 612Z"
          fill="url(#topPlane)"
        />
        <path
          d="M965 470L1088 545V742L965 668V470Z"
          fill="url(#frontPlane)"
        />
        <path
          d="M1088 545L1148 512V708L1088 742V545Z"
          fill="url(#sidePlane)"
        />
      </g>

      {/* highlights de bordes */}
      <g strokeLinecap="round">
        <line x1="840" y1="612" x2="1200" y2="405" stroke="#00FF9C" strokeOpacity="0.28" strokeWidth="1.8" />
        <line x1="965" y1="470" x2="965" y2="668" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.1" />
        <line x1="965" y1="470" x2="1088" y2="545" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1.1" />
        <line x1="965" y1="668" x2="1088" y2="742" stroke="#00FF9C" strokeOpacity="0.18" strokeWidth="1.3" />
      </g>

      {/* pulso principal */}
      <path
        d="M690 710L950 555L1200 405"
        stroke="#00FF9C"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="95 300"
        className="franja-pulse-line"
        filter="url(#glow)"
      />

      {/* pulso corto secundario */}
      <path
        d="M820 730L1020 605L1180 505"
        stroke="#00FF9C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="55 260"
        className="franja-pulse-line-secondary"
        filter="url(#glow)"
      />

      {/* nodos */}
      <g filter="url(#glowBig)">
        <circle cx="950" cy="555" r="2.4" fill="#00FF9C" />
        <circle cx="1108" cy="460" r="2.2" fill="#00FF9C" />
      </g>

      {/* haze local */}
      <ellipse
        cx="920"
        cy="560"
        rx="150"
        ry="120"
        fill="#FFFFFF"
        opacity="0.04"
        filter="url(#glowBig)"
      />
    </svg>
  );
}