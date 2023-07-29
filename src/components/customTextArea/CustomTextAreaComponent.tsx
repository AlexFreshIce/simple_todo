import { FC } from "react";
import { CustomTextAreaType } from "./types";
import { StyledTextArea } from "./styledComponents";

export const CustomTextAreaComponent: FC<CustomTextAreaType> = (props) => {
  const {
    textareaRef,
    value,
    onTextAreaChange,
    onSaveButtonClick,
    isChecked = false,
    isEditMode = false,
  } = props;

  return (
    <StyledTextArea
      ref={textareaRef}
      readOnly
      autoComplete="on"
      value={value}
      onChange={onTextAreaChange}
      onBlur={onSaveButtonClick}
      isChecked={isChecked}
      isEditMode={isEditMode}
    />
  );
};
