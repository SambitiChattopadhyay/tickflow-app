import { useState } from "react";
import {
Mail,Lock,User,Eye,EyeOff,ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import API from "../config";
export default function AuthPage() {
const navigate = useNavigate();
const [mode, setMode] = useState("signin");
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const isSignUp = mode === "signup";
const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const endpoint = isSignUp
  ? `${API}/auth/register`
  : `${API}/auth/login`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    console.log(data);

    navigate("/dashboard");

  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
return ( <div className="min-h-screen bg-[#EEF2F6] flex items-center justify-center p-6">
  <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-[#FAFAF8] rounded-3xl overflow-hidden shadow-xl border border-[#D9E0EA]">
    {/* LEFT SIDE */}
    <div className="hidden lg:flex flex-col justify-between bg-[#243047] text-white p-12">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 w-fit"
      >
        <div className="w-9 h-9 bg-white text-[#243047] rounded-lg flex items-center justify-center font-bold">
          T
        </div>
        <span className="text-xl font-bold">
          Tick<span className="text-[#AAB2FF]">Flow</span>
        </span>
      </button>
      <div>
        <p className="text-[#AAB2FF] text-sm font-semibold">
          WORK WITH CLARITY
        </p>
        <h1 className="text-5xl font-bold mt-5 leading-tight">
          Keep your work
          <span className="block text-[#AAB2FF]">
            moving forward.
          </span>
        </h1>
        <p className="text-[#B5BFCC] mt-6 leading-7">
          Organize your workspace, track activity,
          and understand your progress from one place.
        </p>
      </div>
      <p className="text-sm text-[#8F9BAC]">
        A simpler way to manage productivity.
      </p>
    </div>
    {/* RIGHT SIDE */}
    <div className="p-8 sm:p-12 flex items-center">
      <div className="w-full max-w-md mx-auto">
        {/* Mobile Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-10 lg:hidden"
        >
          <div className="w-9 h-9 bg-[#243047] text-white rounded-lg flex items-center justify-center font-bold">
            T
          </div>

          <span className="text-xl font-bold text-[#243047]">
            Tick<span className="text-[#5964E8]">Flow</span>
          </span>
        </button>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#243047]">
          {isSignUp
            ? "Create your account"
            : "Welcome back"}
        </h2>
        <p className="mt-2 text-[#6B7788]">
          {isSignUp
            ? "Start organizing your work with TickFlow."
            : "Sign in to continue to your workspace."}
        </p>


        {/* Toggle */}

        <div className="grid grid-cols-2 bg-[#E8ECF5] rounded-xl p-1 mt-8">

          <button
            onClick={() => setMode("signin")}
            className={`py-2 rounded-lg text-sm font-semibold ${
              !isSignUp
                ? "bg-white text-[#243047] shadow-sm"
                : "text-[#6B7788]"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`py-2 rounded-lg text-sm font-semibold ${
              isSignUp
                ? "bg-white text-[#243047] shadow-sm"
                : "text-[#6B7788]"
            }`}
          >
            Sign Up
          </button>
        </div>
        {/* FORM */}
        <form
        onSubmit={handleSubmit}className="space-y-4 mt-7">
          {isSignUp && (
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-4 text-[#8A96A6]"
              />
                <input
                placeholder="Full Name"
                className="w-full p-4 pl-12 rounded-xl bg-[#F7F9FC] border border-[#D9E0EA] text-[#243047] placeholder:text-[#657185] outline-none focus:border-[#5964E8]"
              />
            </div>
          )}
          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-4 text-[#8A96A6]"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl bg-[#F7F9FC] border border-[#D9E0EA] text-[#243047] placeholder:text-[#657185] outline-none focus:border-[#5964E8]"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-4 text-[#8A96A6]"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             className="w-full p-4 pl-12 rounded-xl bg-[#F7F9FC] border border-[#D9E0EA] text-[#243047] placeholder:text-[#657185] outline-none focus:border-[#5964E8]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-[#8A96A6]"
            >
              {showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />}
            </button>
          </div>
          {error && (
          <p className="text-sm text-red-500">
          {error}
          </p>
          )}
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5964E8] hover:bg-[#4E58D8] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition"
          >
          {loading
          ? "Please wait..."
          : isSignUp
          ? "Create Account"
          : "Sign In"}
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-[#D9E0EA] flex-1" />
          <span className="text-xs text-[#8A96A6]">
            OR
          </span>
          <div className="h-px bg-[#D9E0EA] flex-1" />
        </div>
        {/* Google */}
        <button
          className="w-full flex items-center justify-center gap-3 border border-[#D9E0EA] py-4 rounded-xl font-medium text-[#334155] hover:bg-[#F2F4F7] transition"
        >
          <FcGoogle size={21} />
          Continue with Google
        </button>
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="mx-auto mt-7 flex items-center gap-2 text-sm text-[#6B7788] hover:text-[#243047]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    </div>
  </div>
</div>
);
}