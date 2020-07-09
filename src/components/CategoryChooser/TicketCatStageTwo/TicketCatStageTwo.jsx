import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Option from "../../../utilities/Option";

class TicketCatStageTwo extends Component {
  state = {};
  render() {
<<<<<<< HEAD
    // console.log(this.props.data);
    return (
      <div>
        <Options />
=======
    return (
      <div className={styles.ticketCat2}>
        <Option queries={this.props.queries} optionClick={this.props.optionClick} />
>>>>>>> 4bd516a0bc46ad7249cc44302555895490b0dcc7
      </div>
    );
  }
}

export default TicketCatStageTwo;
