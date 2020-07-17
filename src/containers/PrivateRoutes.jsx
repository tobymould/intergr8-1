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
        alert(
          "You must be logged in to view this page."
        );
        globalHistory.navigate("login");
      }
    });
  }

  componentDidMount() {
    this.checkAuthorization();
  }

  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password } = this.props;
    return (
      <Router>
        <TicketingDashboard default path="dashboard" user={user} signOut={signOut} />
        <CategoryChooser path="ticket" user={user} signOut={signOut} />
        <TicketView path="viewticket" user={user} signOut={signOut} />
        <CreateTicket path="createticket" user={user} signOut={signOut} />
        <SuperUserDashboard path="superuser" />
      </Router>
    )
      ;
  }
}

export default PrivateRoutes;