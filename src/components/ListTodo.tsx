import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { FC, useState } from "react";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import {
  TodoType,
  filteredTodosSelector,
  todosReorder,
} from "../store/todoSlice";
import { ItemTodo } from "./ItemTodo";
import { SwitchDrag } from "./SwitchDrag";

export const ListTodo: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isAllowDrag, setIsAllowDrag] = useState(false);
  const todos = useSelector(filteredTodosSelector);

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(todosReorder(items));
  };

  const onSwitchChange = () => setIsAllowDrag((prevChecked) => !prevChecked);

  return todos.length ? (
    <>
      <SwitchDrag isChecked={isAllowDrag} onSwitchChange={onSwitchChange} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Paper elevation={3} sx={{ mb: "2rem" }}>
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo: TodoType, index: number) => {
                  return (
                    <ItemTodo
                      key={todo.id}
                      index={index}
                      itemID={todo.id}
                      value={todo.content}
                      isChecked={todo.isChecked}
                      isLastItem={index === todos.length - 1}
                      isAllowDrag={isAllowDrag}
                    />
                  );
                })}
                {provided.placeholder}
              </List>
            </Paper>
          )}
        </Droppable>
      </DragDropContext>
    </>
  ) : null;
};
