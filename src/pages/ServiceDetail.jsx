import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="detail-not-found">
        <h2>Service not found</h2>
        <Link to="/" className="detail-back-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-wrapper">
      {/* Hero Image */}
      <div className="detail-hero">
        <img src={service.img} alt={service.title} className="detail-hero-img" />
        <div className="detail-hero-overlay">
          <h1 className="detail-title">{service.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        <p className="detail-description">{service.description}</p>

        <h3 className="detail-subheading">Key Features</h3>
        <ul className="detail-features">
          {service.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        <Link to="/" className="detail-back-btn">← Back to Home</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;