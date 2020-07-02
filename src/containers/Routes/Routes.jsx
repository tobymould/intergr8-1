import React, { Component } from 'react';
import { Router } from '@reach/router';

import Login from '../../components/LogInBox';
import Dashboard from '../../components/TicketingDashboard/Statistics';
// import TicketCatStage1 from '../../components/TicketCatstage1';
// import NotFound from '../../components/NotFound';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Login path="/" />
        {/* <Dashboard path="dashboard" />
        <TicketCatStage1 path="ticketcategory1" /> */}
      </Router>
    );
  }
}

export default Routes;
