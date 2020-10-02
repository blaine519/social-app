import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";
import DataService from "../../dataService";

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.client = new DataService();
  }

  handleDelete = () => {
    this.client.deleteUsers(this.state).then((result) => {
      console.log(result.data);
      this.setState({
        username: result.data.username,
      });
    });
    window.localStorage.removeItem("login");
    window.location.reload();
  };

  render() {
    return (
      <div className="DeleteUser">
        <div>
          <button type="submit" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);
