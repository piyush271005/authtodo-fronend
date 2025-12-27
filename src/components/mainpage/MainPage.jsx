import { Link, useNavigate } from "react-router-dom";
import React from "react";
import CurrentTodo from "../currentTodo/currentTodo.jsx";
import { addTodo } from "../../features/todoSlice.js";
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import Calendar from "../calander/calander.jsx";
import CompletedTasksCard from "../completedTask/completedtask.jsx";
import { logoutUser } from "../../features/todoSlice.js";
import { Navigate } from "react-router-dom";




export default function MainPage(){
  const { todos, status, error } = useSelector((state) => state.todos);

  console.log("TODOS FROM REDUX:", todos);

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleAdd = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };

  
   const handleButtonClick = async () => {
    try {
      await dispatch(logoutUser()).unwrap(); // ensures proper error handling
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-violet-100 to-slate-100 p-10 transition-colors duration-700">
  <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8
                  animate-fadeIn">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-8">
      <div className="space-y-1">
        <h1 className="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
          Focusly
        </h1>
        <h2 className="text-3xl font-bold text-gray-800">
          My Day
        </h2>
      </div>

      <button
        onClick={handleButtonClick}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500
                   text-white font-medium shadow-md
                   transition-all duration-300
                   hover:scale-105 hover:shadow-xl active:scale-95">
        Logout
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-2 space-y-6 animate-slideUp">

        <CurrentTodo />

        {/* ADD TASK */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />

          <button
            onClick={handleAdd}
            className="ml-4 w-10 h-10 rounded-full
                       bg-gradient-to-r from-indigo-500 to-violet-500
                       text-white text-xl font-semibold
                       transition-all duration-300
                       hover:scale-110 hover:shadow-lg active:scale-95">
            +
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6 animate-slideUp delay-150">
        <Calendar />
        <CompletedTasksCard />
      </div>
    </div>
  </div>
</div>


    );

}