import React from "react";
import DeleteUser from "../components/deleteUser/DeleteUser";
import Menu from "../components/menu/Menu";
import SetPicture from "../components/setPicture/SetPicture";
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <SetPicture />
        <br />
        <DeleteUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
