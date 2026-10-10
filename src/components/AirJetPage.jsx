import React from "react";
import "./AirJetPage.css";

const AirJetPage = () => {
  return (
    <div className="airjet-page-wrapper">
      {/* ===== Hero Image ===== */}
      <div className="airjet-page-hero">
        <img src="/assets/airjet-hero.jpg" alt="Air Jet Loom" />
      </div>

      {/* ===== Content ===== */}
      <div className="airjet-page-content">
        <p>
          Air jet looms are advanced weaving machines that use a jet of air to
          propel the weft yarn through the warp shed. This method of inserting
          the weft yarn is fast and efficient, making air jet looms popular in
          the textile industry for high-speed production of fabrics.
        </p>

        {/* ===== Key Features ===== */}
        <h3 className="airjet-page-heading">Key Features of Air Jet Looms</h3>

        <p className="airjet-page-subheading">Air Jet Weft Insertion:</p>
        <ul>
          <li>
            A jet of compressed air is used to carry the weft yarn through the
            shed formed by the warp threads. This method is faster than
            traditional shuttle looms and other types of weaving.
          </li>
        </ul>

        <p className="airjet-page-subheading">High Speed:</p>
        <ul>
          <li>
            Air jet looms can operate at very high speeds, typically ranging
            from 600 to 1200 picks per minute (picks refer to the insertion of
            a weft yarn across the warp threads).
          </li>
        </ul>

        <p className="airjet-page-subheading">Energy Efficiency:</p>
        <ul>
          <li>
            These looms are generally more energy-efficient compared to other
            high-speed looms because they use air instead of mechanical parts
            for weft insertion, reducing friction and wear.
          </li>
        </ul>

        <p className="airjet-page-subheading">Electronic Controls:</p>
        <ul>
          <li>
            Modern air jet looms are equipped with advanced electronic controls
            and monitoring systems. These systems help in precisely controlling
            the weaving process, adjusting parameters like air pressure, weft
            insertion timing, and warp tension.
          </li>
        </ul>

        <p className="airjet-page-subheading">Versatility:</p>
        <ul>
          <li>
            Air jet looms are suitable for weaving a wide range of fabrics,
            including light to medium weight fabrics. They can handle various
            types of yarns such as cotton, polyester, and blends.
          </li>
        </ul>

        <p className="airjet-page-subheading">Low Maintenance:</p>
        <ul>
          <li>
            Due to fewer moving mechanical parts involved in the weft insertion
            process, air jet looms typically require less maintenance and
            experience lower downtime compared to shuttle looms.
          </li>
        </ul>

        {/* ===== Advantages ===== */}
        <h3 className="airjet-page-heading">Advantages of Air Jet Looms</h3>

        <p className="airjet-page-subheading">High Production Rate:</p>
        <ul>
          <li>
            The high speed of air jet looms results in a higher production
            rate, making them ideal for large-scale textile manufacturing.
          </li>
        </ul>

        <p className="airjet-page-subheading">Quality of Fabric:</p>
        <ul>
          <li>
            Air jet looms produce fabrics with a uniform texture and consistent
            quality due to precise control over the weaving process.
          </li>
        </ul>

        <p className="airjet-page-subheading">Reduced Weft Breakage:</p>
        <ul>
          <li>
            The gentle handling of the weft yarn by the air jet reduces the
            likelihood of yarn breakage, improving the efficiency and quality
            of the weaving process.
          </li>
        </ul>

        <p className="airjet-page-subheading">Lower Operational Costs:</p>
        <ul>
          <li>
            Energy efficiency and reduced maintenance requirements contribute
            to lower overall operational costs.
          </li>
        </ul>

        {/* ===== Disadvantages ===== */}
        <h3 className="airjet-page-heading">Disadvantages of Air Jet Looms</h3>

        <p className="airjet-page-subheading">Initial Investment:</p>
        <ul>
          <li>
            The advanced technology and electronic controls make air jet looms
            more expensive to purchase initially compared to some other types
            of looms.
          </li>
        </ul>

        <p className="airjet-page-subheading">Weft Yarn Limitations:</p>
        <ul>
          <li>
            Air jet looms are less suitable for weaving very heavy or bulky
            weft yarns. The air jets may struggle to propel such yarns through
            the shed efficiently.
          </li>
        </ul>

        <p className="airjet-page-subheading">Noise:</p>
        <ul>
          <li>
            The operation of air jets can be noisy, which might require
            additional measures to ensure a comfortable working environment.
          </li>
        </ul>

        {/* ===== Applications ===== */}
        <h3 className="airjet-page-heading">Applications</h3>

        <p className="airjet-page-subheading">Apparel Fabrics:</p>
        <ul>
          <li>
            Producing various types of clothing materials, including shirting,
            suiting, and casual wear fabrics.
          </li>
        </ul>

        <p className="airjet-page-subheading">Home Textiles:</p>
        <ul>
          <li>
            Weaving fabrics for home furnishings such as bed linens, curtains,
            and upholstery.
          </li>
        </ul>

        <p className="airjet-page-subheading">Technical Textiles:</p>
        <ul>
          <li>
            Manufacturing textiles for industrial applications, including
            filters, conveyor belts, and protective clothing.
          </li>
        </ul>

        {/* ===== Popular Brands ===== */}
        <h3 className="airjet-page-heading">Popular Brands and Models</h3>

        <p className="airjet-page-subheading">Toyota Industries Corporation:</p>
        <ul>
          <li>
            Known for their high-performance air jet looms like the JAT series,
            which are widely used in the textile industry.
          </li>
        </ul>

        <p className="airjet-page-subheading">Picanol:</p>
        <ul>
          <li>
            A leading manufacturer offering air jet looms such as the OMNIplus
            series, known for their versatility and efficiency.
          </li>
        </ul>

        <p className="airjet-page-subheading">Tsudakoma Corporation:</p>
        <ul>
          <li>
            Produces advanced air jet looms, including the ZAX series, which
            are renowned for their speed and quality.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirJetPage;