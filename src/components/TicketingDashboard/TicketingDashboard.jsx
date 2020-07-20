import React, { Component } from 'react';
import mockData from '../../data/mockData';
import { ticketData } from '../../data/newMockDataTickets';
import ChartPanel from './ChartPanel';
import TicketColumns from './TicketColumns/TicketColumns';
import styles from './TicketingDashboard.module.scss';
import NavBar from '../../components/NavBar';
import { firestore } from '../../firebase';

class TicketingDashboard extends Component {
  state = {
    user: 'S00000001', //this.context.user
    totalTickets: null,
    assignedTickets: null,
    inProgressTickets: null,
    userInProgressTickets: null,
    percentUnassignedTickets: null,
    percentInProgressTickets: null,
    percentUserInProgressTickets: null
  };

  countTickets = () => ticketData.length;
  countUserTickets = () => ticketData.filter(ticket => ticket.createdBy === this.state.user).length;
  countUnassignedTickets = () => ticketData.filter(ticket => ticket.assignedto.length === 0).length;
  countInProgressTickets = () => ticketData.filter(ticket => ticket.isOpen).length;
  countUserInProgressTickets = () => ticketData.filter(ticket => ticket.createdBy === this.state.user && ticket.isOpen).length;
  calculatePercent = (total, number) => (number / total) * 100;

  componentDidMount() {
    firestore
      .collection('test')
      .doc('1')
      .set({ Hello: 'Bex' })
      .then(() => {
        this.setState({
          totalTickets: this.countTickets(),
          assignedTickets: this.countUnassignedTickets(),
          inProgressTickets: this.countInProgressTickets(),
          userInProgressTickets: this.countUserInProgressTickets(),
          percentUnassignedTickets: this.calculatePercent(this.countTickets(), this.countUnassignedTickets()),
          percentInProgressTickets: this.calculatePercent(this.countTickets(), this.countInProgressTickets()),
          percentUserInProgressTickets: this.calculatePercent(this.countUserTickets(), this.countUserInProgressTickets())
        });
      });
  }

  render() {
    const { percentUnassignedTickets, percentInProgressTickets, percentUserInProgressTickets } = this.state;

    return (
      <section className={styles.ticketingDashboard}>
        <NavBar user={this.props.user} signOut={this.props.signOut} />
        <ChartPanel percentUnassignedTickets={percentUnassignedTickets} percentInProgressTickets={percentInProgressTickets} percentUserInProgressTickets={percentUserInProgressTickets} />
        <TicketColumns />
      </section>
    );
  }
}

export default TicketingDashboard;
