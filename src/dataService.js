//import the axios HTTP client to communicate with the API
import axios from "axios";
import {
  handleJsonResponse,
  jsonHeaders,
} from "./redux/actionCreators/constants";
import { store } from "./redux";

// const { username, token } = store.getState().auth.login.result;

class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  makeMessage(messageData) {
    console.log(this.url);
    const logIn = JSON.parse(localStorage.getItem("login"));
    fetch(this.url + "/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${logIn.result.token}`,
        ...jsonHeaders,
      },
      body: JSON.stringify(messageData),
    })
      .then(handleJsonResponse)
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  getUsername() {
    const { username } = store.getState().auth.login.result;
    return username;
  }
  getToken() {
    const { token } = store.getState().auth.login.result;
    return token;
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
  }

  getUserPicture(userData) {
    return this.client.get(this.url + "/users/" + userData + "/picture");
  }
  userPicture(formData) {
    const imageURL = this.url + `/users/${this.getUsername()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.put(imageURL, formData, config);
  }
  mostLikedMessages() {
    return this.client.get(this.url + "/messages?limit=15");
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }

  deleteUsers() {
    const deleteURL = this.url + `/users/${this.getUsername()}`;
    return this.client.delete(deleteURL);
  }

  getMessage() {
    return this.client.get(this.url + "/messages?limit=15");
  }
}
export default DataService;
