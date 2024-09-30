"use client";
import React from "react";
import NavBarServer from "../server/navBarServer.jsx";
import { navHandler } from "../../hooks/navHandler.js";
import "/src/app/globals.css";

export default function NavBarClient() {
  const { scrollingDown, shadow, background } = navHandler();
  return (
    <nav
      className={`flex justify-between items-center fixed w-full h-16 z-50 transition-all duration-700 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}style={{ background, boxShadow: shadow }}
    >
   <NavBarServer />
    </nav>
  );
}
