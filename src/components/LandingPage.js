// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Intern Program</h1>
      <p>Choose your learning path:</p>
      <div className="learning-paths">
        <Link to="/frontend" className="learning-path-card">
          <h2>Frontend</h2>
        </Link>
        <Link to="/backend" className="learning-path-card">
          <h2>Backend</h2>
        </Link>
        <Link to="/web3" className="learning-path-card">
          <h2>Web3</h2>
        </Link>
        <Link to="/productdesign" className="learning-path-card">
          <h2>Product Design</h2>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
