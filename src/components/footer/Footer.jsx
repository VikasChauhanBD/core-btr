import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/coreBTR-logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src={Logo} alt="website logo" />
          </div>
          <div className="footer-social">
            <NavLink
              to="https://www.instagram.com/btrbyzainabvora/"
              target="_blank"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@btrbyzainabvora"
              target="_blank"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="https://drzainabvora.com/about" target="_blank">
                About Dr. ZV
              </NavLink>
            </li>
            <li>
              <NavLink to="#">Buy New Plans</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="https://drzainabvora.com/gallery" target="_blank">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQ's</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Programs for NEET/INI CET</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/btr-online">BTR Online</NavLink>
            </li>
            <li>
              <NavLink to="/btr-offline">BTR Offline</NavLink>
            </li>
            <li>
              <NavLink to="/bootcamp">Bootcamp</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/pricing-details">Pricing Details</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/cancellation-and-refund-policy">
                Cancellation & Refund Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping-and-delivery-policy">
                Shipping & Delivery Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 coreBTR, All rights reserved. | Designed & Managed By:{" "}
          <NavLink to="https://believersdestination.com/" target="_blank">
            Believers Destination Pvt Ltd
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
