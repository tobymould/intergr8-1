import React, { Component } from 'react';
import styles from "../CreateUser/CreateUser.module.scss";
import DropDown from "../../../utilities/DropDown";


class CreateUser extends Component {
  state = {  }
  render() { 
    return (  
      <div className={styles.CreateUserModal}>
        <div className={styles.CreateUserContainer}>
          <form action="submit" className={styles.CreateUserModalContent}>
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name"/>
            </div>
            <div>
              <label for="email">Email address:</label>
              <input type="email" id="email"/>
            </div>
            {/* <div>
              <label for="contact-no">Contact Number:</label>
              <input type="tel" id="contact-no" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div> */}
            <div>
              <label for="user-type">User Type:</label>
              <DropDown id="user-type" filterOptions={["Employee", "HR Agent", "SuperAgent"]}/>
            </div>
            <div>
              <label for="upload-photo">Upload Photo:</label>
              <input type="file" id="upload-photo" />
            </div>
            <div className={styles.btnWrapper}>
              <input type="submit" value="Create User" className={styles.submitBtn}/>
              <button type="button" text={"Cancel"} onClick={this.props.toggleAddUser} className={styles.cancelBtn}>Cancel</button>
                
             
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default CreateUser;