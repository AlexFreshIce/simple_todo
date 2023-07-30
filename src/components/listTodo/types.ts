import { OnDragEndResponder } from "react-beautiful-dnd";
import { TodoType } from "../../store/types";


export type ListTodoComponentType = {
  todos: TodoType[];
  isAllowDrag: boolean;
  onDragEnd: OnDragEndResponder;
  onSwitchChange: () => void;
};
