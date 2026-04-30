"use client";

import { useEffect, useState } from "react";

export default function CoreAreas() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const items = [
    { title: "Spiritual Support", icon: "fa-cross" },
    { title: "Programs & Retreats", icon: "fa-calendar" },
    { title: "Parent Resources", icon: "fa-users" },
    { title: "Networking", icon: "fa-network-wired" },
    { title: "Mission Engagement", icon: "fa-globe" },
    { title: "Restoration Ministry", icon: "fa-heart" },
  ];

  return (
    <section className="relative py-28 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/african-children.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto text-center text-white">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wide text-lime-400 mb-3">
            What We Focus On
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            Core Ministry Areas
          </h2>

          <p className="max-w-2xl mx-auto text-white/80">
            Focused initiatives that strengthen identity, build community, 
            and empower pastors’ kids to grow and serve with purpose.
          </p>
        </div>

        {/* GRID */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-blue-600 text-white mb-5 transition group-hover:scale-110">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-white/80">
                Strengthening this area through intentional programs,
                mentorship, and community engagement.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}