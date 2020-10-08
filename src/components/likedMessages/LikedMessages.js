// import React from "react";
// //import Spinner from "react-spinkit";
// import { userIsAuthenticated } from "../../redux/HOCs";
// import "../likedMessages/LikedMessages.css";
// import DataService from "../../dataService";

// class LikedMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [
//         {
//           id: null,
//           text: "",
//           username: "",
//           createdAt: "",
//           likes: [
//             {
//               id: null,
//               username: "",
//               messageId: null,
//               createdAt: "",
//             },
//           ],
//         },
//       ],
//     };

//     this.client = new DataService();
//   }

//   componentDidMount() {
//     this.mostLikedMessages();
//   }

//   mostLikedMessages() {
//     return this.client.mostLikedMessages().then((result) => {
//       this.setState({
//         messages: result.data.messages,
//       });
//       //console.log(result);
//       this.mostLikedMessages();
//     });
//   }

//   render() {
//     //const { loading, error } = this.props;
//     return (
//       <div className="pageWraps">
//         <h1>Most Liked Quacks</h1>
//         <div className="Menu"></div>
//         <div className="MessageList">
//           <div className="hide">{JSON.stringify(this.state)}</div>
//           {this.state.messages.map((message) => (
//             <div key={message.id} className="MessageWrap">
//               <div className="UserName">User Name: {message.username}</div>
//               <div className="MessageText">Message: {message.text}</div>
//               <div className="LikeWrap">
//                 <div className="LikesTitle">Likes: {message.likes.length}</div>
//                 {message.likes.map((like) => (
//                   <div key={like.id} className="LikesUserName">
//                     {like.username}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default userIsAuthenticated(LikedMessages);
