import React from "react";
import Menu from "../components/menu/Menu";
import SetPicture from "../components/setPicture/SetPicture";
import { userIsAuthenticated } from "../redux/HOCs";
import UpdateUser from "../components/updateUser/UpdateUser";
import "./Profile.css";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Row>
          <Col>
            <SetPicture />
          </Col>
          <Col>
            <Figure>
              <FigureImage
                className="Rudolph"
                width={250}
                height={250}
                alt="171x180"
                src="https://www.amsterdamduckstore.com/wp-content/uploads/2015/10/rendeer-rubber-duck-front.jpg"
              />
              <FigureCaption className="Red">
                <h3>Rudolph The Red Nose Duck</h3>
              </FigureCaption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <FigureImage
                className="Prince"
                width={250}
                height={250}
                alt="171x180"
                src="https://cdn11.bigcommerce.com/s-nf2x4/products/174/images/8628/1999-Rubber-Celebriducks-2__07381.1568053814.560.850.jpg?c=2"
              />
              <FigureCaption className="Rain">
                <h3>Let's Paddle Likes it's 1999</h3>
              </FigureCaption>
            </Figure>
          </Col>
        </Row>
        <br />
        <UpdateUser />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
