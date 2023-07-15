import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TodoType } from "../store/todoSlice";
import { ItemTodo } from "./ItemTodo";

export const ListTodo: FC = () => {
  const todos = useSelector((state: RootState) => {
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
  });

  return !todos.length ? null : (
    <Paper elevation={3} sx={{ mb: "2rem" }}>
      <List>
        {todos.map((todo: TodoType, index: number) => {
          return (
            <ItemTodo
              key={todo.id}
              itemID={todo.id}
              value={todo.content}
              isChecked={todo.isChecked}
              isLastItem={index === todos.length - 1}
            />
          );
        })}
      </List>
    </Paper>
  );
};
