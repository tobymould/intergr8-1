import React, { Component } from "react";
import styles from "./TicketTile.module.scss";
import TicketView from "../../TicketView/TicketView";
import AssignedUser from '../../../../../AssignedUser';


class TicketTile extends Component {

  ticketViewRender = () => {
    return <TicketView
      data={this.state.currentTicket}
      closeTicket={this.closeCurrentTicket}
      closeTicketModal={this.closeTicketModal}
      toggleTicketView={this.state.ticketViewOpen} />
  }

  render() {
    const { ticketData, showModal,
      closeCurrentTicket, openTicketModal,
      closeTicketModal, setCurrentTicket,
      showTicketView } = this.props;
    return (
      <article
        key={ticketData.ID}
        onClick={setCurrentTicket, openTicketModal}
        className={styles.TicketTile} >
        <div className={styles.ticketContent} >
          <h3>{ticketData.category}</h3>
          <div>
            <span className={styles.boldText}>Employee ID: </span><span >{ticketData.createdBy.substring(0, 10)}</span>
          </div>
          <div>
            <span className={styles.boldText}>Ticket ID: </span><span > {ticketData.ID.substring(0, 10)}</span>
          </div>
          <div>
            <span className={styles.boldText}>Date: </span><span >{ticketData.createdAtDate}</span>
          </div>
          <div className={styles.ticketUser}>
            <AssignedUser
              ticketData={ticketData}
              setCurrentTicket={setCurrentTicket}

            />
          </div>
        </div>
      </article>

    )
  }
}

export default TicketTile;


// this.props.closeCurrentTicket
// this.props.openTicketModal
// this.props.closeTicketModal
// this.props.setCurrentTicket