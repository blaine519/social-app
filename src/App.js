import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteUser from "./components/deleteUser/DeleteUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageList from "./components/messageList/MessageList";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/messagelist" component={MessageList} />
        <Route exact path="/DeleteUser" component={DeleteUser} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
