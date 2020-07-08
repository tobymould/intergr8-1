import React, { Component } from "react";
import { Router } from "@reach/router";

import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/TicketingDashboard/TicketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";

class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <LogInBox default />
      </Router>
    );
  }
}

export default Routes;
