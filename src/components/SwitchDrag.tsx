import { Box, FormControlLabel, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import { isFilterAllSelector } from "../store/todoSlice";
import { FC } from "react";

type SwitchDragType = {
  isChecked: boolean;
  onSwitchChange: () => void;
};

export const SwitchDrag: FC<SwitchDragType> = (props) => {

  const { isChecked, onSwitchChange } = props;

  const isFilterAll = useSelector(isFilterAllSelector);
  
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
        control={
          <Switch checked={isChecked} onChange={onSwitchChange} />
        }
        label="Allow reorder"
        labelPlacement="start"
      />
    </Box>
  ) : null;
};
