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
    isDisplayAddSubcategory: false,
    currentAddSubcategory: null,
    newSubcategoryInput: null,
    currentQuery: null,
  }

  toggleAddSubcategoryInput = (isDisplayAddSubcategory, newSubcategoryInput, category) => {
    if (isDisplayAddSubcategory && newSubcategoryInput) {
      // console.log(isDisplayAddSubcategory)
      // console.log(newSubcategoryInput)
      this.props.addSubcategory(category, newSubcategoryInput)
    }

    this.setState({
      isDisplayAddSubcategory: !this.state.isDisplayAddSubcategory,
      currentAddSubcategory: category
    })
  }

  handleInput = (inputText) => {
    this.setState({
      newSubcategoryInput: inputText.target.value
    })
  }

  deleteSubcategory = (currentAddSubcategory, query) => {
    this.props.removeSubcategory(currentAddSubcategory, query);
    this.setState({
      newSubcategoryInput: null
    })
  }

  render() {
    const { 
      isDisplayAddSubcategory, 
      currentAddSubcategory, 
      newSubcategoryInput, 
      currentQuery 
    } = this.state;

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
                    <span className={styles.addSubcat} onClick={() => this.toggleAddSubcategoryInput(isDisplayAddSubcategory, newSubcategoryInput, category.title)} >
                      {
                      isDisplayAddSubcategory && currentAddSubcategory === category.title ?
                        <FontAwesomeIcon icon="check-circle" title="Save Subcategory" />
                        :
                        <FontAwesomeIcon icon="plus-circle" title="Add Subcategory" />
                      }
                    </span>
                  </div>
                </div>
            )})
            }
          </div>
          <div className={styles.tableColumns}>
            {this.props.categories.map((category) => {
              return (
                <div className={styles.categoryColumn}>
                  <article>
                    {
                    isDisplayAddSubcategory && currentAddSubcategory === category.title ?
                      <input type='text' onChange={this.handleInput} className={styles.subcatInput} placeholder='Enter new subcategory...'></input>
                      : null
                    }
                    {category.queries.map(query => {
                      return (
                        <div className={styles.subcategoriesTitle}>
                          <p>{query}</p>
                          <div className={styles.buttonContainer} onClick={() => 
                            this.deleteSubcategory(currentAddSubcategory, query)}>
                            <span>
                              {
                              isDisplayAddSubcategory && currentAddSubcategory === category.title ?
                                <FontAwesomeIcon icon="trash-alt" />
                                :
                                ''
                              }
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </article>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default SuperUserDashboard;
