import React, { Component } from "react";
import styles from "./TicketColumns.module.scss";
import Column from "./Column";

class TicketColumns extends Component {
  render() {
    const { allTickets, currentTicket, setCurrentTicket } = this.props;
    return (
      <section className={styles.TicketColumns}>
        <Column filter={true} title={"Tickets to assign"}
          allTickets={allTickets}
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
          user={this.props.user} userRole={this.props.userRole} />
        <Column filter={true} title={"My tickets"}
          allTickets={allTickets.filter(item => item.assignedTo.includes(this.props.user.uid))}
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
          user={this.props.user} userRole={this.props.userRole} />
        <Column filter={true} title={"Outstanding"}
          allTickets={allTickets.filter(item => item.isOpen)}
          currentTicket={currentTicket}
          setCurrentTicket={setCurrentTicket}
          user={this.props.user} userRole={this.props.userRole} />
      </section>
    );
  }
}

export default TicketColumns;
