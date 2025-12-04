import "./About.css";

function About() {
  const skills = [
   "HTML", "CSS", "PHP", "REACT", "JAVASCRIPT", "TYPESCRIPT", "MONGODB", "EXPRESS.JS", "NODE.JS", "MYSQL", "GIT", "GITHUB", "VERCEL", "CANVA"
  ]

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Me</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Full-Stack Developer & Problem Solver</h2>
              <p>
                I'm a passionate web developer who loves building dynamic, responsive web applications 
                that deliver exceptional user experiences. With expertise in both frontend and backend 
                technologies, I create scalable solutions that bring ideas to life.
              </p>
              <p>
                I specialize in full-stack development using modern technologies like React, Node.js, 
                and MongoDB. My approach focuses on writing clean, maintainable code while ensuring 
                optimal performance and user satisfaction.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="about-info">
              <div className="info-box">
                <h3>Experience</h3>
                <p>Building Web Solutions</p>
              </div>
              <div className="info-box">
                <h3>Projects Completed</h3>
                <p>Multiple Web Applications</p>
              </div>
              <div className="info-box">
                <h3>Tech Stack</h3>
                <p>REACT & more</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;