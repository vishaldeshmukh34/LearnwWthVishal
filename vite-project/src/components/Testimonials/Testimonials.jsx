import "./Testimonials.css";

function Testimonials() {
  const students = [
    {
      name: "Amit Patil",
      role: "Software Engineer at TCS",
      feedback:
        "This platform helped me crack my first job. DSA and Mock interviews were game-changing!",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Kulkarni",
      role: "Frontend Developer at Infosys",
      feedback:
        "The Full Stack course was very practical and industry-oriented. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Deshmukh",
      role: "Data Analyst at Wipro",
      feedback:
        "Data Science program was structured perfectly. Mentorship support was amazing.",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Students Say</h2>
      <p className="section-subtitle">
        Real success stories from our learners.
      </p>

      <div className="testimonial-container">
        {students.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <img src={student.img} alt={student.name} />
            <h3>{student.name}</h3>
            <p className="role">{student.role}</p>
            <p className="feedback">"{student.feedback}"</p>
            <div className="rating">{student.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;