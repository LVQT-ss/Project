import React from "react";
import "../styles/App.css";

const Footer = () => {
  const handleAboutClick = () => {
    console.log("About Us clicked");
  };

  return (
    <footer className="footer">
      <div className="footer-list">
        <ul>
          <li>
            <button
              onClick={handleAboutClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              About Us
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <button
              onClick={handleAboutClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Support
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <button
              onClick={handleAboutClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <button
              onClick={handleAboutClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      <div className="footer-list">
        <ul>
          <li>
            <button
              onClick={handleAboutClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Privacy & Terms
            </button>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
