import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const linkClass =
    "no-underline text-[#f8f9fa] text-sm hover:text-yellow-300 hover:scale-120 transition-transform duration-300";

  const iconClass =
    "text-2xl mx-2 text-[#f8f9fa] hover:text-yellow-300 hover:scale-120 transition-transform duration-300";

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-600 text-white pt-8 px-6">
      {/* Top Grid */}
      <div className="grid grid-cols-2 gap-4 sm:max-w-7xl sm:mx-auto sm:flex sm:gap-8 sm:justify-between sm:text-left">
        {/* About Us */}
        <div className="max-sm:text-sm max-sm:max-w-40 sm:w-1/4">
          <h4 className="text-xl font-semibold mb-2">About Us</h4>
          <p className="text-sm text-gray-200">
            At Tasty Foods, we serve delightful meals and mouth-watering
            recipes. Stay connected to explore new dishes and exciting offers!
          </p>
        </div>

        {/* Quick Links */}
        <div className="justify-self-start flex flex-col items-center sm:w-1/4 max-sm:min-w-full">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2 font-semibold sm:space-y-1">
            <li className={linkClass}>
              <a href="/">Home</a>
            </li>
            <li className={linkClass}>
              <a href="/foods">Foods</a>
            </li>
            <li className={linkClass}>
              <a href="/recipes">Recipes</a>
            </li>
            <li className={linkClass}>
              <a href="/explore">Explore</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="sm:w-1/4">
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <p className="text-sm text-gray-200">
            Email:{" "}
            <a
              href="mailto:info@tastyfoods.com"
              className="hover:text-yellow-300">
              info@tastyfoods.com
            </a>
            <br />
            Phone: <span className="text-gray-300">+91 98765 43210</span>
          </p>
        </div>

        {/* Social Media */}
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center md:w-1/4">
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              className={iconClass}>
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className={iconClass}>
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" className={iconClass}>
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className={iconClass}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="py-4 flex justify-center items-center border-t border-white/20 mt-6 sm:pt-4 sm:text-center sm:text-xs text-gray-300">
        &copy; {new Date().getFullYear()} Tasty Foods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
