import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "../../../utilities/DropDown";
import firebase, { firestore } from "../../../firebase";
import DeleteUser from '../DeleteUser';



class TableRow extends Component {

  state = {
    editUser: false,
    deleteUser: false,
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

    buildDropDown = () => {
      if (this.displayRole() === "Employee") {
        return (
          <>
          <option value='Employee' selected>Employee</option>
          <option value='Agent'>Agent</option>
          <option value='SuperAgent'>SuperAgent</option>
          </>
        )
      } else if (this.displayRole() === "Agent") {
        return (
          <>
          <option value='Employee'>Employee</option>
          <option value='Agent' selected>Agent</option>
          <option value='SuperAgent'>SuperAgent</option>
          </>
        )
      } else if (this.displayRole() === "Super Agent") {
          return (
            <>
            <option value='Employee'>Employee</option>
            <option value='Agent'>Agent</option>
            <option value='SuperAgent' selected>SuperAgent</option>
            </>
          )
        }
      }

  toggleEditUser = () => {
    this.setState({
      editUser: !this.state.editUser
    })
  }

  toggleDeleteUser = () => {
    this.setState({
      deleteUser: !this.state.deleteUser
    })
  }

  displayDelete = () => {
      return this.state.deleteUser ? (<DeleteUser toggleDeleteUser={this.toggleDeleteUser} data={this.props.data} getUsers={this.props.getUsers}/>) : null
  }

  // updateUser(info) {
  //   firestore
  //   .collection("info")
  //   .doc(this.props.data.ID)
  //   .update(this.props.data.name)
  //   .then((user) => {
  //     this.setState({ user });
  //     this.props.getUsers();
  //   })
  // }

  // handleUpdate = (event) => {
  //   event.preventDefault();
  //   this.updateUser(this.state);
  //   this.props.toggleEditUser();
  // }

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
      <select>
        {this.buildDropDown()}
      </select>
      <div className={styles.buttonContainer}>
        <span>
          <FontAwesomeIcon icon="check-circle" onClick={this.updateUser}/> 
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
              <FontAwesomeIcon icon="trash-alt" onClick={this.toggleDeleteUser} />
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
        {this.displayDelete()}
      </>
    );
  }
}
 
export default TableRow;