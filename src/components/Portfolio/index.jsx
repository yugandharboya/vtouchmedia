import "./index.css";
import portfolio from "../../data/portfolio";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <div className="section-tag">Our Work</div>
          <h2 className="section-heading ">
            Featured {""}
            <span className="section-heading-highlight">Portfolio</span>
          </h2>
          <p className="portfolio-subtitle">
            A glimpse into the projects that define our creative vision.
          </p>
        </header>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
