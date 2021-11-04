import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeForm from "./Welcome/Form";
import UserList from "./User/List";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={WelcomeForm} exact />
      <Route path="/users" component={UserList} />
    </Switch>
  </Router>
);

export default ScreensRoot;
