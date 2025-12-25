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
      const res = await fetch("http://localhost:5000/api/v1/users/login", {
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

      
      navigate("/MainPage");
    } catch (error) {
      alert("Something went wrong");
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        
        <div className="flex justify-center mb-6">
          <img
            src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
            alt="App Logo"
            className="h-50"
          />
        </div>

        
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Welcome back
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Log in to continue
        </p>

        
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
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="#" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Log in
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/Register" className="text-blue-600 hover:underline ml-1">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}
