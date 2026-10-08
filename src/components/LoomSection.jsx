import React from "react";
import "./LoomSection.css";

const LoomSection = () => {
  return (
    <div className="loom-wrapper">
      {/* Image */}
      <div className="loom-image-container">
        <img
          src="/assets/hero2.jpg"
          alt="Sulzer shiftless loom"
          className="loom-image"
        />
      </div>

      {/* Text Content */}
      <div className="loom-text-container">
        <p className="loom-text">
          Sulzer shiftless looms, also known as Sulzer projectile looms, are
          renowned for their innovative weft insertion mechanism and high
          efficiency in weaving. These looms were developed by the Sulzer
          Corporation, a Swiss company known for its advanced engineering in
          various fields, including textile machinery. Below is a detailed
          description of Sulzer shiftless looms, highlighting their features,
          advantages, disadvantages, and applications.
        </p>
      </div>
    </div>
  );
};

export default LoomSection;