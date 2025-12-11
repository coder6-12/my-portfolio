import { Link } from "react-router-dom";
import "./Home.css";
import Profile from "../../assets/profile.jpg";
import resume from "../../assets/resume.pdf";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPhp, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress, SiVercel, SiCanva, SiMysql, SiPostman } from "react-icons/si";

function Home() {
  const skillCategories = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> }
    ],
    backend: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  };

  const handleDownloadCV = () => {
    window.open(resume, '_blank');
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                FULL STACK
                <br />
                DEVELOPER
              </h1>
              <p className="hero-subtitle">
                Hi, I'm Madhav, a passionate web developer dedicated to creating user-friendly digital experiences.
              </p>
              <div className="hero-buttons">
                <button onClick={handleDownloadCV} className="btn-primary">
                  Resume
                </button>
              </div>
            </div>

            <div className="hero-image">
              <div className="profile-circle">
                <img src={Profile} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="heading">Skills</div>
      
      <section className="skills-section">
        <div className="container">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="clients-grid">
              {skillCategories.frontend.map((skill, index) => (
                <div key={index} className="client-logo">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="clients-grid">
              {skillCategories.backend.map((skill, index) => (
                <div key={index} className="client-logo">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Tools</h3>
            <div className="clients-grid">
              {skillCategories.tools.map((skill, index) => (
                <div key={index} className="client-logo">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Next Project?</h2>
          <Link to="/contact" className="btn-primary">
            Let's Work Together
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home;