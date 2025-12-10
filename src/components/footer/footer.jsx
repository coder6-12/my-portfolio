import "./footer.css";
import { LiaLinkedinIn , LiaTwitter , LiaGithub } from "react-icons/lia";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MADHAV</h3>
          <p>An aspiring web developer.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/madhav-mittal34/" target="_blank" rel="noopener noreferrer">
               <LiaLinkedinIn /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/MadhavMm34" target="_blank" rel="noopener noreferrer">
               <LiaTwitter/> X(Twitter)
              </a>
            </li>
            <li>
              <a href="https://github.com/coder6-12" target="_blank" rel="noopener noreferrer">
               <LiaGithub/> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 MADHAV. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;