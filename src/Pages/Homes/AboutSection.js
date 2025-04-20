import React from "react";
import { motion } from "framer-motion";
import {FaArrowRight } from "react-icons/fa";

const imageUrls = [
          "https://media.istockphoto.com/id/1488507564/photo/basic-womens-autumn-wardrobe-with-shoes-and-handbags-on-hanger.jpg?s=612x612&w=0&k=20&c=zUU8Y26dbIamZ6WMTpGwgfkBTaSY3y8JYemAKhwp7B4=",
          "https://media.istockphoto.com/id/669451786/photo/row-of-nurse-uniform-hanging.jpg?b=1&s=612x612&w=0&k=20&c=CR1OPDoFSbui34qL5jSwM7qgQHfjYXq0RwKJUMWv0Vs=",
          "https://media.istockphoto.com/id/2192191401/photo/woman-sorting-an-old-out-of-use-kid-toy-clothes-and-shoes-in-box-for-charity-or-upcycling.jpg?b=1&s=612x612&w=0&k=20&c=UxmA7azo_EFsQ4SfxOKHT1A_GttTykMqSzHPBebLcF0=",
          "https://media.istockphoto.com/id/934659218/photo/black-and-burgundy-blouse-bouquet-of-tulips-fashionable-concept.jpg?s=612x612&w=0&k=20&c=B_4HXJrLnxWi-03JuRDGpTStPt1VhL79C19zDqrd6pM=",
          // "https://i.ibb.co.com/B2xvDF8p/download-1.jpg"
];

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const AboutSection = () => {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0 flex flex-wrap w-full h-full z-0 opacity-80">
        {imageUrls.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`about-${i}`}
            className="w-1/2 h-1/2 object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            custom={i}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Ocean Weave
        </motion.h2>
        <motion.p
          className="text-lg text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ocean Weave is a trusted garment sourcing house committed to delivering quality and sustainability. We work with international clients to turn fashion ideas into reality — from design to final product.
        </motion.p>

        {/* Button with left arrow */}
        <motion.a
          href="/about"
          className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          View More<FaArrowRight className="text-xs" />
        </motion.a>
      </div>
    </section>
  );
};

export default AboutSection;
