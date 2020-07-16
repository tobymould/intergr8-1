import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import LogInBox from '../../components/LogInBox';
import TicketingDashboard from '../../components/TicketingDashboard';
import CategoryChooser from '../../components/CategoryChooser';
import CreateTicket from '../../components/CategoryChooser/CreateTicket';
import TicketView from '../../components/TicketingDashboard/TicketColumns/Column/TicketView';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

class Routes extends Component {
  render() {
    const { userSignInAttempt, setEmail, setPassword, user, emailAddress, password, signOut } = this.props;
    return (
      <Router>
        <LogInBox default path="/" userSignInAttempt={userSignInAttempt} setEmail={setEmail} setPassword={setPassword} user={user} emailAddress={emailAddress} password={password} />

        <PrivateRoutes path="/" user={user}>
          <TicketingDashboard path="app/dashboard" signOut={signOut} />
          <CategoryChooser path="app/ticket" />
          <TicketView path="app/viewticket" />
          <CreateTicket path="app/createticket" />
        </PrivateRoutes>
      </Router>
    );
  }
}
export default Routes;
