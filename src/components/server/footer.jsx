import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Get plumbing updates on our services, and special deals, delivered
              to your inbox!
            </h3>
            <form className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-4 py-2  bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ">
                Subscribe
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="/collections/all" className="hover:underline">
                  Shop All
                </a>
              </li>
              <li>
                <a href="/pages/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs/community" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vibes
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/pages/shipping-returns"
                  className="hover:text-red-700"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/pages/help" className="hover:text-red-700">
                  Help & FAQ
                </a>
              </li>
              <li>
                <a
                  href="/pages/terms-conditions"
                  className="hover:text-red-700"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/pages/privacy-policy" className="hover:text-red-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/pages/contact" className="hover:text-red-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white mt-8 pt-4 text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()}
          <a
            href="https://www.teletadevelopment.com"
            className="hover:text-red-700 ml-1"
          >
            Teleta Development
          </a>
        </p>
      </div>
    </footer>
  );
}
