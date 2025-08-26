import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/cbg.jpg"; 
import logo from "../assets/elogo.png";

const CertificateHero = () => {
  return (
    <section
      className="relative w-full min-h-screen md:min-h-0 md:h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="EMCO Power Support Logo"
          className="mx-auto mb-3 w-28 md:w-28 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="text-[#D4AF37]">Certified Excellence</span>
          <br />
          <span className="text-white">
            Recognized & Trusted by{" "}
            <span className="text-red-700">Global Standards</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-md md:text-lg text-gray-300 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
          At <span className="text-[#D4AF37] font-semibold">EMCO Power Support</span>,  
          our <span className="text-red-700">certifications and accreditations</span>  
          are a testimony to our dedication to **quality, reliability, and trust**.  
          Each certificate reflects our promise of world-class engineering.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="#certificates"
            className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full shadow-2xl hover:bg-[#b8962f] hover:scale-105 transition-all duration-500"
          >
            📜 View Certificates
          </a>
          <a
            href="/about"
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-500"
          >
            Learn More →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificateHero;
