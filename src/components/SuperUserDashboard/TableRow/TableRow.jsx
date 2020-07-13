import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
        {/* <div> */}
          {/* <Button text="Edit/Delete"/> */}
          <div className={styles.buttonContainer}>
            <span>
              <FontAwesomeIcon icon="user-edit" />
            </span>
            <span>
              <FontAwesomeIcon icon="trash-alt" />
            </span>
          </div>
        {/* </div> */}
      </article>
     );
  }
}
 
export default TableRow;