import { Button, Grid, Paper, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { todoAdd } from "../store/todoSlice";

export const InputTodo: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isDoneFilter = useSelector(
    (state: RootState) => state.filter === "Done"
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onButtonClick = () => {
    if (inputValue) {
      dispatch(todoAdd(inputValue));
      setInputValue("");
    }
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && inputValue) {
      dispatch(todoAdd(inputValue));
      setInputValue("");
    }
  };

  return isDoneFilter ? null : (
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
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
            fullWidth
          />
        </Grid>
        <Grid xs={2} item>
          <Button fullWidth variant="outlined" onClick={onButtonClick}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
