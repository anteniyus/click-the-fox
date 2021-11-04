import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import store from "./store/store";

import "./App.css";

import "@fontsource/roboto/500.css";
import AppTheme from "./AppTheme";
import MainScreen from "./screens/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <CssBaseline />

        <div className="App">
          <div className="App-body">
            <MainScreen />
          </div>
        </div>
      </AppTheme>
    </Provider>
  );
}

export default App;
