import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Stack } from "@mui/material";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";


export const IngresoVisacion = () => {
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
