"use client";

import { useEffect, useState } from "react";
import Topbar from "@/app/dashboard/components/Topbar";
import Navbar from "@/app/components/Navbar";

export default function Loading() {
  const [user, setUser] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");

    if (u) {
      setUser(JSON.parse(u));
    }

    setChecked(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER AREA */}
      {checked && (
        <div className="w-full">
          {user ? (
            <Topbar user={user} toggle={() => {}} />
          ) : (
            <Navbar />
          )}
        </div>
      )}

      {/* CENTER LOADER */}
      <div className="flex flex-1 items-center justify-center">

        <div className="flex flex-col items-center gap-5">

          {/* Spinner */}
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 border-r-lime-400 border-b-transparent border-l-transparent animate-spin"></div>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-gray-800 font-semibold tracking-wide">
              PAKIA
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}