import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { FC } from "react";
import { ToggleThemeComponentType } from "./types";

export const ToggleThemeComponent: FC<ToggleThemeComponentType> = (props) => {
  const { theme, toggleColorMode } = props;
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
