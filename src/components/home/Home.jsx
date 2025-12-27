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
    <div className="min-h-screen relative overflow-hidden
                bg-gradient-to-br from-indigo-100 via-violet-100 to-slate-100">

  {/* ================= MOBILE VIEW ================= */}
  {/* Default (mobile-first) */}
  <div className="flex block min-[1346px]:hidden min-h-screen items-center justify-center px-4">
    <div className="w-full max-w-md text-center space-y-6 animate-fadeInUp">

      {/* LOGO */}
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
          alt="Focusly Logo"
          className="h-20"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-gray-900">
        Focusly
      </h1>

      {/* ILLUSTRATION */}
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/7N23KW7R/image-removebg-preview-2.png"
          alt="Illustration"
          className="w-64 opacity-95"
        />
      </div>

      {/* CTA */}
      <button
        onClick={handleClick}
        className="w-full py-3 rounded-lg font-semibold text-white
                   bg-gradient-to-r from-indigo-500 to-violet-500
                   transition-all duration-300
                   hover:scale-[1.02] hover:shadow-xl
                   active:scale-95"
      >
        Get started
      </button>

      {/* SECONDARY */}
      <a
        href="#"
        className="block text-indigo-600 text-sm hover:text-indigo-800 hover:underline"
      >
        Learn more
      </a>

      {/* FOOTER */}
      <p className="text-xs text-gray-400 pt-4">
        Terms of use
      </p>
    </div>
  </div>

  {/* ================= DESKTOP / LAPTOP VIEW ================= */}
  {/* Visible from lg and above */}
  <div className="hidden lg:flex min-h-screen items-center justify-center">

    {/* LEFT ILLUSTRATION */}
    <img
      src="https://i.ibb.co/p719vDL/image-removebg-preview.png"
      alt="Left Illustration"
      className="absolute left-50 bottom-40 w-96
                 animate-floatSlow opacity-90"
    />

    {/* RIGHT ILLUSTRATION */}
    <img
      src="https://i.ibb.co/MD47Tg5N/image-removebg-preview-1.png"
      alt="Right Illustration"
      className="absolute right-50 bottom-20 w-96 scale-75
                 animate-floatSlow opacity-90 delay-200"
    />

    {/* CENTER CONTENT */}
    <div className="text-center flex flex-col items-center space-y-4

                    max-w-md px-6 z-10 animate-fadeInUp">

      {/* LOGO */}
      <img
        src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
        alt="Focusly Logo"
        className="h-30 transition-transform duration-300 hover:scale-105"
      />

      {/* TITLE */}
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        Focusly
      </h1>

      {/* TAGLINE */}
      <p className="text-gray-600 text-lg">
        Stay focused, organized, and in control — from work to play.
      </p>

      {/* CTA */}
      <button
        onClick={handleClick}
        className="mt-2 px-6 py-3 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-indigo-500 to-violet-500
                   transition-all duration-300
                   hover:scale-105 hover:shadow-2xl
                   active:scale-95"
      >
        Get started
      </button>

      {/* SECONDARY */}
      <a
        href="#"
        className="text-indigo-600 text-sm hover:text-indigo-800 hover:underline"
      >
        Learn more
      </a>

      {/* FOOTER */}
      <p className="text-xs text-gray-400">
        Terms of use
      </p>
    </div>
  </div>
</div>




    );
}