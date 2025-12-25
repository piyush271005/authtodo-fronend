import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../features/todoslice';
import { useSelector } from 'react-redux';


  function CurrentTodo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const { todos, status, error } = useSelector((state) => state.todos);

console.log("STATUS:", status);
console.log("ERROR:", error);
console.log("TODOS:", todos);
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
    <li key={todo._id}>{todo.text}</li>
  ))}
      </ul>
    </div>
  );
}

export default CurrentTodo;

