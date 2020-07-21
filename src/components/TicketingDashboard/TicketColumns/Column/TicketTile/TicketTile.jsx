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
            <div>
              <h3>{obj.title}</h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div className={styles.assignUser}>

              <AssignedUser className={styles.assignUser} ticketID={obj.ID} />
              {/* <select name="" id="">
                
                <option value="Agent1">Agent1</option>
                <option value="Agent2">Agent2</option>
              </select> */}
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
