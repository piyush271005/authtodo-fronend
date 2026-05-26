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

    navigate("home")
    
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
    <div className="bg-slate-900/25 backdrop-blur-xl rounded-2xl border border-slate-800 p-5
                 transition-all duration-300 hover:border-slate-700/60 shadow-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800/60">
        <p className="font-bold text-slate-200 tracking-wide text-sm">
          My Tasks
        </p>
        <span className="text-xs font-semibold text-violet-400 bg-violet-950/30 border border-violet-800/40 px-2.5 py-1 rounded-lg">
          {todos.filter(t => !t.isComplete).length} Pending
        </span>
      </div>

      {/* TASK LIST */}
      {todos.length === 0 ? (
        <div className="py-8 text-center space-y-2">
          <p className="text-slate-400 font-medium text-sm">All clear! No tasks right now.</p>
          <p className="text-xs text-slate-600">Enjoy the zen, or add a task below to get started.</p>
        </div>
      ) : (
        <ul className="mt-4 space-y-3 max-h-[350px] overflow-y-auto pr-1">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className={`flex items-center justify-between px-4 py-3.5
                         rounded-xl border transition-all duration-300 hover:translate-x-1
                         ${todo.isComplete
                           ? "bg-slate-950/50 border-emerald-950/50 text-slate-500 shadow-sm"
                           : "bg-slate-900/40 border-slate-800/80 hover:border-violet-500/30 hover:bg-slate-900/60 shadow-md"
                         }`}
            >
              {/* LEFT SIDE */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => dispatch(toggleTask(todo._id))}
                  className="h-4.5 w-4.5 accent-violet-500 cursor-pointer rounded
                             transition-transform duration-200 hover:scale-110"
                />

                <span
                  className={`text-sm font-semibold transition-all duration-300
                    ${todo.isComplete
                      ? "line-through text-slate-600 font-normal"
                      : "text-slate-200"
                    }`}
                >
                  {todo.text}
                </span>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => dispatch(deleteTodo(todo._id))}
                className="p-2 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400
                           transition-all duration-300 hover:text-rose-400 hover:border-rose-950/50 hover:bg-rose-950/30
                           hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4.5 h-4.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9
                       m9.968-3.21c.342.052.682.107 1.022.166
                       m-1.022-.165L18.16 19.673
                       a2.25 2.25 0 01-2.244 2.077H8.084
                       a2.25 2.25 0 01-2.244-2.077L4.772 5.79
                       m14.456 0a48.108 48.108 0 00-3.478-.397
                       m-12 .562c.34-.059.68-.114 1.022-.165
                       m0 0a48.11 48.11 0 013.478-.397
                       m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201
                       a51.964 51.964 0 00-3.32 0
                       c-1.18.037-2.09 1.022-2.09 2.201v.916
                       m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default CurrentTodo;

