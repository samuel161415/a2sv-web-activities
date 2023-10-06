import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload,
        isComplete: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    setTodo: (state, action) => {
      const todoId = action.payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo === null) return;
      todo.isComplete ^= 1;
    },
  },
});

export const selectAllTodos = (state) => initialState;

export const { addTodo, removeTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
