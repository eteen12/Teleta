import React from "react";
import "/src/app/globals.css";
import Image from "next/image";

import HeroSubscribe from "../client/heroSubscribe";
export default function Hero() {
  return (
    <div className="w-full min-h-screen grid stacked-grid sm:grid-cols-[45%_55%] md:grid-cols-[40%_60%] xl:grid-cols-[35%_75%]">
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
            by clicking subscribe you agree to the terms of service
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex items-center justify-center h-full">
        <div className="relative w-full h-full z-0">
          <Image
            src="/mockup.png"
            alt="Teleta Development logo linking to homepage"
            className="object-cover"
            priority
            fill
          />
        </div>
      </div>
    </div>
  );
}
