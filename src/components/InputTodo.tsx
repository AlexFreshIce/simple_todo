import { Button, Grid, Paper, TextField } from "@mui/material";
import { FC } from "react";

export const InputTodo: FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        mb: "2rem",
        padding: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={10} item>
          <TextField
            variant="standard"
            placeholder="Add Todo here"
            // value={inputValue}
            // onChange={onInputChange}
            // onKeyPress={onInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} item>
          <Button
            fullWidth
            variant="outlined"
            // onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
