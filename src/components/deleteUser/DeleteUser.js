import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteUsers(this.state).then((result) => {
      console.log(result.data);
    });
    this.client.deleteUsers(this.state).then((result) => {
      console.log(result.data);
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="DeleteUser">
        <div>
          <form id="registration-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleDelete}>
              Delete
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);
