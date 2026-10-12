import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // ✅ UPDATED: Fabric Collection ke liye special route
  const handleServiceClick = (slug) => {
    setDropdownOpen(false);

    if (slug === "fabric-collection") {
      navigate("/fabriccollection");
    } else {
      navigate(`/services/${slug}`);
    }
  };

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      setSearchValue("");
      setSearchOpen(false);
    }
  };

  return (
    <div className="navbar-sticky-wrapper">
      {/* TOP BAR */}
      <div className="topbar">
        <p className="topbar-text">
          100% COTTON, POLYESTER, VISCOSE, AND EMBROIDERY FABRIC
        </p>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/assets/jalal logo.png" alt="Jalal Textile Industries" />
          </Link>

          <ul className="navbar-menu">
            <li>
              <Link to="/" className="nav-link">HOME</Link>
            </li>

            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="nav-link services-link">
                SERVICES
                <svg
                  className={`dropdown-arrow ${dropdownOpen ? "rotate" : ""}`}
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>

              <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                {servicesData.map((item) => (
                  <span
                    key={item.slug}
                    className="dropdown-item"
                    onClick={() => handleServiceClick(item.slug)}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </li>

            <li>
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </li>
          </ul>

          {/* Search */}
          <div className="navbar-search" onClick={toggleSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Search Box */}
        <div className={`search-box ${searchOpen ? "open" : ""}`}>
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus={searchOpen}
            />
            <button type="submit" className="search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;