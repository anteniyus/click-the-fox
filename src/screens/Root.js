import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeForm from "./Welcome/Form";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={WelcomeForm} />
    </Switch>
  </Router>
);

export default ScreensRoot;
