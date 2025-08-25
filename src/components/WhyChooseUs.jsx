// src/components/WhyChooseUs.jsx
import React, { useState } from "react";
import {
  FaBolt,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaSmileBeam,
  FaStar,
  FaAngleDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Reliable Power Solutions",
    icon: FaBolt,
    color: "text-red-800",
    short: "Delivering consistent energy you can trust.",
    description:
      "Emco Power Support ensures uninterrupted and efficient power solutions, engineered to meet the highest industry standards.",
    animation: "animate-bounce",
  },
  {
    title: "Industry-Grade Equipment",
    icon: FaIndustry,
    color: "text-red-700",
    short: "Built strong for factories & enterprises.",
    description:
      "Our products are designed with durability and performance in mind, supporting industrial operations across the nation.",
    animation: "animate-spin-slow",
  },
  {
    title: "Safety & Reliability",
    icon: FaShieldAlt,
    color: "text-red-600",
    short: "Protection you can count on.",
    description:
      "We prioritize safety in every solution we deliver, ensuring long-lasting, reliable, and secure power infrastructure.",
    animation: "jump-rotate",
  },
  {
    title: "Expert Engineering",
    icon: FaTools,
    color: "text-red-800",
    short: "Solutions crafted by specialists.",
    description:
      "Our team of engineers and experts bring decades of combined knowledge, providing advanced and tailored power systems.",
    animation: "animate-bounce",
  },
  {
    title: "Advanced Technology",
    icon: FaCogs,
    color: "text-red-700",
    short: "Innovating for tomorrow.",
    description:
      "We integrate the latest technologies into our solutions, ensuring efficiency, sustainability, and long-term value.",
    animation: "animate-spin-slow",
  },
  {
    title: "Client Satisfaction",
    icon: FaSmileBeam,
    color: "text-red-600",
    short: "Trusted by industries nationwide.",
    description:
      "Our dedication to excellence and customer-first approach has earned us the trust of leading businesses across the country.",
    animation: "animate-bounce",
  },
];

const styles = `
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 6s linear infinite;
  }

  @keyframes jump-rotate {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(15deg); }
  }
  .jump-rotate {
    animation: jump-rotate 2.5s infinite ease-in-out;
  }

  @keyframes float-blink {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(5px);
      opacity: 0.5;
    }
  }
  .float-blink {
    animation: float-blink 1.8s infinite ease-in-out;
  }
`;

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{styles}</style>

      <section className="relative py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#fef2f2] to-[#f9f9f9] text-gray-900 z-10 overflow-hidden">
        {/* Decorative Shapes */}
        <svg
          className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] text-red-200 animate-pulse"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] text-red-300 animate-spin-slow"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <rect width="200" height="200" rx="100" />
        </svg>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 relative z-10"
        >
          <div className="flex justify-center mb-3">
            <FaStar className="text-red-800 text-3xl animate-bounce" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Why Choose <span className="text-red-800">Emco Power Support?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            At Emco Power Support, we combine technology, expertise, and
            reliability to deliver unmatched energy solutions. Here’s why
            industries across the nation choose us.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => toggle(index)}
                className="cursor-pointer p-6 bg-white/90 backdrop-blur-lg border border-gray-200 hover:border-red-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                {/* Down arrow */}
                {!isOpen && (
                  <FaAngleDown className="absolute top-4 right-4 text-red-800 text-lg md:text-2xl float-blink" />
                )}

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-4 rounded-full border-2 border-dashed bg-white shadow-sm ${item.color} ${item.animation}`}
                  >
                    <Icon className={`text-2xl ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-600">{item.short}</p>

                {/* Full Description */}
                <div
                  className={`text-sm mt-3 text-gray-700 transition-all duration-500 leading-relaxed ${
                    isOpen
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
