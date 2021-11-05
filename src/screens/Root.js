import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeForm from "./Welcome/Form";
import UserList from "./User/List";
import Play from "./Play/Play";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={WelcomeForm} exact />
      <Route path="/users" component={UserList} />
      <Route path="/play" component={Play} />
    </Switch>
  </Router>
);

export default ScreensRoot;
