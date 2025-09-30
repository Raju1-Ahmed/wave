import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
<<<<<<< HEAD
  FaMapMarkerAlt,
=======
>>>>>>> cc73c8b (first commit)
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-tr from-[#001F3F] to-[#004466] text-white px-6 py-10 mt-20"
    >
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
=======
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
>>>>>>> cc73c8b (first commit)
        {/* Logo & About */}
        <div>
          <img
            src="https://i.ibb.co.com/FqggTmnh/oceanweavlogo.png"
<<<<<<< HEAD
            alt="Ocean Wave Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-6">
            Ocean Wave is a modern buying house, sourcing high-quality garments
=======
            alt="Ocean Weave Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-6">
            Ocean Weave is a modern buying house, sourcing high-quality garments
>>>>>>> cc73c8b (first commit)
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

<<<<<<< HEAD
    {/* Bangladesh Office */}
<div>
  <h3 className="text-lg font-semibold mb-4">🇧🇩 Bangladesh Office</h3>
  <p className="font-bold text-base">Ocean Wave</p>
  <ul className="text-sm space-y-2 mt-2">
    <li className="flex items-start gap-2">
      <FaMapMarkerAlt className="mt-1 text-blue-300" />
      <span>
        Niyat Salimplaza, Bolivadra Bazar, <br />
        Ashulia, Savar, Dhaka-1345 <br />
        Bangladesh
      </span>
    </li> <p className="font-bold text-base">Kamrul Hasan</p>
    <li className="flex items-center gap-2">
      <FaPhone className="text-blue-300" /> 
      <a href="tel:+8801711123681" className="hover:underline">
        +88 0171-1123681
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-blue-300" /> 
      <a href="mailto:info@oceanwave.com.bd" className="hover:underline">
        sany@oceanwave.com.bd
      </a>
    </li>
  </ul>
</div>

{/* USA Office */}
<div>
  <h3 className="text-lg font-semibold mb-4">🇺🇸 USA Office</h3>
  <p className="font-bold text-base">Ocean Wave</p>
  <ul className="text-sm space-y-2 mt-2">
    <li className="flex items-start gap-2">
      <FaMapMarkerAlt className="mt-1 text-blue-300" />
      <span>
        9720 222nd St, Floor 01 <br />
        Queens Village, NY 11429 <br />
        USA
      </span>
    </li> <p className="font-bold text-base">Forhad Akbar</p>
    <li className="flex items-center gap-2">
      <FaPhone className="text-blue-300" /> 
      <a href="tel:+13479718236" className="hover:underline">
        +1 (347) 971-8236
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-blue-300" /> 
      <a href="mailto:f.akbar@oceanwave.com.bd" className="hover:underline">
        f.akbar@oceanwave.com.bd
      </a>
    </li>
  </ul>
</div>

{/* New Zealand Office */}
<div>
  <h3 className="text-lg font-semibold mb-4">🇳🇿 New Zealand Office</h3>
  <p className="font-bold text-base">Ocean Wave</p>
  <ul className="text-sm space-y-2 mt-2">
    <li className="flex items-start gap-2">
      <FaMapMarkerAlt className="mt-1 text-blue-300" />
      <span>
        Apartment 2G, Level-2 <br />
        107 Manners Street, Te Aro <br />
        Wellington 6011, New Zealand
      </span>
    </li>
      <p className="font-bold text-base">Jabinur Rahman</p>

    <li className="flex items-center gap-2">
      <FaPhone className="text-blue-300" /> 
      <a href="tel:+64284739693" className="hover:underline">
        +64 28 473 9693
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-blue-300" /> 
      <a href="mailto:newzealand@oceanwave.com" className="hover:underline">
        javin@oceanwave.com.bd
      </a>
    </li>
  </ul>
</div>

=======
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
>>>>>>> cc73c8b (first commit)
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-300 mt-10 pt-4 border-t border-gray-600">
<<<<<<< HEAD
        © {new Date().getFullYear()} Ocean Wave. All rights reserved.{" "}
        <a
          href="https://robiussanirazu.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition duration-300 underline ml-1"
        >
          robius.sany
        </a>
=======
        © {new Date().getFullYear()} Ocean Weave. All rights reserved.
>>>>>>> cc73c8b (first commit)
      </div>
    </motion.footer>
  );
};

export default Footer;
