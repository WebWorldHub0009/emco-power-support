// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaFileAlt,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaServicestack,
  FaPhoneSquareAlt,
  FaCertificate,
} from "react-icons/fa";
import logo from "../assets/elogo.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchToggle = () => setSearchOpen(!searchOpen);

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; // Replace with your PDF path
    link.download = "EmcoPower_Brochure.pdf";
    link.click();
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Products", path: "/products", icon: <FaBoxOpen /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneSquareAlt /> },
    { name: "Certification", path: "/certification", icon: <FaCertificate /> },
  ];

  return (
    <header className="w-full font-sans shadow-md">
      {/* 🔹 Top Header */}
      <div className="bg-red-700 text-white text-xs sm:text-xs py-1  px-3 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:+917011129058"
            className="flex items-center gap-1 hover:text-yellow-300 transition"
          >
            <FaPhoneAlt className="text-[11px]" /> +91 7011129058
          </a>
          <a
            href="mailto:emcopowers@gmail.com"
            className="flex items-center gap-1 hover:text-yellow-300 transition"
          >
            <FaEnvelope className="text-[11px]" /> emcopowers@gmail.com
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-xs">
          <span>UDYAM-DL-03-0017396</span>
          <span>GSTIN: 07AUMPY7612E1Z8</span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white px-4 md:px-12 lg:px-20 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Emco Power Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-serif text-gray-800 text-base lg:text-lg">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="flex items-center gap-2 hover:text-red-700 transition duration-300"
            >
              <Link to={link.path} className="flex items-center gap-2">
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search */}
          <button
            onClick={handleSearchToggle}
            className="text-gray-800 hover:text-red-700 transition duration-300 text-lg"
          >
            <FaSearch size={18} />
          </button>

          {/* Brochure */}
          <button
            onClick={handleBrochureDownload}
            className="bg-red-700 text-white px-3 md:px-4 py-1.5 rounded-full hover:bg-red-800 transition duration-300 flex items-center gap-2 text-sm md:text-base"
          >
            <FaFileAlt /> Brochure
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-800 hover:text-red-700 transition text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* 🔹 Search Box */}
        {searchOpen && (
          <div className="absolute top-full right-1/2 translate-x-1/2 mt-2 w-[92%] sm:w-[70%] md:w-96 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-gray-800 px-2 py-1 rounded-full font-sans text-sm md:text-base"
            />
            <FaSearch className="text-gray-800" />
          </div>
        )}

        {/* 🔹 Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl"
            >
              &times;
            </button>
            <ul className="mt-10 flex flex-col gap-6 text-lg font-serif">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 hover:text-red-700 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
