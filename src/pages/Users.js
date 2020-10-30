import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Users.css";
import GetUser from "../components/getUser/GetUser";
import UserMessages from "../components/userMessages/UserMessages";

class Users extends React.Component {
  render() {
    return (
      <div className="Users">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Users</h2>
        <Row>
          <Col>
            <UserMessages />
          </Col>
          <Col></Col>
          <Col>
            <GetUser />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Users);
