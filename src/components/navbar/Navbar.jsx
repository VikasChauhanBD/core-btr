import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/coreBTR-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBTRMenu, setShowBTRMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowBTRMenu(false);
    setShowAbout(false);
  };

  const handleBTRClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleBTRArrowClick = (e) => {
    e.stopPropagation();
    setShowBTRMenu(!showBTRMenu);
  };

  const handleAboutClick = () => {
    navigate("#");
    handleCloseNav();
  };

  const handleAboutArrowClick = (e) => {
    e.stopPropagation();
    setShowAbout(!showAbout);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            src="https://cdn.dribbble.com/userupload/47136926/file/f77686c97121b5cd4268f9979f308699.png"
            alt="website logo"
          />
        </NavLink>
      </div>
      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>

        <NavLink
          to="https://drzainabvora.com/about"
          onClick={handleCloseNav}
          target="_blank"
        >
          About Dr. ZV
        </NavLink>

        {/* <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowAbout(true)}
          onMouseLeave={() => !showNav && setShowAbout(false)}
        >
          <button className="dropdown-trigger" onClick={handleAboutClick}>
            <span className="dropdown-text">About</span>
            <IoIosArrowDown
              className={`arrow-icon ${showAbout ? "rotate" : ""}`}
              onClick={handleAboutArrowClick}
            />
          </button>

          {showAbout && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowAbout(true)}
              onMouseLeave={() => !showNav && setShowAbout(false)}
            >
              <NavLink
                to="https://drzainabvora.com/about"
                target="_blank"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Dr. ZV
              </NavLink>
              <NavLink
                to="https://www.vidyajeevan.com/"
                target="_blank"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Vidya Jeevan <br /> Experience Center
              </NavLink>
            </div>
          )}
        </div> */}

        {/* <div
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
        </div> */}

        <NavLink
          to="/corebtr-offline"
          onClick={handleCloseNav}
          className="dropdown-link"
        >
          CoreBTR Offline
        </NavLink>
        <NavLink to="/corebtr-bootcamp" onClick={handleCloseNav}>
          CoreBTR Bootcamp
        </NavLink>
        <NavLink to="/workbooks" onClick={handleCloseNav}>
          Workbooks
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
