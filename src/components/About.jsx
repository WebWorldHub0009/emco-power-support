// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/home/emco.jpg"; 
import bgImg from "../assets/images/home/emcobg.jpg"; 

export default function About() {
  return (
    <section
      className="relative py-12 px-6 md:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

  

      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="rgba(220,38,38,0.4)" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="About Emco Power Support"
            className="rounded-3xl shadow-2xl border-4 border-red-600"
          />
          {/* Experience Badge */}
          <div className="absolute -bottom-5 right-40 bg-red-800 text-white px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md">
            <p className="text-sm font-semibold tracking-wide flex items-center gap-2">
              <span className="text-lg font-extrabold">5+</span> Years of Excellence
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-red-800 drop-shadow-lg">
            About Emco Power Support
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            Founded in 2021, <span className="font-semibold text-red-400">Emco Power Support</span> 
            stands as a trusted name in delivering advanced electrical solutions. 
            From high-quality insulators to robust factory equipment, we bring 
            innovation, reliability, and unmatched service to empower industries 
            and businesses nationwide.
          </p>

          <ul className="space-y-5 text-gray-800 text-lg">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Premium & Reliable Electrical Products
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              25+ Years Combined Expertise
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Trusted Nationwide by Leading Industries
            </li>
          </ul>

          <motion.button
            
            whileTap={{ scale: 0.95 }}
            className="mt-5 px-8 py-2 bg-red-800 hover:bg-red-900 text-white cursor-pointer text-lg rounded-xl transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
