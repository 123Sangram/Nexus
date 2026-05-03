"use client";

import Link from "next/link";
import NexusLogo from "./NexusLogo";

type LandingHeroProps = {
  onWatchDemo: () => void;
};

const stats = [
  { value: "10K+", label: "interviews" },
  { value: "500+", label: "questions" },
  { value: "4.8★", label: "rating" },
  { value: "50+", label: "company packs" },
];

export default function LandingHero({ onWatchDemo }: LandingHeroProps) {
  return (
    <section
      id="home"
      className="landing-section landing-hero landing-hero--full"
    >
      <div className="landing-shell landing-hero__grid">
        <div className="landing-hero__copy">
          <div className="landing-badge">AI-POWERED PLATFORM</div>
          <h1 className="landing-heading landing-hero__title">
            Where <span>Intelligence</span> Connects
          </h1>
          <p className="landing-text landing-hero__description">
            Build, evaluate, and scale AI-driven conversations with a unified
            platform.
          </p>

          <div className="landing-hero__actions">
            <Link
              href="/sign-up"
              className="landing-btn landing-btn--primary landing-btn--large"
            >
              Get Started
            </Link>
            <a
              role="button"
              onClick={onWatchDemo}
              className="landing-btn landing-btn--secondary landing-btn--large"
            >
              Watch Demo
            </a>
          </div>

          <div className="landing-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="landing-stat-card">
                <div className="landing-stat-card__value">{stat.value}</div>
                <div className="landing-stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-hero__visual">
          <div className="landing-hero__canvas">
            <NexusLogo size={520} />
          </div>
        </div>
      </div>
    </section>
  );
}
