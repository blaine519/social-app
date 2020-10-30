import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import "./Home.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Row>
          <Col>
            <h2 className="Login">Login</h2>
            <LoginForm />
          </Col>
          <Col>
            <h2 className="Squeaky">Keep It Squeaky Clean</h2>
          </Col>
          <Col>
            <Link to="/CreateUser">
              <h3 className="Create">Create User</h3>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
