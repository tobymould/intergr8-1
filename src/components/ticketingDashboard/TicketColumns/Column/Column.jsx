import React, { Component } from "react";
import styles from "./Column.module.scss";
import DropDown from "../../../DropDown";

class Column extends Component {
  renderFilter() {
    this.props.filter ? <DropDown filterOptions={["Date: earliest", "Date: latest", "Category"]} /> : <p>{}</p>
  }

  render() {
    return (
      <article className={styles.TicketColumn}>
        <div className={styles.topOfColumn}>
          <h3>{this.props.title}</h3>
          {this.renderFilter()}
        </div>
        <section title={this.props.title}>
          <p>Placeholder text</p>
          {/* Ticketview goes in here */}
        </section>
      </article>
    )
  }
}

export default Column;
