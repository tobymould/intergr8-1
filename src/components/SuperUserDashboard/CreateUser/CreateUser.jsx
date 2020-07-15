import React, { Component } from 'react';
import styles from "../CreateUser/CreateUser.module.scss";
import DropDown from "../../../utilities/DropDown";
import { firestore } from "../../../firebase";


class CreateUser extends Component {
  state = {  
      UID: '',
      name: '',
      email: '',
      password: '', 
      img: '',
      role: 1,
      department: null,
      roleTextSnippet: ''
    }

  grabUserDetail = (event) => {
    this.setState({ user: event.target.value})
  }

  displayRole = (e) => {
    switch(e.target.value) {
      case "Employee": 
        return 1;
      case "Agent":
        return 2;
      case "SuperAgent": 
        return 3;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewUser(this.state);
    this.props.toggleAddUser();
  }
  
  addNewUser = (info) => {
    firestore
    .collection("info")
    .add(info)
    .then((info) => console.log(info))
    .catch((err) => console.error(err));
  }
  

  render() { 
    console.log(this.grabUserDetail)
    return (  
      <div className={styles.CreateUserModal}>
        <div className={styles.CreateUserContainer}>
          <form className={styles.CreateUserModalContent} onSubmit={this.handleSubmit}>
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" onInput={(e) => this.setState({ name: e.target.value })}/>
            </div>
            <div>
              <label for="email">Email address:</label>
              <input type="email" id="email" onInput={(e) => this.setState({ email: e.target.value })}/>
            </div>
            <div>
              <label for="password">password address:</label>
              <input type="password" id="password" onInput={(e) => this.setState({ password: e.target.value })}/>
            </div>
            <div>
              <select className={styles.DropDown} name="" id="" onChange={(e) => this.setState({ role: this.displayRole(e) })}>
                <option value='Employee'>Employee</option>
                <option value='Agent'>Agent</option>
                <option value='SuperAgent'>SuperAgent</option>
              </select> 
            </div>
            <div>
              <label for="upload-photo">Upload Photo:</label>
              {/* <input type="file" id="upload-photo" /> */}
              <input type="text" placeholder="URL" onInput={(e) => this.setState({ img: e.target.value })} />
            </div>
            <div className={styles.btnWrapper}>
              <input type="submit" value="Create User" className={styles.submitBtn} />
              <button type="button" text={"Cancel"} onClick={this.props.toggleAddUser} className={styles.cancelBtn}>Cancel</button>
                
        
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default CreateUser;