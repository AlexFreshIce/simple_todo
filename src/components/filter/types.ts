import { SyntheticEvent } from "react";

export type handleChangeType = (e: SyntheticEvent, newValue: number) => void;

export type FilterComponentType = {
  filterValue: number;
  handleChange: handleChangeType;
};
