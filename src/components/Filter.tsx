import { Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { filterChange } from "../store/todoSlice";

export const Filter: FC = () => {
  const [filterValue, setFilterValue] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setFilterValue(newValue);
    switch (newValue) {
      case 0:
        dispatch(filterChange("All"));
        break;
      case 1:
        dispatch(filterChange("Active"));
        break;
      case 2:
        dispatch(filterChange("Done"));
        break;
    }
  };

  return (
    <Tabs
      value={filterValue}
      onChange={handleChange}
      centered
      sx={{
        mb: "1.5rem",
        fontWeight: "600" 
      }}
    >
      <Tab label="All" sx={{ fontWeight: "inherit" }} />
      <Tab label="Active" sx={{ fontWeight: "inherit" }} />
      <Tab label="Done" sx={{ fontWeight: "inherit" }} />
    </Tabs>
  );
};
