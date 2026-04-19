import "./index.css";
import heroImage from "../../assets/hero.png";

const stats = [
  { number: "150+", label: "Projects Done" },
  { number: "50+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
];

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="section-tag">🎬 Digital Media Agency</div>

        <h1 className="section-heading hero-title">
          We Grow Your Business <br />
          <span className="section-heading-highlight">Digitally</span>
        </h1>

        <p className="hero-subtitle">
          Video editing, branding, and marketing strategies that turn your
          audience into customers.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn-glow">
            View Portfolio
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((item, index) => (
            <div className="stat" key={item.label}>
              <div className="stat-number">{item.number}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={heroImage}
        className="hero-image"
        alt="Video editing and digital media services"
      />
    </section>
  );
};

export default Hero;
