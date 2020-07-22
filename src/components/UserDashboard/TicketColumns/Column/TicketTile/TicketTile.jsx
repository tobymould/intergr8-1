import React, { Component } from "react";
import styles from "./Tickettile.module.scss";

class TicketTile extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((obj) => (
          <section className={styles.TicketTile}>
            <div className={styles.TicketContent} >
              <h3>{obj.title}</h3>
              <p>Query: {obj.eventLog[0].content.message}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
              <p>Status: {obj.isOpen ? 'Open' : 'Closed'}</p>
            </div>
            <div>
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
