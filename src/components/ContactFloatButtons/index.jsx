import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./index.css";

const ContactFloatButtons = () => {
  return (
    <div className="contact-float-buttons">
      <a href="tel:9492061661" className="call-button">
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/919492061661?text=Hi%20Vijay,%20I%20found%20your%20website%20and%20I%20am%20interested%20in%20your%20digital%20media%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactFloatButtons;
