import React, { Component } from "react";
import styles from "./AssignedUser.module.scss";
import * as dataFile from "../../data/app-data"

class AssignedUser extends Component {
  state = {
    assignedPerson: "",
    appData: dataFile
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({assignedPerson: event.target.value});
  }

  getAssignedAvatar = () => {
    return dataFile.people.map(person => {
      if(this.state.assignedPerson === person.name){
        return <img src={person.image} alt={person.name} />
      }
    })
  } 
  displayOptions = () => {
    return <select value={this.state.value} onChange={this.handleChange}>
      {dataFile.people.map(person => {
        return <option value={person.name}>{person.name}</option>
      })}
    </select>
  }

  render() {
      return (
        <div className={styles.assignedUserWrapper}>
          <label>
            <span>Assign person: </span>
            {this.displayOptions()}
          </label>
        <div className={styles.assignedPerson}>
          <span>Person Assigned: </span>
          {this.getAssignedAvatar()}
          {this.state.assignedPerson}
        </div>
      </div>
      );
    }
}

export default AssignedUser;