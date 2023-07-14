import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ItemTodo } from "./ItemTodo";

export const ListTodo: FC = () => {

  const todos = useSelector((state: RootState) => state.todoSlice.todos);
  return !todos.length ? null : (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
      }}
    >
      <List>
        {todos.map((todo: any, index: number) => {
          return (
            <ItemTodo
              key={todo.id}
              value={todo.content}
              itemID={todo.id}
              isLastItem={index === todos.length - 1}
            />
          );
        })}
      </List>
    </Paper>
  );
};
