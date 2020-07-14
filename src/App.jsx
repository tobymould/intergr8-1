import React, { Component } from "react";
import "./App.css";
import Routes from "./containers/Routes/Routes.jsx";
import "./data/fa-library";
import firebase from "./firebase";

class App extends Component {

  state = {
    user: null,
    emailAddress: null,
    password: null
  };

  userSignInAttempt = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  }


  render() {
    return <Routes userSignInAttempt={this.userSignInAttempt} user={this.user} emailAddress={this.emailAddress} password={this.password} />
  }
}

export default App;