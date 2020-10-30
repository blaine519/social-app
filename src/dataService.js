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

  messageLike(messageId) {
    return this.client.post(
      this.url + "/likes",
      { messageId: messageId },
      {
        headers: {
          Authorization: `Bearer ${(this.getUserName(), this.getUserToken())}`,
        },
      }
    );
  }
  deleteLikes(likeID) {
    const LikesURL = this.url + `/likes/likeId=${likeID}${this.getUsername()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(LikesURL, config);
  }
  getUserName() {
    const { username } = store.getState().auth.login.result;

    return username;
  }

  getUserToken() {
    const { token } = store.getState().auth.login.result;

    return token;
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
  mostLikedMessages(limit = 10) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }

  getUsers() {
    return this.client.get(this.url + "/users");
  }
  getAllUsers() {
    const UsersURL = this.url + `/users/${this.getUsername()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.get(UsersURL, config);
  }
  deleteUsers() {
    const deleteURL = this.url + `/users/${this.getUsername()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(deleteURL, config);
  }
  deleteMessage() {
    const deleteQuack = this.url + `/messages/${this.getUsername()}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.delete(deleteQuack, config);
  }
  getMessage(limit = 50) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }
  getUserMessage(limit = 15) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }
}
export default DataService;
