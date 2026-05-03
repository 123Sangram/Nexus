"use client";

import Link from "next/link";

const interviewTypes = [
  "Aptitude",
  "Technical",
  "HR Round",
  "Mock DSA",
  "Project Review",
];

export default function LandingProductPreview() {
  return (
    <section id="product-preview" className="landing-section">
      <div className="landing-shell landing-preview-layout">
        <div className="landing-preview-copy landing-card">
          <div className="landing-kicker">Product preview</div>
          <h2 className="landing-heading">
            Interview types that feel familiar, focused, and practical.
          </h2>
          <p className="landing-text">
            Choose an interview style that matches your target role. Then use
            Nexus to practice in a guided room where the AI interviewer asks,
            adapts, and scores your answer.
          </p>

          <div className="landing-pill-row">
            {interviewTypes.map((type) => (
              <span key={type} className="landing-pill">
                {type}
              </span>
            ))}
          </div>

          <div className="landing-note-box">
            <div className="landing-note-box__label">What this room does</div>
            <ul className="landing-note-box__list">
              <li>
                Creates a realistic interview flow for freshers and students
              </li>
              <li>Highlights strengths, weak spots, and improvement areas</li>
              <li>Encourages repeated practice until confidence improves</li>
            </ul>
          </div>
        </div>

        <div className="landing-preview-room-card landing-card">
          <div className="landing-preview-room-card__header">
            <div>
              <div className="landing-preview-room-card__eyebrow">
                Mock interview room
              </div>
              <h3 className="landing-preview-room-card__title">
                AI Interviewer
              </h3>
            </div>
            <span className="landing-status-badge">Ready</span>
          </div>

          <div className="landing-preview-room-card__grid">
            <div className="landing-room-panel">
              <div className="landing-panel-meta">
                <span>AI Interviewer</span>
                <span>Question 3</span>
              </div>
              <p>
                Describe a project you built and how you solved the hardest
                problem in it.
              </p>
            </div>
            <div className="landing-room-panel">
              <div className="landing-panel-meta">
                <span>User panel</span>
                <span>Live answer</span>
              </div>
              <p>Answer with structure, examples, and measurable results.</p>
            </div>
          </div>

          <div className="landing-preview-room-card__footer">
            <p>Use the button below to begin your first practice session.</p>
            <Link href="/sign-up" className="landing-btn landing-btn--primary">
              Start Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
