import React, { Component } from "react";
import { Router } from "@reach/router";

import Login from "../../components/LogInBox";
import TicketingDashboard from "../../components/TicketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";

class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <Login default />
      </Router>
    );
  }
}

export default Routes;
