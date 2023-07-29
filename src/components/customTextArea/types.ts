import { ChangeEvent, MutableRefObject } from "react";

type onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => void;

type onSaveButtonClick = () => void;

export type CustomTextAreaType = {
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
  value: string;
  onTextAreaChange: onTextAreaChange;
  onSaveButtonClick: onSaveButtonClick;
  isChecked: boolean;
  isEditMode: boolean;
};

