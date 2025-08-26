import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/cbg.jpg"; // Replace with a premium EMCO-specific background
import logo from "../assets/elogo.png"; // ✅ Add your company logo here

const Hero = () => {
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
      <div className="absolute inset-0 bg-black/40"></div>
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
          className="mx-auto mb-3 w-28 md:w-28 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Premium Headline */}
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="text-[#D4AF37]">Strength. Safety. Innovation.</span>
          <br />
          <span className="text-white">
            Powering Tomorrow with{" "}
            <span className="text-red-700">EMCO Power Support</span>
          </span>
        </h1>

        {/* Premium Tagline */}
        <p className="text-md md:text-md text-gray-300 font-light mb-2 max-w-3xl mx-auto leading-relaxed">
          For over a decade, <span className="text-[#D4AF37] font-semibold">EMCO Power Support</span> has been the trusted partner in delivering
          world-class <span className="text-red-700">power support solutions</span>.  
          With a commitment to safety, durability, and engineering excellence, we empower industries to build a future that lasts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="tel:+917011129058"
            className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full shadow-2xl hover:bg-[#b8962f] hover:scale-105 transition-all duration-500"
          >
            📞 Call Us Today
          </a>
          <a
            href="/products"
            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-500"
          >
            Explore Products →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
