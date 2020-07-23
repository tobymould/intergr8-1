import React, { Component } from 'react';
import ChartPanel from './ChartPanel';
import TicketColumns from './TicketColumns/TicketColumns';
import styles from './TicketingDashboard.module.scss';
import { firestore } from '../../firebase';
import TicketView from './TicketColumns/Column/TicketView';

class TicketingDashboard extends Component {
  state = {
    allTickets: [],
    user: 'S00000001', //this.context.user
    totalTickets: null,
    unassignedTickets: null,
    inProgressTickets: null,
    userInProgressTickets: null,
    percentUnassignedTickets: null,
    percentInProgressTickets: null,
    percentUserInProgressTickets: null,
    currentTicket: {}
  };

  countTickets = () => this.state.allTickets.length;
  countUserTickets = () => this.state.allTickets.filter(ticket => ticket.createdBy === this.state.user).length;
  countUnassignedTickets = () => this.state.allTickets.filter(ticket => ticket.assignedTo.length === 0).length;
  countInProgressTickets = () => this.state.allTickets.filter(ticket => ticket.isOpen).length;
  countUserInProgressTickets = () => this.state.allTickets.filter(ticket => ticket.createdBy === this.state.user && ticket.isOpen).length;
  calculatePercent = (total, number) => number === 0 ? 100 : (number / total) * 100;

  setCurrentTicket = (ticket) => {
    const ticketCopy = { ...ticket };
    this.setState({
      currentTicket: ticketCopy,
      ticketViewOpen: true
    });
    console.log(ticket);
  }

  clearCurrentTicket = () => {
    this.setState({
      currentTicket: {},
      ticketViewOpen: false
    });
  }

  closeCurrentTicket = (ticketData) => {
    const dataClone = { ...ticketData };
    dataClone.isOpen = !dataClone.isOpen;
    this.setState({
      currentTicket: dataClone,
    });
    firestore
      .collection('tickets')
      .doc(dataClone.id)
      .update({ isOpen: false })
      .then(console.log(dataClone.id + "is now closed."))
  };

  componentDidMount() {
    firestore
      .collection('tickets')
      .get()
      .then((querySnapshot) => querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      )
      .then(data => data.filter(doc => doc.id.length === 20 && doc.createdAtDate))
      .then(data => this.setState({ allTickets: [...data] }))
      .then(() => {
        this.setState({
          totalTickets: this.countTickets(),
          unassignedTickets: this.countUnassignedTickets(),
          inProgressTickets: this.countInProgressTickets(),
          userInProgressTickets: this.countUserInProgressTickets(),
          percentUnassignedTickets: this.calculatePercent(this.countTickets(), this.countUnassignedTickets()),
          percentInProgressTickets: this.calculatePercent(this.countTickets(), this.countInProgressTickets()),
          percentUserInProgressTickets: this.calculatePercent(this.countUserTickets(), this.countUserInProgressTickets())
        });
      })
      .catch(err => console.log(err))
  }
  render() {
    const { allTickets, currentTicket, percentUnassignedTickets, percentInProgressTickets, percentUserInProgressTickets } = this.state;
    return (
      <section className={styles.ticketingDashboard}>
        <ChartPanel percentUnassignedTickets={percentUnassignedTickets} percentInProgressTickets={percentInProgressTickets} percentUserInProgressTickets={percentUserInProgressTickets} />
        <TicketColumns
          allTickets={allTickets}
          currentTicket={currentTicket}
          setCurrentTicket={this.setCurrentTicket}
        />
        {!this.state.ticketViewOpen ?
          null :
          <TicketView
            closeCurrentTicket={this.closeCurrentTicket}
            clearCurrentTicket={this.clearCurrentTicket}
            currentTicket={currentTicket} />}
      </section>
    );
  }
}

export default TicketingDashboard;