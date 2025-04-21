import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-tr from-[#001F3F] to-[#004466] text-white px-6 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <img
            src="https://i.ibb.co.com/FqggTmnh/oceanweavlogo.png"
            alt="Ocean Weave Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-6">
            Ocean Weave is a modern buying house, sourcing high-quality garments
            globally with a commitment to ethics and sustainability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-300 transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300 transition-all">
                About
              </a>
            </li>
            <li>
              <a
                href="/productionPage"
                className="hover:text-blue-300 transition-all"
              >
                Production
              </a>
            </li>
            <li>
              <a
                href="/contractPage"
                className="hover:text-blue-300 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Dhaka Office */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dhaka Office</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone /> +880 1234 567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@oceanweave.com
            </li>
            <li>
              123 Gulshan Avenue,<br />
              Dhaka 1212, Bangladesh
            </li>
          </ul>
        </div>

        {/* New York Office */}
        <div>
          <h3 className="text-lg font-semibold mb-4">New York Office</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone /> +1 (555) 987-6543
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> ny@oceanweave.com
            </li>
            <li>
              456 5th Avenue,<br />
              New York, NY 10018, USA
            </li>
          </ul>
        </div>
      </div>

    {/* Bottom Footer */}
<div className="text-center text-sm text-gray-300 mt-10 pt-4 border-t border-gray-600">
  © {new Date().getFullYear()} Ocean Weave. All rights reserved.{' '}
  <a
    href="https://robiussanirazu.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 transition duration-300 underline ml-1"
  >
    robius.sani
  </a>
</div>

    </motion.footer>
  );
};

export default Footer;
