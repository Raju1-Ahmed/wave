import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaArrowRight } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurProductions = () => {
  const products = [
    {
      title: "Men's Denim Jackets",
      image: "https://img.freepik.com/premium-photo/man-wearing-denim-jacket-with-black-shirt-that-says-he-is-wearing-denim-jacket_1077802-278092.jpg?ga=GA1.1.950069504.1745131482&semt=ais_hybrid&w=740",     
    },
    {
      title: "Casual Shirts",
      image: "https://img.freepik.com/free-photo/men-casual-fashion-outfit-wooden-table-top-view_1357-155.jpg?ga=GA1.1.950069504.1745131482&semt=ais_hybrid&w=740",
    },
    {
      title: "Sportswear",
      image: "https://img.freepik.com/premium-vector/set-sport-wear-collection-vector_18591-19983.jpg?ga=GA1.1.950069504.1745131482&semt=ais_hybrid&w=740",
    },
    {
      title: "Kids Collection",
      image: "https://img.freepik.com/free-vector/baby-girl-fashion-icon-set_1284-20753.jpg?ga=GA1.1.950069504.1745131482&semt=ais_hybrid&w=740",
      url: "/kids" 
    },
    {
      title: "Women’s Fashion",
      image: "https://img.freepik.com/free-photo/women-dancing-different-glasses_23-2147651691.jpg?ga=GA1.1.950069504.1745131482&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight">
          Our Products
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Discover high-quality garments tailored for every age and trend—crafted with creativity and sustainability.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={40}
        slidesPerView={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="px-8 pb-8"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              variants={fadeInUp}
            >
              <Link to={product.url}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                <h3 className="text-white text-xl font-semibold">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
     {/* Button aligned to the right */}
<div className="max-w-7xl mx-auto px-8 flex justify-end">
  <motion.a
    href="/productionPage"
    className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    View All <FaArrowRight className="text-xs" />
  </motion.a>
</div>

    </motion.section>
  );
};

export default OurProductions;
