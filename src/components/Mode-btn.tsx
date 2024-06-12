import React from "react";
import { ColorModeContext } from "../context/ColorModeContext";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


const ModeBtn = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
   >

    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit">
      {theme.palette.mode === "dark" ? (
   <MdDarkMode />
      ) : (
        <MdLightMode />
      )}
    </IconButton>
  </Box>
  )
}

export default ModeBtn