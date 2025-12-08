import { useState } from "react";
import "./ContactUs.css";
import { LiaLinkedinIn, LiaTwitter, LiaGithub } from "react-icons/lia";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const FORM_ENDPOINT = "https://formspree.io/f/xrbnakgv";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's work together to bring your vision to life.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <a href="mailto:madhavmittal34@gmail.com">
                  madhavmittal34@gmail.com
                </a>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <a href="tel:+917814943916">+91 7814943916</a>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>Zirakpur, Punjab</p>
              </div>
              <div className="info-item">
                <h3>Follow</h3>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/madhav-mittal-8aaa562ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiaLinkedinIn /> LinkedIn
                  </a>
                  <a
                    href="https://x.com/MadhavMm34"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiaTwitter /> X(Twitter)
                  </a>
                  <a
                    href="https://github.com/coder6-12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;