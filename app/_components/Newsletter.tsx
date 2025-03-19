// File: components/Newsletter.jsx
"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle the submission
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-6 max-w-md mx-auto">
        Be the first to know about new collections, exclusive offers, and
        jewelry care tips.
      </p>

      {submitted ? (
        <div className="max-w-md mx-auto p-4 bg-white bg-opacity-10 rounded">
          <p className="text-white">
            Thank you for subscribing! We&apos;ve sent a confirmation email.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded text-black"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
