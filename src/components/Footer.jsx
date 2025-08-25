// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaImage,
  FaCubes,
  FaBolt,
  FaLayerGroup,
  FaPuzzlePiece,
  FaIndustry,
  FaHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bg from "../assets/images/service/rbg.avif"

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Products (instead of services)
const products = [
  { name: "Busbar Supports", icon: <FaCubes className="text-red-800 mr-2" />, link: "/products/busbar-supports" },
  { name: "Metal Spacer", icon: <FaLayerGroup className="text-red-800 mr-2" />, link: "/products/metal-spacer" },
  { name: "Metering CT", icon: <FaBolt className="text-red-800 mr-2" />, link: "/products/metering-ct" },
  { name: "Protection CT", icon: <FaBolt className="text-red-800 mr-2" />, link: "/products/protection-ct" },
  { name: "Panel Accessories", icon: <FaPuzzlePiece className="text-red-800 mr-2" />, link: "/products/panel-accessories" },
  { name: "PCB Spacers", icon: <FaCubes className="text-red-800 mr-2" />, link: "/products/pcb-spacers" },
  { name: "FRP Products", icon: <FaIndustry className="text-red-800 mr-2" />, link: "/products/frp-products" },
  { name: "MV Insulators", icon: <FaLayerGroup className="text-red-800 mr-2" />, link: "/products/mv-insulators" },
  { name: "LV Busbar Connector", icon: <FaHandshake className="text-red-800 mr-2" />, link: "/products/lv-busbar" },
  { name: "LV Insulators", icon: <FaLayerGroup className="text-red-800 mr-2" />, link: "/products/lv-insulators" },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden font-body"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Glow Effects */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 blur-[140px] rounded-full z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/20 blur-[140px] rounded-full z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-800">
        {/* About Section */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold text-4xl text-red-800 mb-2">
            EMCO Power Support
          </h4>
          <p className="leading-relaxed">
            EMCO Power Support is a trusted name in premium power support
            products ensuring safety, durability, and performance across
            industries.  
          </p>
          <p className="text-xs mt-2">UDYAM-DL-03-0017396</p>
          <p className="text-xs">GSTIN : 07AUMPY7612E1Z8</p>

          <div className="mt-6 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://www.youtube.com", FaYoutube],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-800 hover:text-gray-800 transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-4xl mb-4 text-red-800">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-red-800 transition"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-4xl text-red-800">Emails</h4>
          <ul className="mt-2 space-y-2">
            {["Info@emcopowersupport.com", "emcopowers@gmail.com"].map(
              (email, i) => (
                <li key={i}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center space-x-2 hover:text-red-800 transition"
                  >
                    <FaEnvelope className="text-red-800" />
                    <span>{email}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold text-4xl mb-4 text-red-800">Our Products</h4>
          <ul className="space-y-2">
            {products.map(({ name, icon, link }, i) => (
              <li key={i} className="flex items-center">
                {icon}
                <Link to={link} className="hover:text-red-800 transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://www.indiamart.com/emcopowersupport/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-sm text-red-800 hover:text-gray-800 transition"
          >
            View on IndiaMART →
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-4xl mb-4 text-red-800">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800 text-sm">
            Lal Building Office No B-57, 1st Floor, Pole No. A0003, Camp No. 4, 
            Jwala Puri, DSIDC Complex, Beside Pair Support Industries,  
            Paschim Vihar, New Delhi - 110087, India
          </address>

          <p className="text-sm mb-2">
            <FaPhoneAlt className="inline text-red-800 mr-1" />
            <a href="tel:+917011129058">+91 70111 29058</a>
          </p>

          <div className="mb-4 flex justify-center items-center relative right-6">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-800 border-t border-gray-700 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} EMCO Power Support. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-red-800 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
