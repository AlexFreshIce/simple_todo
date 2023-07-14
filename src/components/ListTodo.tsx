import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { FC, useState } from "react";
import { ItemTodo } from "./ItemTodo";

export const ListTodo: FC = () => {
  const [checked, setChecked] = useState([0]);

  const items = [
    "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ipsa provident eveniet dignissimos exercitationem hic dolorum sit officiis officia.",
    "1",
    "2",
    "3",
  ];
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
      }}
    >
      <List>
        {items.map((value: string, index: number) => {
          const itemID = value[0] + index;
          return (
            <ItemTodo
              key={itemID}
              value={value}
              itemID={itemID}
              isLastItem={index === items.length - 1}
            />
          );
        })}
      </List>
    </Paper>
  );
};
