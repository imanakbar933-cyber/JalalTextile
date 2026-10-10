import React from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServicesGrid.css";

const ServicesGrid = () => {
  const navigate = useNavigate();

  // Sirf 4 items jo aap chahti hain grid mein
  const gridItems = servicesData.filter((s) =>
    ["air-jet-looms", "sulzer-shuttleless-looms", "water-jet-looms", "embroidery-machines"].includes(s.slug)
  );

  return (
    <div className="services-grid-wrapper">
      {gridItems.map((item) => (
        <div
          key={item.slug}
          className="service-card"
          onClick={() => navigate(`/services/${item.slug}`)}
        >
          <div className="service-card-img-wrap">
            <img src={item.img} alt={item.title} className="service-card-img" />
          </div>
          <div className="service-card-bar">
            <p className="service-card-title">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;