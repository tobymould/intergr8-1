import React, { Component } from "react";
import styles from "./Options.module.scss";
import {payrollData} from "../../../data/TicketCatData";

class Options extends Component {
  render() {
    return (
      <>
        {payrollData.map((titleObj) => (
          <article className={styles.tileStyles}>
            <p>{titleObj.query}</p>
          </article>
        ))}
      </>
    );
  }
}

export default Options;
