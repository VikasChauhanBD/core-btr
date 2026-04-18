import React from "react";
import { Sparkles, Star } from "lucide-react";
import "./PlanPrices.css";
import { NavLink } from "react-router-dom";
import CountdownTimer from "../countdownTimer/CountdownTimer";

const plans = [
  {
    tier: "STARTER",
    duration: "3 Months",
    originalPrice: "Rs. 11999",
    introPrice: "Rs. 7399",
    launchPrice: "Rs. 5549",
    books: "Rs. 3450",
    badge: null,
    order: 4,
    cta: "https://portal.corebtr.com/login",
  },
  {
    tier: "GROWTH",
    duration: "6 Months",
    originalPrice: "Rs. 14999",
    introPrice: "Rs. 11599",
    launchPrice: "Rs. 8699",
    books: "Rs. 3450",
    order: 3,
    cta: "https://portal.corebtr.com/login",
  },
  {
    tier: "PRO ANNUAL",
    duration: "12 Months",
    originalPrice: "Rs. 19999",
    introPrice: "Rs. 17399",
    launchPrice: "Rs. 13149",
    books: "Rs. 3450",
    badge: "POPULAR",
    order: 2,
    cta: "https://portal.corebtr.com/login",
  },
  {
    tier: "For Interns | Post Interns",
    duration: "24 Months",
    originalPrice: "Rs. 39999",
    introPrice: "Rs. 34999",
    launchPrice: "Rs. 26249",
    books: "Rs. 3450",
    badge: "BEST VALUE",
    featured: true,
    order: 1,
    cta: "https://portal.corebtr.com/login",
  },
];

export default function PlanPrices() {
  return (
    <div className="plan-prices-wrapper">
      <h2 className="plan-prices-heading">Choose Your Plan</h2>
      <h4 className="plan-prices-sub-heading">
        We have duration based plans 3 Months | 6 Months | 12 Months | 24 Months
      </h4>

      <h5>Avail Launch Offer Flat 25% off on any plan + 2 Months Extra Free</h5>
      <h5>Also Get Flat 25% off on Book Set </h5>

      <h3>
        Apply <span>Coupon Code</span> to Avail the Offer :-{" "}
        <span>COREBTR</span>
      </h3>

      <CountdownTimer />

      <h6>Checkout Plans & Prices</h6>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}
            style={{ "--mobile-order": plan.order }}
          >
            {plan.badge && (
              <div
                className={`plan-badge ${plan.featured ? "plan-badge--best" : "plan-badge--popular"}`}
              >
                <Star size={13} strokeWidth={2.5} /> {plan.badge}
              </div>
            )}
            <div className="plan-header">
              <p className="plan-tier">{plan.tier}</p>
              <h2 className="plan-duration">{plan.duration}</h2>
            </div>
            <div className="plan-pricing-meta">
              <div className="plan-meta-row">
                <p className="plan-meta-label">
                  Original Price:{" "}
                  <span className="plan-meta-value--strike">
                    {plan.originalPrice}
                  </span>
                </p>
              </div>
              <div className="plan-meta-row">
                <p className="plan-meta-label">
                  Intro Price:{" "}
                  <span className="plan-meta-value--strike">
                    {plan.introPrice}
                  </span>
                </p>
              </div>
            </div>
            <div className="plan-launch-box">
              <p className="plan-launch-label">
                Launch offer Flat <span>25%</span> off + <span>2 Months</span>{" "}
                Extra Free
              </p>

              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <p className="plan-text">
                    Launch Price (After 25% off){" "}
                    <span className="plan-launch-price">
                      {plan.launchPrice}
                    </span>
                  </p>
                  <h5 className="plan-extra">(without Books)</h5>
                </span>
              </div>

              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <p className="plan-launch-bookset">
                    Launch offer on Bookset - Flat <span>25%</span> off
                  </p>
                  <p className="plan-text">
                    Price of Bookset (5 Books){" "}
                    <span className="plan-launch-price">{plan.books} </span>
                  </p>
                  <h5 className="plan-extra">(After 25% Off)</h5>
                </span>
              </div>

              <div className="plan-launch-price-row">
                <p className="plan-separately">
                  You need to purchase <br />
                  Plan and Book separately
                </p>
              </div>
            </div>
            <p className="plan-prices-valid">
              Offer valid till 25<sup>th</sup> April 2026
            </p>
            <div className="plan-savings">
              <NavLink to={plan.cta} target="_blank">
                Buy Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="plan-prices-help-div">
        {/* <p className="plan-prices-register">
          Registration starts from 11:00 AM on 1<sup>st</sup> April 2026
        </p> */}
        <p className="plan-prices-help">
          For any queries, feel free to contact our Helpline:{" "}
          <a href="tel:7428581909">7428581909</a> (Only For Calling)
        </p>
        <p className="plan-prices-help">
          Send us Whatsapp:{" "}
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
