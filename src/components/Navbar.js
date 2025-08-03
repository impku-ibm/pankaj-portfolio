import React, { useState, useEffect, forwardRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import profilePic from '../assets/images/profile.jpg';

const Navbar = forwardRef((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <nav
      ref={ref} // <-- attach ref here
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl px-6 rounded-full backdrop-blur-xl bg-white/70 border border-white/30 transition-shadow duration-500 ${
        isScrolled
          ? "shadow-2xl border-white/50 bg-white/90"
          : "shadow-md"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between py-3">
        {/* Profile Image + Name */}
        <button
          onClick={() => scrollToSection("header")}
          className="flex items-center gap-4 cursor-pointer rounded-full px-4 py-2 bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Go to top / header"
        >
          <img
            src={profilePic}
            alt="Pankaj Kumar"
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-400 shadow-md transition-transform duration-300 hover:scale-110"
            draggable={false}
          />
          <span className="font-semibold text-lg sm:text-xl text-slate-900 select-none">
            Pankaj Kumar
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative capitalize text-sm font-semibold text-slate-900 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              tabIndex={0}
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        } bg-white/90 backdrop-blur-md rounded-xl shadow-lg`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="w-full text-left text-slate-900 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
});

export default Navbar;
