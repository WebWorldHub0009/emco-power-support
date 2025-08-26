// src/components/ProductSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCubes, FaBolt, FaLayerGroup, FaPuzzlePiece } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

// Example product images (replace with real)
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

export default function ProductNavigator() {
  return (
    <section className="bg-[#f5f5f1] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Heading */}
        <div className="col-span-1">
          <p className="text-red-800 uppercase font-semibold tracking-widest text-sm">
            Our Premium Products
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight text-gray-900">
            Explore{" "}
            <span className="italic font-cursive1 text-[#D4AF37] relative">
              Products
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#D4AF37]" />
            </span>{" "}
            <br /> with Ease
          </h2>
          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed font-body">
            Browse through our premium{" "}
            <span className="font-semibold">EMCO Power Support</span> range,
            trusted for quality and durability.
          </p>
        </div>

        {/* Right Slider */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Link to={product.link}>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                    {/* Product Image */}
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500"></div>

                    {/* Product Title */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg md:text-2xl text-red-800 font-[poppins] font-bold uppercase drop-shadow-md">
                        {product.title}
                      </h3>
                      <p className="text-sm opacity-80">{product.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
