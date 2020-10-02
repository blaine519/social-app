import React from "react";
//import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./SetPicture.css";
import DataService from "../../dataService";

class SetPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      formData: null,
      url: `https://socialapp-api.herokuapp.com/`,
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client.getUserPicture(this.client.getUsername()).then((result) => {
      this.setState({
        picture: result.config.url,
      });
    });
  }

  updatePicture() {
    const timeStamp = Date.now();
    const url = `https://socialapp-api.herokuapp.com/users/${this.client.getUsername()}/picture?t=${timeStamp}`;
    this.setState({ picture: url });
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("picture", file);

    this.setState({ formData }, this.handlePicture);
  };

  setFallbackImage = (e) => {
    e.target.src = "https://www.gravatar.com/avatar/?d=mp";
  };

  handlePicture = (e) => {
    console.log(this.state.formData);
    if (this.state.formData === null) return;
    this.client.userPicture(this.state.formData).then((response) => {
      if (response.data.statusCode === 200) {
        this.updatePicture();
      }
    });
  };

  render() {
    //const { loading, error } = this.props;
    return (
      <div className="PictureForm">
        <form id="picture-form">
          <label htmlFor="picture">Choose a Profile Picture</label>
          <input
            type="file"
            accept="image/jpeg, image/gif, image/png"
            capture="user"
            name="picture"
            onChange={this.handleChange}
          />
          <div className="image-preview">
            <img
              alt="user"
              src={this.state.picture}
              onError={this.setFallbackImage}
              width={200}
            />
          </div>
          {/* <button onClick={this.handlePicture}>Submit</button> */}
        </form>
        {/* {loading && <Spinner name="circle" color="blue" />} */}
        {/* {error && <p style={{ color: "red" }}>{error.message}</p>} */}
      </div>
    );
  }
}

export default userIsAuthenticated(SetPicture);
