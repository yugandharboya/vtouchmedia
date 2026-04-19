import "./index.css";
import teamImage from "../../assets/vtouchmedia-team-image.jpg";
const aboutPoints = [
  {
    id: 1,
    title: "Proven Industry Experience",
    description: "Delivering creative digital solutions with real results.",
  },
  {
    id: 2,
    title: "Trusted by Growing Brands",
    description: "Helping businesses build strong online presence.",
  },
  {
    id: 3,
    title: "Creative & Skilled Team",
    description: "Focused on quality design and innovative ideas.",
  },
  {
    id: 4,
    title: "Fast & Reliable Delivery",
    description: "On-time execution without compromising quality.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div>
          <div className="section-tag ">ABOUT US</div>
          <h2 className="section-heading">
            We Help{" "}
            <span className="section-heading-highlight">
              Brands Grow Digitally
            </span>
          </h2>

          <p className="about-description">
            Creative digital media agency led by{"  "}
            <span className="highlight-name">Vijay</span>.
          </p>

          <ul className="about-points">
            {aboutPoints.map((each) => (
              <li key={each.id} className="about-points-item">
                <h3>{each.title}</h3>
                <p className="about-point-text">{each.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={teamImage}
          alt="Team collaborating on digital media projects"
          className="hero-image office-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};
export default About;
