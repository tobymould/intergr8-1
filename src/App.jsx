import React, { Component } from 'react';
import './App.css';
import { globalHistory } from '@reach/router';
import Routes from './containers/Routes/Routes.jsx';
import './data/fa-library';
import firebase, { providers } from './firebase';

class App extends Component {
  state = {
    user: null,
    emailAddress: null,
    password: null
  };

  userSignInAttempt = event => {
    event.preventDefault();
    const { emailAddress, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .then(globalHistory.navigate('/app/dashboard'));
  };

  render() {
    return <Routes userSignInAttempt={this.userSignInAttempt} user={this.state.user} emailAddress={this.state.emailAddress} password={this.state.password} />;
  }
}

export default App;
