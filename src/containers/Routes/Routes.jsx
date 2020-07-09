import React, { Component } from "react";
import { Router } from "@reach/router";

import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/TicketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";
import CreateTicket from "../../components/CategoryChooser/CreateTicket";

 class Routes extends Component {
  render() {

    return (
      <>
        <Router>
          <CreateTicket path="createticket" />
          <TicketingDashboard path="dashboard" />
          <CategoryChooser path="ticket" />
          <LogInBox default />
        </Router>
      </>
    );
  }
}

export default Routes;
