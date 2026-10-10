import React from "react";
import { useParams, Link } from "react-router-dom";
import Sulzer from "../components/services/Sulzer";
import AirJet from "../components/services/AirJet";
import WaterJet from "../components/services/WaterJet";
import Embroidery from "../components/services/Embroidery";
import Fabric from "../components/services/Fabric";

const ServiceDetail = () => {
  const { slug } = useParams();

  const renderComponent = () => {
    switch (slug) {
      case "sulzer-shuttleless-looms":
        return <Sulzer />;
      case "air-jet-looms":
        return <AirJet />;
      case "water-jet-looms":
        return <WaterJet />;
      case "embroidery-machines":
        return <Embroidery />;
      case "fabric-collection":
        return <Fabric />;
      default:
        return (
          <div style={{ padding: "80px 40px", textAlign: "center" }}>
            <h2>Service not found</h2>
            <Link to="/" style={{ color: "#c68a3f" }}>
              ← Back to Home
            </Link>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ServiceDetail;