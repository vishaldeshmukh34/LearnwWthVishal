import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="section-title">Choose Your Plan 💎</h2>
      <p className="section-subtitle">
        Affordable plans designed for every student
      </p>

      <div className="pricing-container">

        {/* Basic Plan */}
        <div className="pricing-card">
          <h3>Starter</h3>
          <h1>₹999</h1>
          <p className="duration">3 Months</p>

          <ul>
            <li>Programming Basics</li>
            <li>Basic DSA</li>
            <li>Aptitude Training</li>
            <li>Weekly Practice</li>
          </ul>

          <button>Get Started</button>
        </div>

        {/* Popular Plan */}
        <div className="pricing-card popular">
          <div className="badge">Most Popular</div>
          <h3>Pro</h3>
          <h1>₹2499</h1>
          <p className="duration">6 Months</p>

          <ul>
            <li>All Programming Languages</li>
            <li>Advanced DSA</li>
            <li>Mock Interviews</li>
            <li>Live Projects</li>
            <li>Placement Support</li>
          </ul>

          <button>Enroll Now</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h3>Ultimate</h3>
          <h1>₹4999</h1>
          <p className="duration">1 Year</p>

          <ul>
            <li>Everything in Pro</li>
            <li>1:1 Mentorship</li>
            <li>Resume Building</li>
            <li>Interview Guarantee</li>
          </ul>

          <button>Join Today</button>
        </div>

      </div>
      <section id="pricing"></section>
    </section>
  );
};

export default Pricing;