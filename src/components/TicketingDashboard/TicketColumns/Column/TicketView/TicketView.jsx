import React, { Component } from "react";
import styles from "./TicketView.module.scss";
import Message from "./Message";
import Button from "../../../../../utilities/Button";
import ResolveTicketModal from "./ResolveTicketModal";

import AssignedUser from "../../../../AssignedUser";

class TicketView extends Component {
  constructor() {
    super();
    this.creationDate = new Date();
  }
  // Three priority levels: 1,2,3.
  state = {
    priority: 1,
    manualOverRide: false,
    isDisplayResolve: false,
    inputResolve: "",
    resolveTicketDisplay: false,
  };
  updateInputResolve = (event) => {
    this.setState({ inputResolve: event.target.value });
    console.log(this.state.inputResolve);
  };
  handleResolve = (event) => {
    event.preventDefault();
    console.log(this.state.inputResolve);
    return false;
  };
  toggleResolveTicketDisplay = () => {
    this.setState({ resolveTicketDisplay: !this.state.resolveTicketDisplay });
  };
  toggleResolveModal = () => {
    this.setState({ isDisplayResolve: !this.state.isDisplayResolve });
  };
  componentDidMount() {
    return this.setState({
      priority: 3,
      manualOverRide: false,
    });
  }
  hoursFromCreation = () => {
    const today = new Date();
    const milliseconds = Math.abs(today - this.creationDate);
    const hours = milliseconds / 36e5;
    return hours;
    //  return 36;
  };
  automaticUpdateState = () => {
    if (!this.state.manualOverRide) {
      if (this.hoursFromCreation() > 48 && this.state.priority !== 3) {
        this.setState({ priority: 3 });
      } else if (this.hoursFromCreation() > 24 && this.state.priority !== 2) {
        this.setState({ priority: 2 });
      }
    }
  };
  manualUpdateState = (newPriority) => {
    // if (this.state.manualOverRide){
    this.setState({
      priority: newPriority,
      manualOverRide: true,
    });
    // }
  };
  setColour = () => {
    if (this.state.priority === 3) {
      return styles.red;
    } else if (this.state.priority === 2) {
      return styles.amber;
    } else {
      return styles.green;
    }
  };
  render() {
    const displayResolve = this.state.isDisplayResolve ? (
      <ResolveTicketModal
        toggleResolveModal={this.toggleResolveModal}
        updateInputResolve={this.updateInputResolve}
        toggleResolveTicketDisplay={this.toggleResolveTicketDisplay}
        closeTicket={this.props.closeTicket}
      />
    ) : null;
    const displayResolveTicket = this.state.resolveTicketDisplay ? (
      <div className={styles.resolvedTicketText}>
        <h3>
          Ticket status: <span>Resolved</span>
        </h3>
        <p>{this.state.inputResolve}</p>
      </div>
    ) : null;
    this.automaticUpdateState();
    return (
      <div className={styles.ticketViewModal}>
        <article className={styles.TicketView}>
          <section className={styles.ticketTop}>
            <div className={styles.ticketHeader}>
              <h2>{this.props.data.category}</h2>
              <AssignedUser />
            </div>
            <div className={styles.ticketId}>
              <p>{this.props.data.ID}</p>
              <div className={`${styles.circle} ${this.setColour()}`}></div>
            </div>
            <div>
              <button className={styles.toggleTicketViewButton} onClick={this.props.closeTicketModal}>
                WAPOOOOO
              </button>
              <button className={styles.resolveBtn} onClick={this.toggleResolveModal}>
                Resolve Ticket
            </button>
            </div>
          </section>
          <div className={styles.messageContainer}>
            <Message userType={"Employee"} />
            <Message userType={"HR"} />
            <Message userType={"Employee"} />
            <Message userType={"HR"} />
            {displayResolveTicket}
          </div>
          <section className={styles.writingMessage}>
            <div className={styles.messageContent}>
              <textarea />
              <Button text={"Send"} />
            </div>
          </section>
        </article>
        {displayResolve}
      </div >
    );
  }
}
export default TicketView;
