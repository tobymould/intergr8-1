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
    const { emailAddress, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .then(globalHistory.navigate('/'));
  };

  render() {
    return (
      this.state.user ?
        <Routes />
        : <LogInBox
          userSignInAttempt={this.userSignInAttempt}
          user={this.state.user}
          emailAddress={this.state.emailAddress}
          password={this.state.password} />
    );
  }
}

export default App;
