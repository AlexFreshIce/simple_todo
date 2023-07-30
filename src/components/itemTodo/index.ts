import { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import {
  isFilterAllSelector,
  todoChecked,
  todoEdit,
  todoRemove,
} from "../../store/todoSlice";
import { ItemTodoComponent } from "./ItemTodoComponent";
import {
  ItemTodoType,
  onCheckBoxToggleType,
  onTextAreaChangeType,
} from "./types";

export const ItemTodo: FC<ItemTodoType> = (props) => {
  const { index, value, itemID, isLastItem, isChecked, isAllowDrag } = props;
  const [todoValue, setTodoValue] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const isFilterAll = useSelector(isFilterAllSelector);

  const onEditButtonClick = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.readOnly = false;
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.textLength;
      textareaRef.current.selectionEnd = textareaRef.current.textLength;
      setEditMode(true);
    }
  };
  const onSaveButtonClick = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.readOnly = true;
      dispatch(todoEdit({ id: itemID, value: todoValue }));
    }
    setEditMode(false);
  };

  const onTextAreaChange: onTextAreaChangeType = (e) => {
    setTodoValue(e.target.value);
  };

  const onDeleteButtonClick = () => {
    dispatch(todoRemove(itemID));
  };

  const onCheckBoxToggle: onCheckBoxToggleType = (e) => {
    dispatch(todoChecked({ id: itemID, value: e.target.checked }));
  };

  return ItemTodoComponent({
    index,
    todoValue,
    itemID,
    isLastItem,
    isChecked,
    isAllowDrag,
    isFilterAll,
    editMode,
    textareaRef,
    onEditButtonClick,
    onSaveButtonClick,
    onTextAreaChange,
    onDeleteButtonClick,
    onCheckBoxToggle,
  });
};
