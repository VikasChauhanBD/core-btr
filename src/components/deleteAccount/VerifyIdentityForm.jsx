import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyIdentityForm.css";

// ▸ PASTE YOUR DEPLOYED APPS SCRIPT WEB APP URL HERE
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzmyW7j2cJDNg8YuJ8U0BkeXGqkDXhYucFLJcndWO31kZtng700YfAWH7P1cLK1FouO/exec";

const ShieldIcon = () => (
  <svg
    className="shield-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4 6V12C4 16.418 7.582 20.337 12 22C16.418 20.337 20 16.418 20 12V6L12 2Z"
      stroke="#1a7f6e"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function VerifyIdentityForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d[\d\s]{8,14}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      // Apps Script requires form-encoded body to avoid CORS preflight
      const formBody = new FormData();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("phone", formData.phone);

      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: formBody,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  // ── Success Screen ─────────────────────────
  if (status === "success") {
    return (
      <div className="page-wrapper">
        <div className="card success-card">
          <ShieldIcon />
          <h2 className="success-title">Request Submitted</h2>
          <p className="success-message">
            Your account deletion request has been received. A confirmation
            email has been sent to <strong>{formData.email}</strong>. We'll
            process it within 3–5 business days.
          </p>
          <button className="confirm-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Main Form ──────────────────────────────
  return (
    <div className="page-wrapper">
      <div className="card">
        <div className="farewell-text">
          <p>
            We're sorry to see you go, your feedback would mean a lot before you
            leave.
          </p>
          <p>
            <strong>Deleting your account is permanent.</strong>
          </p>
          <p>
            It will remove your access to CoreBTR services and all related data.
          </p>
        </div>

        <div className="identity-header">
          <ShieldIcon />
          <h2 className="form-title">Verify Your Identity</h2>
          <p className="form-subtitle">
            Please provide your registered details to proceed.
          </p>
        </div>

        <form className="identity-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name" className="field-label">
              Name <span className="required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`field-input ${errors.name ? "input-error" : ""}`}
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="email" className="field-label">
              Email <span className="required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`field-input ${errors.email ? "input-error" : ""}`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="phone" className="field-label">
              Registered Phone Number <span className="required">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`field-input ${errors.phone ? "input-error" : ""}`}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          {/* Server error banner */}
          {status === "error" && (
            <p className="error-message" style={{ textAlign: "center", marginBottom: "8px" }}>
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="confirm-btn"
            disabled={status === "loading"}
            style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
          >
            {status === "loading" ? "Submitting…" : "Confirm"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}