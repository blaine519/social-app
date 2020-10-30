import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";
import DataService from "../../dataService";
import Dropdown from "react-bootstrap/Dropdown";
import Popover from "react-bootstrap/Popover";
import PopoverContent from "react-bootstrap/PopoverContent";
import PopoverTitle from "react-bootstrap/PopoverTitle";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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
    const popover = (
      <Popover id="popover-basic">
        <PopoverTitle className="Title" as="h3">
          Thanks for Visiting
        </PopoverTitle>
        <PopoverContent className="Content">
          <h3> As always Keep on Quackin!</h3>
        </PopoverContent>
      </Popover>
    );
    const Example = () => (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="Popover" variant="success">
          Click me to see
        </Button>
      </OverlayTrigger>
    );
    return (
      <div className="DeleteUser">
        <div>
          <h3>Delete User</h3>
          <Dropdown className="Dropdown">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Delete
              <br />
              <Example />
            </Dropdown.Toggle>
            <Dropdown.Menu className="Menu3">
              <Dropdown.Item onClick={this.handleDelete}>
                <h4>Yes</h4>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <h4>No</h4>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(DeleteUser);
