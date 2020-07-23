import React, { Component } from "react";
import styles from "./TicketColumns.module.scss";
import Column from "./Column";

class TicketColumns extends Component {
  render() {
    return (
      <section className={styles.TicketColumns}>
        <Column filter={true} title={"My tickets"} allTickets={this.props.allTickets} />
      </section>
    );
  }
}

export default TicketColumns;
