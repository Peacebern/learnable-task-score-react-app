// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>WELCOME TO LEARNABLE INTERNSHIP PROGRAM</h1>
      <p>Choose your Track:</p>
      <div className="learning-paths">
        <Link to="/frontend" className="learning-path-card">
          <h2>FRONTEND</h2>
        </Link>
        <Link to="/backend" className="learning-path-card">
          <h2>BACKEND</h2>
        </Link>
        <Link to="/web3" className="learning-path-card">
          <h2>WEB3</h2>
        </Link>
        <Link to="/productdesign" className="learning-path-card">
          <h2>PRODUCT-DESIGN</h2>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
