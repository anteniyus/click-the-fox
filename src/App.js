import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/store";

import "./App.css";

import "@fontsource/roboto/500.css";
import AppTheme from "./AppTheme";
import MainScreen from "./screens/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppTheme>
          <CssBaseline />

          <div className="App">
            <div className="App-body">
              <MainScreen />
            </div>
          </div>
        </AppTheme>
      </PersistGate>
    </Provider>
  );
}

export default App;
