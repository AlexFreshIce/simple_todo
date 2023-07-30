export type TodoType = {
  id: string;
  isChecked: boolean;
  content: string;
};

export type TodoStateType = {
  todos: TodoType[];
  filter: string;
};
