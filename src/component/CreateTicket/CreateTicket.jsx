import React, { Component } from 'react';
import styles from "./CreateTicket.module.scss";

class CreateTicket extends Component {

  render() {
    return(
      <>
      <button>New Ticket +</button>
      <h2>Integr8HR</h2>
      <section>
        <form action="">
          <label For="">Select category</label>
            <option value="1">1</option>
            <option value="2">2</option>
          <label For="">sub-category</label>
            <option value="a">a</option>
            <option value="b"b></option>
        </form>
        <label For="">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Create Ticket</button>
      
      </section>
      </>
    );
    
  }
}

export default CreateTicket;