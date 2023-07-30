import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { filterSelector, todoAdd } from "../../store/todoSlice";
import { InputTodoComponent } from "./InputTodoComponent";
import { onInputChangeType, onInputKeyDownType } from "./types";

export const InputTodo: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(filterSelector);

  const onInputChange: onInputChangeType = (e) => {
    setInputValue(e.target.value);
  };

  const onInputKeyDown: onInputKeyDownType = (e) => {
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
  return InputTodoComponent({
    inputValue,
    filter,
    onInputChange,
    onInputKeyDown,
    onButtonClick,
  });
};
