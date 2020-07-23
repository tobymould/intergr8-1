import React, { Component } from "react";
import styles from "./TicketList.module.scss";
import TicketTile from './TicketTile';

class TicketList extends Component {

  render() {
    const { currentTicket, setCurrentTicket } = this.props;
    return (
      <section className={styles.ticketList}>
        {this.props.data.map(ticket => <TicketTile
          key={ticket.ID}
          ticket={ticket}
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
        />)}
      </section>
    )
  }
}

export default TicketList;
