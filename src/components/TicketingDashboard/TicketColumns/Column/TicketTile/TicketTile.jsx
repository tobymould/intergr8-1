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
              <h3>{obj.title}</h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div className={styles.assignUser}>
              <div className={styles.ticketUser}>
              <AssignedUser className={styles.assignUser} ticketID={obj.ID} />
              </div>
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
