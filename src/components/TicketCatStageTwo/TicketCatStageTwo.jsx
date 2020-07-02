import React, { Component } from "react";
import styles from "./TicketCatStageTwo.module.scss";
import Options from "../Options/Options/Options";

class TicketCatStageTwo extends Component {
  state = {};
  render() {
    return (
      <div className={styles.optionsCont}>
        <section className={styles.tileParent}>
          <h1>Please choose from one of these options:</h1>
          <Options />
        </section>
      </div>
    );
  }
}





export default TicketCatStageTwo;
