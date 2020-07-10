import React, { Component } from "react";
import { Router } from "@reach/router";

import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/ticketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";
import CreateTicket from "../../components/CategoryChooser/CreateTicket";
import TicketView from "../../components/ticketingDashboard/TicketColumns/Column/TicketView";

class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <TicketView path="viewticket" />
        <CreateTicket path="createticket" />
        <LogInBox default />
      </Router>
    );
  }
}

export default Routes;