import React from "react";
import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./SetPicture.css";
import DataService from "../../dataService";

class SetPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      string: "",
    };
    this.client = new DataService();
  }

  handlePicture = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.client.UserPicture(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="PictureForm">
        <form id="picture-form" onSubmit={this.handlePicture}>
          <label htmlFor="message">Picture</label>
          <input
            type="picture"
            name="string"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default userIsAuthenticated(SetPicture);
