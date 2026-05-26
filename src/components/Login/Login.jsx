import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  
  
     const [formData, setFormData] = useState({
      
      email:"",
      
      password: "",
    });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://authtodo-2.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      
      navigate("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950 text-slate-100 relative overflow-hidden font-sans">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[110px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[110px] -z-10 animate-pulse-slow delay-700" />

      <div className="w-full max-w-md glass-panel rounded-3xl shadow-2xl p-8 border border-slate-800/80 animate-fade-in-up">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Link to="/home">
            <img
              src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
              alt="App Logo"
              className="h-16 drop-shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Welcome back
        </h2>
        <p className="text-center text-slate-400 text-sm mt-1.5">
          Log in to continue your workflow
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1.5 w-full px-4 py-2.5 rounded-xl glass-input focus:outline-none text-sm placeholder-slate-600"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1.5 w-full px-4 py-2.5 rounded-xl glass-input focus:outline-none text-sm placeholder-slate-600"
              required
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm py-1">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
              <input type="checkbox" className="accent-violet-500 w-4 h-4 cursor-pointer" />
              Remember me
            </label>
            <Link
              to="#"
              className="text-violet-400 hover:text-violet-300 transition-colors font-medium underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-violet-600 to-indigo-600
                       shadow-[0_4px_20px_rgba(139,92,246,0.35)]
                       transition-all duration-300 hover:shadow-[0_4px_25px_rgba(139,92,246,0.65)]
                       hover:from-violet-500 hover:to-indigo-500
                       hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            Log in
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don’t have an account?
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300 font-semibold ml-1 transition-colors underline"
          >
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}
