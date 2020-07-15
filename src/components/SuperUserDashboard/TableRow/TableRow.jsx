import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "../../../utilities/DropDown";



class TableRow extends Component {

  state = {
    editUser: false,
  }

  displayRole = () => {
    switch(this.props.data.role) {
      case 1: 
        return "Employee";
      case 2:
        return "Agent";
      case 3: 
        return "Super Agent"
    }
  }

  toggleEditUser = () => {
    this.setState({
      editUser: !this.state.editUser
    })
  }

  displayEdit = () => {
    const { name, UID, email, img, role } = this.props.data;

    if (this.state.editUser) {
      return (
      <article className={styles.TableRow}>
      <div>
        <img src={img}/>
          <input type="text" defaultValue={name} />
      </div>
        <input type="email" defaultValue={email} />
      <DropDown id="user-type" filterOptions={["Employee", "HR Agent", "SuperAgent"]}/>
      {/* <p>{this.displayRole()}</p> */}
      <div className={styles.buttonContainer}>
        <span>
          <FontAwesomeIcon icon="check-circle" />
        </span>
        <span>
          <FontAwesomeIcon icon="times-circle" onClick={this.toggleEditUser}/>
        </span>
        </div>
    </article>
    )} else {
      return (
        <article className={styles.TableRow}>
          <div>
            <img src={img}/>
              <p>{name}</p>
          </div>
            <p>{email}</p>
          <p>{this.displayRole()}</p>
          <div className={styles.buttonContainer}>
            <span>
              <FontAwesomeIcon icon="user-edit" onClick={this.toggleEditUser} />
            </span>
            <span>
              <FontAwesomeIcon icon="trash-alt" />
            </span>
            </div>
        </article>
      ) 
    } 
  }

  render() { 
    return ( 
      <>
        {this.displayEdit()}
      </>
     );
  }
}
 
export default TableRow;