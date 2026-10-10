import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollRestore from "../components/ScrollRestore";
import Home from "./Home";
import Services from "./Services";

function App() {
  return (
    <div className="app-wrapper">
      <ScrollRestore />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;