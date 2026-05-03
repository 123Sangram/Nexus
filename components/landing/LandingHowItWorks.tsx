"use client";

const steps = [
  {
    number: "1",
    title: "Create account",
    description: "Sign up in seconds and unlock your dashboard.",
  },
  {
    number: "2",
    title: "Pick interview",
    description:
      "Choose the role, level, and interview style you want to practice.",
  },
  {
    number: "3",
    title: "Practice with AI",
    description:
      "Answer adaptive questions while the interviewer responds in real time.",
  },
  {
    number: "4",
    title: "Review & improve",
    description:
      "Read feedback, see the scoring, and prepare for the next session.",
  },
];

export default function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="landing-section">
      <div className="landing-shell">
        <div className="landing-section-header">
          <div className="landing-kicker">How it works</div>
          <h2 className="landing-heading">
            Four simple steps from signup to improvement.
          </h2>
        </div>

        <div className="landing-step-grid">
          {steps.map((step) => (
            <article key={step.title} className="landing-step-card">
              <div className="landing-step-card__number">{step.number}</div>
              <h3 className="landing-step-card__title">{step.title}</h3>
              <p className="landing-step-card__description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
