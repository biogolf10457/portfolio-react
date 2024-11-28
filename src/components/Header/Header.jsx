import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="Header">
      <div className="headerTitle">
        <div className="headerDescription">Portfolio</div>
        <div className="headerName">
          <div>
            <span className="nameHighlight">P</span>as
            <span className="nameHighlight">s</span>a
            <span className="nameHighlight">k</span>orn
          </div>
          <div>
            <span className="nameHighlight">N</span>uchitkachornwut
          </div>
        </div>
        <div className="headerDescription">
          Web Developer, Game Developer, 3D Animator
          <br />
          Graduated from Faculty of Information Technology, KMITL
        </div>
      </div>
      <div className="headerPicture"></div>
      <svg
        id="svg2"
        height={"350"}
        width={"1920"}
        viewBox="0 0 100 75"
        preserveAspectRatio="none"
      >
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8391D2" />
          <stop offset="100%" stopColor="#2779A1" />
        </linearGradient>
        <path
          d="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z"
          fill="url(#grad2)"
        >
          <animate
            repeatCount="indefinite"
            fill="url(#grad1)"
            attributeName="d"
            dur="5s"
            values="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
                                m 0 55 q 13 22 26 0 q 16 -24 32 0 q 22 32 44 0 v 25 h -102 z;
                                m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
                                "
          ></animate>
        </path>
      </svg>
      <svg
        id="svg1"
        height={"300"}
        width={"1920"}
        viewBox="0 0 100 75"
        preserveAspectRatio="none"
      >
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94AADD" />
          <stop offset="100%" stopColor="#489AC2" />
        </linearGradient>
        <path
          d="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z"
          fill="url(#grad1)"
        >
          <animate
            repeatCount="indefinite"
            fill="url(#grad1)"
            attributeName="d"
            dur="4s"
            // values="m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
            //                     m 0 55 q 13 22 26 0 q 16 -24 32 0 q 22 32 44 0 v 25 h -102 z;
            //                     m 0 55 q 13 -22 26 0 q 16 24 32 0 q 22 -32 44 0 v 25 h -102 z;
            //                     "
            values="M 0 55 Q 10 35 20 55 Q 30 75 40 55 Q 50 35 60 55 Q 70 75 80 55 Q 90 35 100 55 V 75 H 0 z;
                    M 0 55 Q 10 75 20 55 Q 30 35 40 55 Q 50 75 60 55 Q 70 35 80 55 Q 90 75 100 55 V 75 H 0 z;
                    M 0 55 Q 10 35 20 55 Q 30 75 40 55 Q 50 35 60 55 Q 70 75 80 55 Q 90 35 100 55 V 75 H 0 z;
                                "
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export default Header;
