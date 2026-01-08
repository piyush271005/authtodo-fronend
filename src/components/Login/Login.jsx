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
    <div className="min-h-screen flex items-center justify-center px-4
                bg-gradient-to-br from-indigo-100 via-violet-100 to-slate-100
                transition-colors duration-700">

  <div className="w-full max-w-md
                  bg-white/90 backdrop-blur-xl
                  rounded-2xl shadow-2xl p-8
                  animate-fadeIn">

    {/* LOGO */}
    <div className="flex justify-center mb-6">
      <img
        src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
        alt="App Logo"
        className="h-16 transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* HEADER */}
    <h2 className="text-2xl font-bold text-center text-gray-900">
      Welcome back
    </h2>
    <p className="text-center text-gray-500 mt-2">
      Log in to continue your workflow
    </p>

    {/* FORM */}
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="mt-1 w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     focus:outline-none transition-all duration-200"
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="mt-1 w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     focus:outline-none transition-all duration-200"
        />
      </div>

      {/* REMEMBER + FORGOT */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" className="accent-indigo-500" />
          Remember me
        </label>
        <Link
          to="#"
          className="text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg font-semibold text-white
                   bg-gradient-to-r from-indigo-500 to-violet-500
                   transition-all duration-300
                   hover:scale-[1.02] hover:shadow-xl
                   active:scale-95"
      >
        Log in
      </button>
    </form>

    {/* FOOTER */}
    <p className="text-center text-sm text-gray-500 mt-6">
      Don’t have an account?
      <Link
        to="/Register"
        className="text-indigo-600 hover:text-indigo-800 font-medium ml-1"
      >
        Sign up
      </Link>
    </p>

  </div>
</div>

  );
}
