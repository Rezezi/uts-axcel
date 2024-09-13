import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Company Info */}
          <div className="hover-card">
            <h2 className="text-3xl font-bold text-blue-500 rotating-image">team.</h2>
            <p className="text-gray-400 mt-4">
              Collaboration platform for modern teams.
            </p>
            <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Team Inc. All rights reserved.</p>
          </div>

          {/* Features */}
          <div className="hover-card">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-gray-200" href="#">Screen Sharing</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">iOS & Android Apps</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">File Sharing</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">User Management</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="hover-card">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-gray-200" href="#">Product</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">Blog</a></li>
              <li><a className="text-gray-400 hover:text-gray-200" href="#">Support</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="hover-card">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a className="hover:text-gray-200" href="mailto:axcelrezezi@gmail.com">axcelrezezi@gmail.com</a></li>
              <li>Phone: <a className="hover:text-gray-200" href="tel:087878254877">087878254877</a></li>
              <li>Address: 1010 Sunset Blvd, Palo Alto, California</li>
            </ul>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold mb-6">Stay up to date</h3>
          <div className="flex justify-center">
            <form className="relative flex">
              <input
                className="w-full max-w-md rounded-full border-gray-700 bg-gray-800 p-4 pr-20 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
