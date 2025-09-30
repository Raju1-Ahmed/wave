import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState({ bd: false, usa: false, nz: false });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
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
            className="zoom-animation"
          />
        </div>
      </>
    );
  }

  return (
    <section className="px-4 md:px-10 py-16 bg-white text-gray-800">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Contact Ocean Wave
        </h1>
        <p className="text-gray-600 text-lg">
          We’re always ready to help — from Bangladesh to our global partners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded"
              required
            ></textarea>
            <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Office Info */}
        <div className="space-y-8">
          {/* Bangladesh Office */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              🇧🇩 Bangladesh Office
            </h3>
            <p className="font-semibold">Ocean Wave</p>
            <p className="text-sm text-gray-700 leading-6 flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              Niyat Salimplaza, Bolivadra Bazar <br />
              Ashulia, Savar, Dhaka-1345
            </p>
            <p> <p className="font-semibold">Kamrul Hasan</p>
              📞{" "}
              <a
                href="tel:+8801711123681"
                className="text-blue-700 hover:underline"
              >
                +88 0171-1123681
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:info@oceanwave.com.bd"
                className="text-blue-700 hover:underline"
              >
                sany@oceanwave.com.bd
              </a>
            </p>
            <button
              onClick={() =>
                setShowMap((prev) => ({ ...prev, bd: !prev.bd }))
              }
              className="mt-2 text-sm text-blue-700 hover:underline"
            >
              {showMap.bd ? "Hide Map" : "View Map"}
            </button>
            {showMap.bd && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8151399470803!2d90.34598637458391!3d23.78969948732001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0db789abcdf%3A0xa1234567890abcd!2sAshulia%2C%20Savar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1692857490000!5m2!1sen!2sbd"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="mt-3 rounded"
              ></iframe>
            )}
          </div>

          {/* USA Office */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              🇺🇸 USA Office
            </h3>
            <p className="font-semibold">Ocean Wave</p>
            <p className="text-sm text-gray-700 leading-6 flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              9720 222nd St, Floor 01 <br />
              Queens Village, NY 11429
            </p>
             <p className="font-semibold">Forhad Akbar</p>
            <p>
              📞{" "}
              <a
                href="tel:+13479718236"
                className="text-blue-700 hover:underline"
              >
                +1 (347) 971-8236
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:f.akbar@oceanwave.com.bd"
                className="text-blue-700 hover:underline"
              >
                f.akbar@oceanwave.com.bd
              </a>
            </p>
            <button
              onClick={() =>
                setShowMap((prev) => ({ ...prev, usa: !prev.usa }))
              }
              className="mt-2 text-sm text-blue-700 hover:underline"
            >
              {showMap.usa ? "Hide Map" : "View Map"}
            </button>
            {showMap.usa && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.445629453324!2d-73.736256!3d40.717129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26133a7bd9999%3A0xf123456789abcd!2sQueens%20Village%2C%20NY!5e0!3m2!1sen!2sus!4v1692857600000!5m2!1sen!2sus"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="mt-3 rounded"
              ></iframe>
            )}
          </div>

          {/* New Zealand Office */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              🇳🇿 New Zealand Office
            </h3>
            <p className="font-semibold">Ocean Wave</p>
            <p className="text-sm text-gray-700 leading-6 flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              Apartment 2G, Level-2 <br />
              107 Manners Street, Te Aro <br />
              Wellington 6011
            </p>
            <p><p className="font-semibold">Jabinur Rahman</p>
              📞{" "}
              <a
                href="tel:+64284739693"
                className="text-blue-700 hover:underline"
              >
                +64 28 473 9693
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:newzealand@oceanwave.com"
                className="text-blue-700 hover:underline"
              >
                javin@oceanwave.com.bd
              </a>
            </p>
            <button
              onClick={() =>
                setShowMap((prev) => ({ ...prev, nz: !prev.nz }))
              }
              className="mt-2 text-sm text-blue-700 hover:underline"
            >
              {showMap.nz ? "Hide Map" : "View Map"}
            </button>
            {showMap.nz && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.085631453243!2d174.776236!3d-41.292381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38a3310abcd123%3A0x123456789abcd!2sTe%20Aro%2C%20Wellington!5e0!3m2!1sen!2snz!4v1692857700000!5m2!1sen!2snz"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="mt-3 rounded"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
