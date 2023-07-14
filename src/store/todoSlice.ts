import { createSlice } from "@reduxjs/toolkit";

export type TodoType = {
  id: string;
  isChecked: boolean;
  content: string;
};

const initialState = {
  todos: [
    {
      id: "l0",
      isChecked: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
    {
      id: "i1",
      isChecked: false,
      content:
        "ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
    {
      id: "q1",
      isChecked: false,
      content:
        "Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
  ],
  filter: "All",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdd: (state, { payload }) => {
      const id = payload[0].toLowerCase() + state.todos.length;
      const newTodo = { id, isChecked: false, content: payload };
      state.todos.push(newTodo);
    },
    todoRemove: (state, { payload }) => {
      state.todos = state.todos.filter((todo: TodoType) => todo.id !== payload);
    },
    todoEdit: (state, { payload }) => {
      const index = state.todos.findIndex(
        (todo: TodoType) => todo.id === payload.id
      );
      state.todos[index].content = payload.value;
    },
    todoChecked: (state, { payload }) => {
      const index = state.todos.findIndex(
        (todo: TodoType) => todo.id === payload.id
      );
      state.todos[index].isChecked = payload.value;
    },
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default todoSlice.reducer;
export const { todoAdd, todoRemove, todoEdit, todoChecked, filterChange } =
  todoSlice.actions;
