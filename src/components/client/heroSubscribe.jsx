"use client";
import React, { useState } from "react";
import "/src/app/globals.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = { email };

    try {
      const response = await fetch("/api/users/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const newSubscriber = await response.json();
      setSuccess("Subscribed successfully");
      setError(null);
    } catch (error) {
      setError("Failed to subscribe");
      setSuccess(null);
     
    }
    setEmail("");
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  };
  return (
    <form
      id="subscribe-form"
      name="subscribe"
      aria-label="Email Subscription Form"
      className="relative w-full bg-transparent rounded-full shadow-lg "
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="email"
          id="email-spot"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className="w-full h-10 pl-4 text-sm font-bold border-0 rounded-full text-black montserrat focus:outline-none focus:ring-2 focus:ring-green-600 pr-24 lg:pr-36"
          style={{ "--font-weight": "600" }}
          aria-label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`absolute right-0 top-0 h-full text-sm montserrat text-black teletaYellowBg rounded-full rounded-bl-none custom-transition hover:rounded-full ${
            isActive ? "w-full" : "w-auto"
          }`}
          style={{ "--font-weight": "700" }}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
