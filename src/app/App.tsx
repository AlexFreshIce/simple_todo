import { CssBaseline, GlobalStyles, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";
import "typeface-roboto";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { InputTodo } from "../components/InputTodo";
import { ListTodo } from "../components/ListTodo";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Root = styled("div")({
  maxWidth: "840px",
  minWidth: "320px",
  margin: "auto",
  padding: "0 10px",
});

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 320,
            sm: 380,
            md: 480,
            lg: 580,
            xl: 840,
          },
        },
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // theme = responsiveFontSizes(theme);

  const Global = {
    html: {
      fontSize: "110%",
      [theme.breakpoints.down("xl")]: {
        fontSize: "100%",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "95%",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "90%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "85%",
      },
    },
  };

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode((prevMode) => !prevMode);
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={Global} />
        <Root>
          <Header />
          <Filter />
          <InputTodo />
          <ListTodo />
        </Root>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
