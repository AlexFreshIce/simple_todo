import { Button, Grid, Paper, TextField } from "@mui/material";
import { FC } from "react";
import { InputTodoComponentType } from "./types";

export const InputTodoComponent: FC<InputTodoComponentType> = (props) => {
  const { inputValue, filter, onInputChange, onInputKeyDown, onButtonClick } =
    props;

  return filter !== "Done" ? (
    <Paper
      elevation={3}
      sx={{ mb: filter === "All" ? "0" : "3rem", p: "1rem" }}
    >
      <Grid container spacing={2}>
        <Grid xs item flexShrink={1}>
          <TextField
            variant="standard"
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
            fullWidth
          />
        </Grid>
        <Grid item width="94px">
          <Button fullWidth variant="outlined" onClick={onButtonClick}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  ) : null;
};
