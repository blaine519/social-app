import React from "react";
//import Spinner from "react-spinkit";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../likedMessages/LikedMessages.css";
import DataService from "../../dataService";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class LikedMessages extends React.Component {
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
    return this.client.mostLikedMessages().then((result) => {
      this.setState({
        messages: result.data.messages,
      });
      this.getListOfMessages();
    });
  }

  render() {
    return (
      <div className="pageWrap">
        <h1>Most Liked Quacks</h1>
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
                            className="Avatar2"
                            src="https://www.shareicon.net/data/512x512/2015/10/18/658216_duck_512x512.png"
                            alt="Icon"
                          ></img>
                          <div className="MessageText">
                            Message: {message.text}
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

export default userIsAuthenticated(LikedMessages);
