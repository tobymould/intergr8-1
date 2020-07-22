import React, { Component } from 'react';
import { Router } from '@reach/router';
import PrivateRoutes from '../PrivateRoutes';
import LogInBox from "../../components/LogInBox";
import NavBar from '../../components/NavBar';
class Routes extends Component {

  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password } = this.props;
    const navBar = user ? <NavBar signOut={signOut} /> : '';
    return (
      <>
        {navBar}
        <Router>
          {user ? (
            <>
            <PrivateRoutes user={user} default path="/" />
            </>
          ) : (
          < LogInBox default path="login"
            user={user}
            userSignInAttempt={userSignInAttempt}
            emailAddress={emailAddress} setEmail={setEmail}
            password={password} setPassword={setPassword}
            signOut={signOut}
          />
          )}
        </Router>
      </>
    );
  }
}
export default Routes;
