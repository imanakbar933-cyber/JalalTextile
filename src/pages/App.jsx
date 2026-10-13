import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./Home";
import Services from "./Services";
<<<<<<<<< Temporary merge branch 1
import Contact from "./Contact";
=========
import ServiceDetail from "./ServiceDetail";
>>>>>>>>> Temporary merge branch 2

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
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;