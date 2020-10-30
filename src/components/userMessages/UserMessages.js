import React from "react";
//import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./UserMessages.css";
import DataService from "../../dataService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class UserMessages extends React.Component {
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
    return this.client.getUserMessage().then((result) => {
      this.setState({
        messages: result.data.messages,
      });
      this.getListOfMessages();
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
  deleteMessage() {
    return this.client.deleteMessage().then((result) => {
      console.log(result.data);
      this.getListOfMessages();
    });
  }

  render() {
    return (
      <div className="pageWrap">
        <h1>Users Quacks</h1>
        <InputGroup>
          <Form>
            <Form.Group>
              <Form.Label column lg="">
                <Form.Text>
                  <Row>
                    <div className="Menu"></div>
                    <div className="MessageList">
                      <div className="hide">{JSON.stringify(this.state)}</div>

                      {this.state.messages.map((message) => (
                        <div key={message.id} className="MessageWrap">
                          <div className="UserName">
                            User Name: {message.username}
                          </div>
                          <img
                            className="Avatar"
                            src="https://thumbs.dreamstime.com/b/yellow-rubber-duck-icon-fun-bath-illustration-70823108.jpg"
                            alt="Icon"
                          ></img>
                          <div className="MessageText">
                            Message: {message.text}
                          </div>
                          <div>
                            <Button
                              className="MessageLikeButton"
                              variant="primary"
                              onClick={() => {
                                this.messageLiked(message.likes, message.id);
                              }}
                            >
                              <img
                                className="BlueDuck"
                                src="https://cdn.shopify.com/s/files/1/0604/4801/products/Blue_2.jpeg?v=1514845837"
                              />
                              Like
                            </Button>
                          </div>
                          <div>
                            <Button
                              className="DeleteButton"
                              variant="danger"
                              onClick={() => {
                                this.deleteMessage(message.id);
                              }}
                            >
                              Delete
                            </Button>
                          </div>

                          <div className="LikeWrap">
                            <div className="LikesTitle">
                              Likes:{" "}
                              <a href="#" onClick={this.showDiv}>
                                {message.likes.length}
                              </a>
                            </div>
                            {message.likes.map((like) => (
                              <div
                                key={like.id}
                                id="LikeUsers"
                                className="LikesUserName"
                              >
                                {like.username}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Row>
                </Form.Text>
              </Form.Label>
            </Form.Group>
          </Form>
        </InputGroup>
      </div>
    );
  }
}

export default userIsAuthenticated(UserMessages);
