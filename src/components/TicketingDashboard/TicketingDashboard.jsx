import React, { Component } from "react";
import mockData from "../../data/mockData";
import ChartPanel from "./ChartPanel";
import TicketColumns from "./TicketColumns/TicketColumns";
import styles from "./TicketingDashboard.module.scss";

class TicketingDashboard extends Component {
  state = {
    user: "Ollie_Holden",
    totalTickets: null,
    assignedTickets: null,
    inProgressTickets: null,
    userInProgressTickets: null,
    percentUnassignedTickets: null,
    percentInProgressTickets: null,
    percentUserInProgressTickets: null,
  };

  countTickets = () => mockData.length;
  countUserTickets = () =>
    mockData.filter((ticket) => ticket.owner === this.state.user).length;
  countUnassignedTickets = () =>
    mockData.filter((ticket) => !ticket.assigned).length;
  countInProgressTickets = () =>
    mockData.filter((ticket) => ticket.inProgress).length;
  countUserInProgressTickets = () =>
    mockData.filter(
      (ticket) => ticket.owner === this.state.user && ticket.inProgress
    ).length;
  calculatePercent = (total, number) => (number / total) * 100;

  componentDidMount() {
    this.setState({
      totalTickets: this.countTickets(),
      assignedTickets: this.countUnassignedTickets(),
      inProgressTickets: this.countInProgressTickets(),
      userInProgressTickets: this.countUserInProgressTickets(),
      percentUnassignedTickets: this.calculatePercent(
        this.countTickets(),
        this.countUnassignedTickets()
      ),
      percentInProgressTickets: this.calculatePercent(
        this.countTickets(),
        this.countInProgressTickets()
      ),
      percentUserInProgressTickets: this.calculatePercent(
        this.countUserTickets(),
        this.countUserInProgressTickets()
      ),
    });
  }

  render() {
    const {
      percentUnassignedTickets,
      percentInProgressTickets,
      percentUserInProgressTickets,
    } = this.state;

    return (
      <section className={styles.ticketingDashboard}>
      <ChartPanel
        percentUnassignedTickets={percentUnassignedTickets}
        percentInProgressTickets={percentInProgressTickets}
        percentUserInProgressTickets={percentUserInProgressTickets}
      />
      <TicketColumns/>
      </section>
    );
  }
}

export default TicketingDashboard;
