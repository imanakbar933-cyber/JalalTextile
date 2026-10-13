import React from 'react';
import Fabrichero from '../components/Fabrichero';
import ManufacturingProcess from '../components/ManufacturingProcess';
import './FabricCollection.css';
import KeyConsiderations from '../components/KeyConsiderations';

const FabricCollection = () => {
  return (
    <div className="fabric-collection-page">

      {/* 1. HERO SECTION */}
      <Fabrichero />

      {/* 2. MANUFACTURING PROCESS SECTION */}
      <ManufacturingProcess />
      <KeyConsiderations />

    </div>
  );
};

export default FabricCollection;