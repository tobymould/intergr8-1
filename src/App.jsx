import React, { Component } from 'react';
import './App.css';
import { globalHistory } from '@reach/router';
import Routes from './containers/Routes/Routes.jsx';
import './data/fa-library';
import firebase, { providers } from './firebase';
import LogInBox from './components/LogInBox';

class App extends Component {
  state = {
    user: null,
    emailAddress: null,
    password: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  userSignInAttempt = event => {
    event.preventDefault();
    const { emailAddress, password, user } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => globalHistory.navigate('app'))
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  setEmail = event => {
    this.setState({ emailAddress: event.target.value });
    console.log(event.target.value);
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return <Routes userSignInAttempt={this.userSignInAttempt} setEmail={this.setEmail} setPassword={this.setPassword} user={this.state.user} emailAddress={this.state.emailAddress} password={this.state.password} signOut={this.signOut} />;
  }
}

export default App;
