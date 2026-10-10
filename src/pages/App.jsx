import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Services from "./Services";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;