import React, { Component } from 'react';
import styles from "./CreateTicket.module.scss";

class CreateTicket extends Component {

  // getDataForm = () => {

  // }

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
                <option value="L&D">L&D</option>
                <option value="Payroll">Payroll</option>
                <option value="General HR">General HR</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Health & Safety">Health & Safety</option>
              </select>
              </label>
            <label For="subCategory">Sub-category
              <select name="" id="subCategory">
                <option value="CPD">CPD</option>
                <option value="b">b</option>
              </select>
            </label>
            <label For="subSubCategory">Sub-Sub-category
              <select name="" id="subSubCategory">
                <option value="Training Support Request">Training Support Request</option>
                <option value="$$">$$</option>
              </select>
            </label>
          <label For="">Description
          <textarea placeholder="Type here..."></textarea>
          </label>
          <input type="submit" value="Create ticket" onclick={() => this.getDataForm()}/>
          </form>
        </section>
      </div>
      </>
    );  
  }
}

export default CreateTicket;