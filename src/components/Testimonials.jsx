// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Amit Deshmukh",
    title: "Electrical Engineer, PowerGrid Solutions",
    text: "Emco Power Support provided us with high-quality busbar supports and insulators that exceeded expectations. Their products are reliable, durable, and perfectly suited for heavy-duty applications.",
  },
  {
    name: "Sonia Verma",
    title: "Project Manager, MegaBuild Infrastructure",
    text: "From design consultation to delivery, the team at Emco Power Support demonstrated professionalism and expertise. Their timely service made a huge difference in our project execution.",
  },
  {
    name: "Rajesh Mehta",
    title: "Director, VoltMax Panels",
    text: "Working with Emco has been a seamless experience. Their current transformers and panel accessories are top-notch in both quality and performance.",
  },
  {
    name: "Neha Kapoor",
    title: "Plant Head, Zenith Electricals",
    text: "Emco’s FRP pultruded products have proven to be extremely durable and cost-effective. We rely on them for all our panel component requirements.",
  },
  {
    name: "Karan Sharma",
    title: "Operations Head, SafeVolt Industries",
    text: "The level of precision and consistency in Emco Power Support products is unmatched. Their medium-voltage insulators gave us complete confidence in system safety.",
  },
  {
    name: "Vikram Singh",
    title: "Contractor, ElectroServe Projects",
    text: "Emco’s reliable busbar support solutions allowed us to complete installations faster and with zero faults. Their support team is always quick to respond.",
  },
  {
    name: "Priya Nair",
    title: "Procurement Manager, GreenTech Panels",
    text: "Their protection CTs and metering CTs are extremely accurate and built with excellent material quality. Emco has become our go-to supplier.",
  },
  {
    name: "Manish Gupta",
    title: "OEM Partner, Powerlink Systems",
    text: "As an OEM, we need suppliers we can trust. Emco Power Support delivers consistent quality, making them an invaluable partner for our panel manufacturing line.",
  },
  {
    name: "Anita Rao",
    title: "Quality Lead, Spark Electricals",
    text: "Every product from Emco reflects their commitment to excellence. Their insulators and spacers are robust, and their service is truly customer-focused.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#f9fafb] py-16 px-4 md:px-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          Trusted by Industry Leaders in{" "}
          <span className="bg-red-100 px-2 py-1 rounded-lg text-red-600 inline-block">
            Emco Power Support
          </span>
        </h2>
        <p className="italic text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          "Delivering reliability, safety, and innovation in every product we
          manufacture."
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`rounded-2xl p-6 shadow-md h-full border transition hover:shadow-xl ${
                idx % 2 === 0
                  ? "bg-white text-gray-700"
                  : "bg-blue-50 text-gray-800"
              }`}
            >
              <FaQuoteLeft className="text-2xl mb-4 text-red-600" />
              <p className="mb-4 italic leading-relaxed">"{item.text}"</p>
              <div>
                <p className="font-semibold text-blue-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
              <button className="mt-4 text-sm font-semibold text-red-600 hover:underline">
                Learn more →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
