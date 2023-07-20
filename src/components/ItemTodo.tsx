import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Checkbox, IconButton, ListItem } from "@mui/material";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import {
  isFilterAllSelector,
  todoChecked,
  todoEdit,
  todoRemove,
} from "../store/todoSlice";
import { CustomTextArea } from "./CustomTextArea";

type ItemTodoType = {
  index: number;
  itemID: string;
  value: string;
  isChecked: boolean;
  isLastItem: boolean;
};

export const ItemTodo: FC<ItemTodoType> = ({
  index,
  value,
  itemID,
  isLastItem,
  isChecked,
}) => {
  const [todoValue, setTodoValue] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const isFilterAll = useSelector(isFilterAllSelector);

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
    <Draggable
      key={itemID}
      draggableId={itemID}
      index={index}
      isDragDisabled={!isFilterAll}
    >
      {(provided) => (
        <ListItem
          divider={!isLastItem}
          sx={{ p: "0.5rem 0.25rem" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Checkbox checked={isChecked} onChange={onCheckBoxToggle} />

          <CustomTextArea
            textareaRef={textareaRef}
            value={todoValue}
            onTextAreaChange={onTextAreaChange}
            onSaveButtonClick={onSaveButtonClick}
            isChecked={isChecked}
            isEditMode={editMode}
          />

          <IconButton
            aria-label={editMode ? "save" : "edit"}
            color="primary"
            onClick={editMode ? onSaveButtonClick : onEditButtonClick}
          >
            {editMode ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
          </IconButton>

          <IconButton
            aria-label="delete"
            color="primary"
            onClick={onDeleteButtonClick}
          >
            <DeleteOutlinedIcon />
          </IconButton>

          {isFilterAll ? (
            <IconButton
              aria-label="drag"
              color="primary"
              {...provided.dragHandleProps}
            >
              <DragHandleOutlinedIcon />
            </IconButton>
          ) : null}
        </ListItem>
      )}
    </Draggable>
  );
};
