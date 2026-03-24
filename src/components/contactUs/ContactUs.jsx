import React from "react";
import "./ContactUs.css";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.3 14.9 14.5C15.9 14.8 17 15 18 15C18.6 15 19 15.4 19 16V18C19 18.6 18.6 19 18 19C10.8 19 5 13.2 5 6C5 5.4 5.4 5 6 5H8C8.6 5 9 5.4 9 6C9 7 9.2 8 9.5 9C9.6 9.3 9.5 9.7 9.3 9.9L6.6 10.8Z"
      stroke="#1767be"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.37 17.07L2 22L7.09 20.65C8.54 21.49 10.21 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 15.5C16.3 16.1 15.4 16.6 14.7 16.7C14.2 16.8 13.6 16.8 12.4 16.3C10.7 15.6 9.2 14.3 8.1 12.7C7.5 11.9 7.1 10.9 7.1 10C7.1 9.1 7.5 8.4 8 7.9C8.2 7.7 8.4 7.6 8.6 7.6H9.1C9.3 7.6 9.5 7.6 9.7 8.1L10.4 9.7C10.5 9.9 10.5 10.1 10.4 10.3L10 10.8C9.9 11 9.9 11.2 10 11.4C10.4 12.1 11 12.8 11.6 13.3C12.2 13.8 12.9 14.2 13.5 14.5C13.7 14.6 13.9 14.6 14.1 14.4L14.6 13.9C14.8 13.7 15 13.6 15.2 13.7L16.8 14.4C17 14.5 17.2 14.7 17.2 14.9C17.2 15.1 17 15.3 16.5 15.5Z"
      stroke="#1767be"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="#1767be"
      strokeWidth="1.8"
    />
    <path
      d="M3 8L12 13.5L21 8"
      stroke="#1767be"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const AddressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8.69 2 6 4.69 6 8C6 12.5 12 20 12 20C12 20 18 12.5 18 8C18 4.69 15.31 2 12 2Z"
      stroke="#1767be"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="8" r="2.5" stroke="#1767be" strokeWidth="1.8" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="#1767be"
      strokeWidth="1.8"
    />
    <path
      d="M16 2V6M8 2V6M3 10H21"
      stroke="#1767be"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
  >
    <circle cx="12" cy="12" r="9" stroke="#1767be" strokeWidth="1.8" />
    <path
      d="M12 7V12L15 14"
      stroke="#1767be"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ContactUs = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919266682739", "_blank");
  };

  return (
    <div className="contact-us-page">
      <h1 className="contact-us-title">Contact Us</h1>

      <div className="contact-us-office-info">
        <div className="contact-us-office-row">
          <CalendarIcon />
          <span>Our Office is Open: Monday to Saturday</span>
        </div>
        <div className="contact-us-office-row">
          <ClockIcon />
          <span>Office Timings: 9:30am to 6pm</span>
        </div>
      </div>

      <div className="contact-us-body">
        <div className="contact-us-left">
          <p className="contact-us-tagline">
            Have a question or need help? Reach out and our team will get back
            to you at the earliest.
          </p>

          <div className="contact-us-contacts">
            <div className="contact-us-contact-item">
              <div className="contact-us-icon-wrap">
                <PhoneIcon />
              </div>
              <div className="contact-us-contact-info">
                <span className="contact-us-contact-label">Phone</span>
                <a
                  href="tel:+917428581909"
                  className="contact-us-contact-value"
                >
                  +91-7428581909
                </a>
              </div>
            </div>

            <div className="contact-us-contact-item">
              <div className="contact-us-icon-wrap">
                <WhatsAppIcon />
              </div>
              <div className="contact-us-contact-info">
                <span className="contact-us-contact-label">WhatsApp Us</span>
                <a
                  href="https://wa.me/919266682739"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-us-contact-value"
                >
                  +91-9266682739
                </a>
              </div>
            </div>

            <div className="contact-us-contact-item">
              <div className="contact-us-icon-wrap">
                <EmailIcon />
              </div>
              <div className="contact-us-contact-info">
                <span className="contact-us-contact-label">Email</span>
                <a
                  href="mailto:Support@corebtr.com"
                  className="contact-us-contact-value"
                >
                  Support@corebtr.com
                </a>
              </div>
            </div>

            <div className="contact-us-contact-item">
              <div className="contact-us-icon-wrap">
                <AddressIcon />
              </div>
              <div className="contact-us-contact-info">
                <span className="contact-us-contact-label">Address</span>
                <address className="contact-us-contact-value contact-us-address">
                  Vidya Jeevan,
                  <br />
                  Institutional Plot No. 6, Knowledge Park – 1,
                  <br />
                  Greater Noida, Gautam Buddha Nagar,
                  <br />
                  Uttar Pradesh 201310
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us-right">
          <div className="contact-us-whatsapp-card">
            <div className="contact-us-wa-icon-circle">
              <WhatsAppIcon />
            </div>
            <h2 className="contact-us-wa-title">WhatsApp Us</h2>
            <p className="contact-us-wa-desc">
              Get quick support via WhatsApp. We're available Monday to
              Saturday, 9:30am to 6pm.
            </p>
            <button className="contact-us-wa-btn" onClick={handleWhatsApp}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.37 17.07L2 22L7.09 20.65C8.54 21.49 10.21 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
