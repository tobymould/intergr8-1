import React, { Component } from "react";
import styles from "./TicketCatStageThree.module.scss";
import Checkout from "../Checkout";

class TicketCatStageThree extends Component {
  state = {};
  render() {
    return (
      <div className={styles.stageThree}>
        <Checkout optionClick={this.props.optionClick} />
      </div>
    );
  }
}

export default TicketCatStageThree;
