"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function ProfileViewPage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");

    if (u) {
      const parsed = JSON.parse(u);
      setUser(parsed);
      fetchProfile(parsed.id);
    }
  }, []);

  const fetchProfile = async (userId: number) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/profiles/${userId}`
      );
      setProfile(res.data);
    } finally {
      setLoading(false);
    }
  };

  const Section = ({ title, children }: any) => (
    <div className="bg-white border border-gray-100 rounded-lg p-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );

  const Item = ({ label, value }: any) => (
    <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm text-gray-800 font-medium">
        {value || "-"}
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="h-8 w-8 border-2 border-gray-200 border-t-gray-800 rounded-full animate-spin mx-auto"></div>
          <p className="text-sm text-gray-500 mt-3">Loading...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500 text-sm">No profile found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white">

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar user={user} toggle={() => setOpen(true)} />

        {/* Content */}
        <main className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 space-y-6">

          {/* HEADER */}
          <div className="border-b border-gray-100 pb-4">
            <h1 className="text-xl font-semibold text-gray-900">
              My Profile
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Personal and church information overview
            </p>
          </div>

          {/* BASIC INFO */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 flex items-center gap-6">

            <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
              {user?.name?.charAt(0) || "U"}
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {user?.name || "User"}
              </h2>
              <p className="text-sm text-gray-500">
                {profile.profession || "No profession"}
              </p>
            </div>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            <Section title="Personal Information">
              <Item label="Phone" value={profile.phone} />
              <Item label="Gender" value={profile.gender} />
              <Item label="Date of Birth" value={profile.date_of_birth} />
              <Item label="Address" value={profile.address} />
            </Section>

            <Section title="Church Information">
              <Item label="Church" value={profile.church} />
              <Item label="City" value={profile.city} />
              <Item label="Union" value={profile.union} />
              <Item label="Conference" value={profile.conference_id} />
            </Section>

          </div>

          {/* TALENTS */}
          <Section title="Talents & Gifts">

            <div className="space-y-4">

              <div>
                <p className="text-xs text-gray-500 mb-2">Talents</p>
                <div className="flex flex-wrap gap-2">
                  {(profile.talents || []).map((t: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Spiritual Gifts</p>
                <div className="flex flex-wrap gap-2">
                  {(profile.spiritual_gifts || []).map((g: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </Section>

        </main>
      </div>
    </div>
  );
}