import React from "react";
import NavBarClient from "../client/navbarC.jsx";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function NavBarServer() {
  return (
    <NavBarClient>
      <div className="flex justify-between items-center h-full w-full xl:px-4 2xl:px-16">
        <Link href="/">
          <div className="relative w-40 h-40 md:w-56 md:h-48 lg:w-72 lg:h-64">
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="hidden sm:flex items-center px-2">
          <ul className="flex items-center">
            <Link href="/services">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                Services
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                Contact
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 hover:border-b text-xl text-white lg:text-2xl">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </NavBarClient>
  );
}
