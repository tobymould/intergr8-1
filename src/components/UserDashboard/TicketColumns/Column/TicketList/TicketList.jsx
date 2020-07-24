import React, { Component } from "react";
import styles from "./TicketList.module.scss";
import TicketTile from './TicketTile';

class TicketList extends Component {

  render() {
    const { data, currentTicket, setCurrentTicket, userRole  } = this.props;
    return (
      <section>
        {data.map((ticket) => (
          <TicketTile key={ticket.ID}
            ticket={ticket}
            currentTicket={currentTicket}
            setCurrentTicket={setCurrentTicket}
            className={styles.TicketTile}
            userRole={userRole} />
        ))}
      </section>
    )
  }
}

export default TicketList;
