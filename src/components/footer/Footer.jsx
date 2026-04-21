// import React from "react";
// import "./Footer.css";
// import { NavLink } from "react-router-dom";
// import { FaInstagram, FaYoutube } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         <div className="footer-section footer-about">
//           <div className="footer-logo">
//             <img
//               src="https://cdn.dribbble.com/userupload/47136926/file/f77686c97121b5cd4268f9979f308699.png"
//               alt="website logo"
//             />
//           </div>
//           <div className="footer-social">
//             <NavLink
//               to="https://www.instagram.com/corebtr/"
//               target="_blank"
//               className="social-icon"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </NavLink>
//             <NavLink
//               to="https://www.youtube.com/@corebtrbyzainabvora"
//               target="_blank"
//               className="social-icon"
//               aria-label="YouTube"
//             >
//               <FaYoutube />
//             </NavLink>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-title">Quick Links</h3>
//           <ul className="footer-links">
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/workbooks">Workbooks</NavLink>
//             </li>
//             <li>
//               <NavLink to="/plan-prices">Buy New Plans</NavLink>
//             </li>
//             <li>
//               <NavLink to="/reviews">Reviews</NavLink>
//             </li>
//             <li>
//               <NavLink to="/gallery">Gallery</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/blogs">Blogs</NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-title">Programs for NEET/INI CET</h3>
//           <ul className="footer-links">
//             {/* <li>
//               <NavLink to="/btr-online">BTR Online</NavLink>
//             </li> */}
//             <li>
//               <NavLink to="/corebtr-offline">CoreBTR Offline</NavLink>
//             </li>
//             <li>
//               <NavLink to="/corebtr-bootcamp">CoreBTR Bootcamp</NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-title">Useful Links</h3>
//           <ul className="footer-links">
//             <li>
//               <NavLink to="/privacy-policy">Privacy Policy</NavLink>
//             </li>
//             <li>
//               <NavLink to="/terms">Terms & Conditions</NavLink>
//             </li>
//             <li>
//               <NavLink to="/cancellation-refund">
//                 Cancellation & Refund Policy
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/shipping-delivery">
//                 Shipping & Delivery Policy
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/device-policy">Device Policy</NavLink>
//             </li>
//             <li>
//               <NavLink to="/faq">FAQ's</NavLink>
//             </li>
//             <li>
//               <NavLink to="/newsletter-form">Newsletter</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>
//           &copy; 2026 CoreBTR, All rights reserved. | Designed & Managed By:{" "}
//           <NavLink to="https://believersdestination.com/" target="_blank">
//             Believers Destination Pvt Ltd
//           </NavLink>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img
              src="https://cdn.dribbble.com/userupload/47136926/file/f77686c97121b5cd4268f9979f308699.png"
              alt="website logo"
            />
          </div>
          <div className="footer-social">
            <NavLink
              to="https://www.instagram.com/corebtr/"
              target="_blank"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@corebtrbyzainabvora"
              target="_blank"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </NavLink>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>

        {/* STUDY */}
        <div className="footer-section">
          <h3 className="footer-title">Study Resources</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/workbooks">Workbooks</NavLink>
            </li>
            <li>
              <NavLink to="/corebtr-offline">CoreBTR Offline</NavLink>
            </li>
            <li>
              <NavLink to="/corebtr-bootcamp">CoreBTR Bootcamp</NavLink>
            </li>
          </ul>
        </div>

        {/* PLANS */}
        <div className="footer-section">
          <h3 className="footer-title">Plans & Purchases</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/plan-prices">Buy New Plans</NavLink>
            </li>
            <li>
              <NavLink to="/shipping-delivery">Shipping & Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/cancellation-refund">Cancellation & Refund</NavLink>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ's</NavLink>
            </li>
            <li>
              <NavLink to="/device-policy">Device Policy</NavLink>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="footer-section">
          <h3 className="footer-title">Legal & Updates</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/newsletter-form">Newsletter</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 CoreBTR, All rights reserved. |{" "}
          <span>Designed & Managed By:</span>{" "}
          <NavLink to="https://believersdestination.com/" target="_blank">
            Believers Destination Pvt Ltd
          </NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
