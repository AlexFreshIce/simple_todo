import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type TodoType = {
  id: string;
  isChecked: boolean;
  content: string;
};

type TodoStateType = {
  todos: TodoType[];
  filter: string;
};

const initialState = {
  todos: [],
  filter: "All",
} as TodoStateType;

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
    todosReorder: (state, { payload }) => {
      state.todos = payload;
    },
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default todoSlice.reducer;
export const {
  todoAdd,
  todoRemove,
  todoEdit,
  todoChecked,
  filterChange,
  todosReorder,
} = todoSlice.actions;

export const filteredTodosSelector = (state: RootState) => {
  switch (state.filter) {
    case "All":
      return state.todos;
    case "Active":
      return state.todos.filter((todo) => !todo.isChecked);
    case "Done":
      return state.todos.filter((todo) => todo.isChecked);
    default:
      return state.todos;
  }
};

export const filterSelector = (state: RootState) => state.filter;
export const isFilterAllSelector = (state: RootState) => state.filter === "All";
