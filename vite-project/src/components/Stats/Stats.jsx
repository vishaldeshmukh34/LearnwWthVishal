import React, { useEffect, useState } from "react";
import "./Stats.css";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-card">
      <h1>{count}+</h1>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <h2 className="section-title">Our Placement Success 📊</h2>
      <p className="section-subtitle">
        Trusted by thousands of students across India
      </p>

      <div className="stats-container">
        <Counter target={5000} label="Students Trained" />
        <Counter target={1200} label="Placed Students" />
        <Counter target={150} label="Hiring Companies" />
        <Counter target={25} label="LPA Highest Package" />
      </div>
    </section>
  );
};

export default Stats;