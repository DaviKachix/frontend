"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/african-children.jpg",
  "/children-learning.jpg",
  "/youths-professional.jpg",
];

export default function Hero() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  // entrance animation
  useEffect(() => {
    setShow(true);
  }, []);

  // auto switch image
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="object-contain absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[index]})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div
          className={`text-white transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-wider text-lime-400 mb-3">
            Pastors’ Kids International Association
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Building a Stronger Future for Pastors’ Kids
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-xl">
            A modern digital platform designed to connect, support, and empower
            Pastors’ Kids through community, leadership development, and
            spiritual growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/register"
              className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-400 text-black font-semibold transition"
            >
              Get Started
            </a>

            <a
              href="/login"
              className="px-6 py-3 rounded-xl border border-white/40 hover:border-lime-400 hover:text-lime-400 transition"
            >
              Login
            </a>
          </div>
        </div>

        {/* HERO IMAGE (ALTERNATING VISUAL CARD) */}
        <div
          className={`hidden md:flex justify-center transition-all duration-700 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur">

            <img
              src={heroImages[index]}
              alt="Hero"
              className="w-full h-[400px] object-cover transition-all duration-700"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}