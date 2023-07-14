/** @jsxImportSource @emotion/react */

import "typeface-roboto";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { InputTodo } from "../components/InputTodo";
import { ListTodo } from "../components/ListTodo";

export default function App() {
  return (
    <div
      css={{ maxWidth: 840, minWidth: 320, margin: "auto", padding: "0 10px" }}
    >
      <Header />
      <Filter />
      <InputTodo />
      <ListTodo />
    </div>
  );
}
