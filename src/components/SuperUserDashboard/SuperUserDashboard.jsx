import React, { Component } from 'react';
import NavBar from "../NavBar";
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import InputBox from "../../utilities/InputBox";
import Button from "../../utilities/Button";
import DropDown from "../../utilities/DropDown";
import background from '../../assets/intergr8-login-background.svg';
import TableRow from './TableRow'


class SuperUserDashboard extends Component {
    state = {
        dropDownOptions: ['one', 2, 3]
    }
  state = {  }
  render() { 
    return ( 
      <div className={styles.SuperUserContainer}>
       <NavBar />
       <header>
          <div className={styles.superUserDetails}>
            <img src={olly} alt="" />
            <div>
              <h2>Ollie Holden</h2>
              <h3>Chief bossman</h3>
            </div>
          </div>
          <div className={styles.SuperUserSearch}>
            <InputBox />
          </div>
      <section className={styles.SuperUserEmployee}>

      </section>
       </header>

       <section className={styles.tableHeader}>
       <article className={styles.TableRow}>
        <p>Full name</p>
        <p>Email</p>
        {/* <DropDown /> */}
        <p>Contact Number</p>
       
      </article>

       </section>
       
       <TableRow />
       <TableRow />
       <TableRow />

      </div>
     );
  }
}
 
export default SuperUserDashboard;