import "./index.css";

const ServiceCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className="service-card" role="article">
      <div className="service-icon">{Icon && <Icon />}</div>
      <div>
        <h3 className="service-title">{item.title}</h3>
        <p className="service-desc">{item.desc}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
