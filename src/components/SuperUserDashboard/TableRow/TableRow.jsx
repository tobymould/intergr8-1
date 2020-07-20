import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../../../firebase";
import DeleteUser from '../DeleteUser';



class TableRow extends Component {

  state = {
    editUser: false,
    deleteUser: false,
    update: {},
    modalPopup: false
  }

  displayRole = () => {
    switch(this.props.data.role) {
      case 1: 
        return "Employee";
      case 2:
        return "Agent";
      case 3: 
        return "Super Agent"
      default:
        return "Employee";
    }
  }

  changeRole = (e) => {
    switch(e.target.value) {
      case "Employee": 
        return 1;
      case "Agent":
        return 2;
      case "SuperAgent": 
        return 3;
      default:
        return "Employee";
    }
  }
  
  buildDropDown = () => {
    if (this.displayRole() === "Employee") return "Employee"
      else if (this.displayRole() === "Agent") return "Agent"
      else if (this.displayRole() === "Super Agent") return "SuperAgent"
    }

  toggleEditUser = () => {
    this.setState({
      editUser: !this.state.editUser,
      update : {}
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

  renderModalPopup = () => {
    if (this.state.modalPopup === true){
      return (
        <div className={styles.modalPopupStyle}> 
          <input type="text" defaultValue={this.props.data.img} placeholder="Input image url" onInput={(e) => this.setState({ update: {...this.state.update, img: e.target.value } })}/>
          <span className={styles.closeIcon} onClick={this.displayModalPopup} ><FontAwesomeIcon icon="times"/></span>
        </div>
      )
    } 
  } 

  displayModalPopup = (event) => {
    this.setState({modalPopup: !this.state.modalPopup})
  }

  displayEdit = () => {
    const { name, email, img, password } = this.props.data;

    if (this.state.editUser) {
      return (
      <article className={styles.TableRow}>
        <div className={styles.imageEdit}>
          {img ? <img src={img} alt="employee" onClick={this.displayModalPopup}/> : <FontAwesomeIcon onClick={this.displayModalPopup} className={styles.icon} icon="user-circle"/>}
          {this.renderModalPopup()}
          <input className={styles.name} type="text" id="name" defaultValue={name} onInput={(e) => this.setState({ update: {...this.state.update, name: e.target.value } })}/>
        </div>
          <input className={styles.email} type="email" defaultValue={email} onInput={(e) => this.setState({ update: {...this.state.update, email: e.target.value } })}/>
          <input className={styles.password} type="password" defaultValue={password} onInput={(e) => this.setState({ update: {...this.state.update, password: e.target.value } })}/>
        <select value={this.buildDropDown()} className={styles.userType} onChange={(e) => this.setState({ update: {...this.state.update, role: this.changeRole(e) }})}>
            <option value='Employee'>Employee</option>
            <option value='Agent'>Agent</option>
            <option value='SuperAgent'>SuperAgent</option>
        </select>
        <div className={styles.buttonContainer}>
          <span>
            <FontAwesomeIcon icon="check-circle" onClick={this.updateUserDetails} />
          </span>
          <span>
            <FontAwesomeIcon icon="times-circle" onClick={this.toggleEditUser}/>
          </span>
        </div>
    </article>
    )} else {
      return (
        <article className={styles.TableRow}>
          <div className={styles.imgName}>
          {img ? <img src={img} alt="employee"/> : <FontAwesomeIcon className={styles.icon} icon="user-circle"/>}
            <p className={styles.name}>{name}</p>
          </div>
            <p className={styles.email}>{email}</p>
            <p className={styles.password}>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>
          <p className={styles.userType}>{this.displayRole()}</p>
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

  updateUserDetails = () => {
    firestore
    .collection("info")
    .doc(this.props.data.ID)
    .update({...this.state.update})
    .then((docRef) => {
      this.props.getUsers();
      this.toggleEditUser();
    })
    .catch((err) => console.error(err));
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