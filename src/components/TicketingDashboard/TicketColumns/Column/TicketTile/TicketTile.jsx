import React, { Component } from "react";
import styles from "./Tickettile.module.scss";
import TicketView from "../TicketView/TicketView";
import { firestore } from "../../../../../firebase";

class TicketTile extends Component {
  state = {
    ticketViewOpen: false,
    currentTicket: {},
    ticketStatus: "",
  };

  closeCurrentTicket = () => {

    let dataClone = Object.assign(this.state.currentTicket);
    dataClone.isOpen = !dataClone.isOpen;
    firestore
      .collection("tickets")
      .doc(dataClone.id)
      .update({ isOpen: false })
      .then(
        this.setState({
          currentTicket: dataClone,
        })
      );
  };

  toggleResolve = (obj) => {
    if (obj.isOpen === false) {
      return "Resolved";
    } else {
      return "";
    }
  };

  openTicketModal = (obj) => {
    this.setState({ ticketViewOpen: !this.state.ticketViewOpen, currentTicket: obj });
  };

  closeTicketModal = () => {
    this.setState({ ticketViewOpen: false });
  };

  render() {
    const showModal = this.state.ticketViewOpen ? (
      <TicketView
        data={this.state.currentTicket}
        closeTicket={this.closeCurrentTicket}
        closeTicketModal={this.closeTicketModal}
        toggleTicketView={this.state.ticketViewOpen}
        // firebaseCall={this.firebaseCall}
      />
    ) : null;

    return (
      <div>
        {this.props.data.map((obj) => (
          <section
            key={obj.ID}
            onClick={() => this.openTicketModal(obj)}
            className={styles.TicketTile}
          >
            <div>
              <h3>{obj.category}</h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
              <p style={{ color: "green" }}>{this.toggleResolve(obj)}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div>
              <select name="" id={obj.ID} onClick={(e) => e.stopPropagation()}>
                <option value="Agent1">Agent1</option>
                <option value="Agent2">Agent2</option>
              </select>
            </div>
          </section>
        ))}
        {showModal}
      </div>
    );
  }
}

export default TicketTile;

