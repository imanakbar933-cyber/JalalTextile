import React from 'react';
import './ManufacturingProcess.css';

const ManufacturingProcess = () => {
  return (
    <div className="manufacturing-wrapper">

      <div className="manufacturing-container">

        {/* ============ LEFT SIDE - TEXT ============ */}
        <div className="manufacturing-left">

          <p className="intro-text">
            Manufacturing 100% cotton and blended fabrics involves several stages, each requiring specific
            techniques and machinery. Here's an overview of the processes for both types of fabrics:
          </p>

          <h2 className="section-title">Manufacturing 100% Cotton And Blended Fabric</h2>

          <div className="process-step">
            <h3>1. Cultivating and Harvesting:</h3>
            <ul>
              <li>Cotton plants are grown, and the bolls are harvested either by hand or with mechanical pickers.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>2. Ginning:</h3>
            <ul>
              <li>The harvested cotton is sent to gins where it is cleaned and separated from the seeds.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>3. Spinning:</h3>
            <ul>
              <li><strong>Carding:</strong> The cotton fibers are cleaned further and aligned in the same direction.</li>
              <li><strong>Combing:</strong> For finer yarn, the fibers are combed to remove short fibers and impurities.</li>
              <li><strong>Spinning:</strong> The carded or combed cotton is spun into yarn through ring spinning or open-end spinning.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>4. Weaving or Knitting:</h3>
            <ul>
              <li><strong>Weaving:</strong> The yarn is woven into fabric on looms. Different patterns and textures can be achieved by varying the weave (e.g., plain weave, twill, satin).</li>
              <li><strong>Knitting:</strong> Alternatively, the yarn can be knitted into fabric using knitting machines, producing textiles like jersey or interlock fabrics.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>5. Dyeing and Finishing:</h3>
            <ul>
              <li>The fabric is dyed using various dyeing techniques (e.g., batch dyeing, continuous dyeing).</li>
              <li><strong>Finishing:</strong> The fabric undergoes finishing processes to improve its properties, such as softening, preshrinking, or adding special finishes like wrinkle resistance.</li>
            </ul>
          </div>

          <h2 className="section-title">Manufacturing Blended Fabrics</h2>

          <div className="process-step">
            <h3>1. Selecting and Preparing Fibers:</h3>
            <ul>
              <li>Different fibers are selected based on the desired properties of the final fabric (e.g., cotton-polyester blend, cotton-spandex blend).</li>
              <li>Fibers are cleaned and prepared separately before blending.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>2. Blending:</h3>
            <ul>
              <li>Fibers are blended at the roving stage or during spinning. Blending can be done by mixing the fibers before spinning or by plying different types of yarn together.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>3. Spinning:</h3>
            <ul>
              <li>The blended fibers are spun into yarn. The spinning process is similar to that for 100% cotton but may require adjustments depending on the fiber blend.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>4. Weaving or Knitting:</h3>
            <ul>
              <li>Blended yarns are woven or knitted into fabric. The blending of fibers can influence the weaving/knitting process and the final fabric's characteristics.</li>
            </ul>
          </div>

          <div className="process-step">
            <h3>5. Dyeing and Finishing:</h3>
            <ul>
              <li>Blended fabrics are dyed and finished similarly to 100% cotton fabrics. However, the dyeing process may be adjusted to ensure even coloration across different fibers.</li>
              <li>Special finishes may be applied to enhance the properties of blended fabrics, such as adding moisture-wicking or anti-pilling treatments.</li>
            </ul>
          </div>

        </div>

        {/* ============ RIGHT SIDE - IMAGES ============ */}
        <div className="manufacturing-right">
          <div className="fabric-image-box">
            <img src="/assets/Fabric3.png" alt="Fabric 1" />
          </div>
          <div className="fabric-image-box">
            <img src="/assets/Fabric4.png" alt="Fabric 2" />
          </div>
          <div className="fabric-image-box">
            <img src="/assets/Fabric5.png" alt="Fabric 3" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ManufacturingProcess;