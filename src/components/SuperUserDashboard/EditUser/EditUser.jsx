import React, { Component } from 'react';
import styles from "./EditUser.module.scss";
import DropDown from "../../../utilities/DropDown";


class EditUser extends Component {
  state = {  }
  render() { 
    console.log(this.props.data.name)
    return ( 
      <div className={styles.EditUserModal}>
      <div className={styles.EditUserContainer}>
        <form action="submit" className={styles.EditUserModalContent}>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" value={this.props.data.name}/>
          </div>
          <div>
            <label for="email">Email address:</label>
            <input type="email" id="email" value={this.props.data.email}/>
          </div>
          {/* <div>
            <label for="contact-no">Contact Number:</label>
            <input type="tel" id="contact-no" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={this.props.}/>
          </div> */}
          <div>
            <label for="user-type">User Type:</label>
            <DropDown id="user-type" filterOptions={["Employee", "HR User", "SuperUser"]}/>
          </div>
          <div>
            <label for="upload-photo">Upload Photo:</label>
            <input type="file" id="upload-photo" />
          </div>
          <div className={styles.btnWrapper}>
            <input type="submit" value="Update User" className={styles.submitBtn}/>
            <button type="button" text={"Cancel"} onClick={this.props.toggleEditUser} className={styles.cancelBtn}>Cancel</button>
              
           
          </div>
        </form>
      </div>
    </div>
     );
  }
}
 
export default EditUser;