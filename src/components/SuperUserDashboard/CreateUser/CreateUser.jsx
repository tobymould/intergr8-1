import React, { Component } from 'react';
import styles from "../CreateUser/CreateUser.module.scss";
import firebase, { firestore } from "../../../firebase";


class CreateUser extends Component {
  state = {  
      ID: '',
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
      default: 
        return 1;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createUserAccount(this.state)
  }
  
  addNewUser = (info) => {
    firestore
    .collection("info")
    .doc(info.ID)
    .set(info)
    .then(() => {
      this.props.toggleAddUser();
      this.props.getUsers();
    })
    .catch((err) => console.error(err));
  }

  createUserAccount = (info) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(info.email, info.password)
      .then(data => {
        this.setState({ID: data.user.uid})
        this.addNewUser(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  

  render() { 
    return (  
      <div className={styles.CreateUserModal}>
        <div className={styles.CreateUserContainer}>
          <form className={styles.CreateUserModalContent} onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className={styles.name} onChange={(e) => this.setState({ name: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" id="email" onInput={(e) => this.setState({ email: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
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
              <label htmlFor="upload-photo">Photo:</label>
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