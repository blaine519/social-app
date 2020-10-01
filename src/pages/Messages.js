import React from "react";
import CreateMessage from "../components/createMessage/CreateMessage";
import Menu from "../components/menu/Menu";
import MessageList from "../components/messageList/MessageList";
import { userIsAuthenticated } from "../redux/HOCs";
import LikedMessages from "../components/likedMessages/LikedMessages";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Message</h2>
        <CreateMessage />
        <MessageList />
        <div>
          <LikedMessages />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
