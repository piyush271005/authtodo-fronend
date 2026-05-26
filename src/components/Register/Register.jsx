import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";





export default function register(){

  const navigate = useNavigate();


   const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    username: "",
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
      const res = await fetch("https://authtodo-2.onrender.com/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Registration successful!");
      navigate("/Login");
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
            <Link to="/Home">
              <img
                src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
                alt="App Logo"
                className="h-16 drop-shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* HEADER */}
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Create your account
          </h2>
          <p className="text-center text-slate-400 text-sm mt-1.5">
            Start organizing your work and life
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            {/* USERNAME */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="john_123"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl glass-input focus:outline-none text-sm placeholder-slate-600"
                required
              />
            </div>

            {/* FULL NAME */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl glass-input focus:outline-none text-sm placeholder-slate-600"
                required
              />
            </div>

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

            {/* TERMS */}
            <div className="flex items-start gap-2.5 text-sm text-slate-400 py-1">
              <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4 cursor-pointer" required />
              <p className="leading-tight">
                I agree to the{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300 underline transition-colors">
                  Terms & Conditions
                </a>
              </p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-violet-600 to-indigo-600
                         shadow-[0_4px_20px_rgba(139,92,246,0.35)]
                         transition-all duration-300 hover:shadow-[0_4px_25px_rgba(139,92,246,0.65)]
                         hover:from-violet-500 hover:to-indigo-500
                         hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Sign up
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?
            <Link
              to="/Login"
              className="text-violet-400 hover:text-violet-300 font-semibold ml-1 transition-colors underline"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>
    );
}