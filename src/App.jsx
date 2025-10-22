import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


const App = () => {
  return (
    <div>
      <section className="Hero-section">
        <div className="hero-content">
          <h1>Welcom to my bank</h1>
          <p>Your reliable parther in managing finances with ease and security</p>
          <a href="/get-started" className="cta-button">Get started</a>
        </div>
      </section>
    </div>
  );
};