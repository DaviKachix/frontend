"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Identity() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative px-6 md:px-20 py-24 bg-gradient-to-br from-blue-600 to-lime-400 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-blue-600 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-lime-400 opacity-30 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto text-center">

        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* label */}
          <p className="text-sm uppercase tracking-wide text-lime-400 mb-4">
            Identity & Purpose
          </p>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            You Are Called for More
          </h2>

          {/* description */}
          <p className="text-black font-semibold leading-relaxed text-[15.5px] max-w-2xl mx-auto">
            Being a pastor’s kid is not by chance. It is a unique calling shaped by
            faith, responsibility, and purpose. Within PAKIA, you are given a space
            to understand your identity, grow spiritually, and walk confidently in
            your role within ministry.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/register"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-lime-400 to-blue-600 text-white font-semibold shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              Join PAKIA
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}