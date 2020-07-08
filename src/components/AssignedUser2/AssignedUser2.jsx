import React, { Component } from "react";
import styles from "./AssignedUser2.module.scss";
import * as dataFile from "../../data/app-data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AssignedUser2 extends Component {
  state = {
    assignedPerson: "",
    appData: dataFile,
    modalPopup: false
  }

  displayModalPopup = (event) => {
    this.setState({modalPopup: !this.state.modalPopup})
  }

  renderModalPopup = () => {
    if (this.state.modalPopup === true){
      return (
        <div className={styles.modalPopupStyle}> 
          <input type="text" placeholder="Search..."/>
          <div>
            {dataFile.people.map(person => <img onClick={this.setAssignedPerson} id={person.name} key={person.id} src={person.image} alt={person.name}/> )}
          </div>
          <span onClick={this.displayModalPopup} ><FontAwesomeIcon icon="times"/></span>
        </div>
      )
    } 
  } 


  setAssignedPerson = (event) => {
    this.setState({assignedPerson: event.target.id});
  }

  getAssignedAvatar = () => {
    return dataFile.people.map(person => {
      if(this.state.assignedPerson === person.name){
        return <img src={person.image} alt={person.name} />
      }
    })
  } 

  // displayOptions = () => {
  //   return <select value={this.state.value} onChange={this.handleChange}>
  //     {dataFile.people.map(person => {
  //       return <option value={person.name}>{person.name}</option>
  //     })}
  //   </select>
  // }




  render() {
      return (
        <div className={styles.assignedUser2Wrapper}>
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

export default AssignedUser2;