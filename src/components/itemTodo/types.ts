import { ChangeEvent } from "react";

export type ItemTodoType = {
  index: number;
  itemID: string;
  value: string;
  isChecked: boolean;
  isLastItem: boolean;
  isAllowDrag: boolean;
};

export type onTextAreaChangeType = (
  e: ChangeEvent<HTMLTextAreaElement>
) => void;
export type onCheckBoxToggleType = (e: ChangeEvent<HTMLInputElement>) => void;

export type ItemTodoComponentType = {
  index: number;
  itemID: string;
  todoValue: string;
  isChecked: boolean;
  isLastItem: boolean;
  isAllowDrag: boolean;
  editMode: boolean;
  isFilterAll: boolean;
  textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  onEditButtonClick: () => void;
  onSaveButtonClick: () => void;
  onTextAreaChange: onTextAreaChangeType;
  onDeleteButtonClick: () => void;
  onCheckBoxToggle: onCheckBoxToggleType;
};
