import React from "react";
import "/src/app/globals.css";
import Image from "next/image";
import HeroSubscribe from "../client/heroSubscribe";
export default function Hero() {
  return (
    <div className="w-full min-h-screen stacked-grid md:min-h-screen md:grid-cols-[40%_60%]">
      {/* First Column */}
      <div
        className="bg-black flex flex-col justify-center tracking-tight px-10 sm:bg-pink-500"
        style={{ "--font-weight": "600" }}
      >
        <div>
          <h1 className="text-6xl league-spartan mx-auto ">
            <span className="teletaGreen">Website,</span> <br />
            <span className="teletaYellow">Design,</span> <br />
            <span className="text-white">Kelowna.</span>
          </h1>
        </div>
        {/*The input */}
        <div className="relative top-5">
          <HeroSubscribe />
          <p className="relative top-2 teletaGreen text-center text-xs">by clicking subscribe you agree to the terms of service</p>
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
