"use client";
import { useState, React } from "react";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { useDisableScroll } from "../../hooks/useDisableScroll";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import LogoRed from "/public/logoRed.png";

export default function NavBarClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollingDown, background, shadow } = useScrollEffect();

  useDisableScroll(menuOpen);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-24 lg:h-24 transition-transform duration-700 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        backgroundColor: background,
        transition: "transform 0.5s ease-out, background-color 0.5s ease-out",
        boxShadow: shadow,
      }}
    >
      <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24 px-3">
        <AiOutlineMenu size={25} className="text-white" />
      </div>

      {/* Mobile Design */}
      <div
        className={`fixed top-0 right-0 w-[100%] sm:hidden h-screen bg-[#080808] p-5 transition-opacity ease-in duration-500 ${
          menuOpen ? "opacity-100 visible z-50" : "opacity-0 invisible -z-50"
        }`}
        style={{
          position: "fixed",
          transition:
            "opacity 0.5s ease-out, visibility 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        <div className="absolute top-0 left-0 -mt-8 w-40 h-40">
          <Image src={LogoRed} alt="logo" layout="fill" objectFit="contain" />
        </div>
        <div className="flex w-full items-center justify-end closeBtn transition-opacity pr-4 pt-5">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={29} className="text-white close" />
          </div>
        </div>
        <div className="flex-col pt-20">
          <ul className="w-full">
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="pt-5 pb-4 cursor-pointer text-white text-lg border-b border-white"
              >
                Services
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="pt-5 pb-4 cursor-pointer text-white text-lg border-b border-white"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="pt-5 pb-4 cursor-pointer text-white text-lg border-b border-white"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-28">
          <div className="bottom-0 left-0 right-0 flex items-center text-nowrap w-full">
            <a href="tel:+1234567890" className="w-full pt-2">
              <button className="bg-red-700 py-2 text-white text-xl w-full button">
                Call Now!
              </button>
            </a>
          </div>
          <div className="flex items-center space-x-4 justify-center mt-4">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer text-white"
            />
            <AiOutlineFacebook
              size={30}
              className="cursor-pointer text-white"
            />
            <AiOutlineTwitter size={30} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
