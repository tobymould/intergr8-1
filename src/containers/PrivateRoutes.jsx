import React, { Component } from 'react';
import firebase, {firestore} from "../firebase";
import { Router, globalHistory } from "@reach/router";
import TicketingDashboard from '../components/TicketingDashboard';
import UserDashboard from '../components/UserDashboard';
import CategoryChooser from '../components/CategoryChooser';
import SuperUserDashboard from '../components/SuperUserDashboard';
import CreateTicket from '../components/CategoryChooser/CreateTicket';
import TicketView from '../components/TicketingDashboard/TicketColumns/Column/TicketView';

class PrivateRoutes extends Component {

  state = {}

  checkAuthorization = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        globalHistory.navigate("login");
      }
    });
  }

  checkUserRole = () => {
    firestore
    .collection("info")
    .doc(this.props.user.uid)
    .get()
    .then(doc => {
      if (doc.exists) {
        this.setState({role: doc.data().role});
      } else {
          console.log("No such document!");
      }
    })
    .catch(error => {
      console.log("Error getting document:", error);
    })
  }

  componentDidMount() {
    this.checkAuthorization();
    this.checkUserRole();
  }

  renderDashboard = () => {
    if (this.state.role === 1) {
      globalHistory.navigate("/userdashboard");
      return null;
    } else {
      globalHistory.navigate("/dashboard");
    }
  }

  render() {
    const { signOut, user } = this.props;
    return (
      <Router>
        {this.state.role === 1 ?
          <UserDashboard default path="dashboard" user={user} signOut={signOut} />          
          : <TicketingDashboard path="dashboard" user={user} signOut={signOut} />
        }
        {/* <TicketingDashboard default path="dashboard" user={user} signOut={signOut} />
        <UserDashboard path="userdashboard" user={user} signOut={signOut} /> */}
        <CategoryChooser path="catalogue" user={user} signOut={signOut} />
        <TicketView path="viewticket" user={user} signOut={signOut} />
        <CreateTicket path="createticket" user={user} signOut={signOut} />
        <SuperUserDashboard path="superuser" user={user} signOut={signOut} />
      </Router>
    )
      ;
  }
}

export default PrivateRoutes;
