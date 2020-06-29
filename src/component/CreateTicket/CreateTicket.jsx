import React, { Component } from 'react';
import styles from "./CreateTicket.module.scss";

class CreateTicket extends Component {

  render() {
    return(
      <>
      <div>
        <h2>New Ticket +</h2>
        <h3>Integr8HR</h3>
        <section>
          <form action="">
            <label For="">Select category
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              </label>
            <label For="">sub-category
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
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