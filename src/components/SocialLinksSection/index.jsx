import "./index.css";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinksSection = () => {
  return (
    <section className="social-section" id="social">
      <div className="social-container">
        <div className="social-header reveal">
          <div className="section-tag">Stay Connected</div>

          <h2 className="section-heading social-title">
            Follow Us{" "}
            <span className="section-heading-highlight">Everywhere</span>
          </h2>

          <p className="social-subtitle">
            Join our community and stay updated with our latest work.
          </p>
        </div>

        <div className="social-buttons">
          <a
            href="https://www.instagram.com/vtouch_media"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Visit our Instagram"
          >
            <FaInstagram className="social-icon instagram" />
            Instagram
          </a>
          <a
            href="https://youtube.com/@vtouchmedia26?si=L9UgnVUsfeFRVlWq"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Visit our Youtube"
          >
            <FaYoutube className="social-icon youtube" />
            YouTube
          </a>

          <a
            href="https://www.facebook.com/share/1b5v5WPVsf/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Visit our Facebook"
          >
            <FaFacebookF className="social-icon facebook" />
            Facebook
          </a>
          <a
            href="https://x.com/VtouchMedia"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Visit our Twitter"
          >
            <FaXTwitter className="social-icon twitter" />X Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
