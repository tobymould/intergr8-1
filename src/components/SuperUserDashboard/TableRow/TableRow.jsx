import React, { Component } from 'react';
import styles from "./TableRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class TableRow extends Component {

  // displayRole = () => {
  //   return switch(this.props.role) {
  //     case 1: 
  //       return "Employee";
  //       break;
  //     case 2:
  //       return "Agent";
  //       break;
  //     case 3: 
  //       return "Superagent"
  //       break;
  //   }
  // }

  render() { 
    const { name, UID, email, img, role } = this.props.data;

    return ( 

      <article className={styles.TableRow}>
        {/* <div className={styles.name}> */}
        <div>
          <img src={img}/>
            <p>{name}</p>
        </div>
        {/* </div> */}
        {/* <div> */}
          <p>{email}</p>
        {/* </div> */}
        {/* <p>07867345432</p> */}
        {/* <div> */}
         <p>User Type</p>
        {/* </div> */}
        {/* <div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <Button text="Edit/Delete"/> */}
        <div className={styles.buttonContainer}>
          <span>
            <FontAwesomeIcon icon="user-edit" onClick={this.props.toggleEditUser} />
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