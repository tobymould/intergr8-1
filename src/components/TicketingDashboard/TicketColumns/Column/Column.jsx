import React, { Component } from "react";
import styles from "./Column.module.scss";
import DropDown from "../../../../utilities/DropDown";
// import TicketView from "./TicketView";
import TicketTile from "./TicketTile";

class Column extends Component {
  renderFilter() {
    return this.props.filter ? (
      <DropDown
        filterOptions={["Date: earliest", "Date: latest", "Category"]}
      />
    ) : (
      <p>{}</p>
    );
  }

  render() {
    return (
      <>
        <article className={styles.TicketColumn}>
          <div className={styles.topOfColumn}>
            <h3>{this.props.title}</h3>
            {this.renderFilter()}
          </div>
          <section title={this.props.title}>
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
          </section>
        </article>
        {/* <TicketView /> */}
      </>
    );
  }
}

export default Column;
