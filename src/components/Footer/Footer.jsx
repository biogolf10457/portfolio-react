import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>&copy; 2024 Passakorn Nuchitkachornwut</div>
      <div>
        <a
          href="https://github.com/biogolf10457"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/skillsLogo/github-mark-white.svg`}
            alt="github"
            height={"36px"}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
