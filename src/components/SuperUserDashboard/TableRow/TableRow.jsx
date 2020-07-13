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
        <p>John Smith</p>
        <p>J.Smith@gmail.com</p>
        <p>07867345432</p>
        <p>User Type</p>
        <p>Image</p>
        <div className={styles.tableRowBtn}>
          <Button text="Edit/Delete"/>
        </div>
      </article>
     );
  }
}
 
export default TableRow;