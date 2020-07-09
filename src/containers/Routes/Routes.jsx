import React, { Component } from "react";
import { Router } from "@reach/router";

<<<<<<< HEAD
import Login from "../../components/LogInBox";
// import Dashboard from '../../components/ticketingDashboard';
// import CategoryChooser from "../../components/CategoryChooser";
// import NotFound from '../../components/NotFound';
=======
import LogInBox from "../../components/LogInBox";
import TicketingDashboard from "../../components/TicketingDashboard";
import CategoryChooser from "../../components/CategoryChooser";
import TicketView from "../../components/TicketingDashboard/TicketColumns/Column/TicketView";
>>>>>>> 8d3a8b54aeed702a9bd4da9b4553d7aa0d917376

class Routes extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Login path="/" />
        {/* <Dashboard path="dashboard" />
        <CategoryChooser path="CategoryChooser" /> */}
=======
        <TicketingDashboard path="dashboard" />
        <CategoryChooser path="ticket" />
        <TicketView path="viewticket" />
        <LogInBox default />
>>>>>>> 8d3a8b54aeed702a9bd4da9b4553d7aa0d917376
      </Router>
    );
  }
}

export default Routes;
