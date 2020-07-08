import React, { Component } from "react";
import styles from "./Tickettile.module.scss";

class TicketTile extends Component {
  render() {
    return (
      <>
        <section className={styles.TicketTile}>
          <div>
            <h3>Title</h3>
            <p>Category</p>
            <p>Employee Number</p>
            <p>
              Ticket ID:
              {Math.random()
                .toString(36)
                .slice(2)
                .substring(0, 6)
                .toUpperCase()}
            </p>
          </div>
          <div>{/* <input type="checkbox"/> */}</div>
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
