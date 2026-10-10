import React from "react";
import "./WaterJetPage.css";

const WaterJetPage = () => {
  return (
    <div className="waterjet-page-wrapper">
      {/* ===== Hero Image ===== */}
      <div className="waterjet-page-hero">
        <img src="/assets/waterjet-hero.jpg" alt="Water Jet Loom" />
      </div>

      {/* ===== Content ===== */}
      <div className="waterjet-page-content">
        <p>
          Water jet looms are a type of weaving machine that uses a
          high-pressure jet of water to insert the weft yarn through the warp
          shed. This method allows for rapid and efficient weaving,
          particularly suitable for specific types of fabrics. Below is a
          detailed description of water jet looms, covering their features,
          advantages, disadvantages, and applications.
        </p>

        {/* ===== Key Features ===== */}
        <h3 className="waterjet-page-heading">
          Key Features of Water Jet Looms
        </h3>

        <p className="waterjet-page-subheading">Water Jet Weft Insertion:</p>
        <ul>
          <li>
            A high-pressure jet of water propels the weft yarn across the warp
            shed, allowing for swift and smooth insertion of the weft.
          </li>
        </ul>

        <p className="waterjet-page-subheading">High Speed:</p>
        <ul>
          <li>
            Water jet looms can operate at high speeds, often achieving rates
            of 600 to 1200 picks per minute, making them suitable for
            high-volume production.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Electronic Controls:</p>
        <ul>
          <li>
            Modern water jet looms are equipped with sophisticated electronic
            controls for precise management of weaving parameters such as water
            jet pressure, weft insertion timing, and warp tension.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Simple Mechanics:</p>
        <ul>
          <li>
            These looms have fewer moving parts compared to other types of
            looms, reducing mechanical wear and tear and simplifying
            maintenance.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Low Weft Tension:</p>
        <ul>
          <li>
            The water jet applies minimal tension to the weft yarn, which
            reduces the likelihood of weft breakage and improves the overall
            efficiency of the weaving process.
          </li>
        </ul>

        {/* ===== Advantages ===== */}
        <h3 className="waterjet-page-heading">
          Advantages of Water Jet Looms
        </h3>

        <p className="waterjet-page-subheading">
          High Production Efficiency:
        </p>
        <ul>
          <li>
            The high-speed operation of water jet looms leads to high
            production rates, making them ideal for manufacturing large
            quantities of fabric.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Excellent Fabric Quality:</p>
        <ul>
          <li>
            Water jet looms produce fabrics with a smooth and uniform texture,
            thanks to the gentle handling of the weft yarn.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Energy Efficiency:</p>
        <ul>
          <li>
            Water jet looms are generally more energy-efficient compared to
            other high-speed looms, as they use the kinetic energy of water
            jets rather than mechanical parts for weft insertion.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Low Maintenance:</p>
        <ul>
          <li>
            With fewer moving parts, water jet looms require less maintenance
            and experience less downtime compared to other types of weaving
            machines.
          </li>
        </ul>

        {/* ===== Disadvantages ===== */}
        <h3 className="waterjet-page-heading">
          Disadvantages of Water Jet Looms
        </h3>

        <p className="waterjet-page-subheading">Water Consumption:</p>
        <ul>
          <li>
            The use of high-pressure water jets results in significant water
            consumption, which can be a disadvantage in regions with water
            scarcity or where water conservation is a concern.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Limited Weft Yarn Types:</p>
        <ul>
          <li>
            Water jet looms are most effective with hydrophobic
            (water-repellent) synthetic yarns, such as polyester and nylon.
            They are less suitable for natural fibers like cotton and wool,
            which can absorb water and become heavy or damaged.
          </li>
        </ul>

        <p className="waterjet-page-subheading">
          Environmental Considerations:
        </p>
        <ul>
          <li>
            Water jet looms require proper waste water management to prevent
            environmental contamination. The effluent must be treated to remove
            any dyes or chemicals before discharge.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Fabric Limitations:</p>
        <ul>
          <li>
            These looms are primarily used for lightweight fabrics. They may
            not be suitable for producing heavy or bulky textiles.
          </li>
        </ul>

        {/* ===== Applications ===== */}
        <h3 className="waterjet-page-heading">Applications</h3>

        <p className="waterjet-page-subheading">Synthetic Fabrics:</p>
        <ul>
          <li>
            Water jet looms are particularly well-suited for weaving fabrics
            made from synthetic fibers such as polyester and nylon, which are
            commonly used in apparel, sportswear, and industrial textiles.
          </li>
        </ul>

        <p className="waterjet-page-subheading">
          Lining and Interlining Fabrics:
        </p>
        <ul>
          <li>
            Ideal for producing smooth and lightweight lining and interlining
            materials used in garments and home textiles.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Industrial Fabrics:</p>
        <ul>
          <li>
            Used in the production of certain industrial textiles that require
            uniform and consistent quality.
          </li>
        </ul>

        {/* ===== Popular Brands ===== */}
        <h3 className="waterjet-page-heading">
          Popular Brands and Models
        </h3>

        <p className="waterjet-page-subheading">Tsudakoma Corporation:</p>
        <ul>
          <li>
            A leading manufacturer known for its high-performance water jet
            looms, such as the ZW series, which are widely used in the textile
            industry.
          </li>
        </ul>

        <p className="waterjet-page-subheading">
          Toyota Industries Corporation:
        </p>
        <ul>
          <li>
            Offers advanced water jet looms like the JAT series, known for
            their efficiency and reliability.
          </li>
        </ul>

        <p className="waterjet-page-subheading">Yinhe Loom:</p>
        <ul>
          <li>
            Provides a range of water jet looms with various features tailored
            for different fabric production needs.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaterJetPage;