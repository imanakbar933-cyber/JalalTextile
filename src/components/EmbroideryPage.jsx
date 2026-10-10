import React, { useState } from "react";
import "./EmbroideryPage.css";

const EmbroideryPage = () => {
  const sideImages = [
    "/assets/embroidery-side1.jpg",
    "/assets/embroidery-side2.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sideImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + sideImages.length) % sideImages.length);
  };

  return (
    <div className="embroidery-page-wrapper">
      {/* ===== Hero Image (Top) ===== */}
      <div className="embroidery-page-hero">
        <img src="/assets/embroidery-hero.jpg" alt="Embroidery Machine" />
      </div>

      {/* ===== Content (2 Columns: Text + Slider) ===== */}
      <div className="embroidery-page-content">
        {/* ===== LEFT: Text ===== */}
        <div className="embroidery-page-text">
          <p>
            An embroidery machine is a specialized device used for
            automatically creating intricate and detailed patterns on fabric.
            These machines are designed to streamline the process of
            embroidery, which traditionally involves labor-intensive manual
            stitching. Modern embroidery machines can be categorized into two
            main types: industrial and home use, each catering to different
            needs and scales of production.
          </p>

          <p className="embroidery-page-numbered">1. Computerized Control:</p>
          <ul>
            <li>
              Most contemporary embroidery machines are computerized, allowing
              users to upload digital designs via USB, memory cards, or direct
              computer connections. The machine then automatically stitches
              the design onto the fabric.
            </li>
          </ul>

          <p className="embroidery-page-numbered">2. Multiple Needles:</p>
          <ul>
            <li>
              Multi-needle machines can hold several spools of thread, each
              threaded to its own needle. This allows the machine to switch
              colors automatically during the embroidery process without the
              need for manual rethreading.
            </li>
          </ul>

          <p className="embroidery-page-numbered">3. Hooping System:</p>
          <ul>
            <li>
              The fabric is secured in a hoop, which is then attached to the
              machine. The hoop moves under the needle in precise patterns,
              ensuring accurate and consistent embroidery.
            </li>
          </ul>

          <p className="embroidery-page-numbered">4. Embroidery Field:</p>
          <ul>
            <li>
              The size of the embroidery field varies by machine, determining
              the maximum size of a single design that can be stitched. Larger
              fields are typically found in more advanced models.
            </li>
          </ul>

          <p className="embroidery-page-numbered">5. Design Editing Features:</p>
          <ul>
            <li>
              Many machines come with built-in editing functions, allowing
              users to resize, rotate, and mirror designs directly on the
              machine's interface.
            </li>
          </ul>

          <p className="embroidery-page-numbered">6. Speed and Efficiency:</p>
          <ul>
            <li>
              Embroidery machines can operate at high speeds, often ranging
              from 400 to over 1000 stitches per minute, significantly reducing
              the time required to complete large and complex designs.
            </li>
          </ul>

          <p className="embroidery-page-numbered">
            7. Automatic Thread Cutting:
          </p>
          <ul>
            <li>
              This feature allows the machine to cut the thread between color
              changes or when the design is finished, improving efficiency and
              reducing manual intervention.
            </li>
          </ul>

          <p className="embroidery-page-numbered">
            8. LCD Touchscreen Display:
          </p>
          <ul>
            <li>
              A user-friendly interface, typically an LCD touchscreen, allows
              users to select designs, adjust settings, and preview the
              embroidery pattern before stitching begins.
            </li>
          </ul>
        </div>

        {/* ===== RIGHT: Slider ===== */}
        <div className="embroidery-page-slider">
          <div className="embroidery-slider-frame">
            {/* Slide */}
            <div className="embroidery-slide">
              <img
                src={sideImages[current]}
                alt={`Embroidery ${current + 1}`}
              />
            </div>

            {/* Left Arrow (hover pe show) */}
            <button
              className="embroidery-slider-arrow embroidery-left"
              onClick={prevSlide}
              aria-label="Previous"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Right Arrow (hover pe show) */}
            <button
              className="embroidery-slider-arrow embroidery-right"
              onClick={nextSlide}
              aria-label="Next"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbroideryPage;