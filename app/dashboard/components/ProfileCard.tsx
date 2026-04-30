"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileCard({ user }: any) {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!user?.id) return;

    axios
      .get(`http://localhost:5000/api/profiles/${user.id}`)
      .then((res) => setProfile(res.data))
      .catch(() => {});
  }, [user]);

  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <i className="fa-solid fa-id-card text-blue-600"></i>
        Your Profile
      </h3>

      <div className="space-y-2 text-gray-700 text-sm">
        <p><span className="text-gray-500">Phone:</span> {profile?.phone || "-"}</p>
        <p><span className="text-gray-500">Church:</span> {profile?.church || "-"}</p>
        <p><span className="text-gray-500">Profession:</span> {profile?.profession || "-"}</p>
        <p><span className="text-gray-500">Membership:</span> {profile?.membership_status || "-"}</p>
      </div>
    </div>
  );
}