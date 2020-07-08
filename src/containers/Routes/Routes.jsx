import React, { Component } from "react";
import { Router } from "@reach/router";

import Login from "../../components/LogInBox";
// import Dashboard from '../../components/ticketingDashboard';
// import CategoryChooser from "../../components/CategoryChooser";
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
