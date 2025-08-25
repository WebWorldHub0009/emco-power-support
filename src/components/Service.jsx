// src/components/ProductSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCubes, FaBolt, FaLayerGroup, FaPuzzlePiece } from "react-icons/fa";

// Example product images (replace with actual)
import prod1 from "../assets/images/service/cbc.jpg";
import prod2 from "../assets/images/service/ms.jpg";
import prod3 from "../assets/images/service/Mst.jpg";
import prod4 from "../assets/images/service/pct.jpg";
import prod5 from "../assets/images/service/pa.jpg";
import prod6 from "../assets/images/service/pcbs.jpg";
import prod7 from "../assets/images/service/fpp.jpg";
import prod8 from "../assets/images/service/mvsp.jpg";
import prod9 from "../assets/images/service/lvbsc.jpg";
import prod10 from "../assets/images/service/lv.jpg";

const products = [
  {
    title: "Custom Busbar Supports",
    description: "Premium supports engineered for durability & safety.",
    icon: <FaCubes className="text-2xl text-red-800" />,
    img: prod1,
    link: "/products/busbar-supports",
  },
  {
    title: "Metal Spacer",
    description: "High-strength spacers for electrical & panel setups.",
    icon: <FaLayerGroup className="text-2xl text-red-800" />,
    img: prod2,
    link: "/products/metal-spacer",
  },
  {
    title: "Metering Current Transformers",
    description: "Precision metering CTs for accurate measurement.",
    icon: <FaBolt className="text-2xl text-red-800" />,
    img: prod3,
    link: "/products/metering-ct",
  },
  {
    title: "Protection Current Transformer",
    description: "Reliable CTs ensuring system safety & stability.",
    icon: <FaBolt className="text-2xl text-red-800" />,
    img: prod4,
    link: "/products/protection-ct",
  },
  {
    title: "Panel Accessories",
    description: "Complete range of panel fittings & accessories.",
    icon: <FaPuzzlePiece className="text-2xl text-red-800" />,
    img: prod5,
    link: "/products/panel-accessories",
  },
  {
    title: "PCB Spacers",
    description: "Durable PCB spacers for secure electronic boards.",
    icon: <FaCubes className="text-2xl text-red-800" />,
    img: prod6,
    link: "/products/pcb-spacers",
  },
  {
    title: "FRP Pultruded Products",
    description: "Lightweight, strong & corrosion-resistant FRP items.",
    icon: <FaLayerGroup className="text-2xl text-red-800" />,
    img: prod7,
    link: "/products/frp-products",
  },
  {
    title: "Medium Voltage Standoff Insulators",
    description: "MV standoff insulators for secure energy flow.",
    icon: <FaBolt className="text-2xl text-red-800" />,
    img: prod8,
    link: "/products/mv-insulators",
  },
  {
    title: "Low Voltage Busbar Supports & Connector",
    description: "LV busbar supports for compact safe connections.",
    icon: <FaCubes className="text-2xl text-red-800" />,
    img: prod9,
    link: "/products/lv-busbar",
  },
  {
    title: "Low Voltage Standoff Insulators",
    description: "LV standoff insulators for panel reliability.",
    icon: <FaLayerGroup className="text-2xl text-red-800" />,
    img: prod10,
    link: "/products/lv-insulators",
  },
];

export default function ProductSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, products.length));
  };

  return (
    <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 min-h-[700px]">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-200/40 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-300/30 rounded-full blur-[130px] animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <p className="text-red-800 uppercase font-semibold font-cursive1 tracking-widest text-sm">
          Our Premium Products
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-red-800 leading-tight">
          EMCO Power Support Range
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Trusted power support solutions engineered for safety & performance.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-8 flex flex-wrap  justify-center gap-8 relative z-10">
        <AnimatePresence>
          {products.slice(0, visibleCount).map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="w-72 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center border border-white/30 overflow-hidden relative group"
            >
              <Link to={product.link}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-50 object-cover"
                />
                <div className="relative flex flex-col items-center p-4 -mt-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-red-800 shadow-md shadow-red-200">
                    {product.icon}
                  </div>
                  <h4 className="mt-3 text-lg font-bold text-red-800 uppercase">
                    {product.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                  <button className="mt-3 text-xs text-red-800 border border-red-800 px-3 py-1 rounded-full hover:bg-red-800 hover:text-white transition">
                    Read More
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {visibleCount < products.length && (
        <div className="mt-10 text-center relative z-10">
          <button
            onClick={handleLoadMore}
            className="bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-900 transition-all duration-300 shadow-lg shadow-red-200"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
