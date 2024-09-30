import React from "react";
import Image from "next/image";
import "/src/app/globals.css";

import TeletaWorkSpace from "/public/teletaWorkSpace.jpg";

export default function Form() {
  return (
    <div className="w-full min-h-full bg-white flex justify-center py-10">
      <form className="bg-b w-full p-3 sm:px-10 md:px-16 lg:px-28 xl:px-32 2xl:px-56">
        <div className="grid sm:grid-cols-[65%_35%] ">
          <div className="bg-black p-6 rounded-3xl sm:rounded-tr-none sm:rounded-br-none md:h-[52vh] md:px-12">
            <div className="flex justify-center mb-2">
              <h2
                className="text-white text-5xl lg:text-6xl league-spartan"
                style={{ "--font-weight": "600" }}
              >
                Coming Soon.
              </h2>
            </div>
            <label
              className="block teletaGreen ml-5 text-lg league-spartan"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border border-gray-300 p-2 px-5 w-full rounded-full"
              required
            />

            <label
              className="block teletaYellow ml-5 text-lg league-spartan"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 px-5 w-full rounded-full"
              required
            />

            <div className="relative">
              <label
                className="block text-white ml-4 text-lg league-spartan"
                htmlFor="notes"
              >
                Message
              </label>
              <textarea
                id="notes"
                maxLength="300"
                className="border border-gray-300 px-4 p-2 w-full rounded-3xl resize-none pr-20 montserrat"
                rows="4"
                placeholder="Enter your notes here (max 300 characters)"
              />
              <button
                type="button"
                className="absolute bottom-1.5 right-0 h-10 px-4 text-sm montserrat text-black teletaYellowBg rounded-3xl rounded-tr-none rounded-bl-none"
                style={{ "--font-weight": "700" }}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="hidden sm:block rounded-tr-3xl rounded-br-3xl h-full w-full">
            <div className="relative top-0 right-0 w-full h-full">
              <Image
                src={TeletaWorkSpace}
                alt="Teleta Development Office"
                className="object-cover rounded-tr-3xl rounded-br-3xl"
                unoptimized={true} //This saved my ass!!!!!!!!!!!!!!!!!!!!
                loading="lazy"
                fill
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}