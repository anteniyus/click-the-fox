import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import "@fontsource/roboto/500.css";
import { Card, Typography } from "@mui/material";
import AppTheme from "./AppTheme";
import ScreensRoot from "./screens/Root";

function App() {
  return (
    <AppTheme>
      <CssBaseline />

      <div className="App">
        <div className="App-body">
          <Card>
            <Typography component="p">Click the Fox! Game</Typography>
            <ScreensRoot />
          </Card>
        </div>
      </div>
    </AppTheme>
  );
}

export default App;
