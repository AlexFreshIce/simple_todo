import { AppBar, Toolbar, Typography } from "@mui/material";
import { ToggleTheme } from "../toggleTheme";

export const HeaderComponent = () => {
  return (
    <AppBar
      position="relative"
      sx={(theme) => ({
        mb: "1.5rem",
        width: `calc(100% + 20px)`,
        left: "-10px",
        backgroundColor: theme.palette.primary.dark,
      })}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          align="center"
          sx={{ flexGrow: 1, pl: `51px` }}
        >
          Simple Todo List
        </Typography>
        <ToggleTheme />
      </Toolbar>
    </AppBar>
  );
};
