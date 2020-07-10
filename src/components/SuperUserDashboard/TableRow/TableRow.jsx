import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import olly from '../../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import InputBox from "../../../utilities/InputBox";
import Button from "../../../utilities/Button";
// import DropDown from "../../../utilities/DropDown";


class TableRow extends Component {
  state = {  }
  render() { 
    return ( 
      <article className={styles.TableRow}>
        <p>Full name</p>
        <p>Email</p>
        {/* <DropDown /> */}
        <p>Contact Number</p>
        <Button />

      
       
      </article>
     );
  }
}
 
export default TableRow;