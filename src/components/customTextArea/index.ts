import { FC } from "react";
import { CustomTextAreaComponent } from "./CustomTextAreaComponent";
import { CustomTextAreaType } from "./types";

export const CustomTextArea: FC<CustomTextAreaType> = (props) => {
  return CustomTextAreaComponent(props);
};
