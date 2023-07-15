import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <AppBar
      position="relative"
      sx={{ mb: "1.5rem", width: `calc(100% + 20px)`, left: "-10px" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          Simple Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
