"use client";

const featureRows = [
  [
    {
      icon: "AI",
      title: "AI Mock Interviews",
      description:
        "Run realistic mock interview sessions tailored for students and freshers.",
      badge: "Live",
      comingSoon: false,
    },
    {
      icon: "FS",
      title: "Feedback & Scoring",
      description:
        "Get instant scoring, strengths, and specific improvement notes after each session.",
      badge: "Live",
      comingSoon: false,
    },
    {
      icon: "RA",
      title: "Resume Analysis",
      description:
        "Review your resume against the interview role to highlight gaps before practice.",
      badge: "Live",
      comingSoon: false,
    },
    {
      icon: "QB",
      title: "Question Bank",
      description:
        "Browse curated questions by role, skill level, and interview style.",
      badge: "Live",
      comingSoon: false,
    },
  ],
  [
    {
      icon: "CP",
      title: "Company Packs",
      description:
        "Practice with company-specific question sets and interview themes.",
      badge: "Coming soon",
      comingSoon: true,
    },
    {
      icon: "SG",
      title: "Skill Gap Tracker",
      description:
        "Track weak areas across multiple sessions and focus your practice.",
      badge: "Coming soon",
      comingSoon: true,
    },
    {
      icon: "LB",
      title: "Leaderboard",
      description:
        "Compare progress, streaks, and practice consistency with peers.",
      badge: "Coming soon",
      comingSoon: true,
    },
    {
      icon: "CM",
      title: "Community",
      description:
        "Learn together with shared discussion spaces for interview preparation.",
      badge: "Coming soon",
      comingSoon: true,
    },
  ],
];

export default function LandingFeatures() {
  return (
    <section id="features" className="landing-section">
      <div className="landing-shell">
        <div className="landing-section-header">
          <div className="landing-kicker">Features</div>
          <h2 className="landing-heading">
            Everything a first interview prep app should have.
          </h2>
          <p className="landing-text">
            The first row is ready to use. The second row is intentionally
            lighter, dashed, and marked as coming soon so visitors can see the
            roadmap without confusion.
          </p>
        </div>

        <div className="landing-feature-stack">
          {featureRows.map((row, rowIndex) => (
            <div key={rowIndex} className="landing-feature-grid">
              {row.map((feature) => (
                <article
                  key={feature.title}
                  className={`landing-feature-card${feature.comingSoon ? " landing-feature-card--coming-soon" : ""}`}
                >
                  <div className="landing-feature-card__topline">
                    <div className="landing-feature-card__icon">
                      {feature.icon}
                    </div>
                    <span className="landing-status-badge landing-status-badge--subtle">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="landing-feature-card__title">
                    {feature.title}
                  </h3>
                  <p className="landing-feature-card__description">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
