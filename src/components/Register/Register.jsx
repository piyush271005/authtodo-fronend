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
      const res = await fetch("http://localhost:5000/api/v1/users/register", {
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

        <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

    
    <div class="flex justify-center mb-6">
      <img
        src="https://i.ibb.co/d0vCz6vQ/373758985-75b7f71e-39f0-43bc-9e67-5407c8b43768.png"
        class="h-50"
        alt="App Logo"
      />
    </div>

    <h2 class="text-2xl font-semibold text-center text-gray-900">
      Create your account
    </h2>
    <p class="text-center text-gray-500 mt-2">
      Start organizing your work and life
    </p>

    
    <form onSubmit={handleSubmit} class="mt-6 space-y-4">


      <div>
        <label class="block text-sm font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
           name="username"
          value={formData.username}
           onChange={handleChange}
          placeholder="John 123"
          class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Full Name
        </label>
       <input
  type="text"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="John Doe"
  className="mt-1 w-full px-4 py-2 border rounded-md"
/>

      </div>

     
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Email
        </label>
       <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="you@example.com"
  className="mt-1 w-full px-4 py-2 border rounded-md"
/>

      </div>

     
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="••••••••"
  className="mt-1 w-full px-4 py-2 border rounded-md"
/>

      </div>

     
      

      
      <div class="flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" class="mt-1" />
        <p>
          I agree to the
          <a href="#" class="text-blue-600 hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>

      
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
      >
        Sign up
      </button>
    </form>

    
    <p class="text-center text-sm text-gray-500 mt-6">
      Already have an account?
      <a href="/Login" class="text-blue-600 hover:underline">
        Log in
      </a>
    </p>

  </div>
</div>


    );

}