import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import register from '../Register/Register';
import { Navigate } from 'react-router-dom';

export default function Home() {

 const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
    return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 flex flex-col items-center justify-center font-sans">
      
      {/* BACKGROUND COSMIC BLOWS */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse-slow delay-1000 -z-10" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

      {/* ================= MOBILE VIEW ================= */}
      <div className="flex min-[1346px]:hidden min-h-screen items-center justify-center px-4 w-full z-10">
        <div className="w-full max-w-md text-center space-y-8 glass-panel p-8 rounded-3xl shadow-2xl animate-fade-in-up border border-slate-800/80">

          {/* LOGO */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
              alt="Focusly Logo"
              className="h-20 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)] animate-float-medium"
            />
          </div>

          {/* TITLE */}
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Focusly
            </h1>
            <p className="text-slate-400 text-sm max-w-xs mx-auto">
              Stay focused, organized, and in control — from work to play.
            </p>
          </div>

          {/* ILLUSTRATION */}
          <div className="flex justify-center py-2">
            <img
              src="https://i.ibb.co/7N23KW7R/image-removebg-preview-2.png"
              alt="Illustration"
              className="w-56 opacity-90 drop-shadow-[0_10px_20px_rgba(99,102,241,0.15)] animate-float-slow"
            />
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <button
              onClick={handleClick}
              className="w-full py-3.5 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-violet-600 to-indigo-600
                         shadow-[0_4px_20px_rgba(139,92,246,0.35)]
                         transition-all duration-300 hover:shadow-[0_4px_25px_rgba(139,92,246,0.6)]
                         hover:from-violet-500 hover:to-indigo-500
                         hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Get started
            </button>

            {/* SECONDARY */}
            <a
              href="#"
              className="block text-violet-400 text-sm font-medium hover:text-violet-300 hover:underline transition-all duration-200"
            >
              Learn more
            </a>
          </div>

          {/* FOOTER */}
          <p className="text-xs text-slate-600 pt-2">
            Terms of use &bull; Privacy policy
          </p>
        </div>
      </div>

      {/* ================= DESKTOP / LAPTOP VIEW ================= */}
      <div className="hidden min-[1346px]:flex min-h-screen items-center justify-center w-full max-w-7xl px-8 relative z-10">

        {/* LEFT ILLUSTRATION */}
        <img
          src="https://i.ibb.co/p719vDL/image-removebg-preview.png"
          alt="Left Illustration"
          className="absolute left-10 bottom-32 w-80 max-w-[25%]
                     animate-float-slow opacity-85 drop-shadow-[0_15px_30px_rgba(139,92,246,0.15)]"
        />

        {/* RIGHT ILLUSTRATION */}
        <img
          src="https://i.ibb.co/MD47Tg5N/image-removebg-preview-1.png"
          alt="Right Illustration"
          className="absolute right-10 bottom-24 w-80 max-w-[25%] scale-90
                     animate-float-medium opacity-85 delay-300 drop-shadow-[0_15px_30px_rgba(99,102,241,0.15)]"
        />

        {/* CENTER CONTENT */}
        <div className="text-center flex flex-col items-center space-y-6
                        max-w-xl px-10 py-12 rounded-3xl glass-panel shadow-[0_8px_32px_0_rgba(15,23,42,0.5)]
                        border border-slate-800/80 animate-fade-in-up">

          {/* LOGO */}
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-inner group">
            <img
              src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
              alt="Focusly Logo"
              className="h-28 drop-shadow-[0_0_20px_rgba(139,92,246,0.45)] transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* TITLE */}
          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 tracking-tight">
              Focusly
            </h1>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Stay focused, organized, and in control — from work to play.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4 w-full max-w-xs">
            <button
              onClick={handleClick}
              className="w-full px-8 py-3.5 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-violet-600 to-indigo-600
                         shadow-[0_5px_25px_rgba(139,92,246,0.4)]
                         transition-all duration-300 hover:shadow-[0_5px_30px_rgba(139,92,246,0.65)]
                         hover:from-violet-500 hover:to-indigo-500
                         hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get started
            </button>

            {/* SECONDARY */}
            <a
              href="#"
              className="block text-violet-400 text-sm font-semibold hover:text-violet-300 hover:underline transition-all duration-200"
            >
              Learn more
            </a>
          </div>

          {/* FOOTER */}
          <p className="text-xs text-slate-600 pt-4">
            Terms of use &bull; Privacy policy
          </p>
        </div>
      </div>
    </div>




    );
}