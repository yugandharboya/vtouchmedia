import { useEffect, useState } from "react";
import "./index.css";
import MobileMenu from "../MobileMenu";
import vtouchmediaLogo from "../../assets/vtouchmedia-logo.png";

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMobileNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header className="header-section">
        <div className="header-container">
          <img
            src={vtouchmediaLogo}
            className="header-logo"
            alt="v Touch Media logo"
            onClick={() => {
              document
                .getElementById("hero")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />

          <nav className="desktop-nav">
            <a href="#hero" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#why-choose" className="nav-link hide-tablet">
              Why Us?
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a href="#contact" className="btn-glow small-btn">
              Get Started
            </a>
          </nav>

          <button
            className="header-mobile-nav-toggle"
            onClick={() => setOpenMobileNav((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </header>
      {openMobileNav && <MobileMenu setOpenMobileNav={setOpenMobileNav} />}
    </>
  );
};

export default Header;
