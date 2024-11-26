import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <div className="headerDescription">Portfolio</div>
        <div className="headerName">
          Passakorn
          <br />
          Nuchitkachornwut
        </div>
        <div className="headerDescription">
          Web Developer, Game Developer, 3D Animator
          <br />
          Graduated from Faculty of Information Technology, KMITL
        </div>
      </div>
      <div className="headerPicture"></div>
      <svg
        id="svg1"
        height={"300"}
        width={"1920"}
        viewBox="0 0 102 75"
        preserveAspectRatio="none"
      >
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00B4DB" />
          <stop offset="50%" stop-color="#224488" />
          <stop offset="100%" stop-color="#0083B0" />
        </linearGradient>
        <path
          d="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z"
          fill="url(#grad1)"
        >
          <animate
            repeatCount="indefinite"
            fill="url(#grad1)"
            attributeName="d"
            dur="7s"
            values="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
                                m 0 55 q 13 22 26 0 q 16 -24 32 0 q 22 32 44 0 v 25 h -102 z;
                                m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
                                "
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export default Header;
