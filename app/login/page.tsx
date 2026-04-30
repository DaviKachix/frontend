"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Invalid email or password");
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
            Welcome Back
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Login to your PAKIA account
          </p>
        </div>

        {/* FORM */}
        <div className="p-6 space-y-5">

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
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-600">Password</label>

              <button
                onClick={() => router.push("/forgot-password")}
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition"
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={login}
            disabled={loading}
            className={`w-full py-2.5 rounded-xl font-semibold text-white transition-all
              ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
              }`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-5 border-t border-gray-100 text-center text-sm">

          <p className="text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Create account
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}