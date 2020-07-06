import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Options from "../Options/Options/Options";

class TicketCatStageTwo extends Component {
  state = {};
  render() {
    console.log(this.props.data);
    return (
      <div className={styles.ticketCat2}>
        <h1>Please select one of the following options...</h1>
        <Options queries={this.props.queries} />
      </div>
    );
  }
}

export default TicketCatStageTwo;
