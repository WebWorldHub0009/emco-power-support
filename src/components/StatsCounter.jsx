// src/components/StatsSection.jsx
import React from "react";
import { FaTrophy, FaSmile, FaGlobe, FaClock, FaQuoteLeft } from "react-icons/fa";

const stats = [
  { icon: <FaTrophy className="text-red-800 text-5xl mb-3" />, value: "45+", label: "Successfully Completed" },
  { icon: <FaSmile className="text-red-800 text-5xl mb-3" />, value: "2K",  label: "Satisfied 100% Our Clients" },
  { icon: <FaGlobe className="text-red-800 text-5xl mb-3" />, value: "19+", label: "All Over The World We Are Available" },
  { icon: <FaClock className="text-red-800 text-5xl mb-3" />, value: "5+", label: "Years of Experiences To Run This Company" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#f1ece3] py-10 px-6 overflow-hidden">
      {/* subtle wave lines (unchanged) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="none" stroke="black" strokeWidth="0.5"
            d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64" />
        </svg>
      </div>

      {/* Animated floating SVG bubbles */}
      <style>{`
        @keyframes floatY { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-16px) } }
        @keyframes floatX { 0%,100%{ transform: translateX(0) } 50%{ transform: translateX(10px) } }
        .bubble { animation: floatY 6s ease-in-out infinite; }
        .bubble-2 { animation: floatY 7.5s ease-in-out infinite 0.6s; }
        .bubble-3 { animation: floatY 8.5s ease-in-out infinite 1s, floatX 10s ease-in-out infinite; }
      `}</style>

      {/* Bubbles */}
      <svg className="absolute -top-6 -left-6 w-40 h-40 bubble opacity-30" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="#ef4444" />
      </svg>
      <svg className="absolute top-10 right-8 w-28 h-28 bubble-2 opacity-20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="#1f2937" />
      </svg>
      <svg className="absolute bottom-8 left-1/3 w-24 h-24 bubble-3 opacity-20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="#ef4444" />
      </svg>
      <svg className="absolute bottom-0 right-1/4 w-16 h-16 bubble opacity-30" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="#6b7280" />
      </svg>

      {/* Center Heading with quote */}
      <div className="relative max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-3 text-red-700 mb-3">
          <FaQuoteLeft className="text-2xl" />
          <span className="uppercase tracking-widest text-xs font-semibold">Emco Power Support</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d1b5f] leading-snug">
          Delivering Reliable <span className="text-red-800">Electrical Solutions</span> with Trust & Quality
        </h2>
        <p className="text-sm md:text-base text-[#1d1b5f]/70 mt-3">
          “Numbers that reflect our commitment to performance, service, and long-term partnerships.”
        </p>
      </div>

      {/* Stats */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.icon}
            <h3 className="text-4xl font-extrabold text-[#1d1b5f]">{item.value}</h3>
            <p className="text-sm text-[#1d1b5f] mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
