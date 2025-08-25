// src/components/PremiumMarquee.jsx
import React from "react";
import {
  FaCubes,
  FaBolt,
  FaLayerGroup,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaShieldAlt,
} from "react-icons/fa";

const items = [
  { icon: <FaCubes />, text: "Custom Busbar Supports" },
  { icon: <FaLayerGroup />, text: "Metal Spacer" },
  { icon: <FaBolt />, text: "Metering Current Transformers" },
  { icon: <FaBolt />, text: "Protection Current Transformer" },
  { icon: <FaPuzzlePiece />, text: "Panel Accessories" },
  { icon: <FaProjectDiagram />, text: "PCB Spacers" },
  { icon: <FaLayerGroup />, text: "FRP Pultruded Products" },
  { icon: <FaShieldAlt />, text: "Medium Voltage Standoff Insulators" },
  { icon: <FaCubes />, text: "Low Voltage Busbar Supports & Connector" },
  { icon: <FaShieldAlt />, text: "Low Voltage Standoff Insulators" },
];

export default function PremiumMarquee() {
  return (
    <div className="relative w-full bg-black text-white">
      <div className="overflow-hidden" style={{ height: "2rem" }}>
        <div
          className="marquee-track flex items-center"
          style={{ ["--marquee-speed"]: "30s" }}
        >
          {/* First copy */}
          {items.map((it, i) => (
            <div
              key={`a-${i}`}
              className="marquee-item flex items-center justify-center gap-3 px-8 whitespace-nowrap"
            >
              <span className="text-red-600 text-xl">{it.icon}</span>
              <span className="font-medium text-sm md:text-base">{it.text}</span>
            </div>
          ))}

          {/* Duplicate copy for seamless loop */}
          {items.map((it, i) => (
            <div
              key={`b-${i}`}
              className="marquee-item flex items-center justify-center gap-3 px-8 whitespace-nowrap"
            >
              <span className="text-red-600 text-xl">{it.icon}</span>
              <span className="font-medium text-sm md:text-base">{it.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* component-scoped CSS */}
      <style>{`
        .marquee-track {
          animation: marquee-scroll var(--marquee-speed, 30s) linear infinite;
          will-change: transform;
        }
        .marquee-item {
          flex: 0 0 auto;
          text-align: center;
        }

        @keyframes marquee-scroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }

        .marquee-track:hover { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: none; }
        }

        @media (max-width: 640px) {
          .marquee-item { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </div>
  );
}
