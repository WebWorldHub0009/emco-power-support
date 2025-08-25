// src/components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative bg-[#f3ecec]  text-black py-16 px-6 md:px-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800  ">
          Find Us Easily
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Visit our office or reach out directly — we’re always ready to help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.393335341993!2d77.0792918!3d28.677878300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0537bccff10f%3A0x4fae012de83c8f9b!2sEmco%20Power%20Support!5e0!3m2!1sen!2sin!4v1756130793480!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay glow effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
            <p className="text-gray-800 leading-relaxed">
              Emco Power Support, <br />
              Nangloi, Delhi 110041
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-800 text-xl" />
              <span>Plot No. 45, Nangloi, Delhi</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <a href="tel:+917011129058" className="hover:text-green-400 transition">
                +91 7011129058
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-400 text-xl" />
              <a href="mailto:info@emcopower.com" className="hover:text-green-400 transition">
                info@emcopower.com
              </a>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://maps.google.com/?q=Emco+Power+Support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-500 hover:bg-red-800 transition rounded-xl text-lg font-medium shadow-lg"
          >
            Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
