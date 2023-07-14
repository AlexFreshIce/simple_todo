import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  todos: [
    {
      id: "l0",
      content:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
    {
      id: "i1",
      content:
        "ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
    {
      id: "q1",
      content:
        "Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    },
  ],
  filter: "0",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdd: (state, { payload }) => {
      const id = payload[0]+ state.todos.length
      const newTodo = {id, content: payload}
      state.todos.push(newTodo);
    },
    todoRemove: (state, { payload }) => {
      state.todos = state.todos.filter((todo: { id: string; }) => todo.id !== payload);
    },
    todoEdit: (state, { payload }) => {
      const index = state.todos.findIndex((todo: { id: string; }) => todo.id === payload.id)
     
      state.todos[index].content = payload.value
    },
  },
  extraReducers: {},
});

export default todoSlice.reducer;
export const {todoAdd, todoRemove, todoEdit} = todoSlice.actions
