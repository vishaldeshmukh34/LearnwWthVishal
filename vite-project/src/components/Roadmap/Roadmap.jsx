import React from "react";
import "./Roadmap.css";
import { FaCode, FaProjectDiagram, FaBrain, FaUserTie } from "react-icons/fa";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h2 className="section-title">Your Complete Career Roadmap 🚀</h2>
      <p className="section-subtitle">
        Step-by-step learning path to crack top tech companies
      </p>

      <div className="roadmap-container">

        <div className="roadmap-card">
          <FaCode className="icon" />
          <h3>Programming Languages</h3>
          <p>
            Master C, C++, Java, Python & JavaScript with real projects.
          </p>
        </div>

        <div className="roadmap-card">
          <FaProjectDiagram className="icon" />
          <h3>Data Structures & Algorithms</h3>
          <p>
            Arrays, Linked List, Stack, Queue, Trees, Graphs & Advanced DSA.
          </p>
        </div>

        <div className="roadmap-card">
          <FaBrain className="icon" />
          <h3>Aptitude & Logical Reasoning</h3>
          <p>
            Quantitative aptitude, reasoning & problem solving practice.
          </p>
        </div>

        <div className="roadmap-card">
          <FaUserTie className="icon" />
          <h3>Mock Interviews</h3>
          <p>
            HR + Technical mock interviews with real company scenarios.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;