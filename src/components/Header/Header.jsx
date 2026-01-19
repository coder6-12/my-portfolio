import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import resume from "../../assets/madhav-resume.pdf";
import { useTheme } from "../../ThemeContext";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleResumeClick = () => {
    window.open(resume, '_blank');
    setIsOpen(false);
  }

  return (
    <nav className="Header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MADHAV
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            PROJECTS
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <button className="nav-link resume-link" onClick={handleResumeClick}>
            RESUME
          </button>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
          <button className="nav-link theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <BsMoonFill /> : <FiSun />}
          </button>
        </div>

        <div className="options" onClick={toggleMenu}>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
        </div>
      </div>
    </nav>
  )
}

export default Header;