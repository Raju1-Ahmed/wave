import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Innovation = () => {
  return (
    <motion.section
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div className="text-center mb-14" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Leading with Sustainability & Innovation
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            At Ocean Weave, we blend eco-conscious methods with cutting-edge technology to create a smarter, cleaner, and more responsible textile industry.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            {
              title: "Eco-Friendly Dyes",
              desc: "We use safe, low-impact dyes that preserve ecosystems and minimize water pollution.",
              color: "text-green-500",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c.348-1.58 1.611-3 3-4m0 0c-3.5.75-6.5 3.5-7 8s3 8 7 8c1.389 0 2.652-1.42 3-3"
                />
              ),
            },
            {
              title: "Advanced Looms",
              desc: "We use smart machinery for higher precision, faster turnaround, and less waste.",
              color: "text-blue-500",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h6l6 18h6"
                />
              ),
            },
            {
              title: "Recycled Materials",
              desc: "Our production includes yarns and fabrics made from recycled content to reduce landfill waste.",
              color: "text-yellow-500",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4-4m-9 9a9 9 0 1 1 18 0a9 9 0 0 1-18 0z"
                />
              ),
            },
            {
              title: "Energy Efficiency",
              desc: "Our facilities are optimized for minimal energy consumption and reduced carbon emissions.",
              color: "text-indigo-500",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
              variants={fadeInUp}
            >
              <div className={`${feature.color} mb-4`}>
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Innovation;
