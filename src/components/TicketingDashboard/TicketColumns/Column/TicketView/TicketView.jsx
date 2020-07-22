import React, { Component } from 'react';
import styles from './TicketView.module.scss';
import Message from './Message';
import Button from "../../../../../utilities/Button";
import ResolveTicketModal from './ResolveTicketModal';
import NavBar from '../../../../NavBar'
import firebase, {firestore} from "../../../../../firebase"
// import { firestore, storage } from "../../../../../firebase";

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
        inputResolve: '',
        resolveTicketDisplay: false,
        image: "",
        ID: '0V0Rt0Elqr6wvbDuD2DM',
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
      const filePath = `${this.state.ID}/${fileName}`;
      if (this.state.image) {
        console.log(this.state.image)
        this.setState({
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
    
    pushTicketData = () => {
        firestore
        .collection("tickets")
        .doc(this.state.ID)
        .update({
            // arrayUnion pushes to the eventLog array
            eventLog: firebase.firestore.FieldValue.arrayUnion(this.state.eventLog[this.state.eventLog.length - 1])
        })
        .then((docRef) => {
            console.log('success')
        })
        .catch((err) => console.error(err));
    } 

    render() {
        const displayResolve = this.state.isDisplayResolve ? (<ResolveTicketModal toggleResolveModal={this.toggleResolveModal} updateInputResolve={this.updateInputResolve} toggleResolveTicketDisplay={this.toggleResolveTicketDisplay} />) : null;
        const displayResolveTicket = this.state.resolveTicketDisplay ? (<div className={styles.resolvedTicketText}><h3>Ticket status: <span>Resolved</span></h3><p>{this.state.inputResolve}</p></div>) : null;
    
        this.automaticUpdateState()

        return (
            <>
                <NavBar signOut={this.props.signOut} />
                <article className={styles.TicketView}>
                    <section className={styles.ticketTop}>
                        <div className={styles.ticketHeader}>
                            <h2>Title</h2>
                            <h3>Category</h3>
                            <AssignedUser />
                        </div>
                        <div className={styles.ticketId}>
                            <p>Ticket ID</p>
                            <div className={`${styles.circle} ${this.setColour()}`}></div>
                        </div>
                        <button className={styles.resolveBtn} onClick={this.toggleResolveModal}>Resolve Ticket</button>
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
                            <textarea onChange={(event) => this.setState({message: event.target.value})}/>
                            <input type="file" id="uploadFile" name="fileUpload" placeholder="Choose your file..." onChange={(event) => this.setState({image: event.target.files[0]})} />
                            <Button text={"Send"} logic={this.captureAttachment} />
                            <p id="uploading"></p>
                            <progress value="0" max="100" id="progress"/>
                        </div>
                    </section>
                </article>
                {displayResolve}
            </>
        )
    }
}


export default TicketView;