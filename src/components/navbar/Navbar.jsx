import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/react.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBTRMenu, setShowBTRMenu] = useState(false);
  const [showCRMenu, setShowCRMenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowBTRMenu(false);
    setShowCRMenu(false);
  };

  const handleBTRClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleBTRArrowClick = (e) => {
    // Stop propagation to prevent triggering handleBTRClick
    e.stopPropagation();
    setShowBTRMenu(!showBTRMenu);
  };

  const handleCRClick = () => {
    // Navigate to Conceptual Radiology page
    navigate("/conceptual-radiology");
    handleCloseNav();
  };

  const handleCRArrowClick = (e) => {
    // Stop propagation to prevent triggering handleCRClick
    e.stopPropagation();
    setShowCRMenu(!showCRMenu);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={Logo} alt="website logo" />
        </NavLink>
      </div>
      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>
        <NavLink
          to="https://drzainabvora.com/about"
          target="_blank"
          onClick={handleCloseNav}
        >
          About Dr. ZV
        </NavLink>

        {/* BTR with dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowBTRMenu(true)}
          onMouseLeave={() => !showNav && setShowBTRMenu(false)}
        >
          <button className="dropdown-trigger" onClick={handleBTRClick}>
            <span className="dropdown-text">BTR</span>
            <IoIosArrowDown
              className={`arrow-icon ${showBTRMenu ? "rotate" : ""}`}
              onClick={handleBTRArrowClick}
            />
          </button>

          {showBTRMenu && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowBTRMenu(true)}
              onMouseLeave={() => !showNav && setShowBTRMenu(false)}
            >
              <NavLink
                to="/btr-online"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                BTR Online
              </NavLink>
              <NavLink
                to="/btr-offline"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                BTR Offline
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/bootcamp" onClick={handleCloseNav}>
          Bootcamp
        </NavLink>
        <NavLink to="#" onClick={handleCloseNav}>
          Buy New Plans
        </NavLink>
        <NavLink to="/reviews" onClick={handleCloseNav}>
          Reviews
        </NavLink>
        <NavLink to="/gallery" onClick={handleCloseNav}>
          Gallery
        </NavLink>
        <NavLink to="/faqs" onClick={handleCloseNav}>
          FAQ's
        </NavLink>
      </nav>
      <div className="hamburger">
        <button className="hamburger-btn" onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
