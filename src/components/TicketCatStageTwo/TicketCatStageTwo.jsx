import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Options from "../Options/Options/Options";

class TicketCatStageTwo extends Component {
  state = {}
  render() {
    console.log(this.props.data)
    return (
      <h1>Please select one of the following options...</h1>
    );
  }
}

export default TicketCatStageTwo;
