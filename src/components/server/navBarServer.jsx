import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavBarServer() {
  return (
    <div className="flex justify-between items-center fixed w-full">
      {" "}
      <Link href="/">
        <div className="relative w-40 h-40 right-4 md:w-48 md:h-48 md:right-6 lg:w-60 lg:h-60 lg:right-7 xl:w-72 xl:h-72 xl:right-12 flex ">
          <Image
            src="/teletaLogo.svg"
            alt="Teleta Development logo linking to homepage"
            className="object-contain"
            priority
            fill
          />
        </div>
      </Link>
      <div>
        <ul>
          <li className="pr-5">
            <Link href="/">
              <button
                className="teletaYellowBg text-black text-sm py-1 px-2.5 md:text-base lg:text-xl lg:py-2 lg:px-4 xl:text-2xl rounded-full tracking-tight league-spartan"
                aria-label="Contact Teleta Development"
                style={{ "--font-weight": "800" }}
              >
                Contact
              </button>
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}