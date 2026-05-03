"use client";

export default function LandingCommunity() {
  return (
    <section id="community" className="landing-section">
      <div className="landing-shell">
        <div className="landing-community-card landing-card">
          <div>
            <div className="landing-kicker">Community</div>
            <h2 className="landing-heading">
              Built for learners who want to get better together.
            </h2>
            <p className="landing-text">
              Follow updates, share progress, and prepare with peers as the
              product expands into community features and shared interview
              packs.
            </p>
          </div>
          <div className="landing-community-card__panel">
            <div className="landing-community-card__index">01</div>
            <div>
              <strong>Weekly question drops</strong>
              <p>Fresh practice sets for students and freshers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
