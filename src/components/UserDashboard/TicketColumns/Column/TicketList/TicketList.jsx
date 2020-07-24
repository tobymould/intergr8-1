import React, { Component } from "react";
import styles from "./TicketList.module.scss";
import TicketTile from './TicketTile';

class TicketList extends Component {

  render() {
    const { data, currentTicket, setCurrentTicket } = this.props;
    return (
      <section>
        {data.map((ticket) => (
          <TicketTile key={ticket.ID}
            ticket={ticket}
            currentTicket={currentTicket}
            setCurrentTicket={setCurrentTicket}
            className={styles.TicketTile} />
        ))}
      </section>
    )
  }
}

export default TicketList;
