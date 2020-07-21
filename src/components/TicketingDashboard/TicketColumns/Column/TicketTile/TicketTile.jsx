import React, { Component } from "react";
import styles from "./Tickettile.module.scss";
import TicketView from "../TicketView/TicketView";

class TicketTile extends Component {
  state = {
    ticketViewOpen: false,
  };
  toggleTicketModal = () => {
    this.setState({ ticketViewOpen: !this.state.ticketViewOpen });
  };

  render() {
    const ticketCondition = this.state.ticketViewOpen ? <TicketView /> : null;
    return (
      <div>
        {this.props.data.map((obj) => (
          <section onClick={this.toggleTicketModal} className={styles.TicketTile}>
            <div>
              <h3>{obj.title}</h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div>
              <select name="" id="">
                <option value="Agent1">Agent1</option>
                <option value="Agent2">Agent2</option>
              </select>
            </div>
          </section>
        ))}
        {ticketCondition}
      </div>
    );
  }
}

export default TicketTile;

// Ticket ID:
// {Math.random().toString(36).slice(2).substring(0, 6).toUpperCase()}
