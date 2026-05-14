"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function EditProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState<any>({
    phone: "",
    address: "",
    church: "",
    city: "",
    profession: "",
    profile_image: "",
  });

  useEffect(() => {
    const u = localStorage.getItem("user");

    if (!u) {
      router.push("/login");
      return;
    }

    const parsed = JSON.parse(u);
    setUser(parsed);

    axios
      .get(`http://157.180.17.101:5000/api/profiles/${parsed.id}`)
      .then((res) => {
        if (res.data) setForm(res.data);
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  // 📸 IMAGE UPLOAD
  const uploadImage = async (file: File) => {
    const data = new FormData();
    data.append("image", file);

    try {
      setUploading(true);

      const res = await axios.post(
        "http://157.180.17.101:5000/api/upload/profile",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setForm((prev: any) => ({
        ...prev,
        profile_image: res.data.url,
      }));
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // 💾 SAVE PROFILE
  const updateProfile = async () => {
    try {
      setLoading(true);

      await axios.put("http://157.180.17.101:5000/api/profiles/update", {
        user_id: user.id,
        ...form,
      });

      router.push("/dashboard/profile/view");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN */}
      <div className="flex-1 flex flex-col md:ml-72">

        {/* TOPBAR */}
        <Topbar/>

        {/* CONTENT */}
        <main className="max-w-3xl mx-auto w-full p-6 space-y-6">

          {/* HEADER */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <i className="fa-solid fa-user-pen text-blue-600"></i>
              Edit Profile (SaaS)
            </h1>
            <p className="text-gray-500 text-sm">
              Update your ministry profile details
            </p>
          </div>

          {/* PROFILE IMAGE CARD */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm text-center space-y-4">

            <div className="flex justify-center">
              <img
                src={
                  form.profile_image ||
                  "https://ui-avatars.com/api/?name=User"
                }
                className="w-24 h-24 rounded-full object-cover border"
              />
            </div>

            <label className="inline-block cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
              {uploading ? "Uploading..." : "Change Photo"}
              <input
                type="file"
                hidden
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    uploadImage(e.target.files[0]);
                  }
                }}
              />
            </label>

          </div>

          {/* FORM CARD */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">

            <div className="grid md:grid-cols-2 gap-4">

              <input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="City"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.church}
                onChange={(e) => handleChange("church", e.target.value)}
                placeholder="Church"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
                placeholder="Profession"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Address"
                className="md:col-span-2 border p-3 rounded-xl"
              />

            </div>

            {/* SAVE BUTTON */}
            <div className="flex justify-end pt-4">
              <button
                onClick={updateProfile}
                className="px-6 py-3 bg-lime-400 text-white rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Save Profile
              </button>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}