import React, { Component } from "react";
import styles from "./TicketColumns.module.scss";
import Column from "./Column";

class TicketColumns extends Component {
  render() {
    return (
      <section className={styles.TicketColumns}>
        <Column filter={true} title={"Tickets to assign"} />
        <Column filter={true} title={"My tickets"} />
        <Column filter={true} title={"Outstanding"} />
      </section>
    );
  }
}

export default TicketColumns;
