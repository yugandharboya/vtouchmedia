import "./index.css";
import why from "../../data/why";

const WhyChoose = () => {
  return (
    <section className="why-section" id="why-choose">
      <div className="why-container">
        <div className="why-header">
          <div className="section-tag">Why Us</div>

          <h2 className="section-heading">
            Why Choose{" "}
            <span className="section-heading-highlight">VTouch Media</span>
          </h2>
          <p className="why-subtitle">
            We deliver results that help your brand grow faster and smarter.
          </p>
        </div>

        <div className="why-grid">
          {why.map((item, index) => (
            <div className="why-card reveal" key={item.id}>
              <div className="why-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
