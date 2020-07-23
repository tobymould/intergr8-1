import React, { Component } from "react";
import styles from "./AssignedUser.module.scss";
import firebase, { firestore } from '../../firebase';
// import * as dataFile from "../../data/app-data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AssignedUser extends Component {
  state = {
    assignedTo: [],
    // appData: dataFile,
    modalPopup: false,
    searchTerm: "",
    users: [],
  };

  componentDidMount() {
    this.getUserFromDB();
  }

  getUserFromDB = () => {
    firestore
    .collection('info')
    .get()
    .then((snapshot) => {
      const users = snapshot.docs.map(doc => doc.data())
      //another firestore request that gets the ticket using the ticketID   this.getAssignedToData
      this.setState({ users });
    })
  }

  // ...tickets.ID, assignedTo: person.name 
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  getNames = () => {
    return this.state.users
    .filter(person => { 
      let fullName = `${person.name}`;
      return fullName.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    })
    .map((person, index) => {
      if (index < 6){
        return (
        <div className={styles.displayPeople}>
          <img onClick={this.setAssignedPerson} id={person.ID} key={person.ID} src={person.img} alt={person.name}/>
          <span>{person.name}</span>
        </div>
      )}
      return null;
    })
    }
      
  displayModalPopup = (event) => {
    event.stopPropagation();
    this.setState({modalPopup: !this.state.modalPopup, searchTerm: ""})
  }

  renderModalPopup = () => {
    if (this.state.modalPopup === true){
      return (
        <div className={styles.modalPopupStyle}> 
          <input type="text" placeholder="Search..." onChange={this.handleChange}/>
          {/* <InputBox id="assignuser" type="text" placeholder="Search..." onChange={this.handleChange}/> */}
          <div>
            {this.getNames()}
          </div>
          <span className={styles.closeIcon} onClick={this.displayModalPopup} ><FontAwesomeIcon icon="times"/></span>
        </div>
      )
    } 
  } 

  setAssignedPerson = (event) => {
     firestore
      .collection('tickets')
      .doc(this.props.ticketID)
      .update({ assignedTo:firebase.firestore.FieldValue.arrayUnion(event.target.id)})
      .then(this.getAssignedToData);
  }

  getAssignedToData = () => {
    firestore
      .collection('tickets')
      .where("ID", "==", this.props.ticketID)
      .get()
      .then((snapshot) => {
        const assignedTo = snapshot.docs[0].data().assignedTo;
        this.setState({
          assignedTo,
          modalPopup: !this.state.modalPopup
        });
      })  
  }


  getAssignedPerson = () => {
    const { assignedTo, users } = this.state;
    if (assignedTo.length > 0) {
      const user = users.find(person => person.ID === assignedTo[0]);
      return (
        <>
          <img src={user.img} alt={user.name}/>
          <span>{user.name}{(assignedTo.length > 1) ? <p><FontAwesomeIcon icon="plus"/></p> : ""}</span>
          
        </>
      )
    } else {
      return (<></>);
    }
  }
  
  render() {
      console.log(this.state.assignedTo);
      return (
        <div className={styles.assignedUserWrapper}>
          {/* Assign Person Button (that creates the Modal)*/}
          <div className={styles.modalStyle}>
            <span className={styles.trailer}>Assigned person: </span>
            <span className={styles.trailer} onClick={this.displayModalPopup}>
              <FontAwesomeIcon icon="plus-circle"/>
            </span>
              {this.renderModalPopup()}
          </div>

          {/* Presents the SELECTED Person on the page */}
          <div className={styles.assignedPerson}>
            {this.getAssignedPerson()}
          </div>
      </div>
      );
    }
}

export default AssignedUser;