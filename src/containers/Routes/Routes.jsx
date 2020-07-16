import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import LogInBox from '../../components/LogInBox';
import TicketingDashboard from '../../components/TicketingDashboard';
import CategoryChooser from '../../components/CategoryChooser';
import CreateTicket from '../../components/CategoryChooser/CreateTicket';
import TicketView from '../../components/TicketingDashboard/TicketColumns/Column/TicketView';

class Routes extends Component {
  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password } = this.props;
    return (
      <Router>
        <LogInBox default path="login" userSignInAttempt={userSignInAttempt} setEmail={setEmail} setPassword={setPassword} user={user} emailAddress={emailAddress} password={password} />
        <TicketingDashboard path="dashboard" signOut={signOut} />
        <CategoryChooser path="ticket" signOut={signOut} />
        <TicketView path="viewticket" signOut={signOut} />
        <CreateTicket path="createticket" signOut={signOut} />
      </Router>
    );
  }
}
export default Routes;
