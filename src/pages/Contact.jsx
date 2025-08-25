import React from 'react'
import ContactHero from '../components/ContactHero'
import bg from "../assets/images/home/ev1.jpg"
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaYoutube, FaGlobe } from 'react-icons/fa'
import MapSection from '../components/MapSection'

const Contact = () => {
  return (
    <>
      <ContactHero />
      
      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F7F5F2] text-[#1C1C1C] mt-1 font-body">
        
        {/* Left Panel: Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-[#faf7f7] px-8 py-16 shadow-2xl"
        >
          <h2 className="text-4xl font-cursive1 font-bold mb-6 pb-3 inline-block border-b-4 border-red-800 text-red-800">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#5E5E5E] mb-10 font-body leading-relaxed">
            Welcome to{" "}
            <span className="font-cursive2 text-xl text-red-800">EMCO Power Support</span>, 
            where we deliver trusted and innovative electrical solutions with excellence.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold mb-1 text-red-800">Contact Person</h4>
              <p className="font-body">👤 RANJAY YADAV</p>
              <p>📞 +91 7011129058</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-red-800">Emails</h4>
              <p>✉️ emcopowers@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-red-800">Website</h4>
              <p className="flex items-center gap-2">
                <FaGlobe className="text-red-800" /> 
                <a href="https://www.indiamart.com/emcopowersupport/" target="_blank" rel="noreferrer" className="hover:underline">
                  www.indiamart.com/emcopowersupport
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-red-800">Office Address</h4>
              <p className="leading-relaxed">
                1st Floor, Shed No B-57 Pole No A0003, <br />
                Camp No 4, Lal Building, Jwala Puri, <br />
                DSIDC Complex, New Delhi-110087, Delhi, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-red-800">Business Info</h4>
              <p>GSTIN: 07AUMPY7612E1Z8</p>
              <p>UDYAM: UDYAM-DL-03-0017396</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:text-red-800 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        {/* Right Panel: Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />

          {/* Form */}
        <form
  action="https://formsubmit.co/emcopowers@gmail.com"
  method="POST"
  className="relative z-10 w-full max-w-lg px-8 py-12"
>
  <h3 className="text-2xl font-cursive2 font-bold text-red-800 mb-6 border-b-2 border-red-800 inline-block">
    Get in Touch
  </h3>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-red-800 outline-none"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-red-800 outline-none"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      required
      className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-red-800 outline-none"
    />

    {/* Products Dropdown */}
    <select
      name="product"
      required
      className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-red-800 outline-none"
    >
      <option value="" disabled selected className="text-gray-400">
        Select Product
      </option>
      <option value="Busbar Supports" className="text-black">Busbar Supports</option>
      <option value="Metal Spacer" className="text-black">Metal Spacer</option>
      <option value="Metering CT" className="text-black">Metering CT</option>
      <option value="Protection CT" className="text-black">Protection CT</option>
      <option value="Panel Accessories" className="text-black">Panel Accessories</option>
      <option value="PCB Spacers" className="text-black">PCB Spacers</option>
      <option value="FRP Products" className="text-black">FRP Products</option>
      <option value="MV Insulators" className="text-black">MV Insulators</option>
      <option value="LV Busbar Connector" className="text-black">LV Busbar Connector</option>
      <option value="LV Insulators" className="text-black">LV Insulators</option>
    </select>

    <textarea
      name="message"
      placeholder="Your Message"
      required
      rows={4}
      className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-red-800 outline-none"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-red-800 text-white py-3 font-body font-semibold rounded-full hover:bg-red-900 transition duration-300 shadow-lg"
  >
    Send Message
  </button>

  {/* Formsubmit config */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://www.emcopowersupport.com/" />
</form>

        </motion.div>
      </section>
      <MapSection/>
    </>
  )
}

export default Contact
