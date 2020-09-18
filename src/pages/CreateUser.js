import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Link to="/">Go Home</Link>
        <h2>Create User</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
