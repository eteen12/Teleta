import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

import SubscribeForm from "../client/heroSubscribe";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Newsletter Section */}
          <div>
            <h3
              className="text-2xl font-semibold mb-4 league-spartan"
              style={{ "--font-weight": "600" }}
            >
              Subscribe to the newsletter to receive an update on when we
              launch.
            </h3>
            <div className="relative right-1.5 overflow-visible">
              <SubscribeForm />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-8">
              <a
                href="https://www.facebook.com/TeletaDevelopment"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/teleta_development/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/teleta-development"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4 teletaYellow">Menu</h4>
            <ul className="space-y-2">
              <li>
                <p>Coming soon.....</p>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 teletaYellow">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/policies">Terms & Conditions</a>
              </li>
              <li>
                <a href="/policies">Privacy Policy</a>
              </li>
              <li>
                <a href="/#contact-form">Contact</a>
              </li>
              <li>
                <a
                  href="https://www.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_222039926.htm#fromView=search&page=1&position=13&uuid=411eadca-55ee-449b-ac92-fcedf7fb73fd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phone Image by originalmockup on Freepik
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-center items-center border-t border-white py-2">
        <p className="text-white">
          &copy; {new Date().getFullYear()}
          <a
            href="https://www.teletadevelopment.com"
            className="custom-hover-effect ml-1"
          >
            Teleta Development
          </a>
        </p>
      </div>
    </footer>
  );
}
