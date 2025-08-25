import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/images/home/bulb.jpg"

export default function OurStory() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Establishment",
      year: "2021 The Year We Start",
      desc: "Emco Power Support began its journey in 2021 from Paschim Vihar, Delhi. Built on the vision of delivering uncompromised reliability in the field of electrical solutions, we started by offering foundational products for industries, factories, and businesses. With customer-first values, we quickly became recognized for our quality and commitment.",
    },
    {
      title: "Products",
      year: "Expanding Range",
      desc: "Over time, we expanded our catalog with a wide spectrum of electrical components — ranging from premium insulators and busbar supports to critical wholesale electrical supplies. Each product is carefully chosen to ensure durability, safety, and maximum efficiency for industrial projects.",
    },
    {
      title: "Growth",
      year: "Scaling Operations",
      desc: "With increasing trust from clients, Emco scaled its operations to serve not only Delhi but also industries across regions. By becoming a strong wholesale partner, we empowered contractors, factories, and businesses with consistent supply and technical support. Our reach and reputation grew hand in hand.",
    },
    {
      title: "Reliability",
      year: "Industry Trust",
      desc: "Reliability is the cornerstone of Emco. Over the years, we have built long-standing relationships with clients by ensuring timely service, unmatched product quality, and technical guidance. We became known as more than just a supplier — a trusted partner for powering ambitious projects.",
    },
    {
      title: "Future Vision",
      year: "Innovation Ahead",
      desc: "Looking ahead, Emco Power Support is committed to sustainable and innovative energy solutions. Our goal is to integrate smarter technologies, eco-friendly materials, and advanced systems that not only support industries today but also lead them toward a greener, more efficient tomorrow.",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Our Story Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center relative">
        {/* Premium Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          <span className="text-red-600">The Journey of</span>{" "}
          <span className="text-blue-700">Emco Power Support</span>
        </motion.h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-16 leading-relaxed">
          From a humble beginning to becoming a trusted name in the electrical
          industry, Emco Power Support has been driven by a single mission —
          to energize industries with **reliable, innovative, and sustainable solutions**.
          Explore our story and discover how we continue to power progress.
        </p>

        {/* Timeline Navigation */}
        <div className="flex justify-center gap-6 md:gap-14 mb-7 flex-wrap">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`text-lg md:text-xl font-semibold transition relative pb-2 ${
                activeStep === index
                  ? "text-red-600 border-b-4 border-red-600"
                  : "text-white hover:text-blue-700"
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 max-w-4xl text-left border-l-8 border-red-600"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {steps[activeStep].year}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
