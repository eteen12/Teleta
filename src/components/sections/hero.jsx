import React from "react";
import Image from "next/image";
import Link from "next/link";

import Mockup from "/public/mockup.jpeg";

import "/src/app/globals.css";

import HeroSubscribe from "../client/heroSubscribe";
export default function Hero() {
  return (
    <div className="w-full min-h-screen grid stacked-grid sm:grid-cols-[45%_55%] md:grid-cols-[40%_60%] xl:grid-cols-[35%_75%] pb-28 sm:pb-0">
      {/* First Column */}
      <div
        className="bg-black flex flex-col justify-center tracking-tight px-10 sm:px-5 "
        style={{ "--font-weight": "600" }}
      >
        <div>
          <h1 className="text-6xl league-spartan mx-auto text-center  md:text-7xl lg:text-8xl">
            <span className="teletaGreen">Website,</span> <br />
            <span className="teletaYellow">Design,</span> <br />
            <span className="text-white">Kelowna.</span>
          </h1>
        </div>
        {/*The input */}
        <div className="relative top-5 w-64 md:w-72 lg:w-96">
          <HeroSubscribe />
          <p className="relative top-2 teletaGreen text-center text-xs">
            By clicking subscribe, you agree to my{" "}
            <Link href="/policies">
              <span className="text-white hover:underline">
                terms and policies
              </span>
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center justify-center h-full w-full bg-white relative">
        {/* Image Container */}
        <div className="relative max-w-[200px] max-h-[200px] sm:max-h-[500px] sm:max-w-[350px] lg:max-h-[800px] lg:max-w-[500px]">
          <Image
            src={Mockup}
            alt="Teleta Development logo linking to homepage"
            className="object-contain z-0"
            priority
          />
        </div>
        {/* Bottom Bar */}
        <div className="hidden sm:flex bg-black w-full h-16 z-50 absolute bottom-0"></div>
      </div>
    </div>
  );
}
