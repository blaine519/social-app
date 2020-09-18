import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Link to="/CreateUser">Create User</Link>
        <h2>Keep It Squeaky Clean</h2>
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
