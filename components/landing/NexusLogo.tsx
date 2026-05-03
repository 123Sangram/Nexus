"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function NexusLogo({
  size = 420,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 2, 0, -2, 0],
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  const nodeVariants = {
    pulse: {
      scale: [1, 1.18, 1],
      opacity: [0.9, 1, 0.9],
      transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={`nexus-logo ${className ?? ""}`.trim()}
      style={{ width: size, height: size }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 420 420"
        width="100%"
        height="100%"
        animate={controls}
        className="nexus-svg"
      >
        <defs>
          <linearGradient id="gx" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#9be9ff" />
            <stop offset="50%" stopColor="#4db6ff" />
            <stop offset="100%" stopColor="#1e88ff" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* circular ring */}
        <g filter="url(#glow)">
          <circle
            cx="210"
            cy="210"
            r="120"
            stroke="url(#gx)"
            strokeWidth="2.2"
            fill="none"
            opacity="0.14"
          />

          {/* network lines (stylized ring arcs) */}
          <g stroke="#4db6ff" strokeOpacity="0.18" strokeWidth="1">
            <path d="M110 210a100 100 0 01160-70" fill="none" />
            <path d="M310 210a100 100 0 01-160 70" fill="none" />
            <path d="M210 110a100 100 0 0170 160" fill="none" />
          </g>
        </g>

        {/* geometric N mark */}
        <g transform="translate(115,95)">
          <path
            d="M30 20 L70 20 L120 160 L80 160 L120 320 L60 320 L30 210 L10 320 L-30 320 L10 20 Z"
            fill="url(#gx)"
            opacity="0.98"
            transform="scale(0.6) translate(40,18)"
          />
        </g>

        {/* nodes - use motion for subtle pulsing */}
        <motion.g initial="" animate="pulse">
          <motion.circle
            cx="210"
            cy="88"
            r="5"
            fill="#7fe9ff"
            variants={nodeVariants}
          />
          <motion.circle
            cx="320"
            cy="140"
            r="6"
            fill="#66b6ff"
            variants={nodeVariants}
            transition={{ delay: 0.6 }}
          />
          <motion.circle
            cx="310"
            cy="260"
            r="5"
            fill="#4dd0ff"
            variants={nodeVariants}
            transition={{ delay: 1.2 }}
          />
          <motion.circle
            cx="210"
            cy="332"
            r="6"
            fill="#66b6ff"
            variants={nodeVariants}
            transition={{ delay: 0.4 }}
          />
          <motion.circle
            cx="110"
            cy="270"
            r="5"
            fill="#39c6ff"
            variants={nodeVariants}
            transition={{ delay: 0.9 }}
          />
          <motion.circle
            cx="100"
            cy="150"
            r="5"
            fill="#4db6ff"
            variants={nodeVariants}
            transition={{ delay: 0.2 }}
          />
        </motion.g>

        {/* soft base glow */}
        <radialGradient id="baseGlow" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#2bdcff" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <circle cx="210" cy="310" r="78" fill="url(#baseGlow)" />
      </motion.svg>
    </div>
  );
}
