// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Zap, Box, ShieldCheck } from "lucide-react";
import img from "../assets/images/home/Eh1.jpg"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50 to-white text-gray-900 py-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-red-300/20 rounded-full blur-3xl top-10 left-[-200px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl bottom-[-120px] right-[-150px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-4xl font-bold leading-tight tracking-tight">
            <span className="text-red-600">Emco Power Support</span>  
            <br /> Energizing Industries with <span className="text-blue-700">Reliability</span>
          </h1>
          <p className="text-md, md:text-md text-gray-700 leading-relaxed max-w-lg">
            Established in <span className="font-bold text-red-600">2021</span>,  
            Emco Power Support is your trusted partner for  
            <span className="text-blue-700 font-semibold"> electrical solutions</span>  
            in Paschim Vihar, Delhi, and beyond.  
            We provide a comprehensive range of <span className="font-semibold">insulators</span>,  
            <span className="font-semibold"> busbar supports</span>,  
            <span className="font-semibold"> wholesale electrical products</span>,  
            and <span className="font-semibold">vital factory equipment</span>  
            to power your projects with unmatched quality.
          </p>

          {/* Feature Highlights */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-3">
  {/* Card 1 */}
  <motion.div
    whileHover={{ scale: 1.08, y: -5 }}
    className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
  >
    <Zap size={26} className="text-red-600 mb-2 drop-shadow-sm" />
    <h3 className="font-semibold text-lg text-blue-700 mb-2">
      Reliable Products
    </h3>
    <p className="text-sm text-gray-600">
      Insulators, Busbar Supports & more essentials.
    </p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    whileHover={{ scale: 1.08, y: -5 }}
    className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
  >
    <Box size={26} className="text-blue-700 mb-2 drop-shadow-sm" />
    <h3 className="font-semibold text-lg text-red-600 mb-2">
      Wide Range
    </h3>
    <p className="text-sm text-gray-600">
      Wholesale electrical & factory equipment.
    </p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileHover={{ scale: 1.08, y: -5 }}
    className="flex flex-col items-center text-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
  >
    <ShieldCheck size={26} className="text-red-600 mb-2 drop-shadow-sm" />
    <h3 className="font-semibold text-lg text-blue-700 mb-2">
      Trusted Partner
    </h3>
    <p className="text-sm text-gray-600">
      Serving industries since 2021 with excellence.
    </p>
  </motion.div>
</div>

        </motion.div>

        {/* Right Side Image / Illustration */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        >
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-red-500 via-blue-600 to-purple-700 p-[3px] shadow-2xl">
            <img
              src={img}
              alt="Emco Power Support Electrical Solutions"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Floating Glow */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-500/30 blur-2xl w-40 h-12 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
