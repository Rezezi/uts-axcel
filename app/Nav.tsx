"use client";

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Add shadow and background on scroll
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  // Listen to scroll events and dark mode changes
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand logo */}
        <div className="text-white text-3xl font-bold">
          <span className="text-blue-500">team.</span>
        </div>

        {/* Dark Mode toggle */}
        <div className="flex items-center space-x-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition duration-300">
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-transform duration-300 ${
                  darkMode ? 'translate-x-7' : ''
                }`}
              >
                {darkMode ? (
                  <div className="text-white flex justify-center items-center h-full w-full text-sm">🌙</div>
                ) : (
                  <div className="text-yellow-400 flex justify-center items-center h-full w-full text-sm">☀️</div>
                )}
              </div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </label>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className={`hidden lg:flex space-x-8 items-center ${darkMode ? 'text-blue-400' : 'text-white'} transition-all duration-300`}>
          <li>
            <a href="#" className="relative hover:text-blue-400 transition duration-300">
              Product
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:text-blue-400 transition duration-300">
              Blog
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:text-blue-400 transition duration-300">
              Support
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:text-blue-400 transition duration-300">
              Log In
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition duration-300">
              Get Access
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center space-y-6 py-6 transition-all duration-300 transform translate-y-0 opacity-100">
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400 transition">Product</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400 transition">Blog</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400 transition">Support</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400 transition">Log In</a>
          </li>
          <li>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
              Get Access
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
