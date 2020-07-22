import React, { Component } from 'react';
import ChartPanel from './ChartPanel';
import TicketColumns from './TicketColumns/TicketColumns';
import styles from './TicketingDashboard.module.scss';
import NavBar from '../../components/NavBar';
import { firestore } from '../../firebase';

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
    percentUserInProgressTickets: null
  };

  countTickets = () => this.state.allTickets.length;
  countUserTickets = () => this.state.allTickets.filter(ticket => ticket.createdBy === this.state.user).length;
  countUnassignedTickets = () => this.state.allTickets.filter(ticket => ticket.assignedTo.length === 0).length;
  countInProgressTickets = () => this.state.allTickets.filter(ticket => ticket.isOpen).length;
  countUserInProgressTickets = () => this.state.allTickets.filter(ticket => ticket.createdBy === this.state.user && ticket.isOpen).length;
  calculatePercent = (total, number) => number === 0 ? 100 : (number / total) * 100;

  componentDidMount() {
    firestore
      .collection('tickets')
      .get()
      .then((querySnapshot) => querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
        })
      )
      .then(data => data.filter(doc => doc.id.length === 20 && doc.createdAtDate[2]==='/'))
      .then(data => this.setState({ allTickets: [...data] }) )
      .then(()=>{
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
    const { allTickets, percentUnassignedTickets, percentInProgressTickets, percentUserInProgressTickets } = this.state;
    return (
      <section className={styles.ticketingDashboard}>
        <ChartPanel percentUnassignedTickets={percentUnassignedTickets} percentInProgressTickets={percentInProgressTickets} percentUserInProgressTickets={percentUserInProgressTickets} />
        <TicketColumns allTickets={allTickets}/>
      </section>
    );
  }
}

export default TicketingDashboard;
