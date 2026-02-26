import "./CareerSupport.css";

function CareerSupport() {
  return (
    <section className="career">
      <section id="placement"></section>
      <div className="career-header">
        <h2>Career & Placement Support</h2>
        <p>
          We don’t just teach — we prepare you for real jobs and top companies.
        </p>
      </div>

      <div className="career-stats">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat">
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Hiring Partners</p>
        </div>
        <div className="stat">
          <h3>₹12 LPA</h3>
          <p>Highest Package</p>
        </div>
      </div>

      <div className="career-services">
        <div className="service">
          <h4>📄 Resume Building</h4>
          <p>Professional resume review & optimization.</p>
        </div>

        <div className="service">
          <h4>🎤 Mock Interviews</h4>
          <p>Technical & HR mock interviews with experts.</p>
        </div>

        <div className="service">
          <h4>💼 Internship Opportunities</h4>
          <p>Real-world internship and live projects.</p>
        </div>

        <div className="service">
          <h4>🤝 Career Mentorship</h4>
          <p>1:1 guidance from industry professionals.</p>
        </div>
      </div>
    </section>
  );
}

export default CareerSupport;