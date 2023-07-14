import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Paper, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";

export default function ListTodo() {
  const [checked, setChecked] = useState([0]);

  const items = [0, 1, 2, 3];
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
      }}
    >
      <List>
        {items.map((value, index) => {
          return (
            <ListItem divider={index !== items.length - 1}>
              <Checkbox />
              <Typography sx={{ flexGrow: 1 }} key={index}>
                {value}
              </Typography>
              <IconButton edge="end" aria-label="delete" color="primary">
                <EditOutlinedIcon />
              </IconButton>{" "}
              <IconButton edge="end" aria-label="delete" color="primary">
                <DeleteOutlinedIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
