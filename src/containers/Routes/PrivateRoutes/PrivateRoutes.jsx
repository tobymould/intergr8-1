import React, { Component } from 'react';
import firebase from "../../../firebase";
import { Router, globalHistory } from "@reach/router";
import TicketingDashboard from '../../../components/TicketingDashboard';
import CategoryChooser from '../../../components/CategoryChooser';
import SuperUserDashboard from '../../../components/SuperUserDashboard';
import CreateTicket from '../../../components/CategoryChooser/CreateTicket';
import TicketView from '../../../components/TicketingDashboard/TicketColumns/Column/TicketView';
import NavBar from '../../../components/NavBar';


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
    const { user } = this.props;
    return (
      <>
        <NavBar signOut={this.props.signOut} />
        <Router>
          <TicketingDashboard default path="dashboard" user={user}  />
          <CategoryChooser path="catalogue" user={user}  />
          <TicketView path="viewticket" user={user}  />
          <CreateTicket path="createticket" user={user}  />
          <SuperUserDashboard path="superuser" user={user}  />
        </Router>
      </>
    )
      ;
  }
}

export default PrivateRoutes;
