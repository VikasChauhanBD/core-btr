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
    launchPrice: "5,179",
    withBooks: "7,939",
    badge: null,
    order: 3,
    cta: "#",
  },
  {
    tier: "PRO ANNUAL",
    duration: "12 Months",
    originalPrice: "Rs. 19,999",
    introPrice: "Rs. 17,399",
    launchPrice: "12,179",
    withBooks: "14,939",
    badge: "BEST VALUE",
    featured: true,
    order: 1,
    cta: "#",
  },
  {
    tier: "GROWTH",
    duration: "6 Months",
    originalPrice: "Rs. 14,999",
    introPrice: "Rs. 11,599",
    launchPrice: "8,119",
    withBooks: "10,879",
    badge: "POPULAR",
    order: 2,
    cta: "#",
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
                <Sparkles size={11} strokeWidth={2.5} /> Launch Price (after 30%
                off)
              </p>
              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <span className="plan-currency">Rs.</span>
                  {plan.launchPrice}{" "}
                  <span className="plan-text">(without Books)</span>
                  <br />
                  <p className="plan-extra">+ 2 Months Extra</p>
                </span>
              </div>

              <p className="plan-launch-label">
                {/* <Sparkles size={11} strokeWidth={2.5} /> Launch Price with 5
                Books */}
              </p>
              <div className="plan-launch-price-row">
                <span className="plan-launch-price">
                  <span className="plan-currency">Rs.</span>
                  {plan.withBooks}{" "}
                  <span className="plan-text">(with 5 Books)</span>
                  <p className="plan-extra">+ 2 Months Extra</p>
                </span>
              </div>

              {/* <div className="plan-extra-btn">
                <p className="plan-launch-offer">
                  Launch offer <br /> Avail Flat <b>30%</b> off +{" "}
                  <b>2 Months</b> Extra
                </p>
              </div> */}
            </div>
            <p className="plan-prices-valid">
              Offer valid till 16<sup>th</sup> April 2026
            </p>
            <div className="plan-savings">
              <NavLink to={plan.cta}>Buy Now</NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* <h2 className="plan-prices-heading">Set of 5 Books</h2>
      <h4 className="plan-prices-sub-heading">
        Unannotated Workbooks - Set of 2 Books | Annotated Notes - Set of 3
        Books
      </h4> */}

      {/* <div className="plan-prices-book">
        <div className="plan-meta-row">
          <p className="plan-meta-label">
            Original Price:{" "}
            <span className="plan-meta-value--strike">Rs 5,700</span>
          </p>
        </div>

        <div className="plan-launch-box">
          <p className="plan-launch-label">
            <Sparkles size={13} strokeWidth={2.5} /> Introductory Price:
          </p>
          <div className="plan-launch-price-row">
            <span className="plan-launch-price">
              <span className="plan-currency">Rs</span>
              4,600
            </span>
          </div>

          <div className="plan-extra-btn">
            <p className="plan-launch-offer">
              Launch offer <br /> Avail Flat <b>40%</b> off
            </p>
          </div>
        </div>

        <div className="plan-savings">
          <NavLink to="#">Buy Now</NavLink>
        </div>

        <p className="plan-launch-valid">
          Valid till 16<sup>th</sup> April 2026
        </p>
      </div> */}

      <div className="plan-prices-help-div">
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
