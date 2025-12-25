import { Link } from "react-router-dom";
import React from "react";
import CurrentTodo from "../currentTodo/currentTodo.jsx";



export default function MainPage(){

    return (
        <div className="fullscreen bg-gradient-to-br from-blue-100 to-white p-10">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-sm text-gray-500 font-medium">Focusly</h1>
        <h2 className="text-3xl font-semibold text-gray-800">My Day</h2>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        ⚙️
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-2 space-y-6">

        <CurrentTodo/>
    

        {/* COMPLETED TASKS */}
       
        
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <input
            type="text"
            placeholder="Add Task"
            className="w-full outline-none text-gray-700"
          />
          <button className="ml-4 w-10 h-10 rounded-full bg-blue-500 text-white text-xl">
            +
          </button>
        </div>
      </div>

      
      <div className="space-y-6">

        {/* CALENDAR */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between mb-4">
            <p className="font-medium">Calendar</p>
            <div className="space-x-2 text-gray-400">
              ◀ ▶
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(day => (
              <span key={day} className="text-gray-400">{day}</span>
            ))}
            {[...Array(30)].map((_, i) => (
              <span
                key={i}
                className={`py-1 rounded-full ${
                  i === 26
                    ? "bg-blue-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>

      

        {/* SUMMARY */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between mb-2">
            <p className="font-medium">Completed Tasks</p>
            <p className="text-sm text-gray-500">5/4</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


    );

}