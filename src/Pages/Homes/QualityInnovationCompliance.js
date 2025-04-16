import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const QualityInnovationCompliance = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900 mb-12"
          variants={fadeInUp}
        >
          Quality | Innovation | Compliance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Quality */}
          <motion.div
            className="p-8 bg-white shadow-xl rounded-xl hover:shadow-2xl transition duration-500"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Quality</h3>
            <p className="text-gray-600">
              We ensure top-tier garment production standards that meet international benchmarks.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            className="p-8 bg-white shadow-xl rounded-xl hover:shadow-2xl transition duration-500"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Embracing creative trends and technologies to deliver smarter, more stylish solutions.
            </p>
          </motion.div>

          {/* Compliance */}
          <motion.div
            className="p-8 bg-white shadow-xl rounded-xl hover:shadow-2xl transition duration-500"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Compliance</h3>
            <p className="text-gray-600">
              We prioritize ethical sourcing, fair trade, and regulatory adherence at every level.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QualityInnovationCompliance;
