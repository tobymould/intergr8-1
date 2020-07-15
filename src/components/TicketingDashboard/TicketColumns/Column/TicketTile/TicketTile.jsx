import React, { Component } from "react";
import styles from "./Tickettile.module.scss";

class TicketTile extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((obj) => (
          <section className={styles.TicketTile}>
            <div>
              <h3>
                {obj.category === 1
                  ? "HR"
                  : obj.category === 2
                  ? "Payroll"
                  : obj.category === 3
                  ? "L&D"
                  : obj.category === 4
                  ? "Health & Safety"
                  : obj.category === 5
                  ? "Recruitment"
                  : null}
              </h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div>
              <select name="" id="">
                <option value="Agent1">Agent1</option>
                <option value="Agent2">Agent2</option>
              </select>
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default TicketTile;

// Ticket ID:
// {Math.random().toString(36).slice(2).substring(0, 6).toUpperCase()}
