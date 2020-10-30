import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import "../deleteUser/DeleteUser.css";
import DataService from "../../dataService";

class GetUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [{ username: "", displayName: "", about: "" }],
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.getListOfUsers();
  }

  getListOfUsers() {
    return this.client.getAllUsers().then((result) => {
      console.log(result.data);
      this.setState({
        listUsers: result.data,
      });
      this.getListOfUsers();
    });
  }

  render() {
    return (
      <div>
        <div className="hide">{JSON.stringify(this.state)}</div>
        {/* {this.state.listUsers.map((lu) => ( */}
        {/* <div key={lu.username} className="GetUser">
            <div>username={lu.username}</div>
            <div>displayName={lu.displayName}</div>
            <div>about={lu.about}</div>
          </div>
        ))} */}
      </div>
    );
  }
}

export default userIsAuthenticated(GetUser);
