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
  maxWidth: "840px",
  minWidth: "320px",
  margin: "auto",
  padding: "0 10px",
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
