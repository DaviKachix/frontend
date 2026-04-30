"use client";

import React from "react";
import Image from "next/image";

/* =========================
   MAIN SECTION WRAPPER
========================= */
export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative w-full py-16 md:py-20 px-6 md:px-12 overflow-hidden bg-white ${className}`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white to-lime-400/10" />

        {/* Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src="/pk-logo.png"
            alt="background logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

      </div>

      {/* Content Layer */}
      <div className="relative max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

/* =========================
   SECTION HEADER
========================= */
export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 text-center max-w-2xl mx-auto">
      
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}

      {/* Accent line */}
      <div className="mt-5 w-20 h-[3px] mx-auto rounded-full bg-gradient-to-r from-lime-400 via-blue-600 to-lime-400" />
    </div>
  );
}

/* =========================
   GRID LAYOUT
========================= */
export function SectionGrid({
  children,
  cols = 3,
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const grid =
    cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : cols === 4
      ? "grid-cols-1 md:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return <div className={`grid gap-6 md:gap-8 ${grid}`}>{children}</div>;
}

/* =========================
   CARD COMPONENT
========================= */
export function SectionCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="group relative border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

      {/* subtle glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/5 to-lime-400/5" />

      <div className="relative">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* animated underline */}
        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-lime-400 to-blue-600 group-hover:w-full transition-all duration-300" />
      </div>

    </div>
  );
}