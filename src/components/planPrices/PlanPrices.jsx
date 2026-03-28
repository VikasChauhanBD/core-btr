import React from "react";
import { Gift, Sparkles, Star, Zap } from "lucide-react";
import "./PlanPrices.css";
import { NavLink } from "react-router-dom";

const plans = [
  {
    tier: "STARTER",
    duration: "3 Months",
    mrp: "₹12,999",
    intro: "₹9,999",
    launchPrice: "6,999",
    discount: "30% OFF",
    badge: null,
    saving: "₹6,000",
    savingPercent: 46,
  },
  {
    tier: "PRO ANNUAL",
    duration: "12 Months",
    mrp: "₹17,999",
    intro: "₹15,999",
    launchPrice: "11,200",
    discount: "30% OFF",
    badge: "BEST VALUE",
    saving: "₹6,799",
    savingPercent: 42,
    featured: true,
  },
  {
    tier: "GROWTH",
    duration: "6 Months",
    mrp: "₹14,999",
    intro: "₹11,999",
    launchPrice: "9,099",
    discount: "30% OFF",
    badge: "POPULAR",
    saving: "₹5,900",
    savingPercent: 39,
  },
];

export default function PlanPrices() {
  return (
    <div className="plan-prices-wrapper">
      {/* <div className="launch-banner">
        <span className="launch-dot" />
        LIMITED TIME LAUNCH OFFER
      </div> */}

      <h2 className="plan-prices-heading">Choose Your Plan</h2>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}
          >
            {plan.badge && (
              <div
                className={`plan-badge ${plan.featured ? "plan-badge--best" : "plan-badge--popular"}`}
              >
                <Star size={11} strokeWidth={2.5} /> {plan.badge}
              </div>
            )}

            <div className="plan-header">
              <p className="plan-tier">{plan.tier}</p>
              <h2 className="plan-duration">{plan.duration}</h2>
            </div>

            <div className="plan-pricing-meta">
              <div className="plan-meta-row">
                <span className="plan-meta-label">MRP</span>
                <span className="plan-meta-value plan-meta-value--strike">
                  {plan.mrp}
                </span>
              </div>
              <div className="plan-meta-row">
                <span className="plan-meta-label">INTRO</span>
                <span className="plan-meta-value plan-meta-value--strike">
                  {plan.intro}
                </span>
              </div>
            </div>

            <div className="plan-launch-box">
              <p className="plan-launch-label">
                <Sparkles size={11} strokeWidth={2.5} /> LAUNCH PRICE
              </p>
              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <span className="plan-currency">₹</span>
                  {plan.launchPrice}
                </span>
                <span className="plan-discount-badge">{plan.discount}</span>
              </div>
              <button className="plan-extra-btn">
                <Gift size={15} strokeWidth={2} /> + 2 Months Extra FREE
              </button>
            </div>

            <div className="plan-savings">
              <span className="plan-savings-label">You save</span>
              <div className="plan-savings-bar">
                <div
                  className="plan-savings-fill"
                  style={{ width: `${plan.savingPercent}%` }}
                />
              </div>
              <span className="plan-savings-amount">{plan.saving}</span>
            </div>
          </div>
        ))}
      </div>

      <NavLink to="#">Buy Now</NavLink>

      <p className="plan-prices-help">
        For any queries, feel free to contact our Helpline:{" "}
        <a href="tel:7428581909">7428581909</a>
      </p>
    </div>
  );
}
