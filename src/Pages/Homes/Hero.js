import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const products = [
    {
      title: "Men's Denim Jackets",
      image: "https://i.ibb.co/7NQpH4X/denim.jpg",
    },
    {
      title: "Casual Shirts",
      image: "https://i.ibb.co/M7STFwc/shirt.jpg",
    },
    {
      title: "Sportswear",
      image: "https://i.ibb.co/VVjH9MK/sportswear.jpg",
    },
    {
      title: "Kids Collection",
      image: "https://i.ibb.co/BNbhbdV/kids.jpg",
    },
    {
      title: "Women’s Fashion",
      image: "https://i.ibb.co/yWkFKzF/women.jpg",
    },
  ];

  const heroSlides = [
    {
      image: "https://asiasourcingbd.com/wp-content/uploads/2019/10/2-74.jpg",
       title: "Premium Garments",
      subtitle: "Crafted for excellence and sustainability."
    },
    {
      image: "https://asiasourcingbd.com/wp-content/uploads/2019/09/1-67.jpg",
       title: "Quality Meets Innovation",
      subtitle: "Explore the future of textile manufacturing."
    },
    {
      image: "https://asiasourcingbd.com/wp-content/uploads/2019/09/3-1.jpg",
       title: "Quality Meets Innovation",
      subtitle: "Explore the future of textile manufacturing."
    },
    {
      image: "https://asiasourcingbd.com/wp-content/uploads/2019/09/5.jpg",
       title: "Quality Meets Innovation",
      subtitle: "Explore the future of textile manufacturing."
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center text-center">
  <img
    className=" mt-4 mb-2 h-auto"
    src="https://i.ibb.co.com/KjCHccHX/ocean-Wave.jpg"
    alt="Ocean Weave Logo"
  />
  <p className="text-blue-800 mt-4 mb-4 font-sm text-4xl">
    Creating Quality Product
  </p>
</div>

      {/* Hero Section with Slider */}
      <motion.section         
        className="relative h-[80vh] w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                  <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" variants={fadeInUp}>
                    {slide.title}
                  </motion.h1>
                  <motion.p className="text-lg max-w-xl" variants={fadeInUp}>
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </>
  );
};

export default Hero;
