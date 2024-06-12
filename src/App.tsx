import  React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./context/ColorModeContext";
import { CssBaseline, Grid, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeafFleatMap from "./pages/leafFleatMap/LeafFleatMap";
import ReactMapGl from "./pages/react-map-gl";

function MyApp() {

  return (
      <BrowserRouter>
    <Stack sx={{display:'flex', flexDirection:'column', rowGap:'.1rem'}}   className="app">
        {/* Navbar */}
      <Grid item xs={12}>
          <Navbar />
      </Grid>
        
        {/* main */}
      <Grid item xs={12}>
      <Routes>
              <Route path={'/leaf-flet'} element={<LeafFleatMap/>} />
              <Route path={'/react-map-gl'} element={<ReactMapGl/>} />
              {/* <Route path={'/leaf-flet'} element={<LeafFleatMap/>} /> */}
              {/* <Route path={'/leaf-flet'} element={<LeafFleatMap/>} /> */}
              {/* <Route path={'/leaf-flet'} element={<LeafFleatMap/>} /> */}

              
        </Routes>
      </Grid>

    </Stack>
      </BrowserRouter>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"dark" | "light">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
