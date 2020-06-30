import React, { Component } from 'react';
import styles from "./TicketTile.module.scss";
// import CreateTicket from "./CreateTicket";

class TicketTile extends Component {
  // state = {  }
  render() { 
    return (  
      <>
      <section className={styles.container}>
          <div>
            <h3>Title</h3>
            <p>Category</p>
            <p>Empolyee Number</p>
          </div>
          <div>
            <input type="checkbox"/>
          </div>
          <div>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </section>

      </>
    );
  }
}

export default TicketTile;