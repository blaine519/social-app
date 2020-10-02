import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleDelete = () => {
    this.client.deleteUsers(this.state).then((result) => {
      console.log(result.data);
      this.setState({
        username: result.data.username,
      });
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
