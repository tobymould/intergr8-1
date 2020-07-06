import React, { Component } from 'react';
import styles from "./TicketTile.module.scss";
// import CreateTicket from "./CreateTicket";


class TicketTile extends Component {
  render() { 
    return (  
      <>
      <section className={styles.container}>
          <div>
            <h3>Title</h3>
            <p>Category</p>
            <p>Employee Number</p>
            <p>Ticket Reference no:</p>
          </div>
          <div>
            {/* <input type="checkbox"/> */}
          </div>
          <div>
            <select name="" id="">
              <option value="Agent1">Agent1</option>
              <option value="Agent2">Agent2</option>
            </select>
          </div>
        </section>
      </>
    );
  }
}

export default TicketTile;
