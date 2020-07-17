import React, { Component } from 'react';
import NavBar from "../NavBar";
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import TableRow from './TableRow'
import CreateUser from './CreateUser/CreateUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../../firebase";
import DeleteUser from './DeleteUser/DeleteUser';


class SuperUserDashboard extends Component {
  state = {
    isDisplayAddUser: false,
    users: [],
    idDisplayDeleteUser: false,
    filterText: ''
  }

  toggleDeleteUser = (event) => {
    this.setState({ idDisplayDeleteUser: !this.state.idDisplayDeleteUser })
  }

  displayDeleteUser = () => {
    return this.state.isDisplayDeleteUser ? (<DeleteUser toggleDeleteUser={this.toggleDeleteUser} />) : null
  }

  toggleAddUser = (event) => {
    this.setState({ isDisplayAddUser: !this.state.isDisplayAddUser })
  }

  displayAddUser = () => {
    return this.state.isDisplayAddUser ? (<CreateUser toggleAddUser={this.toggleAddUser} getUsers={this.getUsers} />) : null
  }

  toggleEditUser = (event) => {
    this.setState({ isDisplayEditUser: !this.state.isDisplayEditUser })
  }



  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    firestore
      .collection('info')
      .get()
      .then((snapshot) => {
        const users = snapshot.docs
          .map((doc => doc.data()))
        this.setState({ users })
      })
  }

  render() {
    const mapUserData = this.state.users
      .filter((user) => user.name.toLowerCase().includes(this.state.filterText))
      .map((person) => {
        return <TableRow toggleEdit={this.toggleEdit} key={person.ID} data={person} getUsers={this.getUsers} />
      })

    return (
      <div className={styles.SuperUserContainer}>
        <NavBar user={this.props.user} signOut={this.props.signOut} />
        <section className={styles.SuperUserHeader}>
          <div className={styles.superUserDetails}>
            <img src={olly} alt="" />
            <div>
              <h2>Ollie Holden</h2>
              <h3>Head of HR</h3>
            </div>
          </div>
          <div className={styles.searchBox}>
            <input type="text" id="search" placeholder="Search users" autoComplete="false" onChange={e => this.setState({ filterText: e.target.value.toLowerCase() })} />
            <span>
              <label htmlFor="search">
                <FontAwesomeIcon icon="search" />
              </label>
            </span>
          </div>
        </section>
        <section className={styles.SuperUserEmployee}>
          <div className={styles.tableHeader}>
            <p className={styles.name}>Name</p>
            <p className={styles.email}>Email</p>
            <p className={styles.password}>Password</p>
            <p className={styles.userType}>User Type</p>
            <span className={styles.SuperUserAddBtn} onClick={this.toggleAddUser}>
              <p>Add User</p>
              <FontAwesomeIcon icon="user-plus" />
            </span>
          </div>
          <div className={styles.tableRowScroll}>
            {mapUserData}
          </div>
          {this.displayAddUser()}
          {/* {this.displayEditUser()} */}
          {this.displayDeleteUser()}
        </section>
      </div>
    );
  }
}

export default SuperUserDashboard;