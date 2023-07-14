import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Filter() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      sx={{
        mb: "2rem",
      }}
    >
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Done" />
    </Tabs>
  );
}
