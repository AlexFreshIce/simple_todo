/** @jsxImportSource @emotion/react */

import { ChangeEvent, FC, LegacyRef } from "react";

type CustomTextAreaType = {
  textareaRef: LegacyRef<HTMLTextAreaElement> | null;
  value: string;
  id: string;
  onTextAreaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveButtonClick: () => void;
  isChecked: boolean;
  isEditMode: boolean;
};

export const CustomTextArea: FC<CustomTextAreaType> = (props) => {
  const {
    textareaRef,
    value,
    id,
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
      css={{
        display: "grid",
        width: "100%",
        fontSize: "1rem",
        border: "none",
        resize: "none",
        boxSizing: "border-box",
        fontFamily: "inherit",
        overflow: "hidden",
        outline: isEditMode ? "auto" : "none",
        outlineColor: "#1976d2",
        filter: isChecked ? "opacity(0.8)" : "opacity(1)",
        fontWeight: isChecked ? "200" : "inherit",
      }}
      value={value}
      id={id}
      onChange={onTextAreaChange}
      onBlur={onSaveButtonClick}
    ></textarea>
  );
};
