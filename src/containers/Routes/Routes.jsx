import React, { Component } from 'react';
import { Router } from '@reach/router';

import Login from '../../components/LogInBox';
import CreateTicket from '../../components/CreateTicket';
// import Dashboard from '../../components/ticketingDashboard';
// import TicketCatStage1 from '../../components/TicketCatstage1';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Login path="/" />
        <CreateTicket path="CreateTicket" />
        {/* <Dashboard path="dashboard" />
        <TicketCatStage1 path="ticket" /> */}
        <Login default />

      </Router>
    );
  }
}

export default Routes;
