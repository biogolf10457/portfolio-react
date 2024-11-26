import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navTitle">Portfolio</div>
      <div
        className={`${"navHamburger"} ${menuOpen && "navHamburgerOpen"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {Array.from({ length: 3 }, (_, i) => (
          <div className="hamburgerBar" key={i} />
        ))}
      </div>
      <div className={`${"navMenu"} ${menuOpen && "navMenuOpen"}`}>
        <Link className="navMenuItem">Home</Link>
        <Link className="navMenuItem">Experience</Link>
        <Link className="navMenuItem">Project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
