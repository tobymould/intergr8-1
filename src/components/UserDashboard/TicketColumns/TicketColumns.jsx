import React, { Component } from "react";
import styles from "./TicketColumns.module.scss";
import Column from "./Column";

class TicketColumns extends Component {
  render() {
    return (
      <section className={styles.TicketColumns}>
        <Column filter={true} title={"My tickets"} allTickets={this.props.allTickets} currentTicket={this.props.currentTicket} setCurrentTicket={this.props.setCurrentTicket} user={this.props.user} userRole={this.props.userRole} />
      </section>
    );
  }
}

export default TicketColumns;
