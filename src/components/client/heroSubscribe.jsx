"use client";
import React, { useState } from "react";
import "/src/app/globals.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Something went wrong");
      }

      await response.json();
      setSuccess("Thanks for subscribing!");
      setError("");
      setIsActive(true);
    } catch (error) {
      setError(`Failed to subscribe: ${error.message}`);
      setSuccess("");
      setIsActive(false);
    }
    setEmail("");
    setLoading(false);

    setTimeout(() => {
      setSuccess(null);
      setError(null);
      setIsActive(false);
    }, 2000);
  };
  return (
    <form
      id="subscribe-form"
      name="subscribe"
      aria-label="Email Subscription Form"
      className="relative w-full bg-transparent rounded-full shadow-lg "
      onSubmit={handleSubmit}
    >
      <div className="relative">
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
          disabled={loading}
          className={`absolute right-0 top-0 h-full text-sm montserrat text-black teletaYellowBg transition-all duration-700 ${
            isActive
              ? "w-full rounded-full"
              : "w-[35%] rounded-full  rounded-bl-none"
          }`}
          style={{ "--font-weight": "700" }}
        >
          {isActive ? "Thanks!" : "Subscribe"}
        </button>
      </div>
      <div className="relative h-2" aria-live="polite">
        {error && (
          <p className="absolute inset-0 text-red-500 text-xs text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="absolute inset-0 teletaGreen text-xs text-center">
            {success}
          </p>
        )}
      </div>
    </form>
  );
}
