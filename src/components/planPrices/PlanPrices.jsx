import React from "react";
import { Gift, Sparkles, Star, Zap } from "lucide-react";
import "./PlanPrices.css";
import { NavLink } from "react-router-dom";

const plans = [
  {
    tier: "STARTER",
    duration: "3 Months",
    originalPrice: "₹11,999",
    launchPrice: "7,399",
    discount: "30% OFF",
    badge: null,
    cta: "#",
  },
  {
    tier: "PRO ANNUAL",
    duration: "12 Months",
    originalPrice: "₹19,999",
    launchPrice: "17,399",
    discount: "30% OFF",
    badge: "BEST VALUE",
    featured: true,
    cta: "#",
  },
  {
    tier: "GROWTH",
    duration: "6 Months",
    originalPrice: "₹14,999",
    launchPrice: "11,599",
    discount: "30% OFF",
    badge: "POPULAR",
    cta: "#",
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
                <span className="plan-meta-label">Original Price:</span>
                <span className="plan-meta-value plan-meta-value--strike">
                  {plan.originalPrice}
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
              </div>
              <p className="plan-launch-offer">LAUNCH OFFER</p>
              <button className="plan-extra-btn">
                Avail Flat 30% off + 2 Months Extra
              </button>
            </div>

            <div className="plan-savings">
              <NavLink to={plan.cta}>Buy Now</NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* <h6>
        Get <span>40%</span> off on Books
      </h6> */}

      <h2 className="plan-prices-heading">Set of 5 Books</h2>
      <h4 className="plan-prices-sub-heading">
        Unannotated Workbooks - Set of 2 Books | Annotated Notes - Set of 3
        Books
      </h4>

      <div className="plan-prices-book">
        <div className="plan-meta-row">
          <span className="plan-meta-label">Original Price:</span>
          <span className="plan-meta-value plan-meta-value--strike">
            ₹ 5,700
          </span>
        </div>

        <div className="plan-launch-box">
          <p className="plan-launch-label">
            <Sparkles size={11} strokeWidth={2.5} /> LAUNCH PRICE:
          </p>
          <div className="plan-launch-price-row">
            <span className="plan-launch-price">
              <span className="plan-currency">₹</span>
              4,600
            </span>
          </div>
          <p className="plan-launch-offer">LAUNCH OFFER</p>
          <button className="plan-extra-btn">Avail Flat 40% off</button>
        </div>

        <div className="plan-savings">
          <NavLink to="#">Buy Now</NavLink>
        </div>

        <p className="plan-launch-valid">
          Valid till 16<sup>th</sup> April 2026
        </p>
      </div>

      <div className="plan-prices-help-div">
        <p className="plan-prices-help">
          For any queries, feel free to contact our Helpline:{" "}
          <a href="tel:7428581909">7428581909</a> (Only For Calling)
        </p>
        <p className="plan-prices-help">
          Send us at Whatsapp:{" "}
          <a
            href="https://wa.me/919266682739"
            target="_blank"
            rel="noreferrer"
            className="contact-us-contact-value"
          >
            +91-9266682739
          </a>
        </p>
      </div>
    </div>
  );
}
