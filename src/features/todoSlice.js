import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
  status: "idle",   /*idle means:

“Nothing is happening yet.”

No API call has started

No data is being fetched

No success or failure has occurred

It’s the default, neutral state of your Redux slice.*/
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/users/get-current-tasks",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.message || "Failed to fetch tasks");
      }

      const data = await res.json();
      return data.tasks;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    await fetch(
      `http://localhost:5000/api/v1/users/delete-task/${id}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    return id; 
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text) => {
    const res = await fetch(
      "http://localhost:5000/api/v1/users/addtask",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    const data = await res.json();
    return data.data; 
  }
);



// features/todos/todoThunks.js
export const toggleTask = createAsyncThunk(
  "todos/toggleTask",
  async (taskId, { rejectWithValue }) => {

    console.log("THUNK TASK ID:", taskId);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/users/change-state/${taskId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addTodo.fulfilled, (state, action) => {
  state.todos.unshift(action.payload);
})

.addCase(toggleTask.fulfilled, (state, action) => {
  const index = state.todos.findIndex(
    (todo) => todo._id === action.payload._id
  );

  if (index !== -1) {
    state.todos[index] = action.payload;
  }
})

      .addCase(deleteTodo.fulfilled, (state, action) => {
  state.todos = state.todos.filter(
    (todo) => todo._id !== action.payload
  );
});




  },
});

export default todoSlice.reducer;