// src/components/ProductHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/product.jpg"; // ✅ Replace with a premium EMCO product background
import logo from "../assets/elogo.png"; 

const ProductHero = () => {
  return (
    <section
      className="relative w-full min-h-screen md:min-h-0 md:h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        {/* Company Logo */}
        <motion.img
          src={logo}
          alt="EMCO Power Support"
          className="mx-auto mb-3 w-24 md:w-28 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="text-[#D4AF37]">Engineering Reliability.</span>
          <br />
          <span className="text-white">
            Premium <span className="text-red-700">Power Support Products</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-md md:text-lg text-gray-300 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
          At <span className="text-[#D4AF37] font-semibold">EMCO Power Support</span>, 
          every product is built with precision, safety, and innovation — 
          ensuring industries stay connected, protected, and future-ready.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="/products"
            className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full shadow-2xl hover:bg-[#b8962f] hover:scale-105 transition-all duration-500"
          >
            Explore Products →
          </a>
          <a
            href="/contact"
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-500"
          >
            Contact Sales
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductHero;
