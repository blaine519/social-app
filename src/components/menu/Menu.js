import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>
          Duckbook
          <img
            className="Avatar4"
            src="https://image.flaticon.com/icons/png/512/1395/1395203.png"
            alt="Icon"
          ></img>
        </h1>

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/Messages">Message Feed</Link>
            <Link to="/Profile/:username">Profile</Link>
            <Link to="/Users">Users</Link>
            <Link to="/Picture">Picture</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
