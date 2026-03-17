import React from "react";
import { FaStar } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-heading">Flexible Plans For Every User</h2>
        <p className="pricing-subheading">
          Start free, upgrade anytime. No hidden fees, cancel whenever.
        </p>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="plan-title-row">
            <div className="plan-icon">
              <FaStar size={16} color="#fff" />
            </div>
            <h3 className="plan-name">Basic</h3>
          </div>

          <div className="plan-price">
            Free <span className="plan-period">(Forever)</span>
          </div>

          <ul className="plan-features">
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Book up to 2 appointments/month
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Basic health tracking
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Secure messaging
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Digital prescriptions
            </li>
          </ul>

          <button className="plan-btn plan-btn--outline">Get Started</button>
        </div>

        <div className="pricing-card pricing-card--featured">
          <div className="plan-title-row">
            <div className="plan-icon plan-icon--white">
              <FaStar size={16} color="#7c3aed" />
            </div>
            <h3 className="plan-name">Premium (Most Popular)</h3>
          </div>

          <div className="plan-price">
            $9.99 <span className="plan-period">per month</span>
          </div>

          <ul className="plan-features">
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Unlimited appointments
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Advanced health analytics
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Video consultations
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Family profiles (up to 4)
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Priority support
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Lab result integration
            </li>
          </ul>

          <button className="plan-btn plan-btn--filled">Get Started</button>
        </div>

        <div className="pricing-card">
          <div className="plan-title-row">
            <div className="plan-icon">
              <FaStar size={16} color="#fff" />
            </div>
            <h3 className="plan-name">Family</h3>
          </div>

          <div className="plan-price">
            $19.99 <span className="plan-period">per month</span>
          </div>

          <ul className="plan-features">
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Everything in Premium
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Unlimited family members
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Shared health dashboard
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Medication management
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              Emergency contacts
            </li>
            <li>
              <MdCheckCircle size={18} className="check-icon" />
              24/7 nurse hotline
            </li>
          </ul>

          <button className="plan-btn plan-btn--outline">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
