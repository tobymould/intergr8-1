import React, { Component } from 'react';
import NavBar from "../NavBar";
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import DropDown from "../../utilities/DropDown";
import TableRow from './TableRow'
import CreateUser from './CreateUser/CreateUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditUser from './EditUser';
import data from '../../data/newMockDataUsers';


class SuperUserDashboard extends Component {
    state = {
        isDisplayAddUser: false,
        isDisplayEditUser: false,
    }

    toggleAddUser = (event) => {
      this.setState({ isDisplayAddUser: !this.state.isDisplayAddUser})
    }
    
    displayAddUser = () => {
      return this.state.isDisplayAddUser ? (<CreateUser toggleAddUser={this.toggleAddUser} />) : null
    }

    toggleEditUser = (event) => {
      this.setState({ isDisplayEditUser: !this.state.isDisplayEditUser})
    }

    displayEditUser = () => {
      return this.state.isDisplayEditUser ? (<EditUser toggleEditUser={this.toggleEditUser} data={data}/>) : null
    }

    
    
    render() { 
    const mapUserData = data.map((person) => {
      return <TableRow toggleEdit={this.toggleEdit} key={person.UID} data={person}/>
    })

    return ( 
      <div className={styles.SuperUserContainer}>
        <NavBar />  
        <section className={styles.SuperUserHeader}>
          <div className={styles.superUserDetails}>
            <img src={olly} alt="" />
            <div>
              <h2>Ollie Holden</h2>
              <h3>Head of HR</h3>
            </div>
          </div>
          <div className={styles.searchBox}>
            {/* <InputBox placeholder="Search"/> */}
            <input type="text" id="search" placeholder="Search users" autoComplete="false"/>
              <span>
                <label htmlFor="search">
                  <FontAwesomeIcon icon="search"/>
                </label>
              </span>
          </div>
        </section>
        <section className={styles.SuperUserEmployee}>
          <div className={styles.tableHeader}>
            {/* <p>Image</p> */}
            <p>Name</p>
            <p>Email</p>
            {/* <p>Contact Number</p> */}
            <p>User Type</p>
            {/* <div className={styles.SuperUserAddBtn}> */}
              <span className={styles.SuperUserAddBtn} onClick={this.toggleAddUser}>
                <p>Add User</p>
              {/* <button text="Add User" onClick={this.toggleAddUser} >Add User</button> */}
                <FontAwesomeIcon icon="user-plus" />
              </span>
            {/* </div> */}
             
          </div>
          <div className={styles.tableRowScroll}>
            {mapUserData}
          </div>
          {this.displayAddUser()}
          {this.displayEditUser()}
        </section>
      </div>
    );
  }
}

export default SuperUserDashboard;