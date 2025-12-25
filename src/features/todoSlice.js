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
      });
  },
});

export default todoSlice.reducer;