import React, { Component } from "react";
import { Router } from "@reach/router";

import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/ticketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";

import TicketView from "../../components/ticketingDashboard/TicketColumns/Column/TicketView"

class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <TicketView path="ticketview" />
        <CategoryChooser path="ticket" />
        <LogInBox default />
      </Router>
    );
  }
}

export default Routes;
