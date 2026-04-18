import "./index.css";

const MobileMenu = ({ setOpenMobileNav }) => {
  const handleClose = () => setOpenMobileNav(false);

  return (
    <nav className="mobile-nav">
      <button
        className="mobile-nav-close"
        onClick={handleClose}
        aria-label="Close menu"
      >
        ✕
      </button>

      <a href="#hero" onClick={handleClose}>
        Home
      </a>
      <a href="#about" onClick={handleClose}>
        About
      </a>
      <a href="#services" onClick={handleClose}>
        Services
      </a>
      <a href="#portfolio" onClick={handleClose}>
        Portfolio
      </a>

      <a href="#why-choose" onClick={handleClose}>
        Why Choose Us ?
      </a>
      <a href="#contact" onClick={handleClose}>
        Contact
      </a>

      <a href="#contact" className="btn-glow" onClick={handleClose}>
        Get Started
      </a>
    </nav>
  );
};

export default MobileMenu;
