import React, { Component } from "react";
import styles from "./TicketTile.module.scss";
import AssignedUser from '../../../../../AssignedUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class TicketTile extends Component {

  render() {
    const { ticket, setCurrentTicket } = this.props;
    return (
      <article className={styles.TicketTile}>
        <button className={styles.viewTicket} onClick={() => setCurrentTicket(ticket)}>
          <FontAwesomeIcon icon="expand" />
        </button>
        <div className={styles.ticketContent} >

          <h3>{ticket.category}</h3>
          <div>
            <span className={styles.boldText}>Employee ID: </span><span >{ticket.createdBy.substring(0, 10)}</span>
          </div>
          <div>
            <span className={styles.boldText}>Ticket ID: </span><span > {ticket.ID.substring(0, 10)}</span>
          </div>
          <div>
            <span className={styles.boldText}>Date: </span><span >{ticket.createdAtDate}</span>
          </div>
          <div className={styles.ticketUser}>
            <AssignedUser
              ticket={ticket}
            />
          </div>
        </div>
      </article >

    )
  }
}

export default TicketTile;