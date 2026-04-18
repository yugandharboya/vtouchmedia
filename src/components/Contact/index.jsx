import { useState } from "react";
import emailjs from "emailjs-com";
import "./index.css";
import Toast from "../Toast";
import servicesList from "../../data/servicesList";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setShowToast(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });

          setTimeout(() => setShowToast(false), 3000);
        },
        (error) => console.error(error),
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-tag">GET IN TOUCH</div>
          <h2 className="section-heading">
            Let’s <span>Work Together</span>
          </h2>
          <p className="contact-subtext">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Select Service</label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">--Select--</option>

                {servicesList.map((each) => (
                  <option key={each.id} value={each.title}>
                    {each.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="info-card">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:9492061661">9492061661</a>
              </div>
            </div>

            <div className="info-card">
              <FaWhatsapp className="icon" />
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/919492061661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9492061661
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:vtouchmedia1@gmail.com">
                  vtouchmedia1@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        <Toast show={showToast} />
      </div>
    </section>
  );
};

export default Contact;
