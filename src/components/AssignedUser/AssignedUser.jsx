import React, { Component } from "react";
import styles from "./AssignedUser.module.scss";
import * as dataFile from "../../data/app-data";
import InputBox from "../../utilities/InputBox";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AssignedUser extends Component {
  state = {
    assignedPerson: "",
    appData: dataFile,
    modalPopup: false,
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  getNames = () => {
    return dataFile.people
    .filter(person => { 
      let fullName = `${person.firstName} ${person.lastName}`;
      return fullName.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    })
    .map((person, index) => {
      console.log(person)
      if (index < 6){
        return (
        <div className={styles.displayPeople}>
          <img onClick={this.setAssignedPerson} id={person.name} key={person.id} src={person.image} alt={person.name}/>
          <span>{person.firstName} {person.lastName}</span>
        </div>
      )}
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
    this.setState({assignedPerson: event.target.id, modalPopup: !this.state.modalPopup});
  }

  getAssignedAvatar = () => {
    return dataFile.people.map(person => {
      if(this.state.assignedPerson === person.name){
        return <img src={person.image} alt={person.name} />
      }
    })
  }

  render() {
      return (
        <div className={styles.assignedUserWrapper}>
          {/* Assign Person Button (that creates the Modal)*/}
          <div className={styles.modalStyle}>
            <span>Assigned person: </span>
            <span onClick={this.displayModalPopup}>
              <FontAwesomeIcon icon="plus-circle"/>
            </span>
            {this.renderModalPopup()}
          </div>

          {/* Presents the SELECTED Person on the page */}
          <div className={styles.assignedPerson}>
            <div>
              {this.getAssignedAvatar()}
              <div>{this.state.assignedPerson} </div>
            </div>
          </div>
      </div>
      );
    }
}

export default AssignedUser;