import React, { Component } from 'react';
import styles from "./CreateTicket.module.scss";

class CreateTicket extends Component {

  render() {
    return(
      <>
      <div className={styles.backGround}>
        <section className={styles.topField}>
          <p className={styles.topBanner}>New Ticket +</p>
          <p>Integr8HR</p>
        </section>
        <section>
          <form action="" className={styles.formCreateTicket}>
            <label For="mainCategory">Select category
              <select name="" id="mainCategory">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              </label>
            <label For="subCategory">Sub-category
              <select name="" id="subCategory">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>
            <label For="subSubCategory">Sub-Sub-category
              <select name="" id="subSubCategory">
                <option value="££">££</option>
                <option value="$$">$$</option>
              </select>
            </label>
          <label For="">Description
          <textarea></textarea>
          </label>
          <input type="submit" value="Create ticket"/>
          </form>
        </section>
      </div>
      </>
    );  
  }
}

export default CreateTicket;