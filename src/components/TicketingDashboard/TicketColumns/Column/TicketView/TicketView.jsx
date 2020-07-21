import React, { Component } from 'react';
import styles from './TicketView.module.scss';
import Message from './Message';
import Button from "../../../../../utilities/Button";
import ResolveTicketModal from './ResolveTicketModal';
import NavBar from '../../../../NavBar'
import firebase from "../../../../../firebase"
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
        image: ""
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

    sendMessage = (event) => {
      event.preventDefault();
      const timestamp = Number(new Date());
      const storageRef = firebase.storage().ref(timestamp.toString());
      const file_data = this.state.image;
      console.log(file_data);

      console.log(storageRef.put(file_data));
    }
    render() {
        const displayResolve = this.state.isDisplayResolve ? (<ResolveTicketModal toggleResolveModal={this.toggleResolveModal} updateInputResolve={this.updateInputResolve} toggleResolveTicketDisplay={this.toggleResolveTicketDisplay} />) : null;
        const displayResolveTicket = this.state.resolveTicketDisplay ? (<div className={styles.resolvedTicketText}><h3>Ticket status: <span>Resolved</span></h3><p>{this.state.inputResolve}</p></div>) : null;
    
        this.automaticUpdateState()

        return (
            <>
              <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>
              <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-storage.js"></script>
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
                            <textarea />
                            <input type="file" id="uploadFile" name="fileUpload" placeholder="Choose your file..." onChange={(event) => this.setState({image: event.target.files[0]})} />
                            <Button text={"Send"} logic={this.sendMessage} />
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