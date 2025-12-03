import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const skills = ["HTML", "CSS", "PHP", "REACT", "JAVASCRIPT", "TYPESCRIPT", "MONGODB", "EXPRESS.JS"];

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
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>

            <div className="hero-image">
              <div className="profile-circle">
                <img src="src/assets/react.svg" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
<h2>Skills</h2>
      <section className="clients-section">
        <div className="container">
          <div className="clients-grid">
            {skills.map((skills, index) => (
              <div key={index} className="client-logo">
                <span>{skills}</span>
              </div>
            ))}
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