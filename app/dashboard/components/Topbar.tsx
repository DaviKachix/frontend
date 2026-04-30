"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const menu = [
    { name: "Dashboard", icon: "fa-gauge", path: "/dashboard" },
    { name: "Profile", icon: "fa-user", path: "/dashboard/profile/view" },
    { name: "Members", icon: "fa-users", path: "/members" },
    { name: "Programs", icon: "fa-calendar", path: "/programs" },
    { name: "Settings", icon: "fa-gear", path: "/settings" },
  ];

  const go = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return (
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

          <Link href="/" className="flex items-center gap-3">
            <Image src="/pk-logo.jpg" alt="PAKIA" width={44} height={44} className="rounded-xl" />
            <span className="font-bold text-xl">PAKIA</span>
          </Link>

          <div className="flex gap-3">
            <Link href="/login" className="px-4 py-2 border rounded-xl">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-xl">
              Register
            </Link>
          </div>

        </div>
      </header>
    );
  }

  return (
    <>
      {/* TOPBAR */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">

        <div className="flex items-center justify-between px-4 md:px-6 py-4">

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>

          {/* TITLE */}
          <h1 className="text-base md:text-lg font-semibold text-gray-800">
            Dashboard
          </h1>

          {/* USER */}
          <div className="flex items-center gap-3">

            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-800">
                {user.full_name}
              </p>
              <p className="text-xs text-gray-500">Member</p>
            </div>

            <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {user.full_name?.charAt(0)}
            </div>

          </div>

        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR INSIDE TOPBAR COMPONENT */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-white border-r
          transform transition-transform duration-300
          md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
          flex flex-col
        `}
      >

        {/* HEADER */}
        <div className="p-6 border-b">

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              P
            </div>

            <div>
              <p className="font-bold">PAKIA</p>
              <p className="text-xs text-gray-500">{user.full_name}</p>
            </div>
          </div>

        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-1">

          {menu.map((item, i) => {
            const active = pathname === item.path;

            return (
              <div
                key={i}
                onClick={() => go(item.path)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                  transition
                  ${active ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-100"}
                `}
              >
                <i className={`fa-solid ${item.icon}`} />
                <span>{item.name}</span>
              </div>
            );
          })}

        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t">

          <button
            onClick={logout}
            className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}