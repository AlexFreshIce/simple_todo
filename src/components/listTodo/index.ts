import { FC, useState } from "react";
import { OnDragEndResponder } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { filteredTodosSelector, todosReorder } from "../../store/todoSlice";
import { ListTodoComponent } from "./ListTodoComponent";

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

  return ListTodoComponent({ todos, isAllowDrag, onDragEnd, onSwitchChange });
};
