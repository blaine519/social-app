import React from "react";
import { Button, Form } from "react-bootstrap";
import UpdateUserService from "../../UpdateUserService";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UpdateUser.css";
import Modal from "react-bootstrap/Modal";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      password: "",
      about: "",
      displayName: "",
    };

    this.UpdateUserService = new UpdateUserService();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    const updateData = {
      password: this.state.password,
      about: this.state.about,
      displayName: this.state.displayName,
    };
    this.UpdateUserService.updateInfo(updateData)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
    this.setState({ submitted: true });
  };

  handleReset = (event) => {
    this.setState({
      submitted: false,
      about: "",
      displayName: "",
      password: "",
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="UpdateUser">
          <h3>Thank You for Updating Your User Information!</h3>
          <br />
          <Button onClick={this.handleReset}>Reset Form</Button>
        </div>
      );
    }

    return (
      <div className="UpdateUser">
        <Form className="Update" onSubmit={this.handleUpdateUserInfo}>
          <Modal.Dialog className="Dialog">
            <Modal.Header className="Header">
              <Modal.Title>
                <img
                  className="Avatar3"
                  src="https://th.bing.com/th/id/OIP.F149byFzaScS-qh5RVI3rQHaH_?pid=Api&rs=1"
                  alt="Icon"
                ></img>
                <h2>Update User</h2>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="Body">
              <Form.Group>
                <Form.Label size="large" color="blue">
                  Create new password:
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Body className="Body">
              <Form.Group>
                <Form.Label size="large" color="blue">
                  New display name:
                </Form.Label>
                <Form.Control
                  type="text"
                  name="displayName"
                  onChange={this.handleChange}
                  required
                  minLength="3"
                  maxLength="20"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Body className="Body">
              <Form.Group>
                <Form.Label size="large" color="blue">
                  Update your "about me":
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="about"
                  onChange={this.handleChange}
                  required
                  maxLength="255"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="Footer">
              <Button
                className="Button"
                variant="primary"
                onSubmit={this.handleUpdateUserInfo}
                type="submit"
              >
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
          {/* <Button className="Update" type="submit">
            Update
          </Button> */}
        </Form>
      </div>
    );
  }
}

export default userIsAuthenticated(UpdateUser);
