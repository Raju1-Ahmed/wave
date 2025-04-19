import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const menuItems = ["Home", "About Us", "Products", "ContactPage"];
  const menuItems = [{title: "Home", route: "/"},{title: "About Us", route: "/about"},{title: "Production", route: "/productionPage"},{title: "Contact Us", route: "/contractPage"}]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/"><img src="https://i.ibb.co.com/FqggTmnh/oceanweavlogo.png" alt="Ocean Weave Logo" className="h-10 w-auto" /></a>
          <span className="text-xl font-bold text-blue-800 tracking-wide">
            <a href="/">Ocean Weave</a>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-base font-medium tracking-wide">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`${item.route}`}
                className="relative group transition duration-300 hover:text-sky-600"
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-blue-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="px-6 pb-4 space-y-2 text-gray-700 text-base font-medium tracking-wide">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                href={`${item.route}`}
                className="block py-2 border-b border-gray-200 hover:text-sky-600 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
