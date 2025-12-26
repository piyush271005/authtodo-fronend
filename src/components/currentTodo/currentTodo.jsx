import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchTodos } from "../../features/todoSlice.js"
import { useSelector } from 'react-redux';
import { deleteTodo } from "../../features/todoSlice.js";
import { toggleTask } from "../../features/todoSlice.js";
import { Navigate, useNavigate } from 'react-router-dom';
import { refreshAccessToken } from '../../features/todoSlice.js';


  function CurrentTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchTodos());
    
  }, []);

  
  const { todos, status, error } = useSelector((state) => state.todos);
  console.log(status)
  console.log(error)

  useEffect(() => {
  if (status === "failed") {

    dispatch(refreshAccessToken())
    
  }
}, [status, error, navigate]);

useEffect(() => {
  if (status === "unauthenticated") {

    navigate("/")
    
  }
}, [status, error, navigate]);
  


 /* const todos = [{
    
            "_id": "694b8a6d764e3e2806e580e8",
            "text": "piyush",
            "isComplete": false,
            "userId": "694b89af764e3e2806e580df",
            "createdAt": "2025-12-24T06:38:37.463Z",
            "updatedAt": "2025-12-24T06:38:37.463Z",
            "__v": 0
        }
  ]*/


  

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between mb-2">
        <p className="font-medium">My Tasks</p>
      </div>

    
      <ul className="mt-4 space-y-3">
         {todos.map((todo) => (
    <li
    className="mt-4 flex items-center justify-between px-4 py-2 py-2 bg-white-1000 px-4  rounded-xl shadow-xl p-2"
    
    
    key={todo._id}>

      <div className="flex items-center gap-3">

      <input
              type="checkbox"
              checked={todo.isComplete}
  onChange={() => {

    console.log("TASK ID:", todo._id);
    
    
    dispatch(toggleTask(todo._id))}}
              className="cursor-pointer "
              
          />
      
       <span className="text-gray-800">{todo.text}</span>

       </div>
        <button
       onClick={() => dispatch(deleteTodo(todo._id))}
             
              className="text-white bg-blue-500 rounded-xl  p-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>


    
    
    
    </li>
  ))}
      </ul>
    </div>
  );
}

export default CurrentTodo;

