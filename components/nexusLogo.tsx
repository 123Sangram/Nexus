export default function NexusLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className}>
      <defs>
        <linearGradient id="nexusGrad" x1="0" y1="0" x2="220" y2="220">
          <stop offset="0%" stopColor="#6C5CE7" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>

        <filter id="nexusGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circle */}
      <circle
        cx="110"
        cy="110"
        r="85"
        stroke="url(#nexusGrad)"
        strokeWidth="1.2"
        opacity="0.2"
      />

      {/* Nodes */}
      {[
        [110, 25],
        [180, 60],
        [195, 110],
        [180, 160],
        [110, 195],
        [40, 160],
        [25, 110],
        [40, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="url(#nexusGrad)" />
      ))}

      {/* N */}
      <path
        d="M75 150 V70 L145 150 V70"
        stroke="url(#nexusGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#nexusGlow)"
      />
    </svg>
  );
}