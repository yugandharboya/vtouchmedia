import "./index.css";
import servicesList from "../../data/servicesList";
import ServiceCard from "../ServiceCard";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-heading">
            Our <span className="section-heading-highlight">Services</span>
          </h2>
          <p className="services-subtitle">
            End-to-end digital media solutions crafted for brands that want to
            stand out.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((item, index) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
