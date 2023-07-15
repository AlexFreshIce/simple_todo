import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Checkbox, IconButton, ListItem } from "@mui/material";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { todoChecked, todoEdit, todoRemove } from "../store/todoSlice";
import { CustomTextArea } from "./CustomTextArea";

type ItemTodoType = {
  itemID: string;
  value: string;
  isChecked: boolean;
  isLastItem: boolean;
};

export const ItemTodo: FC<ItemTodoType> = ({
  value,
  itemID,
  isLastItem,
  isChecked,
}) => {
  const [todoValue, setTodoValue] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

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

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoValue(e.target.value);
  };

  const onDeleteButtonClick = () => {
    dispatch(todoRemove(itemID));
  };

  const onCheckBoxToggle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(todoChecked({ id: itemID, value: e.target.checked }));
  };

  return (
    <ListItem divider={!isLastItem} sx={{ pl: "6px", pr: "1.1rem" }}>
      <Checkbox checked={isChecked} onChange={onCheckBoxToggle} />
      <CustomTextArea
        textareaRef={textareaRef}
        value={todoValue}
        id={itemID}
        onTextAreaChange={onTextAreaChange}
        onSaveButtonClick={onSaveButtonClick}
        isChecked={isChecked}
        isEditMode={editMode}
      />
      <IconButton
        edge="end"
        aria-label="delete"
        color="primary"
        sx={{ mr: "0.2rem" }}
        onClick={editMode ? onSaveButtonClick : onEditButtonClick}
      >
        {editMode ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
      </IconButton>
      <IconButton
        edge="end"
        aria-label="delete"
        color="primary"
        onClick={onDeleteButtonClick}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </ListItem>
  );
};
