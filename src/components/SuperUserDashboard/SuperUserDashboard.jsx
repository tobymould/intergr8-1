import React, { Component } from 'react';
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import TableRow from './TableRow'
import CreateUser from './CreateUser/CreateUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../../firebase";
import DeleteUser from './DeleteUser/DeleteUser';
import EditCategory from './EditCategory';


class SuperUserDashboard extends Component {
  state = {
    isDisplayAddUser: false,
    users: [],
    idDisplayDeleteUser: false,
    filterText: '',
    panelShowingIs: 'users',
  }

  toggleDeleteUser = (event) => {
    this.setState({ idDisplayDeleteUser: !this.state.idDisplayDeleteUser })
  }

  displayDeleteUser = () => {
    return this.state.isDisplayDeleteUser ? (<DeleteUser toggleDeleteUser={this.toggleDeleteUser} />) : null
  }

  toggleAddUser = (event) => {
    this.setState({ isDisplayAddUser: !this.state.isDisplayAddUser })
  }

  displayAddUser = () => {
    return this.state.isDisplayAddUser ? (<CreateUser toggleAddUser={this.toggleAddUser} getUsers={this.getUsers} />) : null
  }

  toggleEditUser = (event) => {
    this.setState({ isDisplayEditUser: !this.state.isDisplayEditUser })
  }

  showCategoryPanel = () => {
    this.setState({
      panelShowingIs: 'categories'
    })
  }

  showUsersPanel = () => {
    this.setState({
      panelShowingIs: 'users'
    })
  }

  componentDidMount() {
    this.getUsers();
      firestore
        .collection('info')
        .where("ID", "==", this.props.user.uid )
        .get()
          .then(snapshot => {
            snapshot.docs
              .forEach(doc => {
                this.setState({userInfo: doc.data()})
              })
          })
        // })      
        .catch(err => console.log(err))
    }
  

  getUsers = () => {
    firestore
      .collection('info')
      .get()
      .then((snapshot) => {
        const users = snapshot.docs
          .map((doc => doc.data()))
        this.setState({ users })
      })
  }

  getUsersTabColour = () => {
    if(this.state.panelShowingIs === 'users')
      return 'darkgrey';
  }

  getCategoriesTabColour = () => {
    if(this.state.panelShowingIs === 'categories')
      return 'darkgrey';
  }

  displayRole = () => {
    switch(this.state.userInfo.name) {
      case 1: 
        return "Employee";
      case 2:
        return "Agent";
      case 3: 
        return "Super Agent"
      default:
        return "Employee";
    }
  }

  render() {
    const mapUserData = this.state.users
      .filter((user) => user.name.toLowerCase().includes(this.state.filterText))
      .map((person) => {
        return <TableRow toggleEdit={this.toggleEdit} key={person.ID} data={person} getUsers={this.getUsers} />
      })

    let searchBarDisplay;
      this.state.panelShowingIs === 'users' ? searchBarDisplay = 'flex' : searchBarDisplay = 'none';

    return (
      <div className={styles.SuperUserContainer}>
        <section className={styles.SuperUserHeader}>
          <div className={styles.superUserDetails}>
          {this.state.userInfo && this.state.userInfo.img ? <img src={this.state.userInfo.img} alt="Your pic" /> : <FontAwesomeIcon className={styles.icon} icon="user-circle"/>}

            <div>
              <h2>{this.state.userInfo && this.state.userInfo.name ? this.state.userInfo.name : 'Your name'}</h2>
              <h3>{this.state.userInfo && this.state.userInfo.name ? this.displayRole() : 'Your role'}</h3>

            </div>
          </div>
          <div className={styles.searchBox} style={{ "display": searchBarDisplay }}>
            <input type="text" id="search" placeholder="Search users" autoComplete="false" onChange={e => this.setState({ filterText: e.target.value.toLowerCase() })} />
            <span>
              <label htmlFor="search">
                <FontAwesomeIcon icon="search" />
              </label>
            </span>
          </div>
        </section>
      <div className={styles.toggleTab}>
        <span style={{ "background-color": this.getUsersTabColour() }} onClick={() => {this.showUsersPanel()}}>Users Panel </span>
        <span style={{ "background-color": this.getCategoriesTabColour() }} onClick={() => {this.showCategoryPanel()}}>Categories Panel</span>
      </div>
      {this.state.panelShowingIs === 'users' ? 
        <section className={styles.SuperUserEmployee}>
          <div className={styles.tableHeader}>
            <p className={styles.name}>Name</p>
            <p className={styles.email}>Email</p>
            <p className={styles.password}>Password</p>
            <p className={styles.userType}>User Type</p>
            <span className={styles.SuperUserAddBtn} onClick={this.toggleAddUser}>
              <p>Add User</p>
              <FontAwesomeIcon icon="user-plus" />
            </span>
          </div>
          <div className={styles.tableRowScroll}>
            {mapUserData}
          </div>
          {this.displayAddUser()}
          {/* {this.displayEditUser()} */}
          {this.displayDeleteUser()}
        </section>
      :  
        <EditCategory 
          setCategoriesState={this.props.setCategoriesState}
          addSubcategory={this.props.addSubcategory}
          removeSubcategory={this.props.removeSubcategory}
          categories={this.props.categories} /> }
    </div>
    );
  }
}

export default SuperUserDashboard;