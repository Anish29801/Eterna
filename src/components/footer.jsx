import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import React icons

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-red)] text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold font-inter">Eterna</h3>
            <p className="text-xs mt-1">
            The Museum of Time and Culture &copy;
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-lg hover:text-green-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-lg hover:text-green-200 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-lg hover:text-green-200 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-lg hover:text-green-200 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Eterna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
