import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { FilterComponentType } from "./types";

const TAB_STYLES = { fontWeight: "inherit" };

export const FilterComponent: FC<FilterComponentType> = (props) => {
  const { filterValue, handleChange } = props;
  return (
    <Tabs
      value={filterValue}
      onChange={handleChange}
      centered
      sx={{ mb: "1.5rem", fontWeight: "700" }}
    >
      <Tab label="All" sx={TAB_STYLES} />
      <Tab label="Active" sx={TAB_STYLES} />
      <Tab label="Done" sx={TAB_STYLES} />
    </Tabs>
  );
};
