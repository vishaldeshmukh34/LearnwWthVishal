import "./Mentors.css";

function Mentors() {
  const mentors = [
    {
      name: "Rahul Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      experience: "8+ Years Experience",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sneha Kulkarni",
      role: "Data Scientist",
      company: "Amazon",
      experience: "6+ Years Experience",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Amit Patil",
      role: "Cloud Architect",
      company: "Microsoft",
      experience: "10+ Years Experience",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="mentors">
      <h2 className="section-title">Meet Our Expert Mentors</h2>
      <p className="section-subtitle">
        Learn from industry leaders working at top companies.
      </p>

      <div className="mentor-container">
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <img src={mentor.img} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <p className="role">{mentor.role}</p>
            <p className="company">{mentor.company}</p>
            <p className="experience">{mentor.experience}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;