import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";
import CreateUser from "./pages/CreateUser";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/Messages" component={Messages} />
        <Route exact path="/CreateUser" component={CreateUser} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
