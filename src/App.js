import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import logo from "./logo.svg";
import "./App.css";

import "@fontsource/roboto/300.css";
import AppTheme from "./AppTheme";

function App() {
  return (
    <AppTheme>
      <CssBaseline />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppTheme>
  );
}

export default App;
