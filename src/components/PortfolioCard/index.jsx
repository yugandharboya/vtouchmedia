import "./index.css";
import { useState } from "react";

const PortfolioCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasImage = Boolean(item.image);
  const hasVideo = Boolean(item.videoUrl);

  const getVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(item.videoUrl);

  return (
    <>
      <div className="portfolio-card" onClick={() => hasVideo && setOpen(true)}>
        {hasImage && (
          <img
            src={item.image}
            alt={item.title}
            className="portfolio-image"
            loading="lazy"
          />
        )}
        <div className="portfolio-overlay">
          <div className="play-btn" aria-label="Play video">
            ▶
          </div>

          <span className="portfolio-card-category">{item.category}</span>

          <h3 className="portfolio-card-title">{item.title}</h3>

          {!hasVideo && <span className="coming-soon">Coming Soon</span>}
        </div>
      </div>

      {open && videoId && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={item.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          <span className="video-close-btn" onClick={() => setOpen(false)}>
            ✕
          </span>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
