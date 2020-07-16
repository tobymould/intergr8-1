import React, { Component } from "react";
import { Router } from "@reach/router";
import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/TicketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";
import CreateTicket from "../../components/CategoryChooser/CreateTicket";
import TicketView from "../../components/TicketingDashboard/TicketColumns/Column/TicketView";
import SuperUserDashboard from "../../components/SuperUserDashboard";
class Routes extends Component {
  render() {
    return (
      <Router>
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <TicketView path="viewticket" />
        <CreateTicket path="createticket" />
        <SuperUserDashboard path="superuser" />
        <LogInBox default />
      </Router>
    );
  }
}
export default Routes;
