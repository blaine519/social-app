import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <Menu />
        </Row>
        <Row>
          <Col>
            <h2>Keep It Squeaky Clean</h2>
            <Figure>
              <FigureImage
                className="Ducks"
                width={500}
                height={500}
                alt="171x180"
                src="https://cdn.pixabay.com/photo/2018/05/18/21/01/rubber-ducks-3412065_960_720.jpg"
              />
              <FigureCaption className="Quack">
                <h1>Keep Your Ducks In A Row!</h1>
              </FigureCaption>
            </Figure>
            <Figure>
              <FigureImage
                className="Elvis"
                width={500}
                height={500}
                alt="171x180"
                src="https://cdn.shopify.com/s/files/1/0604/4801/products/Elvis_1-min-min.jpg?v=1524977157"
              />
              <FigureCaption className="Hunk">
                <h1>Hunk Hunk Burnin Ducky</h1>
              </FigureCaption>
            </Figure>
          </Col>
          <Col>
            <Link to="/CreateUser">
              <Button variant="primary">Create User</Button>
            </Link>
            <h2>Login</h2>
            <LoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
