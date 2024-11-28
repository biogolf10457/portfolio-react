import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navTitle">
        <Link to="Header" smooth={true} duration={500}>
          <img
            src={`${process.env.PUBLIC_URL}/images/pskn.png`}
            alt="logo"
            height="36px"
          />
        </Link>
      </div>
      <div
        className={`${"navHamburger"} ${menuOpen && "navHamburgerOpen"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {Array.from({ length: 3 }, (_, i) => (
          <div className="hamburgerBar" key={i} />
        ))}
      </div>
      <div className={`${"navMenu"} ${menuOpen && "navMenuOpen"}`}>
        <Link className="navMenuItem" to="Header" smooth={true} duration={500}>
          Home
        </Link>
        <Link
          className="navMenuItem"
          to="Experience"
          smooth={true}
          duration={500}
        >
          Experience
        </Link>
        <Link className="navMenuItem" to="Project" smooth={true} duration={500}>
          Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
