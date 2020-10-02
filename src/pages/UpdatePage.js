import React from "react";
import UpdateUser from "../components/updateUser/UpdateUser";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

class UpdatePage extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Update</h2>
        <UpdateUser />
      </div>
    );
  }
}

export default userIsAuthenticated(UpdatePage);
