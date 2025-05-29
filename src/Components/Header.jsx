import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react icons
import tasty from "../assets/tasty.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle = ({ isActive }) =>
    `block font-medium px-4 py-2 rounded-md transition
   hover:bg-white hover:text-[#ff6347]
   ${isActive ? "text-blue-500" : "text-white"}`;

  // const navLinkStyle = ({ isActive }) =>
  //   `block px-4 py-2 font-medium rounded-full transition
  //  ${
  //    isActive
  //      ? "bg-white text-[#ff6347] shadow-md"
  //      : "text-white hover:bg-white hover:text-[#ff6347]"
  //  }`;

  return (
    <header className="bg-[#ff6347] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={tasty}
            alt="Tasty Foods"
            className="w-12 h-12 object-contain "
          />
          <span className="text-white text-2xl font-bold tracking-wide">
            Tasty Foods
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/foods" className={navLinkStyle}>
            Foods
          </NavLink>
          <NavLink to="/recipes" className={navLinkStyle}>
            Recipes
          </NavLink>
          <NavLink to="/explore" className={navLinkStyle}>
            Explore
          </NavLink>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#ff6347] space-y-2">
          <NavLink to="/" onClick={toggleMenu} className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/foods" onClick={toggleMenu} className={navLinkStyle}>
            Foods
          </NavLink>
          <NavLink to="/recipes" onClick={toggleMenu} className={navLinkStyle}>
            Recipes
          </NavLink>
          <NavLink to="/explore" onClick={toggleMenu} className={navLinkStyle}>
            Explore
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
