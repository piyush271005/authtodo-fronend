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
        <div className="fullscreen bg-gradient-to-br from-blue-100 to-white p-10">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-sm text-gray-500 font-medium">Focusly</h1>
        <h2 className="text-3xl font-semibold text-gray-800">My Day</h2>
      </div>
      <div className=" bg-blue-500 rounded-xl  p-1 hover:bg-blue-700">
      <button 
      onClick={handleButtonClick}
      
      className="text-white ">
        Logout
      </button>
      </div>
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
            
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
            className="w-full outline-none text-gray-700"
          />
          <button

          onClick={handleAdd}


          
          
          className="ml-4 w-10 h-10 rounded-full bg-blue-500 text-white text-xl  hover:bg-blue-800 ">
            +
          </button>
        </div>
      </div>

      
      <div className="space-y-6">


        <Calendar/>
        <CompletedTasksCard/>

       

      

        
        

      </div>
    </div>
  </div>
</div>


    );

}