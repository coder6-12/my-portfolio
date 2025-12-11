import "./Project.css"
import { FaGithub, FaCode, FaServer, FaLaptopCode } from "react-icons/fa"

function Projects() {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Health Tracker Website",
      description:
        "A comprehensive health tracking application with user authentication, activity logging, and data visualization. Built with MERN stack.",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "https://github.com/coder6-12/health-tracker",
      type: "fullstack"
    },
    {
      id: 2,
      number: "02",
      title: "React Jump Game",
      description:
        "An interactive gaming application inspired by Flappy bird. Features include real-time gameplay.",
      category: "Frontend",
      tech: ["React", "JavaScript", "CSS3"],
      githubLink: "https://github.com/coder6-12/waiting",
      type: "frontend"
    },
    {
      id: 3,
      number: "03",
      title: "Online Course Management System",
      description:
        "Complete learning management system with course creation, student enrollment, progress tracking, and payment integration.",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "https://github.com/coder6-12/waiting",
      type: "fullstack"
    },
    {
      id: 4,
      number: "04",
      title: "Personal Portfolio",
      description: "Modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and professional design.",
      category: "Frontend",
      tech: ["React", "CSS3", "React Router"],
      githubLink: "https://github.com/coder6-12/my-portfolio",
      type: "frontend"
    },
    {
      id: 5,
      number: "05",
      title: "Hotel Management System",
      description: "Robust backend API for hotel operations including room booking, guest management, billing, and staff administration.",
      category: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/coder6-12/waiting",
      type: "backend"
    },
    {
      id: 6,
      number: "06",
      title: "Job Portal System",
      description: "Backend infrastructure for job posting platform with user authentication, job listings, applications, and employer dashboard.",
      category: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/coder6-12/waiting",
      type: "backend"
    },
    {
      id: 7,
      number: "07",
      title: "Online Computer Store",
      description: "E-commerce platform for computer hardware and accessories with product catalog, shopping cart, and secure checkout process.",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "https://github.com/coder6-12/online-computerstore",
      type: "fullstack"
    },
  ]

  const getProjectIcon = (type) => {
    switch(type) {
      case 'fullstack':
        return <FaLaptopCode />
      case 'frontend':
        return <FaCode />
      case 'backend':
        return <FaServer />
      default:
        return <FaCode />
    }
  }

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>My Projects</h1>
          <p>Explore a collection of my web development projects showcasing full-stack and specialized solutions</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">{getProjectIcon(project.type)}</span>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects;