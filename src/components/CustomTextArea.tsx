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
    outlineColor: "#1976d2",
    background: "inherit",
    color: `${theme.palette.text.primary}`,
    fontSize: `1rem`,
    outline: isEditMode ? "auto" : "none",
    opacity: isChecked ? "0.8" : "1",
    fontWeight: isChecked ? "200" : "inherit",
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
