"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({ open, setOpen }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const menu = [
    { name: "Dashboard", icon: "fa-gauge", path: "/dashboard" },
    { name: "Profile", icon: "fa-user", path: "/profile/view" },
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

  if (!user) return null;

  return (
    <>
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

  <aside
  className={`
    fixed md:static top-0 left-0 z-50 h-full w-72 bg-white border-r
    flex flex-col

    /* MOBILE ONLY */
    transform transition-transform duration-300 md:transform-none

    ${open ? "translate-x-0" : "-translate-x-full"}

    /* DESKTOP OVERRIDE (IMPORTANT FIX) */
    md:translate-x-0
  `}
>

        {/* HEADER */}
        <div className="p-6 border-b border-gray-100">

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              P
            </div>

            <div>
              <p className="font-bold text-black">PAKIA</p>
              <p className="text-xs text-gray-500 truncate">
                {user.full_name}
              </p>
            </div>
          </div>

        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">

          {menu.map((item, i) => {
            const active = pathname === item.path;

            return (
              <div
                key={i}
                onClick={() => go(item.path)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                  transition-all duration-200
                  ${
                    active
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                <i className={`fa-solid ${item.icon}`} />
                <span>{item.name}</span>
              </div>
            );
          })}

        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-gray-100">

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}