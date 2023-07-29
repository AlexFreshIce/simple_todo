import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Checkbox, IconButton, ListItem } from "@mui/material";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { CustomTextArea } from "../customTextArea";
import { ItemTodoComponentType } from "./types";

export const ItemTodoComponent: FC<ItemTodoComponentType> = (props) => {
  const {
    index,
    todoValue,
    itemID,
    isLastItem,
    isChecked,
    isAllowDrag,
    textareaRef,
    isFilterAll,
    editMode,
    onEditButtonClick,
    onSaveButtonClick,
    onTextAreaChange,
    onDeleteButtonClick,
    onCheckBoxToggle,
  } = props;

  return (
    <Draggable
      key={itemID}
      draggableId={itemID}
      index={index}
      isDragDisabled={!isAllowDrag || !isFilterAll}
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

          {isFilterAll && isAllowDrag ? (
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
