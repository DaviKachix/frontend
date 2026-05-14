"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import WelcomeCard from "./components/WelcomeCard";
import StatCard from "./components/StatCard";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";

import Loading from "@/app/loading";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileExists, setProfileExists] = useState<boolean | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    try {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);

      axios
        .get(`http://157.180.17.101:5000/api/profiles/${parsed.id}`)
        .then((res) => setProfileExists(!!res.data))
        .catch(() => setProfileExists(false))
        .finally(() => setLoading(false));
    } catch {
      localStorage.removeItem("user");
      router.push("/login");
    }
  }, [router]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Sidebar (mobile drawer + desktop fixed) */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOPBAR (NEW ADDED) */}
        <Topbar/>

        {/* CONTENT */}
        <main className="flex-1 p-6 md:p-10 space-y-6 max-w-7xl mx-auto w-full">

          {/* Welcome */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <WelcomeCard user={user} />
          </div>

          {/* Alert */}
          {profileExists === false && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl flex items-center justify-between">
              <p className="text-sm">
                Your profile is not complete. Please create your PAKIA profile.
              </p>

              <a
                href="/dashboard/profile"
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition"
              >
                Complete Profile
              </a>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <StatCard
              title="Profile Status"
              value={profileExists ? "Active" : "Incomplete"}
              icon="fa-user-check"
              color={profileExists ? "text-green-500" : "text-yellow-500"}
            />

            <StatCard
              title="Programs Joined"
              value="0"
              icon="fa-calendar-check"
              color="text-blue-500"
            />

            <StatCard
              title="Community"
              value="Connected"
              icon="fa-users"
              color="text-indigo-500"
            />

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
              <ProfileCard user={user} />
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
              <ActivityCard />
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}