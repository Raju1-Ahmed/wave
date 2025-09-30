<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> cc73c8b (first commit)
import { motion } from "framer-motion";
import { FaCertificate, FaHandshake, FaLeaf, FaStar, FaUsers } from "react-icons/fa";

// const fadeIn = (direction = "up", delay = 0) => {
//   const variants = {
//     hidden: {
//       opacity: 0,
//       y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
//       x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         delay,
//         ease: "easeOut",
//       },
//     },
//   };
//   return variants;
// };

// const staggerContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

<<<<<<< HEAD
const imageUrls = [
"https://i.ibb.co.com/nNKt1vxJ/1.png",
"https://i.ibb.co.com/WNv1J6h9/2.png" 
];

const About = () => {
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
              src="https://i.ibb.co.com/Wpq6QZkN/Ocean-Wave-Logo.png"
              alt="Loading..."
              className=" zoom-animation"
            />
          </div>
        </>
      );
    }
=======
const About = () => {
>>>>>>> cc73c8b (first commit)
  return (
    <main 
    // variants={staggerContainer}
    // initial="hidden"
    // whileInView="show"
    // viewport={{ once: true }}
    className="text-gray-800 bg-white">
<<<<<<< HEAD
       <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Layers */}
      <div className="absolute inset-0 flex flex-wrap z-0">
        {imageUrls.map((src, i) => (
          <motion.div
            key={i}
            className="w-1/2 h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <img
              src={src}
              alt={`about-bg-${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Centered Heading */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <h1 className="text-5xl md:text-6xl font-bold text-white">About</h1>
      </div>
    </section>
=======
>>>>>>> cc73c8b (first commit)
      {/* 1. About Us Intro */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="lg:w-1/2">
            <img
<<<<<<< HEAD
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
=======
              src="https://www.oceanlanka.com/images/news/bluesign-summit-2024/dsc07492.jpg"
>>>>>>> cc73c8b (first commit)
              alt="Our Team"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-4">
<<<<<<< HEAD
              Ocean Wave is a global buying house committed to delivering premium quality garments and sourcing solutions. We work closely with international buyers and local factories to ensure the best outcome in every stage of production.
=======
              Ocean Weave is a global buying house committed to delivering premium quality garments and sourcing solutions. We work closely with international buyers and local factories to ensure the best outcome in every stage of production.
>>>>>>> cc73c8b (first commit)
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With years of experience in the textile industry, our dedicated team bridges the gap between creativity and production — ensuring on-time delivery, compliance, and quality that meets global standards.
            </p>
            <p className="text-lg leading-relaxed">
<<<<<<< HEAD
              From concept development to final shipment, Ocean Wave is your trusted partner in Bangladesh and beyond. Let us help you bring your fashion vision to life.
=======
              From concept development to final shipment, Ocean Weave is your trusted partner in Bangladesh and beyond. Let us help you bring your fashion vision to life.
>>>>>>> cc73c8b (first commit)
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div       
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">📌 Our Mission</h3>
              <p className="text-lg">
                To deliver top-tier sourcing and garment solutions that ensure quality, sustainability, and trust for international buyers.
              </p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            className="bg-green-100 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">🎯 Our Vision</h3>
              <p className="text-lg">
                To be a global leader in ethical sourcing, known for innovation, reliability, and empowering fashion brands worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey */}
      <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Journey</h2>
          <div 
          className="space-y-8 border-l-4 border-blue-400 pl-6">
            <div>
              <h4 className="text-xl font-semibold">📍 Started in 2015</h4>
              <p className="text-gray-700">Began with a small team and a vision for responsible sourcing.</p>
            </div>
            <div>
<<<<<<< HEAD
              <h4 className="text-xl font-semibold">🚀 Reached 10+ Clients by 2019</h4>
              <p className="text-gray-700">Expanded services and built strong relationships globally.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">🌍 Offices in Bangladesh & Overseas</h4>
=======
              <h4 className="text-xl font-semibold">🚀 Reached 100+ Clients by 2019</h4>
              <p className="text-gray-700">Expanded services and built strong relationships globally.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">🌍 Offices in Bangladesh & Europe</h4>
>>>>>>> cc73c8b (first commit)
              <p className="text-gray-700">Now serving international brands with dedicated local presence.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Our Team */}
<<<<<<< HEAD
      {/* <motion.section
=======
      <motion.section
>>>>>>> cc73c8b (first commit)
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}       
      className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Samiul Haque", role: "Founder & CEO", img: "https://0.academia-photos.com/67662394/17594817/17652202/s200_md._rafsan.jany.jpg" },
              { name: "Mira Sultana", role: "Head of Merchandising", img: "https://0.academia-photos.com/247384446/101552298/90710028/s200_md.mazedul.islam.jpeg" },
              { name: "Imran Kabir", role: "Compliance Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPc3ZbHnm1nWhn5QrBMpN3kbL4cPao8apWW0aAOpwEN2h2uQlouvFhfqU-nBQjXAwN3Q&usqp=CAU" },
              { name: "Zara Hossain", role: "Product Developer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBZ654MetsAHyBxp90y9BYkX1FqDUN-tQXQ&s" }
            ].map((member, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-xl shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </motion.section> */}

    {/* 5. Our Values */}
<section
  className="py-16 bg-[url('https://img.freepik.com/premium-photo/young-woman-wearing-hat-standing-against-blue-background_1048944-2089531.jpg?w=826')] bg-cover bg-center bg-no-repeat relative"
>
  {/* Overlay to blend with gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-30"></div>

  <div className="relative container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-12">What We Believe</h2>
    <div className="grid md:grid-cols-4 gap-8">
      {["Quality First", "Fair Trade", "Sustainability", "Client Success"].map((value, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300"
        >
          <h4 className="text-xl font-semibold text-blue-800">{value}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 6. Certificates */}
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
      Certifications & Compliance
    </h2>
    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      “Quality is our promise, Compliance is our strength.”
    </p>
    <p className="text-base md:text-lg text-gray-700 mb-12">
      We are proud to be certified by globally recognized organizations ensuring 
      sustainability, safety, and quality in every step.
    </p>

    <div className="flex justify-center flex-wrap gap-12">
      <div className="group bg-white shadow-lg p-6 rounded-2xl w-40 md:w-48 flex items-center justify-center hover:shadow-2xl hover:scale-105 transition duration-300">
        <img
          src="https://i.ibb.co.com/v4cfjDBc/Certificate-Logo-1.png"
          alt="Oeko-Tex"
          className="h-16 md:h-20 object-contain"
        />
      </div>
      <div className="group bg-white shadow-lg p-6 rounded-2xl w-40 md:w-48 flex items-center justify-center hover:shadow-2xl hover:scale-105 transition duration-300">
        <img
          src="https://i.ibb.co.com/LTBxXnN/Certificate-Logo-2.png"
          alt="OCS"
          className="h-16 md:h-20 object-contain"
        />
      </div>
      <div className="group bg-white shadow-lg p-6 rounded-2xl w-40 md:w-48 flex items-center justify-center hover:shadow-2xl hover:scale-105 transition duration-300">
        <img
          src="https://i.ibb.co.com/bYrVhKc/Certificate-Logo-3.png"
          alt="RCS"
          className="h-16 md:h-20 object-contain"
        />
      </div>
    </div>
  </div>
</section>


      {/* 7. Call to Action */}
      <section className="py-16 mt-5 bg-blue-900 text-white text-center">
=======
      </motion.section>

      {/* 5. Our Values */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Quality First", "Fair Trade", "Sustainability", "Client Success"].map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-semibold text-blue-800">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Certificates */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Certifications & Compliance</h2>
          <p className="text-lg mb-6">Compliance is our strength. We are proud to be certified by:</p>
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
        </div>
      </section> */}

      {/* 7. Call to Action */}
      <section className="py-16 bg-blue-900 text-white text-center">
>>>>>>> cc73c8b (first commit)
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg mb-6">We’re here to help you bring your ideas to life.</p>
        <a
          href="/contractPage"
          className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-200 transition"
        >
          Contact Us
        </a>
      </section>

      {/* 8. Clients or Quotes (optional) */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Trusted By</h2>
          <div className="flex justify-center flex-wrap gap-10">
            {["h-m-logo.png", "gap-logo.png", "zara-logo.png"].map((logo, i) => (
              <img
                key={i}
                src={`https://i.ibb.co/${logo}`}
                alt={logo}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default About;
