import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        mb: "2rem"
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
}


