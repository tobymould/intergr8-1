import React, { Component } from "react";
import styles from "./AssignedUser.module.scss";
import firebase, { firestore } from '../../firebase';
// import * as dataFile from "../../data/app-data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AssignedUser extends Component {
  state = {
    assignedPerson: "",
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
      const users = snapshot.docs
      .map((doc => doc.data()))
      this.setState({ users })
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
      // .set({ assignedTo: event.target.id}, { merge: true })
      .update({ assignedTo:firebase.firestore.FieldValue.arrayUnion(event.target.id)})
      // .then((res) => {
        this.setState({
          assignedPerson: event.target.id,
          modalPopup: !this.state.modalPopup
        // });  
       })
  }

  getAssignedPerson = () => {
    return this.state.users.map(person => {
      if(this.state.assignedPerson === person.ID) {
        return (
          <>
          <img src={person.img} alt={person.name}/>
          <span>{person.name}</span>
          </>
        )}
      return null;
  })
}
  

  render() {
  
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