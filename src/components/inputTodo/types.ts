import { ChangeEvent, KeyboardEvent } from "react";

export type onInputChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

export type onInputKeyDownType = (e: KeyboardEvent<HTMLInputElement>) => void;

export type InputTodoComponentType = {
  inputValue: string;
  filter: string;
  onInputChange: onInputChangeType;
  onInputKeyDown: onInputKeyDownType;
  onButtonClick: () => void;
};
