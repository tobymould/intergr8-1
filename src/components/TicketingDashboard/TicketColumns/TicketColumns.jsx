import React, { Component } from "react";
import styles from "./TicketColumns.module.scss";
import Column from "./Column";

class TicketColumns extends Component {
  render() {
    return (
      <section className={styles.TicketColumns}>
        <Column filter={true} title={"Tickets to assign"} allTickets={this.props.allTickets} user={this.props.user} />
        <Column filter={true} title={"My tickets"} allTickets={this.props.allTickets} user={this.props.user} />
        <Column filter={true} title={"Outstanding"} allTickets={this.props.allTickets} user={this.props.user} />
      </section>
    );
  }
}

export default TicketColumns;
