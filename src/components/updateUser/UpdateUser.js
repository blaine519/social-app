import React from "react";
import { Form, Button, Header, Input, Label, TextArea} from "semantic-ui-react";
import UpdateUserService from "../../UpdateUserService";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        password: "",
        about: "",
        displayName: "",
    };

    this.UpdateUserService = new UpdateUserService();
  }

  handleChange = (e) => {
    this.setState({
      updateUserInfoObject: { [e.target.name]: e.target.value },
    });
  };

  handleUpdateUserInfo = (event) => {
    event.preventDefault();
    this.UpdateUserService.updateInfo(this.state.updateUserInfoObject).then(
      (result) => {
        console.log(result);
      }
    )
    .catch((error) => console.log(error));
    this.setState({ submitted: true });
  };

  handleReset = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="UpdateUser">
          <Header as="h3">Thank You for Updating Your User Information!</Header>
          <br />
          <Button onClick={this.handleReset}>Reset Form</Button>
        </div>
      );
    }

    return (
      <div className="UpdateUser">
        <Form onSubmit={this.handleUpdateUserInfo}>
          <Form.Field>
            <Label size="large" color="blue">Create new password:</Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">New display name:</Label>
            <Input
              type="text"
              name="displayName"
              onChange={this.handleChange}
              required
              minLength="3"
              maxLength="20"
            />
          </Form.Field>
          <Form.Field>
            <Label size="large" color="blue">Update your "about me":</Label>
            <TextArea
              type="text"
              name="about"
              onChange={this.handleChange}
              required
              maxLength="255"
            />
          </Form.Field>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateUser;