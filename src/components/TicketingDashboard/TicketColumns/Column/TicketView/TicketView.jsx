import React, { Component } from "react";
import styles from "./TicketView.module.scss";
import Message from "./Message";
import Button from "../../../../../utilities/Button";
import ResolveTicketModal from "./ResolveTicketModal";
import firebase, {firestore} from "../../../../../firebase";

import AssignedUser from "../../../../AssignedUser";

class TicketView extends Component {
  constructor() {
    super();
    this.creationDate = new Date();
  }

    // Three priority levels: 1,2,3.
    state = {
        priority: 1,
        item: '',
        manualOverRide: false,
        isDisplayResolve: false,
        inputResolve: '',
        modifiedAtDate: [],
        resolveTicketDisplay: false,
        image: "",
        userRole: 1,
        // ID: '0V0Rt0Elqr6wvbDuD2DM',
        eventLog: [
            {
                content: {
                    message: "I'd like to apply for this job please? ",
                    name: "GkKyeeKAXoaBV7TLXDK6H84B2yX2"
                }, 
                date: "20/07/2020, 18:46:41", 
                details: "Ticket was created",
                typed: "opened"
            },
        ], 
    }
    updateInputResolve = (event) => {
        this.setState({ inputResolve: event.target.value })
        console.log(this.state.inputResolve);
    }
    handleResolve = (event) => {
        event.preventDefault();
        console.log(this.state.inputResolve);
        return false;
    }
    toggleResolveTicketDisplay = () => {
        this.setState({ resolveTicketDisplay: !this.state.resolveTicketDisplay })
    }
    toggleResolveModal = () => {
        this.setState({ isDisplayResolve: !this.state.isDisplayResolve })
    }
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
    }
    automaticUpdateState = () => {
        if (!this.state.manualOverRide) {
            if (this.hoursFromCreation() > 48 && this.state.priority !== 3) {
                this.setState({ priority: 3, })
            } else if (this.hoursFromCreation() > 24 && this.state.priority !== 2) {
                this.setState({ priority: 2, })
            }
        }
    }
    manualUpdateState = (newPriority) => {
        // if (this.state.manualOverRide){
        this.setState(
            {
                priority: newPriority,
                manualOverRide: true,
            }
        )
        // }
    }
    setColour = () => {
        if (this.state.priority === 3) {
            return styles.red
        } else if (this.state.priority === 2) {
            return styles.amber
        } else {
            return styles.green
        }
    }

    // Changed from here 
    captureAttachment = (event) => {
      event.preventDefault();
      const currentTime = new Date().toLocaleString()
      const fileName = Number(new Date());
      const filePath = `${this.props.user.uid}/${fileName}`;
      if (this.state.image) {
        console.log(this.state.image)
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
            }]
        }, (() => {
            this.pushTicketData();
            this.sendAttachment(filePath);
            this.captureMessage(currentTime);
            this.setState({image: ''});
            })
        )} else {
            this.captureMessage(currentTime)
        };
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

    captureMessage = (currentTime) => {
        if (this.state.message) {
        this.setState({
            modifiedAtDate: [...this.state.modifiedAtDate, currentTime],
            eventLog: [...this.state.eventLog, {
                type: 'message',
                details: 'New message received',
                content: {
                    name: this.props.user.uid,
                    message: this.state.message,
                },
                date: currentTime,
            }]
          }, () => {
              this.pushTicketData()
              this.setState({message: ''})
            }
          )
        }
    }

    // updateTicketView = () => {
    //     firestore
    //     .collection("tickets")
    //     .doc(this.props.data.ID)
    //     .get()
    //     .then((docRef) => {
    //         console.log('success')
    //     })
    //     .catch((err) => console.error(err));
    
    // }

    printTickets = () => {
      return this.props.data.eventLog.map((item, index) => {
        return <Message item={item} data={this.props.data} user={this.props.user}/>
        
      })
    }
    
    pushTicketData = () => {
        firestore
        .collection("tickets")
        .doc(this.props.data.ID)
        .update({
            // arrayUnion pushes to the named array 
            modifiedAtDate: firebase.firestore.FieldValue.arrayUnion(this.state.modifiedAtDate[this.state.modifiedAtDate.length - 1]),
            eventLog: firebase.firestore.FieldValue.arrayUnion(this.state.eventLog[this.state.eventLog.length - 1])
        })
        .then((docRef) => {
            console.log('success');
            alert('Message sent, refresh dashboard to view')
            // this.updateTicketView();
        })
        .catch((err) => console.error(err));
    } 

    render() {
    const displayResolve = this.state.isDisplayResolve ? (
      <ResolveTicketModal
        toggleResolveModal={this.toggleResolveModal}
        updateInputResolve={this.updateInputResolve}
        toggleResolveTicketDisplay={this.toggleResolveTicketDisplay}
        closeTicket={this.props.closeTicket}
        // firebaseCall={this.props.firebaseCall}
     
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
              {this.props.userRole && this.props.userRole === 1 ? null : <AssignedUser />}
            </div>
            <div className={styles.ticketId}>
              <p>{this.props.data.ID}</p>
              {this.props.userRole && this.props.userRole === 1 ? null : <div className={`${styles.circle} ${this.setColour()}`}></div>}
            </div>
            <div className={styles.ticketActionButtons}>
              <button className={styles.closeTicketButton} onClick={this.props.closeTicketModal}>
                ✕
              </button>
              <button className={styles.resolveBtn} onClick={this.toggleResolveModal}>
                Resolve Ticket
              </button>
            </div>
          </section>
          <div className={styles.messageContainer}>
            {this.printTickets()}
            {/* {/* <Message userType={"Employee"} /> */}
            {/* <Message userType={"HR"} /> */}
            {displayResolveTicket}
          </div>
          <section className={styles.writingMessage}>
            <div className={styles.messageContent}>
              <textarea onChange={(event) => this.setState({message: event.target.value})}/><label className={styles.label} htmlFor="uploadFile">Attach a file: </label>
              <input type="file" id="uploadFile" name="fileUpload" placeholder="Choose your file..." onChange={(event) => this.setState({image: event.target.files[0]})} />
              <Button text={"Send"} logic={this.captureAttachment}/>
            </div>
          </section>
        </article>
        {displayResolve}
      </div>
    );
  }
}
export default TicketView;
