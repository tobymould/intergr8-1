import React, { Component } from 'react';
import { Router } from '@reach/router';
import PrivateRoutes from '../PrivateRoutes';
import LogInBox from "../../components/LogInBox";
class Routes extends Component {

  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password, setCategoriesState, addSubcategory, removeSubcategory, categories } = this.props;
    return (
      <Router>
        {user ?
          <PrivateRoutes 
            user={user} 
            signOut={signOut} 
            setCategoriesState={setCategoriesState}
            addSubcategory={addSubcategory}
            removeSubcategory={removeSubcategory}
            categories={categories}
            default path="/" />
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
