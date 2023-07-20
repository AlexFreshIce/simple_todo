/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ChangeEvent, FC, LegacyRef } from "react";

type CustomTextAreaType = {
  textareaRef: LegacyRef<HTMLTextAreaElement> | null;
  value: string;
  onTextAreaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveButtonClick: () => void;
  isChecked: boolean;
  isEditMode: boolean;
};

const CustomTextAreaStyles = css({
  display: "block",
  width: "100%",
  fontSize: "1rem",
  border: "none",
  resize: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  overflow: "hidden",
  outlineColor: "#1976d2",
});

export const CustomTextArea: FC<CustomTextAreaType> = (props) => {
  const {
    textareaRef,
    value,
    onTextAreaChange,
    onSaveButtonClick,
    isChecked,
    isEditMode,
  } = props;

  return (
    <textarea
      ref={textareaRef}
      rows={1}
      readOnly
      autoComplete="on"
      value={value}
      onChange={onTextAreaChange}
      onBlur={onSaveButtonClick}
      css={[
        {
          outline: isEditMode ? "auto" : "none",
          opacity: isChecked ? "0.8" : "1",
          fontWeight: isChecked ? "200" : "inherit",
        },
        CustomTextAreaStyles,
      ]}
    ></textarea>
  );
};
