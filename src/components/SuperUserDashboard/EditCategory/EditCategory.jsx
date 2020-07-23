import React, { Component } from 'react';
import styles from "./EditCategory.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EditCategory extends Component {
  state = {
    isDisplayAddSubcategory: false,
    currentAddSubcategory: null,
    newSubcategoryInput: null,
    currentQuery: null,
  }

  toggleAddSubcategoryInput = (isDisplayAddSubcategory, newSubcategoryInput, category) => {
    if (isDisplayAddSubcategory && newSubcategoryInput) {
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
        <section className={styles.SuperUserCategory}>
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
    );
  }
}

export default EditCategory;
