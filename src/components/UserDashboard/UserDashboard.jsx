import React, { Component } from 'react';
import TicketColumns from './TicketColumns/TicketColumns';
import styles from './UserDashboard.module.scss';
import { firestore } from '../../firebase';
import TicketView from '../TicketingDashboard/TicketColumns/Column/TicketView';

class userDashboard extends Component {
  state = {
    allTickets: [],
    user: 'S00000001', //this.context.user,
    currentTicket: {},
    ticketViewOpen: false
  };

  setCurrentTicket = (ticket) => {
    const ticketCopy = { ...ticket };
    this.setState({
      currentTicket: ticketCopy,
      ticketViewOpen: true
    });
  }

  clearCurrentTicket = () => {
    this.setState({
      currentTicket: {},
      ticketViewOpen: false
    });
    this.getTheDataAgain();
  }

  closeCurrentTicket = () => {
    const dataClone = Object.assign(this.state.currentTicket);
    dataClone.isOpen = !dataClone.isOpen;
    this.setState({
      currentTicket: Object.assign(dataClone),
    });
    firestore
      .collection('tickets')
      .doc(dataClone.ID)
      .update({ isOpen: false })
      .then(console.log(dataClone.ID + "is now closed."))
  };

  getTheDataAgain = () => {
    firestore
      .collection('tickets')
      .where("createdBy", "==", this.props.user.uid)
      .get()
      .then((querySnapshot) => {
        this.setState({ allTickets: querySnapshot.docs.map(doc => doc.data()) })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    firestore
      .collection('tickets')
      .where("createdBy", "==", this.props.user.uid)
      .get()
      .then((querySnapshot) => {
        this.setState({ allTickets: querySnapshot.docs.map(doc => doc.data()) })
      })
      .catch(err => console.log(err))
  }
  render() {
    const { allTickets, currentTicket, ticketViewOpen } = this.state;
    return (
      <>
        <section className={styles.userDashboard}>
          <TicketColumns
            allTickets={allTickets}
            currentTicket={this.state.currentTicket}
            setCurrentTicket={this.setCurrentTicket}
            userRole={this.props.userRole}
            user={this.props.user} />
        </section>
        {!ticketViewOpen ?
          null :
          <TicketView
            closeCurrentTicket={this.closeCurrentTicket}
            clearCurrentTicket={this.clearCurrentTicket}
            currentTicket={currentTicket}
            user={this.props.user}
            userRole={this.props.userRole}
            getTheDataAgain={this.getTheDataAgain} />}
      </>

    );
  }
}

export default userDashboard;

