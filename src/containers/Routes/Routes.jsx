import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import LogInBox from '../../components/LogInBox';
import TicketingDashboard from '../../components/TicketingDashboard';
import CategoryChooser from '../../components/CategoryChooser';
import CreateTicket from '../../components/CategoryChooser/CreateTicket';
import TicketView from '../../components/TicketingDashboard/TicketColumns/Column/TicketView';

class Routes extends Component {
  render() {
    const { userSignInAttempt, setEmail, setPassword, user, emailAddress, password } = this.props;
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <TicketView path="viewticket" />
        <CreateTicket path="createticket" />
        <LogInBox default path="login" userSignInAttempt={userSignInAttempt} setEmail={setEmail} setPassword={setPassword} user={user} emailAddress={emailAddress} password={password} />
      </Router>
    );
  }
}

export default Routes;
