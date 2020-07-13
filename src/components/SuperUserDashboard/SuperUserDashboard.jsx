import React, { Component } from 'react';
import NavBar from "../NavBar";
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import InputBox from "../../utilities/InputBox";
import Button from "../../utilities/Button";
import DropDown from "../../utilities/DropDown";
import background from '../../assets/intergr8-login-background.svg';
import TableRow from './TableRow'
import CreateUser from './CreateUser/CreateUser';


class SuperUserDashboard extends Component {
    state = {
        dropDownOptions: ['one', 2, 3],
        isDisplayAddUser: false,
    }
 
  
    toggleAddUser = () => {
      this.setState({ isDisplayAddUser: !this.state.isDisplayAddUser})
    }

    displayAddUser = () => {
      return this.state.isDisplayAddUser ? (<CreateUser toggleAddUser={this.toggleAddUser} />) : null
    }

  render() { 
    return ( 
      <div className={styles.SuperUserContainer}>
        <NavBar />  
        <section className={styles.SuperUserHeader}>
          <div className={styles.superUserDetails}>
            <img src={olly} alt="" />
            <div>
              <h2>Ollie Holden</h2>
              <h3>Chief bossman</h3>
            </div>
          </div>
          <div className={styles.SuperUserSearch}>
            <InputBox placeholder="Search"/>
          </div>
        </section>
        <section className={styles.SuperUserEmployee}>
          <div className={styles.tableHeader}>
            <p>Full name</p>
            <p>Email</p>
            <p>Contact Number</p>
            <p>User Type</p>
            <p>Image</p>
            <div className={styles.SuperUserAddBtn}>
              <button text="Add User" onClick={this.toggleAddUser} >Add User</button>
            </div>
          </div>
          <div className={styles.tableRowScroll}>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            
          </div>
          {this.displayAddUser()}
        </section>
      </div>
    );
  }
}

export default SuperUserDashboard;