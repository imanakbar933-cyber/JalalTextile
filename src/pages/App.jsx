import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollRestore from "../components/ScrollRestore";
import Home from "./Home";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import Contact from "./Contact";

function App() {
  return (
    <div className="app-wrapper">
      <ScrollRestore />
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />       {/* 👈 Yeh add */}
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;