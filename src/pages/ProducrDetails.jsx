// src/pages/ProductDetails.jsx

import { Link, useParams } from "react-router-dom";
import products from "../pages/products"

import ProductNavigator from "../components/ProductNavigator";
import ProductHero from "../components/ProductHero";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Product not found.
      </div>
    );
  }

  return (
    <>
   <ProductHero/>
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold font-[poppins] text-center text-red-800 mb-12">
        {product.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full  h-[450px] rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: Description */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Category: {product.category}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Download PDF */}
          <Link to={'/contact'}>
          <button
            className="inline-block cursor-pointer bg-red-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
          >
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
    <ProductNavigator/>
     </>
  );
};

export default ProductDetails;
