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







    return(

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
      Create your account
    </h2>
    <p className="text-center text-gray-500 mt-2">
      Start organizing your work and life
    </p>

    {/* FORM */}
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      {/* USERNAME */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="john_123"
          className="mt-1 w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     focus:outline-none transition-all duration-200"
        />
      </div>

      {/* FULL NAME */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="mt-1 w-full px-4 py-2 border rounded-lg
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     focus:outline-none transition-all duration-200"
        />
      </div>

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

      {/* TERMS */}
      <div className="flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" className="mt-1 accent-indigo-500" />
        <p>
          I agree to the{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
            Terms & Conditions
          </a>
        </p>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg font-semibold text-white
                   bg-gradient-to-r from-indigo-500 to-violet-500
                   transition-all duration-300
                   hover:scale-[1.02] hover:shadow-xl
                   active:scale-95"
      >
        Sign up
      </button>
    </form>

    {/* FOOTER */}
    <p className="text-center text-sm text-gray-500 mt-6">
      Already have an account?
      <a
        href="/Login"
        className="text-indigo-600 hover:text-indigo-800 font-medium ml-1"
      >
        Log in
      </a>
    </p>

  </div>
</div>



    );

}