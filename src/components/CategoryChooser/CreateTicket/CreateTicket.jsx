import React, { Component } from "react";
import styles from "./CreateTicket.module.scss";
import firebase, {firestore} from '../../../firebase'


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
    const eventLog = [...this.state.eventLog];
    eventLog[0].date = currentTime;
    this.setState({
      eventLog,
      createdAtDate: currentTime,
    }, () => this.pushTicketData());
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
      },],
    })
  }

  pushTicketData = () => {
      firestore
      .collection("tickets")
      .add({
        ID: "",
        category: this.props.choices[0],
        subCategory: this.props.choices[1],
        createdBy: this.props.user.uid,
        assignedTo: [],
        createdAtDate: this.state.createdAtDate,
        modifiedAtDate: [this.state.createdAtDate],
        isOpen: true,
        priority: 1,
        eventLog: this.state.eventLog,
        })
      .then((docRef) => {
        console.log(docRef.id)
        firestore.collection("tickets").doc(docRef.id).update({ ID: docRef.id });
        this.captureAttachment(docRef.id);
        this.setState({querySent: true, message: this.state.eventLog[0].content.message});
      })
      .catch((err) => console.error(err));
  } 

  captureAttachment = (ID) => {
    const currentTime = new Date().toLocaleString()
    const fileName = Number(new Date());
    const filePath = `${ID}/${fileName}`; // need to get image path first
    if (this.state.image) {
      this.setState({
          modifiedAtDate: [...this.state.modifiedAtDate, currentTime],
          eventLog: [...this.state.eventLog, {
              type: 'fileUpload',
              details: 'File was uploaded',
              content: {
                  name: this.props.user.uid,
                  filePath: filePath,
              },
              date: currentTime,
          },]
      }, (() => {
          this.updateTicketData(ID);
          this.sendAttachment(filePath, currentTime);
          this.setState({image: ''});
          })
      )} 
  }

  updateTicketData = (ID, newDate) => {
    firestore
    .collection("tickets")
    .doc(ID)
    .update({
        // arrayUnion pushes to the named array
        modifiedAtDate: firebase.firestore.FieldValue.arrayUnion(this.state.modifiedAtDate[this.state.modifiedAtDate.length - 1]),
        eventLog: firebase.firestore.FieldValue.arrayUnion(this.state.eventLog[this.state.eventLog.length - 1])
    })
    .then((docRef) => {
        console.log('success')
    })
    .catch((err) => console.error(err));
} 

  sendAttachment = (filePath) => {
      firebase
      .storage()
      .ref(filePath)
      .put(this.state.image)
      .then(data => {
          console.log('file sent');
      })
      .catch(error => console.log(error))
  }

  toggleQuerySubmitted = () => {
    return this.state.querySent ? <p className={styles.italic}>{this.state.message}</p> : <textarea required placeholder="Type here..." onChange={(event) => {
      this.setState({ value: event.target.value }) 
      this.captureMessage(event)
    }} value={this.state.value}></textarea>
  }

  toggleButton = () => {
    return this.state.querySent ? (<div className={styles.ticketSent}><h3>Ticket Sent</h3></div>) : <button disabled={!this.state.value}
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
                Description: 
                {this.toggleQuerySubmitted()}
              </label>
              <label htmlFor="uploadFile">Attach a file: </label>
              <input type="file" id="uploadFile" name="fileUpload" placeholder="Choose your file..." onChange={(event) => this.setState({image: event.target.files[0]})} />
                {/* <p id="uploading"></p>
                <progress value="0" max="100" id="progress"/> */}
             {this.toggleButton()}
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default CreateTicket;
