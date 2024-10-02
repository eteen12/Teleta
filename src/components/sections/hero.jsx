import React from "react";
import "/src/app/globals.css";
import Image from "next/image";
import Link from "next/link";

import Mockup from "/public/mockup.jpeg";

import HeroSubscribe from "../client/heroSubscribe";
export default function Hero() {
  return (
    <div className="w-full min-h-screen grid stacked-grid sm:grid-cols-[45%_55%] md:grid-cols-[40%_60%] xl:grid-cols-[35%_75%] ">
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
            <Link href="/terms-and-policies">
              <p className="text-blue-500 hover:underline">
                terms and policies
              </p>
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center justify-center h-full w-full bg-white">
        <div className="relative w-full h-full">
          <Image
            src={Mockup}
            alt="Teleta Development logo linking to homepage"
            className="object-contain z-0"
            priority
            fill
          />
        </div>
        <div className="bg-black w-full h-16"></div>
      </div>
    </div>
  );
}
