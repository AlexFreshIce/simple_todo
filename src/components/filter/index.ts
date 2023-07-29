import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { filterChange } from "../../store/todoSlice";
import { FilterComponent } from "./FilterComponent";
import { handleChangeType } from "./types";

export const Filter: FC = () => {
  const [filterValue, setFilterValue] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const onFilterChange = (filter: string) => {
    dispatch(filterChange(filter));
  };

  const handleChange: handleChangeType = (e, newValue) => {
    setFilterValue(newValue);
    switch (newValue) {
      case 0:
        onFilterChange("All");
        break;
      case 1:
        onFilterChange("Active");
        break;
      case 2:
        onFilterChange("Done");
        break;
    }
  };

  return FilterComponent({ filterValue, handleChange });
};
