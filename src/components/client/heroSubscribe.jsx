import React from "react";
import "/src/app/globals.css";

export default function SubscribeForm() {
  return (
    <form
      id="subscribe-form"      
      name="subscribe"         
      aria-label="Email Subscription Form" 
      className="relative w-full bg-transparent rounded-full shadow-lg "
    >
      <div className="">
        <input
          type="email"
          id="email-spot"         
          name="email"            
          autoComplete="email"     
          placeholder="Email Address"
          required
          className="w-full h-10 pl-4 pr-32 text-sm font-bold border-0 rounded-full montserrat focus:outline-none focus:ring-2 focus:ring-green-600 lg:pr-48 xl:pr-72"
          aria-label="Email Address" 
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full text-sm montserrat text-black teletaYellowBg rounded-full rounded-bl-none custom-transition hover:rounded-full "
          style={{ "--font-weight": "700" }}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
