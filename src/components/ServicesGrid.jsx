import React, { useState } from "react";
import "./ServicesGrid.css";

const ServicesGrid = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    {
      title: "Air Jet Looms (tsudakoma)",
      img: "/assets/airjet.jpg",
    },
    {
      title: "Sulzer shuttle-less looms",
      img: "/assets/sulzer.jpg",
    },
    {
      title: "Water Jet Looms",
      img: "/assets/water.jpg",
    },
    {
      title: "Embroidery Machines (barudan)",
      img: "/assets/embroidery.jpg",
    },
  ];

  return (
    <div className="services-grid-wrapper">
      {items.map((item, index) => (
        <div
          key={index}
          className="service-card"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
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