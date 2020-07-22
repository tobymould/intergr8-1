import React, { Component } from 'react';
import firebase from "../firebase";
import { Router, globalHistory } from "@reach/router";
import TicketingDashboard from '../components/TicketingDashboard';
import CategoryChooser from '../components/CategoryChooser';
import SuperUserDashboard from '../components/SuperUserDashboard';
import CreateTicket from '../components/CategoryChooser/CreateTicket';
import TicketView from '../components/TicketingDashboard/TicketColumns/Column/TicketView';

class PrivateRoutes extends Component {

  checkAuthorization = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        globalHistory.navigate("login");
      }
    });
  }

  componentDidMount() {
    this.checkAuthorization();
  }

  render() {
    const { signOut, user } = this.props;
    return (
      <Router>
        <TicketingDashboard default path="dashboard" user={user} signOut={signOut} />
        <CategoryChooser path="catalogue" user={user} signOut={signOut} />
        <CreateTicket path="createticket" user={user} signOut={signOut} />
        <SuperUserDashboard path="superuser" user={user} signOut={signOut} />
      </Router>
    )
      ;
  }
}

export default PrivateRoutes;
