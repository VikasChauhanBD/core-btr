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
    navigate("/btr");
    handleCloseNav();
  };

  const handleBTRArrowClick = (e) => {
    e.stopPropagation();
    setShowBTRMenu(!showBTRMenu);
  };

  const handleCRClick = () => {
    navigate("/conceptual-radiology");
    handleCloseNav();
  };

  const handleCRArrowClick = (e) => {
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
        <NavLink to="/about-books" onClick={handleCloseNav}>
          About Books
        </NavLink>
        <NavLink to="/plans" onClick={handleCloseNav}>
          Plans
        </NavLink>
        <NavLink to="/reviews" onClick={handleCloseNav}>
          Reviews
        </NavLink>
        <NavLink to="/gallery" onClick={handleCloseNav}>
          Gallery
        </NavLink>
        <NavLink to="/faqs" onClick={handleCloseNav}>
          Faqs
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
