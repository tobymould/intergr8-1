import React, { Component } from 'react';
import styles from "../DeleteUser/DeleteUser.module.scss";
import { firestore } from "../../../firebase";


class DeleteUser extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.deleteUser(this.state);
  }
  

  deleteUser() {
      firestore
      .collection('info')
      .doc(this.props.data.ID)
      .delete()
      .then((user) => {
        this.props.getUsers();
        this.setState({ user });
        this.props.toggleDeleteUser();
      })
  }
    

  render() { 
    return (  
      <div className={styles.DeleteUserModal}>
        <div className={styles.DeleteUserContainer}>
          <form className={styles.DeleteUserModalContent} onSubmit={this.handleSubmit}>          
            <h2>Are you sure you want to delete this user?</h2>
            <div className={styles.btnWrapper}>
              <input type="submit" value="Delete User" className={styles.submitBtn} onClick={this.deleteUsers}/>
              <button type="button" text={"Cancel"} onClick={this.props.toggleDeleteUser} className={styles.cancelBtn}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default DeleteUser;