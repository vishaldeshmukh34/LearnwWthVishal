import "./Courses.css";

function Courses() {
  
  const courses = [
    {
      title: "Full Stack Web Development",
      desc: "HTML, CSS, JavaScript, React, Node.js & real-world projects.",
      rating: "4.8",
      price: "₹4,999",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    },
    {
      title: "Java Programming Masterclass",
      desc: "Core Java, Advanced Java, Spring Boot & backend projects.",
      rating: "4.7",
      price: "₹3,999",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      title: "Data Science & AI",
      desc: "Python, Machine Learning, AI & Data Analysis projects.",
      rating: "4.9",
      price: "₹5,999",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "Software Testing",
      desc: "Manual Testing, Automation, Selenium & QA practices.",
      rating: "4.6",
      price: "₹2,999",
      img: "https://bing.com/th?asid=432345564884512014&id=OAUMA.5140EDB7CAC8F5A75DF4E14906D8E222_0BF7FCE4BBDFBFC9&pid=21.1&o=5&w=472&h=263&rs=2&qlt=100",
    },
    {
      title: "Cloud Computing",
      desc: "AWS, Azure, Google Cloud & deployment strategies.",
      rating: "4.8",
      price: "₹6,999",
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      title: "Data Engineering",
      desc: "ETL, Hadoop, Spark & big data architecture.",
      rating: "4.7",
      price: "₹5,499",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    },
    {
      title: "Cyber Security",
      desc: "Ethical Hacking, Network Security & penetration testing.",
      rating: "4.9",
      price: "₹6,499",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
      title: "DevOps Engineering",
      desc: "Docker, Kubernetes, CI/CD & automation pipelines.",
      rating: "4.8",
      price: "₹5,999",
      img: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    },
  ];

  return (
    <section className="courses">
          <section id="courses">
      
    </section>

      <h2 className="section-title">Our Popular Courses</h2>
      <p className="section-subtitle">
        Learn in-demand skills from top instructors and boost your career.
      </p>

      <div className="course-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="course-info">
                <span>⭐ {course.rating}</span>
                <span className="price">{course.price}</span>
              </div>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;