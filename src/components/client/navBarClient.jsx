"use client";
import React from "react";
import { useNavHandler } from "../../hooks/useNavHandler";
import NavBarServer from "/src/components/server/navBarServer.jsx";

import "/src/app/globals.css";

export default function NavBarClient() {
  
  const { scrollingDown, shadow, background } = useNavHandler();
  return (
    <header
    className={`flex justify-between items-center fixed w-full h-16 z-50 transition-all duration-700 ${
      scrollingDown ? "-translate-y-full" : "translate-y-0"
    }`}
    style={{ background, boxShadow: shadow }}
  >
    
    <NavBarServer />
    
  </header>
  );
}
