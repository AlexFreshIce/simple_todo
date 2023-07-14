/** @jsxImportSource @emotion/react */

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Checkbox, IconButton, ListItem } from "@mui/material";
import { ChangeEvent, FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { todoRemove } from "../store/todoSlice";

type ItemTodoType = {
  value: string;
  itemID: string;
  isLastItem: boolean;
};

export const ItemTodo: FC<ItemTodoType> = ({ value, itemID, isLastItem }) => {
  const [todoValue, setTodoValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const onEditButtonClick = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.readOnly = false;
      // textareaRef.current.style.height = "0px";
      // const scrollHeight = textareaRef.current.scrollHeight;
      // textareaRef.current.style.height = scrollHeight + "px";
      textareaRef.current.focus();
    }
  };

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoValue(e.target.value);
  };

  const onTextAreaBlur = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.readOnly = true;
    }
  };

  const onDeleteButtonClick = () => {
    console.log("delete", itemID);
    dispatch(todoRemove(itemID));
  };

  return (
    <ListItem divider={!isLastItem} sx={{ pl: "0" }}>
      <Checkbox />
      <textarea
        ref={textareaRef}
        rows={1}
        readOnly
        css={{
          display: "grid",
          width: "100%",
          fontSize: "1rem",
          border: "none",
          resize: "none",
          padding: "1rem 0.5rem",
          boxSizing: "border-box",
          fontFamily: "inherit",
        }}
        value={todoValue}
        id={itemID}
        onChange={onTextAreaChange}
        onBlur={onTextAreaBlur}
      ></textarea>
      <IconButton
        edge="end"
        aria-label="delete"
        color="primary"
        sx={{ mr: "0.2rem" }}
        onClick={onEditButtonClick}
      >
        <EditOutlinedIcon />
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
