import { Button, Grid, Paper, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { filterSelector, todoAdd } from "../store/todoSlice";

export const InputTodo: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(filterSelector);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && inputValue) {
      dispatch(todoAdd(inputValue));
      setInputValue("");
    }
  };

  const onButtonClick = () => {
    if (inputValue) {
      dispatch(todoAdd(inputValue));
      setInputValue("");
    }
  };

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
