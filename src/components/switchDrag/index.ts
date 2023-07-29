import { FC } from "react";
import { useSelector } from "react-redux";
import { isFilterAllSelector } from "../../store/todoSlice";
import { SwitchDragComponent } from "./SwitchDragComponent";
import { SwitchDragType } from "./types";

export const SwitchDrag: FC<SwitchDragType> = (props) => {
  const isFilterAll = useSelector(isFilterAllSelector);
  return SwitchDragComponent({ ...props, isFilterAll });
};
