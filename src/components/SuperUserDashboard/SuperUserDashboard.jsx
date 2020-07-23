import React, { Component } from 'react';
import NavBar from "../NavBar";
import styles from "./SuperUserDashboard.module.scss";
import olly from '../TicketingDashboard/TicketColumns/Column/TicketView/olly.jpg';
import TableRow from './TableRow'
import CreateUser from './CreateUser/CreateUser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "../../firebase";
import DeleteUser from './DeleteUser/DeleteUser';

class SuperUserDashboard extends Component {
  state = {
    isDisplayAddUser: false,
    users: [],
    idDisplayDeleteUser: false,
    filterText: '',
    isDisplayAddSubcategory: false,
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

  componentDidMount() {
    this.getUsers();
    this.props.setCategoriesState();
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

  // steph and niall

  toggleAddSubcategoryInput = (event) => {
    this.setState({ isDisplayAddSubcategory: !this.state.isDisplayAddSubcategory })
  }

  render() {

    // const mapUserData = this.state.users
    //   .filter((user) => user.name.toLowerCase().includes(this.state.filterText))
    //   .map((person) => {
    //     return <TableRow toggleEdit={this.toggleEdit} key={person.ID} data={person} getUsers={this.getUsers} />
    //   })
    return (
      <div className={styles.SuperUserContainer}>
        <NavBar user={this.props.user} signOut={this.props.signOut} />
        <section className={styles.SuperUserHeader}>
          <div className={styles.superUserDetails}>
            <img src={olly} alt="" />
            <div>
              <h2>Ollie Holden</h2>
              <h3>Head of HR</h3>
            </div>
          </div>

          {/* Removed by Steph */}
          {/* <div className={styles.searchBox}>
            <input type="text" id="search" placeholder="Search users" autoComplete="false" onChange={e => this.setState({ filterText: e.target.value.toLowerCase() })} />
            <span>
              <label htmlFor="search">
                <FontAwesomeIcon icon="search" />
              </label>
            </span>
          </div> */}
        </section>
        <section className={styles.SuperUserEmployee}>
        <div className={styles.tableHeader}>
          {this.props.categories.map((category) => {
          return (
            <div className={styles.categoryTitle}>
              <div className={styles.categoryTitleText}>
                <p>{category.title}</p>
              </div>
              <div className={styles.buttonContainer}>
                <span onClick={this.toggleAddSubcategoryInput}>
                  <FontAwesomeIcon icon="plus-circle" title="Add Subcategory" />
                </span>
                <span>
                  <FontAwesomeIcon icon="pencil-alt" title="Edit Subcategories" />
                </span>
              </div>
            </div>
          )})
          } 
          {/* {this.displayAddUser()} */}
          {/* { {this.displayEditUser()} } */}
          {/* { {this.displayDeleteUser()} */}
           </div>
          <div className={styles.tableColumns}>
          {this.props.categories.map((category) => {
            return (  
              <div className={styles.categoryColumn}>
                <article>{category.queries.map(query => {
                  return (
                    <div className={styles.subcategoriesTitle}>
                      <p>{query}</p>
                      <div className={styles.buttonContainer}>
                        <span>
                          {/* <FontAwesomeIcon icon="trash-alt" /> */}
                        </span>
                      </div>
                    </div>

                  )
                  })}</article>
                
              </div>
            )

          }
          )}
            {/* {mapUserData} */}
          </div>
        </section>
      </div>
    );
  }
}

export default SuperUserDashboard;