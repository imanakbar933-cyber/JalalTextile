import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const services = [
    { title: "Water Jet Looms", slug: "water-jet-looms" },
    { title: "Sulzer shuttle-less looms", slug: "sulzer-shuttleless-looms" },
    { title: "Air Jet Looms", slug: "air-jet-looms" },
    { title: "Embroidery Machines", slug: "embroidery-machines" },
    { title: "Fabric Collection", slug: "fabric-collection" },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
    
        <div className="footer-col">
          <h3 className="footer-heading">ABOUT US</h3>
          <span className="footer-heading-line"></span>
          <p className="footer-about-text">
            Established in 1970, since three generations we have been in
            textile business, striving forward with commitment, and upgrading
            our facilities with latest machinery according to latest trends in
            market.
          </p>
        </div>

       
        <div className="footer-col">
          <h3 className="footer-heading">SERVICES</h3>
          <span className="footer-heading-line"></span>
          <ul className="footer-services">
            {services.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`} className="footer-service-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

    
        <div className="footer-col">
          <div className="footer-map">
            <iframe
              title="Jalal Textile Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.376976225677!2d74.20418027416825!3d32.059051173971895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d55d29b59329%3A0x6d1a21b5a1c2b4aa!2sIkram%20Rice%20Mills%20%E2%80%93%20Premium%20Basmati%20Rice%20Millers%20And%20Exporter%20of%20Pakistan!5e0!3m2!1sen!2s!4v1791647444436!5m2!1sen!2s"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

  
      <div className="footer-bottom">
        <ul className="footer-nav">
          <li><Link to="/" className="footer-nav-link">HOME</Link></li>
          <li><Link to="/services" className="footer-nav-link">SERVICES</Link></li>
          <li><Link to="/contact" className="footer-nav-link">CONTACT</Link></li>
        </ul>
        <p className="footer-copy">
          Copyright ©2024 All rights reserved | Developed & Managed By{" "}
          <span className="footer-brand">Jalal Textile</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;