import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import {
  MdOutlineHealthAndSafety,
  MdOutlineVideoCall,
  MdOutlineShield,
} from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoArrowForwardCircle, IoNotificationsOutline } from "react-icons/io5";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2 className="features-heading">
          Everything You Need. Nothing You Don't.
        </h2>
        <p className="features-subheading">
          Comprehensive healthcare management designed with simplicity and
          security in mind.
        </p>
      </div>

      <div className="features-grid">
        <div className="features-card">
          <div className="feature-icon">
            <BsCalendar2Check size={24} color="#fff" />
          </div>
          <h3 className="feature-title">Easy Appointment Booking</h3>
          <p className="feature-desc">
            Find doctors and book visits within seconds. Browse by specialty,
            location, and availability.
          </p>
        </div>

        <div className="features-card phone-center-card">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar" />
                  <div className="phone-bell">
                    <IoNotificationsOutline size={14} color="#7c3aed" />
                  </div>
                </div>
                <div className="phone-treatment-label">My Treatment</div>
                <div className="phone-greeting">
                  I Hope You're Feeling Well Today!
                </div>
                <div className="phone-tabs">
                  <span className="tab active">AI Consult</span>
                  <span className="tab">Checkup</span>
                  <span className="tab">Consult</span>
                </div>
                <div className="phone-section-label">
                  Recent Doctor's Appointment
                </div>
                <div className="phone-doctor-card">
                  <div className="doctor-avatar" />
                  <div className="doctor-info">
                    <div className="doctor-name">Dr. Kurtis Lambert</div>
                    <div className="doctor-exp">5 Year Experienced</div>
                    <div className="doctor-stars">★★★★★</div>
                  </div>
                  <div className="doctor-arrow">›</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-card">
          <div className="feature-icon">
            <MdOutlineHealthAndSafety size={26} color="#fff" />
          </div>
          <h3 className="feature-title">Health Tracker</h3>
          <p className="feature-desc">
            Log vitals, medication, and sleep with smart reminders that keep you
            on track.
          </p>
        </div>

        <div className="features-card">
          <div className="feature-icon">
            <MdOutlineVideoCall size={26} color="#fff" />
          </div>
          <h3 className="feature-title">Instant Telehealth</h3>
          <p className="feature-desc">
            Video consult with certified doctors anytime, anywhere. No waiting
            rooms required.
          </p>
        </div>

        <div className="features-card">
          <div className="feature-icon">
            <FaRegFolderOpen size={22} color="#fff" />
          </div>
          <h3 className="feature-title">Digital Health Records</h3>
          <p className="feature-desc">
            Access and share your prescriptions, lab results, and medical
            history securely.
          </p>
        </div>

        <div className="features-card">
          <div className="feature-icon">
            <MdOutlineShield size={26} color="#fff" />
          </div>
          <h3 className="feature-title">Secure &amp; Encrypted</h3>
          <p className="feature-desc">
            HIPAA-compliant data security with end-to-end encryption and privacy
            controls.
          </p>
        </div>
      </div>

      <div className="features-cta">
        <button className="cta-button">
          Explore Full Features
          <span className="cta-icon">
            <IoArrowForwardCircle size={22} color="#fff" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
