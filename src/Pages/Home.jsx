import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Sidebar} from '../components/Sidebar'
import { Navbar} from '../components/Navbar'
import React from "react";
import { Main } from "../components/Main";

export const Home = () => {
    const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Main />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
