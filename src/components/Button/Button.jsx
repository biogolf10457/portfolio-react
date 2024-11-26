import React from "react";
import "./Button.css";

const Button = ({ srcURL, text }) => {
  return (
    <a href={srcURL} target="_blank" rel="noopener noreferrer">
      <button type="button" className="button">
        {text}
      </button>
    </a>
  );
};

export default Button;
