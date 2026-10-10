import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-wrapper">
      {/* ===== Heading with lines ===== */}
      <div className="about-heading-row">
        <span className="about-line"></span>
        <h2 className="about-heading">ABOUT JALAL TEXTILE</h2>
        <span className="about-line"></span>
      </div>

      {/* ===== Paragraph 1 ===== */}
      <p className="about-text">
        Established in 1970, since three generations we have been in textile
        business, striving forward with commitment, and upgrading our
        facilities with latest machinery according to latest trends in market.
      </p>

      {/* ===== Paragraph 2 ===== */}
      <p className="about-text">
        We specialize in top quality fabrics made from 100% Cotton, Polyester
        and Embroidery, with in-house manufacturing facilities we manufacture
        fabrics and garments for our international and domestic clients.
      </p>
    </div>
  );
};

export default AboutSection;