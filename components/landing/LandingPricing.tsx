"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    priceMonthly: "$0 / month",
    priceYearly: "$0 / month",
    description: "Perfect for getting started",
    features: [
      "5 AI interviews / month",
      "Basic AI feedback",
      "Performance summary",
      "Community access",
    ],
    cta: "Get Started",
    note: "No credit card required",
    featured: false,
  },
  {
    name: "Pro",
    priceMonthly: "$19 / month",
    priceYearly: "$15 / month",
    description: "For serious learners and professionals",
    features: [
      "Unlimited AI interviews",
      "Advanced AI feedback",
      "Detailed analytics",
      "Mock interview mode",
      "Resume review",
      "Priority support",
    ],
    cta: "Start 7-Day Free Trial",
    note: "Cancel anytime",
    featured: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Contact us",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom workflows",
      "API access",
      "Dedicated account manager",
      "SLA & priority support",
    ],
    cta: "Contact Sales",
    note: "Custom onboarding available",
    featured: false,
  },
];

export default function LandingPricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selected, setSelected] = useState<string>(
    plans.find((p) => p.featured)?.name ?? plans[0].name
  );

  return (
    <section id="pricing" className="landing-section pricing-main-section">
      <div className="landing-shell">
        <div className="landing-section-header pricing-header">
          <div className="landing-kicker">PRICING</div>
          <h1 className="landing-heading pricing-heading">
            Choose the plan that powers your potential
          </h1>
          <p className="landing-text pricing-subtext">
            Simple pricing. Powerful features. Built for individuals and teams
            who want to grow smarter.
          </p>
        </div>

        <div className="pricing-toggle-row">
          <div className="pricing-toggle-label">Billing cycle</div>
          <div
            className="billing-toggle"
            role="tablist"
            aria-label="Billing toggle"
          >
            <button
              className={`billing-option ${billing === "monthly" ? "active" : ""}`}
              type="button"
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`billing-option ${billing === "yearly" ? "active" : ""}`}
              type="button"
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
          <span className="pricing-save-chip">Save 20%</span>
        </div>

        <div className="landing-pricing-grid pricing-cards-grid">
          {plans.map((plan) => {
            const isSelected = selected === plan.name;
            const price =
              billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
            return (
              <article
                key={plan.name}
                className={`landing-pricing-card pricing-card${plan.featured ? " landing-pricing-card--featured pricing-card--pro" : ""}${isSelected ? " selected" : ""}`}
                onClick={() => setSelected(plan.name)}
                aria-pressed={isSelected}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(plan.name);
                  }
                }}
              >
                <div className="landing-pricing-card__header">
                  <div>
                    <h3 className="landing-pricing-card__title">{plan.name}</h3>
                    <div className="landing-pricing-card__price">{price}</div>
                  </div>
                  {plan.featured ? (
                    <span className="landing-status-badge">Most popular</span>
                  ) : null}
                </div>

                <p className="landing-pricing-card__description">
                  {plan.description}
                </p>

                <ul className="landing-pricing-card__list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Link
                  href={`/sign-up?plan=${encodeURIComponent(plan.name)}&billing=${billing}`}
                  className={`landing-btn${plan.featured ? " landing-btn--primary" : " landing-btn--secondary"}`}
                >
                  {plan.cta}
                </Link>

                <p className="pricing-card-note">{plan.note}</p>
              </article>
            );
          })}
        </div>

        <section className="pricing-trust" aria-label="Trust highlights">
          <article className="pricing-trust-card">
            <h4>Secure & Private</h4>
            <p>Your data is encrypted and protected</p>
          </article>
          <article className="pricing-trust-card">
            <h4>AI-Powered</h4>
            <p>Smart feedback with advanced AI</p>
          </article>
          <article className="pricing-trust-card">
            <h4>Built to Scale</h4>
            <p>From individuals to teams</p>
          </article>
          <article className="pricing-trust-card">
            <h4>24/7 Support</h4>
            <p>Always available when needed</p>
          </article>
        </section>
      </div>
    </section>
  );
}
