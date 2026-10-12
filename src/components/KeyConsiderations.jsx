import React from 'react';
import './KeyConsiderations.css';

const KeyConsiderations = () => {
  return (
    <div className="key-considerations-wrapper">

      <h2 className="kc-title">Key Considerations in Manufacturing</h2>

      <ul className="kc-list">
        <li>
          <strong>Quality Control:</strong> Ensuring the quality of the raw materials, yarn, and final fabric is crucial.
        </li>
        <li>
          <strong>Environmental Impact:</strong> Implementing sustainable practices in cultivation, processing, and finishing to reduce environmental impact.
        </li>
        <li>
          <strong>Machinery and Technology:</strong> Utilizing advanced machinery for efficient and precise manufacturing processes.
        </li>
        <li>
          <strong>Innovation:</strong> Continuously developing new blends and finishes to meet market demands and enhance fabric performance.
        </li>
      </ul>

      <p className="kc-closing">
        By following these processes, manufacturers can produce high-quality cotton and blended fabrics that meet the needs of various applications in the textile industry.
      </p>

    </div>
  );
};

export default KeyConsiderations;