import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    {
      title: "Production",
      route: "/productionPage",
      dropdown: [
        { title: "Menswear", route: "/productionPage#menswear" },
        { title: "Womenswear", route: "/productionPage#womenswear" },
        { title: "Kidswear", route: "/kids" },
      ],
    },
    { title: "Contact Us", route: "/contractPage" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src="https://i.ibb.co.com/FqggTmnh/oceanweavlogo.png"
              alt="Ocean Weave Logo"
              className="h-10 w-auto"
            />
          </a>
          <span className="text-xl font-bold text-blue-800 tracking-wide">
            <a href="/">Ocean Weave</a>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-base font-medium tracking-wide">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              <a
                href={item.route}
                className="relative group transition duration-300 hover:text-sky-600"
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </a>

              {/* Dropdown */}
              {item.dropdown && dropdownOpen && (
                <div className="absolute top-5 left-0 w-56 bg-white border border-gray-200 shadow-xl rounded-lg py-2 z-50 transition-all">
                  {item.dropdown.map((sub, index) => (
                    <a
                      key={index}
                      href={sub.route}
                      className="flex justify-between items-center px-4 py-2 hover:bg-sky-100 hover:text-sky-700 transition-all duration-200 group"
                    >
                      <span>{sub.title}</span>
                      <FaAngleRight className="text-xs opacity-50 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                </div>
              )}
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="px-6 pb-4 space-y-2 text-gray-700 text-base font-medium tracking-wide">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.route}
                  className="block py-2 border-b border-gray-200 hover:text-sky-600 transition"
                >
                  {item.title}
                </a>
                {item.dropdown && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((sub, j) => (
                      <li key={j}>
                        <a
                          href={sub.route}
                          className="block text-sm text-gray-600 hover:text-sky-600 transition"
                        >
                          ↳ {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
