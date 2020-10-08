import React from "react";
//import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./MessageList.css";
import DataService from "../../dataService";
import Button from "react-bootstrap/Button";
import CreateMessage from "../createMessage/CreateMessage";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: null,
          text: "",
          username: "",
          createdAt: "",
          likes: [
            {
              id: null,
              username: "",
              messageId: null,
              createdAt: "",
            },
          ],
        },
      ],
    };

    this.client = new DataService();
  }

  componentDidMount() {
    this.getListOfMessages();
  }

  getListOfMessages() {
    return this.client.getMessage().then((result) => {
      this.setState({
        messages: result.data.messages,
      });
    });
  }

  messageLiked(messageLike, messageId) {
    let loginUsername = JSON.parse(window.localStorage.getItem("login"));

    if (
      messageLike.some(
        (data) => data.username === loginUsername.result.username
      )
    ) {
      this.getListOfMessages();
    } else {
      this.client.messageLike(messageId).then((result) => {
        this.getListOfMessages();
      });
    }
  }

  render() {
    return (
      <div className="pageWrap">
        <h1>Quacks</h1>
        <div className="Menu"></div>
        <div className="MessageList">
          <div className="hide">{JSON.stringify(this.state)}</div>
          {this.state.messages.map((message) => (
            <div key={message.id} className="MessageWrap">
              <div className="UserName">User Name: {message.username}</div>
              <div className="MessageText">Message: {message.text}</div>
              <div className="MessageLikeButton">
                <Button
                  variant="primary"
                  onClick={() => {
                    this.messageLiked(message.likes, message.id);
                  }}
                >
                  Like
                </Button>
              </div>

              <div className="LikeWrap">
                <div className="LikesTitle">Likes: {message.likes.length}</div>
                {message.likes.map((like) => (
                  <div key={like.id} className="LikesUserName">
                    {like.username}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageList);
