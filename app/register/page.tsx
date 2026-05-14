"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [data, setData] = useState<any>({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (data.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://157.180.17.101:5000/api/auth/register",
        data
      );

      router.push("/login");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-6 text-center border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Join the PAKIA platform
          </p>
        </div>

        {/* FORM */}
        <div className="p-6 space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              placeholder="John Doe"
              className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition"
              onChange={(e) =>
                setData({ ...data, full_name: e.target.value })
              }
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition"
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat password"
              className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={submit}
            disabled={loading}
            className={`w-full py-2.5 rounded-xl font-semibold text-white transition-all
              ${
                loading
                  ? "bg-lime-300 cursor-not-allowed"
                  : "bg-lime-400 hover:bg-lime-500 active:scale-[0.98]"
              }`}
          >
            {loading ? "Creating account..." : "Register"}
          </button>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-5 border-t border-gray-100 text-center text-sm">

          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}