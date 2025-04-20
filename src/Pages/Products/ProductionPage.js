import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = (direction = "up", delay = 0.2) => {
  return {
    initial: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

const ProductionPage = () => {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {/* Inline animation style inside JSX */}
        <style>
          {`
            @keyframes zoomInOut {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
            }

            .zoom-animation {
              animation: zoomInOut 2s ease-in-out infinite;
            }
          `}
        </style>

        <div className="flex justify-center items-center h-screen bg-white">
        <img
              src="https://i.ibb.co.com/KjCHccHX/ocean-Wave.jpg"
              alt="Loading..."
              className=" zoom-animation"
            />
        </div>
      </>
    );
  }

  const productCategories = [
    { title: "Menswear", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfZZxf5qCKjoBomc2LNTwWT3FdtnzjrnRuw&s",
      url: "/menswear" },
    { title: "Womenswear", img: "https://i.ibb.co.com/nMNV5hMS/download-2.jpg", url: "/womenswear" },
    { title: "Kidswear", img: "https://i.ibb.co/gxPC9dd/1713437761992-Photo-Collage-for-Web-07-01-05.jpg", url: "/kids" },
    { title: "Sportswear", img: "https://i.ibb.co.com/gMNzNcqb/download.jpg", url: "/sportswear" },
    { title: "Denim Jackets", img: "https://i.ibb.co.com/B2xvDF8p/download-1.jpg", url: "/denim-jackets" },
    { title: "Casual Shirts", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpiVwCoh1cFsM2e_Utksp92tFm6g6BvaXDQ&s", url: "/casual-shirts" },
    { title: "Hoodies", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkh6V0JGSv0gGD7bPvqZW5gFghgPh5YdIvHLwPi8ERvhkhbcDalaIJ2oUtEpNhM7uzSw&usqp=CAU", url: "/hoodies" },
    { title: "Nightwear", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBywfROgqjdZrxGRp4gwh_tAfoWUDjtwhHtA&s", url: "/nightwear" },
  ];

  return (
    <main className="text-gray-800 bg-white">
      {/* 1. Product Categories - Masonry Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-12">Product Categories</h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {productCategories.map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-md break-inside-avoid group"
                {...fadeIn("up", i * 0.1)}
              >
                <Link to={item.url}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover transition duration-300 group-hover:blur-sm"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   {/* 2. Introduction Section */}
<section
  className="py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://pawlafashion.com/wp-content/uploads/2024/07/Garment-Factories-1.png')`, // Replace with your own image URL
  }}
>
  <motion.div
    className="container mx-auto px-6 text-center bg-white/70 backdrop-blur-sm py-12 rounded-lg"
    {...fadeIn("up", 0.2)}
  >
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Production Process</h2>
    <p className="text-lg max-w-3xl mx-auto text-gray-800">
      Ocean Weave ensures every step of the production process meets global standards of quality, sustainability, and innovation.
    </p>
  </motion.div>
</section>


      {/* 3. Production Steps Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center text-blue-800 mb-12">
            Step-by-Step Process
          </h3>
          <div className="relative border-l-4 border-blue-300 ml-6">
            {[
              { step: "Design & Development", desc: "We begin with trends, tech packs, and sampling based on client needs." },
              { step: "Sourcing", desc: "Ethically sourced raw materials from trusted suppliers." },
              { step: "Production", desc: "Efficient manufacturing with strict quality control." },
              { step: "Finishing & Packing", desc: "Products are ironed, tagged, packed, and inspected." },
              { step: "Logistics", desc: "We ensure timely delivery to destinations worldwide." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 ml-6"
                {...fadeIn("up", index * 0.2)}
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1.5"></div>
                <h4 className="text-xl font-bold text-blue-700">{item.step}</h4>
                <p className="text-gray-700 ml-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Certifications Highlight */}
      {/* <section className="py-16 bg-white">
        <motion.div className="container mx-auto px-6 text-center" {...fadeIn("up", 0.2)}>
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Certified Production</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our facilities meet the highest compliance standards including BSCI, SEDEX, OEKO-TEX, and WRAP, ensuring trust and transparency.
          </p>
          <div className="flex justify-center flex-wrap gap-8">
            {["bsci.png", "sedex.png", "oekotex.png", "wrap.png"].map((cert, i) => (
              <img
                key={i}
                src={`https://i.ibb.co/${cert}`}
                alt={cert.replace(".png", "")}
                className="h-16 object-contain"
              />
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* 5. Call to Action */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <motion.div {...fadeIn("up", 0.3)}>
          <h3 className="text-3xl font-bold mb-4">Looking to Start Your Production?</h3>
          <p className="mb-6 text-lg">Let’s create amazing products together — from concept to completion.</p>
          <a
            href="/contractPage"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-200 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default ProductionPage;
