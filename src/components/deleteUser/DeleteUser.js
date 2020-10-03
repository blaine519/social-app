import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";
import DataService from "../../dataService";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

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
          <Button variant="danger" type="submit" onClick={this.handleDelete}>
            <Spinner animation="grow" variant="warning" />
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);
