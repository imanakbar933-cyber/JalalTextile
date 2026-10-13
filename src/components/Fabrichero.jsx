import React, { useState } from 'react';
import './Fabrichero.css';

const Fabrichero = () => {
  const slides = [
    {
      image: '/assets/Fabric2.png',
      title: '100% Cotton collection',
      subtitle: '&',
      subtitle2: 'Blended fabric'
    },
    {
      image: '/assets/fabri.png',
      title: 'Premium Quality',
      subtitle: '&',
      subtitle2: 'Exclusive Designs'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="fabric-hero">

      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>{slides[currentSlide].title}</h1>
        <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
        <p className="hero-subtitle2">{slides[currentSlide].subtitle2}</p>
      </div>

      <button className="hero-arrow left-arrow" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="hero-arrow right-arrow" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Fabrichero;