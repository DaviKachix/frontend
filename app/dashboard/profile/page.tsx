"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


const conferences = [
  "South Nyanza Conference",
  "Mara Conference",
  "North East Tanzania Conference",
  "Western Tanzania Conference",
  "North West Tanzania Field",
  "Nyanza Gold Belt Field",
  "North Mara Field",
  "Simiyu River Field"
];

const unions = [
  "Northern Tanzania Union Conference",
  "Southern Tanzania Union Conference"
];

const cities = [
  "Arusha","Dar es Salaam","Mwanza","Mbeya","Dodoma",
  "Tanga","Morogoro","Kilimanjaro","Iringa","Tabora"
];

const professions = [
  "Pastor","Teacher","Doctor","Nurse","Engineer","IT Specialist","Pastor",
  "Businessperson","Accountant","Lawyer","Farmer","Student","Pilot",
  "Police Officer","Journalist","Designer","Developer","Electrician",
  "Pharmacist","Social Worker","Entrepreneur"
];

const talentsPool = [
  "Singing","Preaching","Public Speaking","Writing","Coding","Teaching",
  "Leadership","Counseling","Music Instrument","Photography",
  "Event Planning","Drama","Evangelism","Bible Study","Sports",
  "Design","Video Editing","Prayer Ministry","Hospitality","Administration"
];

const giftsPool = [
  "Prophecy","Teaching","Evangelism","Faith","Healing","Wisdom","Knowledge",
  "Discernment","Leadership","Service","Encouragement","Mercy","Giving",
  "Intercession","Administration","Pastoral Care","Music Ministry",
  "Mission Work","Counseling","Apostolic Grace"
];

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState<any>({
    phone: "",
    gender: "",
    date_of_birth: "",
    address: "",
    church: "",
    city: "",
    conference_id: "",
    union: "",
    profession: "",
    membership_status: "Active",
    talents: [],
    spiritual_gifts: [],
  });

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const handleChange = (key: string, value: any) => {
    setProfile((prev: any) => ({ ...prev, [key]: value }));
  };

  const toggleMulti = (key: string, value: string) => {
    setProfile((prev: any) => {
      const arr = prev[key] || [];

      if (arr.includes(value)) {
        return { ...prev, [key]: arr.filter((i: string) => i !== value) };
      }

      if (arr.length >= 4) return prev;

      return { ...prev, [key]: [...arr, value] };
    });
  };

  // ✅ FIXED SUBMIT WITH LOADING + NAVIGATION
  const submit = async () => {
    if (!user?.id) {
      alert("User not found");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/profiles/save", {
        ...profile,
        user_id: user.id,
      });

      // allow loading.tsx to show on navigation
      setTimeout(() => {
        router.replace("/dashboard");
      }, 400);

    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to save profile");
    } finally {
      setLoading(false);
    }
  };


  return (

    
    <div className="flex flex-col min-h-screen md:ml-80 transition-all duration-300">
              <Topbar user={user} toggle={() => setOpen(true)} />
      {/* HEADER */}
      <div className="mb-6">

        <h1 className="text-2xl font-bold flex items-center gap-2">
          <i className="fa-solid fa-id-card text-blue-600"></i>
          Ministry Profile Setup
        </h1>
        <p className="text-gray-500 text-sm">
          Complete your PK Association profile in 4 steps
        </p>
      </div>

      {/* STEP INDICATOR */}
      <div className="flex gap-2 mb-6 text-sm">
        {[1,2,3,4].map(s => (
          <div key={s}
            className={`px-3 py-1 rounded-full border ${
              step === s ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Step {s}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Personal Information</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded"
              placeholder="Phone Number"
              onChange={(e) => handleChange("phone", e.target.value)} />

            <select className="border p-3 rounded"
              onChange={(e) => handleChange("gender", e.target.value)}>
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input type="date" className="border p-3 rounded"
              onChange={(e) => handleChange("date_of_birth", e.target.value)} />

            <input className="border p-3 rounded"
              placeholder="Full Address"
              onChange={(e) => handleChange("address", e.target.value)} />
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Church & Location</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded"
              placeholder="Church Name"
              onChange={(e) => handleChange("church", e.target.value)} />

            <select className="border p-3 rounded"
              onChange={(e) => handleChange("city", e.target.value)}>
              <option>Select City</option>
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>

            <select className="border p-3 rounded"
              onChange={(e) => handleChange("conference_id", e.target.value)}>
              <option>Select Conference</option>
              {conferences.map(c => <option key={c}>{c}</option>)}
            </select>

            <select className="border p-3 rounded"
              onChange={(e) => handleChange("union", e.target.value)}>
              <option>Select Union</option>
              {unions.map(u => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Professional Information</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <select className="border p-3 rounded"
              onChange={(e) => handleChange("profession", e.target.value)}>
              <option>Select Profession</option>
              {professions.map(p => <option key={p}>{p}</option>)}
            </select>

            <select className="border p-3 rounded"
              onChange={(e) => handleChange("membership_status", e.target.value)}>
              <option>Baptism Status</option>
              <option>Baptized</option>
              <option>Not Baptized</option>
            </select>
          </div>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="font-semibold text-lg">Spiritual Profile</h2>

          <div>
            <p className="font-medium mb-2">Talents (Select up to 4)</p>
            <div className="grid md:grid-cols-4 gap-2">
              {talentsPool.map(t => (
                <label key={t} className="text-sm flex gap-2">
                  <input type="checkbox"
                    onChange={() => toggleMulti("talents", t)} />
                  {t}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Spiritual Gifts (Select up to 4)</p>
            <div className="grid md:grid-cols-4 gap-2">
              {giftsPool.map(g => (
                <label key={g} className="text-sm flex gap-2">
                  <input type="checkbox"
                    onChange={() => toggleMulti("spiritual_gifts", g)} />
                  {g}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8">

        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Back
        </button>

        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={loading}
            className={`px-6 py-2 rounded font-semibold ${
              loading
                ? "bg-lime-400 cursor-not-allowed"
                : "bg-lime-400 text-white"
            }`}
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>
        )}

      </div>

    </div>
  );
  
}