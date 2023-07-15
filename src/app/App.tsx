/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";
import "typeface-roboto";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { InputTodo } from "../components/InputTodo";
import { ListTodo } from "../components/ListTodo";

const GlobalStyles = css`
  html {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    html {
      font-size: 17px;
    }
  }
  @media (max-width: 480px) {
    html {
      font-size: 16px;
    }
  }
  @media (max-width: 380px) {
    html {
      font-size: 15px;
    }
  }
`;

const AppStyles = css({
  display: "block",
  width: "100%",
  fontSize: "1rem",
  border: "none",
  resize: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  overflow: "hidden",
  outlineColor: "#1976d2",
});

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div css={AppStyles}>
        <Header />
        <Filter />
        <InputTodo />
        <ListTodo />
      </div>
    </>
  );
}
