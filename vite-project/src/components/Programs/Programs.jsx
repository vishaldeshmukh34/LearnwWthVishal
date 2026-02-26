import "./Programs.css";

function Programs() {
  const programs = [
    {
      title: "Programming Languages",
      desc: "C, C++, Java, Python, JavaScript and more with real projects.",
      icon: "💻",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Master DSA for coding interviews and top product companies.",
      icon: "🧠",
    },
    {
      title: "Aptitude & Reasoning",
      desc: "Quantitative aptitude, logical reasoning and verbal ability.",
      icon: "📊",
    },
    {
      title: "Mock Interviews",
      desc: "Live mock interviews with industry experts and feedback.",
      icon: "🎤",
    },
    {
      title: "Web Development",
      desc: "Frontend, Backend, MERN stack and real-world projects.",
      icon: "🌐",
    },
    {
      title: "Data Science & AI",
      desc: "Machine learning, AI, Python and real datasets training.",
      icon: "🤖",
    },
    {
      title: "System Design",
      desc: "Learn scalable architecture and backend design concepts.",
      icon: "🏗️",
    },
    {
      title: "Placement Preparation",
      desc: "Resume building, HR questions and company-specific prep.",
      icon: "🎯",
    },
    {
  title: "Cloud Computing & DevOps",
  desc: "Learn AWS, Docker, CI/CD pipelines and real-world deployment strategies.",
  icon: "☁️",
},
{
  title: "Cyber Security",
  desc: "Understand ethical hacking, network security and real-time threat protection.",
  icon: "🔐",
},
  ];

  return (
    <section className="programs" id="programs">
      <h2 className="section-title">
        Complete <span>Career Programs</span>
      </h2>

      <p className="section-subtitle">
        Everything you need to crack top tech companies.
      </p>

      <div className="program-container">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="program-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;