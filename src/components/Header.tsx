import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        mb: "2rem",
      }}
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
