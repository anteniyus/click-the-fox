import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeForm from "./Welcome/Form";
import Scoreboard from "./Scoreboard/Scoreboard";
import Play from "./Play/Play";
import { internalPaths } from "../rest/URLs";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path={internalPaths.WELCOME} component={WelcomeForm} exact />
      <Route path={internalPaths.SCOREBOARD} component={Scoreboard} />
      <Route path={internalPaths.PLAY} component={Play} />

      <Route component={WelcomeForm} />
    </Switch>
  </Router>
);

export default ScreensRoot;
