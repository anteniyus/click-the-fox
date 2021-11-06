import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { Colors } from "./constants/ColorPalette";

const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: Colors.YELLOW_CYBER },
    },
    typography: {
      fontSize: 12,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
    </ThemeProvider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTheme;
