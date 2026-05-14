"use client";

import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function LeadershipPage() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const Card = ({ children }: any) => (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      {children}
    </div>
  );

  const Person = ({ name, role }: any) => (
    <div className="flex items-center gap-3 py-2">
      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-lime-400 flex items-center justify-center text-white font-bold shadow-sm">
        {name.charAt(0)}
      </div>

      <div className="leading-tight">
        <p className="font-semibold text-gray-800 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar (only for logged in users) */}
      {user && <Sidebar open={open} setOpen={setOpen} />}

      {/* MAIN WRAPPER */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* 🔥 GLOBAL HEADER LOGIC */}
        {user ? (
          <Topbar/>
        ) : (
          <Navbar />
        )}

        {/* CONTENT AREA */}
        <main className="flex-1 p-6 md:p-10 w-full max-w-6xl mx-auto space-y-8">

          {/* PAGE HEADER */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <i className="fa-solid fa-church text-blue-600"></i>
              Leadership
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Northern & Southern Tanzania Union Conference leadership structure
            </p>
          </div>

          {/* NTUC SECTION */}
          <Card>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                Northern Tanzania Union Conference (NTUC)
              </h2>
              <p className="text-sm text-gray-500">
                PAKIA leadership structure for NTUC region
              </p>
            </div>

            <h3 className="font-semibold text-gray-700 mb-2">
              Executive Team
            </h3>

            <div className="grid md:grid-cols-3 gap-3">
              <Person name="Gideon Msambwa" role="Coordinator" />
              <Person name="Samuel Philip" role="Secretary" />
              <Person name="Zeph Baravuga" role="Treasurer" />
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-3">
                Conference & Field Coordinators
              </h3>

              <div className="grid md:grid-cols-2 gap-2">
                <Person name="Isaac Manyonyi" role="South Nyanza Conference" />
                <Person name="Msifuni Gagi" role="Western Tanzania Conference" />
                <Person name="Goodluck Mshana" role="North West Tanzania Field" />
                <Person name="Elifuraha Msese" role="Nyanza Gold Belt Field" />
                <Person name="Emmanuel Senguo" role="Tanzania Rift Valley Field" />
                <Person name="Ruth Mao" role="North East Tanzania Conference" />
                <Person name="Haruni Kikiwa" role="Mara Conference" />
                <Person name="Denis Dede" role="North Mara Field" />
                <Person name="Samwel Ndekeja" role="Simiyu River Field" />
              </div>
            </div>
          </Card>

          {/* STU SECTION */}
          <Card>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                Southern Tanzania Union Conference (STU)
              </h2>
              <p className="text-sm text-gray-500">
                PAKIA leadership structure for STU region
              </p>
            </div>

            <div className="p-8 border border-dashed rounded-xl text-center bg-gray-50">
              <div className="flex flex-col items-center gap-2">
                <i className="fa-solid fa-hourglass-half text-blue-600 text-xl"></i>
                <p className="font-semibold text-gray-700">
                  Under Construction
                </p>
                <p className="text-sm text-gray-500 max-w-md">
                  STU leadership information will be added soon as the system expands.
                </p>
              </div>
            </div>
          </Card>

        </main>
      </div>
    </div>
  );
}