"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/pk-logo.jpg"
              alt="PAKIA"
              width={44}
              height={44}
              className="rounded-xl shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              PAKIA
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/dashboard" className="hover:text-blue-600 transition">
              Dashboard
            </Link>

            <Link href="/community" className="hover:text-blue-600 transition">
              Community
            </Link>

            {!user ? (
              <div className="flex items-center gap-3">

                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:shadow-md transition"
                >
                  Get Started
                </Link>

              </div>
            ) : (
              <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm font-semibold">
                {user.full_name}
              </div>
            )}

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-bars text-lg text-gray-800"></i>
          </button>

        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* LEFT DRAWER */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl
        transform transition-transform duration-300 ease-out md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
        flex flex-col`}
      >

        {/* HEADER */}
        <div className="p-6 border-b border-gray-100">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                P
              </div>

              <div>
                <p className="font-semibold text-gray-900">PAKIA</p>
                {user && (
                  <p className="text-xs text-gray-500">{user.full_name}</p>
                )}
              </div>

            </div>

            <button onClick={() => setOpen(false)}>
              <i className="fa-solid fa-xmark text-lg text-gray-600"></i>
            </button>
          </div>

        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 px-4 py-6 space-y-2">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-house text-blue-600"></i>
            Home
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-gauge text-blue-600"></i>
            Dashboard
          </Link>

          <Link
            href="/community"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-users text-blue-600"></i>
            Community
          </Link>

        </nav>

        {/* FOOTER */}
        <div className="p-5 border-t border-gray-100">

          {!user ? (
            <div className="space-y-3">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block text-center py-3 rounded-xl border border-gray-200 hover:border-blue-500"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="block text-center py-3 rounded-xl bg-blue-600 text-white shadow-sm"
              >
                Get Started
              </Link>

            </div>
          ) : (
            <div className="text-sm text-gray-600">
              Signed in as{" "}
              <span className="font-semibold text-gray-900">
                {user.full_name}
              </span>
            </div>
          )}

        </div>

      </aside>
    </>
  );
}