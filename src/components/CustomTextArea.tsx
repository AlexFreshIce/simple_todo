import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/material/styles";
import { ChangeEvent, FC, MutableRefObject } from "react";

type CustomTextAreaType = {
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
  value: string;
  onTextAreaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveButtonClick: () => void;
  isChecked: boolean;
  isEditMode: boolean;
};

const StyledTextArea = styled(TextareaAutosize, {
  shouldForwardProp: (prop) => prop !== "isEditMode" && prop !== "isChecked",
})<{ isEditMode: boolean; isChecked: boolean }>(
  ({ theme, isEditMode, isChecked }) => ({
    display: "block",
    width: "100%",
    border: "none",
    resize: "none",
    boxSizing: "border-box",
    fontFamily: `${theme.typography.fontFamily}`,
    overflow: "hidden",
    background: "inherit",
    color: `${theme.palette.text.primary}`,
    fontSize: `1rem`,
    opacity: isChecked ? "0.8" : "1",
    fontWeight: isChecked ? "300" : "inherit",
    outlineColor: theme.palette.primary.main,
    ":focus": {
      outline: isEditMode ? "1" : "0",
      color: isEditMode ? "inherit" : theme.palette.primary.main,
    },
  })
);

export const CustomTextArea: FC<CustomTextAreaType> = (props) => {
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
    ></StyledTextArea>
  );
};
