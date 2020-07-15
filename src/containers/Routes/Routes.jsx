import React, { Component } from 'react';
import { Router, globalHistory } from '@reach/router';
import LogInBox from '../../components/LogInBox';
import TicketingDashboard from '../../components/TicketingDashboard';
import CategoryChooser from '../../components/CategoryChooser';
import CreateTicket from '../../components/CategoryChooser/CreateTicket';
import TicketView from '../../components/TicketingDashboard/TicketColumns/Column/TicketView';

class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard default path="dashboard" />
        <CategoryChooser path="ticket" />
        <TicketView path="viewticket" />
        <CreateTicket path="createticket" />
        <LogInBox default userSignInAttempt={this.props.userSignInAttempt} user={this.props.user} emailAddress={this.props.emailAddress} password={this.props.password} />
      </Router>
    );
  }
}

export default Routes;
