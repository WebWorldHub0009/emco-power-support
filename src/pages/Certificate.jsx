import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import CertificateHero from "../components/CertificateHero";
import pdf1 from "../assets/images/doc/certi1.pdf"
import pdf2 from "../assets/images/doc/cert2.pdf"
import pdf3 from "../assets/images/doc/cert3.pdf"
import logo from "../assets/elogo.png"



const certificates = [
  {
    title: "Gst Registration Certificate",
    pdf: pdf1,
    image: logo,
  },
  {
    title: "Udyam Registration Certificate",
    pdf: pdf2,
    image: logo,
  },
  {
    title: "Udyam Registration Certificate Second",
    pdf: pdf3,
    image: logo,
  },
 
];

const Certificate = () => {
  return (
    <>
<CertificateHero/>
   
    <section className="relative w-full bg-[#f1efef] min-h-screen  text-black py-10 px-6 md:px-16 font-sans overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#D4AF37]">
          Our Certifications
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-800 italic">
          "Excellence is not a skill, it’s our attitude."
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 text-center group relative"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-lg w-full h-56 object-center mb-6 group-hover:scale-105 transition-transform"
            />
            <h2 className="text-xl font-semibold mb-4">{cert.title}</h2>
            <div className="flex justify-center gap-4">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md"
              >
                <FaEye /> View
              </a>
              <a
                href={cert.pdf}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition shadow-md"
              >
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
     </>
  );
};

export default Certificate;
