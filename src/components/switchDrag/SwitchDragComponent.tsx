import { Box, FormControlLabel, Switch } from "@mui/material";
import { FC } from "react";
import { SwitchDragComponentType } from "./types";

export const SwitchDragComponent: FC<SwitchDragComponentType> = (props) => {
  
  const { isChecked, isFilterAll, onSwitchChange } = props;

  return isFilterAll ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        height: "2rem",
        m: "0.5rem",
      }}
    >
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={onSwitchChange} />}
        label="Allow reorder"
        labelPlacement="start"
      />
    </Box>
  ) : null;
};
