/** @jsxImportSource @emotion/react */

import "typeface-roboto";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { ListTodo } from "../components/ListTodo";
import { InputTodo } from "../components/InputTodo";

export default function App() {
  return (
    <div css={{ maxWidth: 840, margin: "auto" }}>
      <Header />
      <Filter />
      <InputTodo />
      <ListTodo />
    </div>
  );
}
