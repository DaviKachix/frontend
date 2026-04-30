"use client";

import { useEffect, useState } from "react";

export default function CTA() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const slides = [
    {
      title: "Are you part of PAKIA?",
      text: "Join a growing community of pastors’ kids committed to purpose, connection, and ministry.",
    },
    {
      title: "Jeremiah 29:11",
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
    },
    {
      title: "Step Into Purpose",
      text: "Be part of a movement that nurtures identity, faith, and spiritual growth.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 200); // quick reset for slide effect
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lime-400 to-blue-600 text-white py-24 px-6 md:px-20">

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-center">

        {/* QUOTE BOX */}
        <div
          className={`transition-all duration-700 ease-out ${
            animate
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >

          {/* QUOTE ICON */}
          <div className="text-5xl text-white/30 mb-4">“</div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {slides[index].title}
          </h2>

          {/* TEXT */}
          <p className="text-white/85 text-lg leading-relaxed">
            {slides[index].text}
          </p>

          {/* CLOSE QUOTE */}
          <div className="text-5xl text-white/30 mt-4">”</div>

        </div>

        {/* CTA BUTTON */}
        <a
          href="/register"
          className="inline-block mt-10 px-8 py-3 rounded-xl bg-white text-lime-400 font-semibold hover:scale-105 transition"
        >
          Create Account
        </a>

      </div>

    </section>
  );
}