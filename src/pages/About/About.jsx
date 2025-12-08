import "./About.css";

function About() {
  const education = [
    {
      degree: "Master of Computer Applications in Cyber Security",
      institution: "Lovely Professional University, Phagwara, Punjab",
      period: "2025-2027",
      status: "Pursuing"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "GGDSD College, Chandigarh",
      period: "2022-2025",
      percentage: "81.19%"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Government Model Sr Sec School Modern Complex Mani-Majra Chandigarh (CBSE)",
      period: "2022",
      percentage: "88%"
    },
    {
      degree: "Secondary (X)",
      institution: "DC Model Sr Sec School Sector 7 Panchkula Haryana (CBSE)",
      period: "2020",
      percentage: "91.20%"
    }
  ];

  const experience = [
    {
      company: "Elite Web Technologies",
      position: "Backend Developer",
      period: "June 2024 - Present",
      description: "Currently working on backend development projects, contributing to web applications and learning industry best practices."
    }
  ];

  const coCurricular = [
    {
      title: "National Service Scheme (NSS)",
      achievement: "B Category Certificate",
      description: "Attended 2 NSS camps, actively participated in community service initiatives and social welfare programs."
    },
    {
      title: "Debate Competitions",
      achievement: "Podium Finish",
      description: "Participated in various debate competitions at school level, demonstrating strong communication and analytical skills."
    },
    {
      title: "Sports Activities",
      achievement: "Inter House Competitions",
      description: "Actively participated in inter house cricket and basketball competitions, showcasing teamwork and sportsmanship."
    }
  ];

  const hobbies = [
    { name: "Music Listening", icon: "🎵" },
    { name: "Reading Books", icon: "📚" },
    { name: "Playing Games", icon: "🎮" },
    { name: "Travelling", icon: "✈️" },
    { name: "Coding", icon: "💻" }
  ];

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
                <p>MERN & more</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <div className="edu-details">
                    <span className="period">{edu.period}</span>
                    {edu.percentage && <span className="percentage">Percentage: {edu.percentage}</span>}
                    {edu.status && <span className="status">{edu.status}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-grid">
              {experience.map((exp, index) => (
                <div key={index} className="experience-card">
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cocurricular-section">
            <h2>Co-Curricular Activities</h2>
            <div className="cocurricular-grid">
              {coCurricular.map((activity, index) => (
                <div key={index} className="cocurricular-card">
                  <h3>{activity.title}</h3>
                  <p className="achievement">{activity.achievement}</p>
                  <p className="description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hobbies-section">
            <h2>Hobbies & Interests</h2>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-card">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <p className="hobby-name">{hobby.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;