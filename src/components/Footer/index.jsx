import "./index.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <a href="#hero">
              <div className="footer-logo">
                <div className="logo-box-letter-v small">V</div>
                <span className="section-heading-highlight">V Touch Media</span>
              </div>
            </a>

            <p className="footer-subtitle">
              Transforming brands with creative video editing and digital
              growth.
            </p>
          </div>

          <div className="footer-quick-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <p>Video Editing</p>
            <p>Web Development</p>
            <p>Animation</p>
            <p>Social Media</p>
            <p>SEO</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <span>
              <FaPhoneAlt className="contact-icon phone" />{" "}
              <a href="tel:9492061661"> 9492061661</a>
            </span>
            <span>
              <FaEnvelope className="contact-icon email" />
              <a href="mailto:vtouchmedia1@gmail.com">vtouchmedia1@gmail.com</a>
            </span>
          </div>

          <div className="address-container">
            <h4 className="address-heading">Our Office</h4>
            <p>Plot No: 200, Park West Side</p>
            <p>Green Park Avenue, Suchitra(old) </p>
            <p>Kompally</p>
            <p>Medchal–Malkajgiri</p>
            <p>Hyderabad – 500014</p>
            <p>Telangana, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 VTouch Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
