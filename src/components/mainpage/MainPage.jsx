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

    const formattedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-10 relative overflow-hidden font-sans">
        
        {/* FLOATING BACKGROUND GLOWS */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] -z-10 animate-pulse-slow delay-1000" />

        <div className="max-w-6xl mx-auto glass-panel rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-800/80 animate-fade-in-up">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800/60">
            <div className="space-y-1">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-950/40 border border-violet-800/40 px-3 py-1 rounded-full">
                Focusly Workspace
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                My Day
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {formattedDate}
              </p>
            </div>

            <button
              onClick={handleButtonClick}
              className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40
                         text-slate-300 font-semibold shadow-inner text-sm
                         transition-all duration-300 hover:text-white hover:border-violet-500/50 hover:bg-slate-950
                         active:scale-95 cursor-pointer">
              Logout
            </button>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-6">

              <CurrentTodo />

              {/* ADD TASK */}
              <div className="bg-slate-900/30 rounded-2xl border border-slate-800 p-4 flex items-center justify-between
                              transition-all duration-300 hover:border-violet-500/40 focus-within:border-violet-500/60 focus-within:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Add a new task to your dashboard..."
                  className="w-full bg-transparent outline-none text-slate-100 placeholder-slate-500 text-sm py-1.5 px-1"
                />

                <button
                  onClick={handleAdd}
                  className="ml-4 w-10 h-10 rounded-xl flex items-center justify-center
                             bg-gradient-to-r from-violet-600 to-indigo-600
                             text-white text-xl font-bold shadow-[0_4px_12px_rgba(139,92,246,0.3)]
                             transition-all duration-300
                             hover:scale-105 hover:shadow-[0_4px_15px_rgba(139,92,246,0.65)] active:scale-95 cursor-pointer">
                  +
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <Calendar />
              <CompletedTasksCard />
            </div>
          </div>
        </div>
      </div>
    );

}