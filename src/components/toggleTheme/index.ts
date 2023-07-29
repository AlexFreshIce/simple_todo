import { useTheme } from "@mui/material/styles";
import { FC, useContext } from "react";
import { ColorModeContext } from "../../app/App";
import { ToggleThemeComponent } from "./ToggleThemeComponent";

export const ToggleTheme: FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return ToggleThemeComponent({ theme, toggleColorMode });
};
