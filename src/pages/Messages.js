import React from "react";
import CreateMessage from "../components/createMessage/CreateMessage";
import Menu from "../components/menu/Menu";
import MessageList from "../components/messageList/MessageList";
import { userIsAuthenticated } from "../redux/HOCs";
// import LikedMessages from "../components/likedMessages/LikedMessages";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Messages.css";

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="Message">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Add a Quacks</h2>
        <Row>
          <Col>
            <CreateMessage />
          </Col>
          <Col>
            <Figure>
              <FigureImage
                className="Devil"
                width={350}
                height={350}
                alt="171x180"
                src="https://cdn.shopify.com/s/files/1/2046/8557/products/archie-mcphee-devil-duckie-bath-toy-yellow-octopus-30791556106_2000x2000.jpg?v=1508264549"
              />
              <FigureCaption className="Horns">
                <h3>The Devil Is In The Duck</h3>
              </FigureCaption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <FigureImage
                className="Frankenstein"
                width={350}
                height={350}
                alt="171x180"
                src="https://amsterdamduckstore.com/wp-content/uploads/2018/10/Frankenstein-rubber-duck-front-Amsterdam-Duck-Store.jpg"
              />
              <FigureCaption className="Purple">
                <h3>Franken Ducky</h3>
              </FigureCaption>
            </Figure>
          </Col>
        </Row>
        <MessageList />
        <div>{/* <LikedMessages /> */}</div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
