import React from "react";
import { Sparkles, Star } from "lucide-react";
import "./PlanPrices.css";
import { NavLink } from "react-router-dom";

const plans = [
  {
    tier: "STARTER",
    duration: "3 Months",
    originalPrice: "Rs. 11,999",
    introPrice: "Rs. 7,399",
    launchPrice: "Rs. 5,179",
    books: "Rs. 2,760",
    badge: null,
    order: 3,
    cta: "https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh",
  },
  {
    tier: "PRO ANNUAL",
    duration: "12 Months",
    originalPrice: "Rs. 19,999",
    introPrice: "Rs. 17,399",
    launchPrice: "Rs. 12,179",
    books: "Rs. 2,760",
    badge: "BEST VALUE",
    featured: true,
    order: 1,
    cta: "https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh",
  },
  {
    tier: "GROWTH",
    duration: "6 Months",
    originalPrice: "Rs. 14,999",
    introPrice: "Rs. 11,599",
    launchPrice: "Rs. 8,119",
    books: "Rs. 2,760",
    badge: "POPULAR",
    order: 2,
    cta: "https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh",
  },
];

export default function PlanPrices() {
  return (
    <div className="plan-prices-wrapper">
      <h2 className="plan-prices-heading">Choose Your Plan</h2>
      <h4 className="plan-prices-sub-heading">
        We have duration based plans 3 Months | 6 Months | 12 Months
      </h4>

      <h5>Avail Launch Offer Flat 30% off on any plan + 2 Months Extra FREE</h5>
      <h5>Also Get Flat 40% off on Book Set </h5>

      <h6>Checkout Plans & Prices</h6>

      {/* <div className="plans-cards">
        <div className="plans-card">
          <NavLink
            to="https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh"
            target="_blank"
          >
            <img
              src="https://cdn.dribbble.com/userupload/47238065/file/5847b484c12b92885d6d3daf95ad5ae8.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="plans-card">
          <NavLink
            to="https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh"
            target="_blank"
          >
            <img
              src="https://cdn.dribbble.com/userupload/47238066/file/4f84477f1784d52f6b32930aebc59c23.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="plans-card">
          <NavLink
            to="https://portal.corebtr.com/subscription/packages?redirect_to_app=refresh"
            target="_blank"
          >
            <img
              src="https://cdn.dribbble.com/userupload/47238067/file/042d440810c03dcc58bb347eaaa60526.png"
              alt=""
            />
          </NavLink>
        </div>
      </div> */}

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
                Launch offer Flat <span>30%</span> off + <span>2 Months</span>{" "}
                Extra Free
              </p>

              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <p className="plan-text">
                    Launch Price (After 30% off){" "}
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
                    Launch offer on Bookset - Flat <span>40%</span> off
                  </p>
                  <p className="plan-text">
                    Price of Bookset (5 Books){" "}
                    <span className="plan-launch-price">
                      {plan.books}{" "}
                      {/* <span className="plan-40"> (After 40% Off)</span> */}
                    </span>
                  </p>
                  <h5 className="plan-extra">(After 40% Off)</h5>
                </span>
              </div>

              <p className="plan-launch-label"></p>
              <div className="plan-launch-price-row">
                <p className="plan-separately">
                  You need to purchase <br />
                  Plan and Book separately
                </p>
              </div>
            </div>
            <p className="plan-prices-valid">
              Offer valid till 16<sup>th</sup> April 2026
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
        <p className="plan-prices-register">
          Registration starts from 11:00 AM on 1<sup>st</sup> April 2026
        </p>
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
