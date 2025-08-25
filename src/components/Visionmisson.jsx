// src/components/VisionMission.jsx
import React from "react";
import missionImg from "../assets/images/home/ev11.jpg"; 
import visionImg from "../assets/images/home/ev22.jpg"; 

export default function VisionMission() {
  return (
    <section className="relative w-full bg-gray-50 py-20 font-[Poppins] overflow-hidden">
      {/* Decorative SVGs */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-blue-600"
          fill="currentColor"
        >
          <path d="M48.4,-64.3C61.2,-56.4,71.8,-42.4,74.6,-27.2C77.3,-12,72.2,4.5,65.3,20.3C58.4,36.1,49.7,51.2,36.8,61.9C23.9,72.6,6.8,78.9,-9.5,82.3C-25.8,85.6,-51.6,86,-64.5,73.1C-77.5,60.2,-77.7,34.9,-75.8,12.2C-73.9,-10.5,-70.1,-30.6,-56.9,-39.7C-43.6,-48.9,-21.8,-47.1,-1.5,-45.3C18.7,-43.5,37.4,-41.9,48.4,-64.3Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-red-500"
          fill="currentColor"
        >
          <path d="M40.4,-55.6C51.9,-47.4,61.5,-35.6,67.1,-21.7C72.6,-7.7,74,8.5,67.6,21.8C61.2,35.1,47.1,45.6,32.2,53.8C17.2,62,-8.6,68,-25.6,61.7C-42.6,55.5,-50.8,37.1,-55.1,18.1C-59.5,-0.9,-60.1,-20.6,-51.3,-33.2C-42.4,-45.8,-24.2,-51.4,-6.9,-49.1C10.5,-46.8,21.1,-36.7,40.4,-55.6Z" />
        </svg>
      </div>

      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
          Driven by Purpose. <span className="text-red-600">Guided by Vision.</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At <span className="text-blue-700 font-semibold">Emco Power Support</span>, 
          we believe that powering progress goes beyond providing products—it’s about 
          shaping a future where industries operate with reliability, sustainability, 
          and trust. Our vision and mission are the foundation that drives every 
          solution we create.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 mb-24 relative z-10">
        {/* Text Left */}
        <div className="text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-700 mb-6 relative">
            Our Vision
            <span className="block w-16 h-1 bg-blue-600 mt-2 rounded"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed space-y-2">
            <span>
              To become the <span className="text-red-600 font-semibold">most trusted global partner</span> 
              in the electrical industry, recognized for our innovation and 
              unwavering commitment to quality. 
            </span>
            <br />
            <span>
              We envision a world where industries are empowered by smarter 
              technologies, safer solutions, and sustainable growth. 
            </span>
            <br />
            <span>
              Through continuous research, advanced engineering, and 
              future-ready designs, we strive to set new benchmarks in 
              performance and reliability. 
            </span>
            <br />
            <span>
              Our vision is not only to supply products, but to energize 
              progress, ensuring that every solution we deliver contributes 
              to a safer, more efficient, and sustainable tomorrow.
            </span>
          </p>
        </div>

        {/* Image Right */}
        <div className="relative">
          <img
            src={visionImg}
            alt="Vision - Emco Power Support"
            className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
          />
        </div>
      <div className="w-full h-[2px] bg-gray-200 "></div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 relative z-10">
        {/* Image Left */}
        <div className="relative order-2 lg:order-1">
          <img
            src={missionImg}
            alt="Mission - Emco Power Support"
            className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
          />
        </div>

        {/* Text Right */}
        <div className="text-left order-1 lg:order-2">
          <h3 className="text-2xl md:text-4xl font-bold text-red-600 mb-6 relative">
            Our Mission
            <span className="block w-16 h-1 bg-red-600 mt-2 rounded"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            <span>
              Our mission is to provide <span className="text-blue-700 font-semibold">reliable, 
              high-performance electrical solutions</span> that empower 
              industries to operate safely and efficiently. 
            </span>
            <br />
            <span>
              From <strong>busbar supports</strong> and <strong>insulators</strong> to 
              advanced <strong>current transformers</strong>, we are committed to 
              delivering products that ensure operational continuity and trust. 
            </span>
            <br />
            <span>
              We aim to combine <span className="text-red-600 font-semibold">engineering precision</span> 
              with <span className="text-blue-700 font-semibold">innovative design</span>, creating solutions 
              that meet today’s demands while preparing for tomorrow’s challenges. 
            </span>
            <br />
            <span>
              Guided by integrity, innovation, and customer-centricity, 
              we strive to energize industries across the globe—driving growth, 
              ensuring safety, and enabling sustainable futures.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
