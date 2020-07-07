import React, { Component } from "react";
import { Router } from "@reach/router";

import Login from '../../components/LogInBox';
import TicketView from '../../components/TicketView';
// import Dashboard from '../../components/ticketingDashboard';
// import TicketCatStage1 from '../../components/TicketCatstage1';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Login path="/login" />
        {/* <Dashboard path="dashboard" />
        <TicketCatStage1 path="ticket" /> */}
        <Login default />
        <TicketView path="TicketView" />
      </Router>
    );
  }
}

export default Routes;
