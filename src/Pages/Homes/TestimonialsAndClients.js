import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    name: "John Doe",
    role: "Buyer, USA",
    text: "Ocean Weave consistently delivers high-quality products. Great communication and timely delivery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBZ654MetsAHyBxp90y9BYkX1FqDUN-tQXQ&s", // Add client image here
  },
  {
    name: "Sophie Lin",
    role: "Partner, Germany",
    text: "Reliable, innovative, and always sustainable. A trustworthy sourcing partner!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8RQUF257gB28m0W0oq2kZIUhdEieA5WE3w&s", // Add client image here
  },
  {
    name: "Ravi Kumar",
    role: "Textile Merchant, India",
    text: "We’ve worked with Ocean Weave for 5 years — outstanding commitment and professionalism!",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740", // Add client image here
  },
];

const clientLogos = [
  "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJqjY1ycX0tjY6tTTjt8uV-MeJDkp0NgCq684ZuAYMzPhaRbxv_NacGzErtfaq3KVJjk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBZ654MetsAHyBxp90y9BYkX1FqDUN-tQXQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8RQUF257gB28m0W0oq2kZIUhdEieA5WE3w&s",
];

const TestimonialsAndClients = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      {/* Testimonials */}
      <motion.div
        className="max-w-6xl mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2 className="text-4xl font-bold text-blue-900 mb-6" variants={fadeInUp}>
          What Our Clients Say
        </motion.h2>
        <motion.p className="text-gray-600 mb-10" variants={fadeInUp}>
          Trusted by global brands for quality, reliability, and sustainability.
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-md"
                variants={fadeInUp}
              >
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <h4 className="text-lg font-semibold text-blue-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>

                {/* Client Image under the name */}
                <div className="mt-4 flex justify-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        className="mt-20 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h3 className="text-3xl font-bold text-center text-blue-900 mb-10" variants={fadeInUp}>
          Our Clients
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {clientLogos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Client Logo"
              className="w-full max-h-16 object-contain"
              variants={fadeInUp}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsAndClients;
