import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <Link to="/CreateUser">Create User</Link>
        <h2>Keep It Squeaky Clean</h2>
        <Figure>
          <FigureImage
            className="Ducks"
            width={500}
            height={500}
            alt="171x180"
            src="https://cdn.pixabay.com/photo/2018/05/18/21/01/rubber-ducks-3412065_960_720.jpg"
          />
          <FigureCaption>
            <h1>Keep Your Ducks In A Row!</h1>
          </FigureCaption>
        </Figure>
        <LoginForm />
        <Figure>
          <FigureImage
            className="Trump"
            width={500}
            height={500}
            alt="171x180"
            src="http://cdn.shopify.com/s/files/1/1114/0068/products/104586_49a365e525e449af8b9f_1024x1024.jpg?v=1499461089"
          />
          <FigureCaption>
            <h1>The Donald Trump Of Ducks!</h1>
          </FigureCaption>
        </Figure>
        <Figure>
          <FigureImage
            className="SuperDuck"
            width={500}
            height={500}
            alt="171x180"
            src="https://amsterdamduckstore.com/wp-content/uploads/2019/08/Superhero-Rubber-Ducks-right-Amsterdam-Duck-Store.jpg"
          />
          <FigureCaption className="Plane">
            <h1>Is It A Plane. Is It A Bird. No It's Super Ducky</h1>
          </FigureCaption>
        </Figure>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
