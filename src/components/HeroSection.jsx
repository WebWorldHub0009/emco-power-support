import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../assets/images/home/Eh1.jpg";
import img2 from "../assets/images/home/Eh2.jpg";
import img3 from "../assets/images/home/Eh3.jpg";

const slides = [
  {
    title: "EMCO POWER",
    subtitle: "SUPPORT SOLUTIONS",
    tagline: "Empowering Tomorrow, Today",
    image: img1,
  },
  {
    title: "Reliable Energy",
    subtitle: "Global Power Systems",
    tagline: "Delivering strength, stability & trust",
    image: img2,
  },
  {
    title: "Smart Power",
    subtitle: "Sustainable & Modern",
    tagline: "Energy that drives the future",
    image: img3,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
        </motion.div>
      ))}

      {/* Energy Sparks Background Effect */}
     

      {/* Slide Indicators */}
      <div className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-white transition ${
              index === current ? "bg-white scale-125" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
        
        {/* Rotating Circle */}
        <div className="mb-6">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="white" fontSize="13" fontWeight="600" className="uppercase tracking-wide">
                <textPath href="#circlePath" startOffset="0%" textLength="950" spacing="auto">
                  • EMCO POWER SUPPORT • SINCE 1985 •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Title */}
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-cursive1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide 
                     text-red-800 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          {slides[current].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-body mt-3 text-lg sm:text-xl md:text-xl lg:text-2xl font-light tracking-wide text-white"
        >
          {slides[current].subtitle}
        </motion.h2>

        {/* Tagline */}
        <motion.div
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-6 bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md shadow-lg "
        >
          <p className="font-cursive2 text-lg sm:text-xl md:text-2xl text-red-800 italic">
            {slides[current].tagline}
          </p>
        </motion.div>

        {/* Brochure Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-14 flex flex-col items-center"
        >
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 border border-red-800 text-white rounded-full text-sm font-body tracking-wide 
                       hover:bg-red-800 hover:text-white transition-all overflow-hidden group shadow-md"
          >
            Get Brochure
          </a>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 flex flex-col items-center text-white"
        >
          <FaArrowDown size={18} />
          <span className="text-xs mt-1">Scroll</span>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-3 sm:right-5 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 text-white z-20"
      >
        <div className="font-cursive1 rotate-90 tracking-widest text-sm sm:text-base mb-8 text-red-800">
          EMCO
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-red-400 to-red-800 mb-4"></div>
        <div className="flex flex-col gap-3">
          <a href="#"><FaFacebookF size={18} className="hover:text-red-800 transition" /></a>
          <a href="#"><FaLinkedinIn size={18} className="hover:text-red-800 transition" /></a>
          <a href="#"><FaTwitter size={18} className="hover:text-red-800 transition" /></a>
        </div>
      </motion.div>
    </section>
  );
}
