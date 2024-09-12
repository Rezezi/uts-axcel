"use client"; // Komponen ini harus menjadi Client Component

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Pastikan react-icons sudah terinstall

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className={`text-${scrolled ? 'blue-500' : 'white'} text-3xl font-bold transition-all duration-300`} style={{ transform: 'translateY(2px)' }}>
          team.
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-white">
          <li><a href="#" className="hover:text-gray-300 transition">Product</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Support</a></li>
          <li><a href="#" className="hover:text-gray-300 transition">Log In</a></li>
          <li>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition">
              Get Access
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-6 transition-all duration-300">
            <li><a href="#" className="text-white text-lg hover:text-gray-300 transition">Product</a></li>
            <li><a href="#" className="text-white text-lg hover:text-gray-300 transition">Blog</a></li>
            <li><a href="#" className="text-white text-lg hover:text-gray-300 transition">Support</a></li>
            <li><a href="#" className="text-white text-lg hover:text-gray-300 transition">Log In</a></li>
            <li>
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition">
                Get Access
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
