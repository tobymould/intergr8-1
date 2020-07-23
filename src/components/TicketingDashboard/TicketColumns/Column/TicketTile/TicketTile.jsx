import React, { Component } from "react";
import styles from "./Tickettile.module.scss";
import firebase, { firestore } from '../../../../../firebase';
import AssignedUser from '../../../../AssignedUser';

class TicketTile extends Component {
state = {
}

  render() {
    return (
      <div>
        {this.props.data.map((obj) => (
          <section className={styles.TicketTile}>
            <div className={styles.TicketContent} >
              <h3>{obj.category}</h3>
              <p>Employee ID:{obj.createdBy.substring(0,10)}</p>
              <p>Ticket ID:{obj.ID.substring(0,10)}</p>
              <p>Date:{obj.createdAtDate}</p>
            </div>
              <div className={styles.ticketUser}>
              <AssignedUser className={styles.assignUser} ticketID={obj.ID} />
              </div>
          </section>
        ))}
      </div>
    );
  }
}

export default TicketTile;

// Ticket ID:
// {Math.random().toString(36).slice(2).substring(0, 6).toUpperCase()}
