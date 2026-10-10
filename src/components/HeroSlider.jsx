import React, { useState } from "react";
import "./HeroSlider.css";

const HeroSlider = () => {
  const slides = [
    "/assets/embroidery2.jpg",
    "/assets/embroidery1.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="hero-slider">
      {/* Slides — <img> tag */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`Slide ${index + 1}`} className="hero-slide-img" />
        </div>
      ))}

      {/* Left Arrow */}
      <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#1a1a1a" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right Arrow */}
      <button className="slider-arrow right" onClick={nextSlide} aria-label="Next">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#1a1a1a" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;