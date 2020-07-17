import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import LogInBox from '../../components/LogInBox';
import PrivateRoutes from '../PrivateRoutes';

class Routes extends Component {

  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password } = this.props;
    return (
      <Router>
        {user ?
          <PrivateRoutes user={user} signOut={signOut} default path="/" />
          : < LogInBox default path="login"
            user={user}
            userSignInAttempt={userSignInAttempt}
            emailAddress={emailAddress} setEmail={setEmail}
            password={password} setPassword={setPassword}
            signOut={signOut}
          />}
      </Router>
    );
  }
}
export default Routes;
