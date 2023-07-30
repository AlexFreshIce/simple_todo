import { TextareaAutosize, styled } from "@mui/material";

export const StyledTextArea = styled(TextareaAutosize, {
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
      outlineStyle: isEditMode ? "solid" : "none",
      color: isEditMode ? "inherit" : theme.palette.primary.main,
    },
  })
);
