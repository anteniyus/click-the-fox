import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import "@fontsource/roboto/500.css";
import AppTheme from "./AppTheme";
import MainScreen from "./screens/Main/Main";

function App() {
  return (
    <AppTheme>
      <CssBaseline />

      <div className="App">
        <div className="App-body">
          <MainScreen />
        </div>
      </div>
    </AppTheme>
  );
}

export default App;
