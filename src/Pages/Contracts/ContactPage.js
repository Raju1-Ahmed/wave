import React from "react";

const ContactPage = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-white text-gray-800">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Contact Ocean Weave</h1>
        <p className="text-gray-600 text-lg">
          We’re always ready to help — from Bangladesh to our global partners.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Send Us a Message</h2>
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
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              🇧🇩 Bangladesh Office
            </h3>
            <p>House #12, Road #4, Uttara, Dhaka-1230</p>
            <p>📞 +880 1234 567890</p>
            <p>📧 info@oceanweave.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              🌍 International Office
            </h3>
            <p>123 Textile Street, Barcelona, Spain</p>
            <p>📞 +34 912 345 678</p>
            <p>📧 europe@oceanweave.com</p>
          </div>

          {/* Socials */}
          {/* <div className="flex space-x-4 pt-4">
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
