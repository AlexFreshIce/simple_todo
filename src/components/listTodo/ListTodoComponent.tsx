import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { FC } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TodoType } from "../../store/types";
import { ItemTodo } from "../itemTodo";
import { SwitchDrag } from "../switchDrag";
import { ListTodoComponentType } from "./types";

export const ListTodoComponent: FC<ListTodoComponentType> = (props) => {
  const { todos, isAllowDrag, onDragEnd, onSwitchChange } = props;
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
