import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Option from "../../../utilities/Option";

class TicketCatStageTwo extends Component {
  state = {};
  render() {
    return (
      <div className={styles.ticketCat2}>
        <Option queries={this.props.queries} optionClick={this.props.optionClick} />
      </div>
    );
  }
}

export default TicketCatStageTwo;
