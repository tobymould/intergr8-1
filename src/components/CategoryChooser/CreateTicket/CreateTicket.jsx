import React, { Component } from "react";
import styles from "./CreateTicket.module.scss";
import {firestore} from '../../../firebase'

class CreateTicket extends Component {
  state = {
    ID: "",
    category: this.props.choices[0],
    subCategory: this.props.choices[1],
    createdBy: this.props.user.uid,
    assignedTo: [],
    modifiedAtDate: [],
    isOpen: true,
    priority: 1,
  };

  getDate = (event) => {
    event.preventDefault();
    const currentTime = new Date().toLocaleString();
    const eventLog = {...this.state.eventLog};
    eventLog[0].date = currentTime;
    this.setState({
      eventLog,
      createdAtDate: currentTime,
    }, () => this.pushTicketData());
    ;
  }

  captureMessage = (event) => {
    this.setState({
      eventLog: [{
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: this.props.user.uid,
          message: event.target.value,
        }
      }],
    })
  }

  pushTicketData = () => {
      firestore
      .collection("tickets")
      .add(this.state)
      .then((docRef) => {
        console.log(docRef.id)
        firestore.collection("tickets").doc(docRef.id).update({ ID: docRef.id });
        this.setState({querySent: true, message: this.state.eventLog[0].content.message});
      })
      .catch((err) => console.error(err));
  } 

  toggleQuerySubmitted = () => {
    // const finalMessage = {...this.state.eventLog}.eventLog.message;
    // console.log(finalMessage);
    return this.state.querySent ? <p className={styles.italic}>{this.state.message}</p> : <textarea placeholder="Type here..." onChange={(event) => this.captureMessage(event)}></textarea>
  }

  toggleButton = () => {
    return this.state.querySent ? (<div className={styles.ticketSent}><h3>Ticket Sent</h3></div>) : <button
    className={styles.btnCreateTicket} onClick={this.getDate}>Create Ticket</button>
  }


  render() {
    const category = this.props.choices[0];
    const subCategory = this.props.choices[1];

    return (
      <>
        <div className={styles.backGround}>
          <section className={styles.topField}>
            <p className={styles.topBanner}>New Ticket +</p>
            <p>Intergr8HRM</p>
          </section>
          <section>
            <form action="" className={styles.formCreateTicket}>
              <span>Category: {category}</span>
              <span>Sub-Category: {subCategory}</span>
              <label htmlFor="">
                Description
                {this.toggleQuerySubmitted()}
                {/* <textarea placeholder="Type here..." onChange={(event) => this.captureMessage(event)}></textarea> */}
              </label>
             {this.toggleButton()}
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default CreateTicket;
