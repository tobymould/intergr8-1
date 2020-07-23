import React, { Component } from "react";
import styles from "./TicketList.module.scss";
import { firestore } from '../../../../../firebase';
import TicketTile from './TicketTile';

class TicketList extends Component {
  state = {
    ticketViewOpen: false,
    currentTicket: {},
  };

  closeCurrentTicket = () => {
    let dataClone = { ...this.state.currentTicket };
    dataClone.isOpen = !dataClone.isOpen;
    this.setState({
      currentTicket: dataClone,
    });
    firestore
      .collection('tickets')
      .doc(dataClone.id)
      .update({ isOpen: false })
      .then(console.log(dataClone.id + "is now closed."))
  };

  toggleTicketModal = () => {
    this.setState({ ticketViewOpen: !this.state.ticketViewOpen });
  };

  setCurrentTicket = (obj) => {
    console.log(obj);
  }

  render() {
    return (
      <section className={styles.ticketList}>
        {this.props.data.map(ticket => <TicketTile
          ticketData={ticket}
          showModal={this.showModal}
          closeCurrentTicket={this.closeCurrentTicket}
          toggleTicketModal={this.toggleTicketModal}
          setCurrentTicket={this.setCurrentTicket}
        />)}
      </section>
    )
  }
}

export default TicketList;
