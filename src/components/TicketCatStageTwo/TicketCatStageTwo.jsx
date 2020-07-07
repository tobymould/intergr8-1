import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Option from "../Option/Option";

class TicketCatStageTwo extends Component {
  state = {};
  render() {
    console.log(this.props.data);
    return (
      <div className={styles.ticketCat2}>
        <h1>Please select one of the following options...</h1>
        <Option queries={this.props.queries} optionClick={this.props.optionClick} />
      </div>
    );
  }
}

export default TicketCatStageTwo;
