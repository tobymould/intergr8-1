import React, { Component } from "react";
import styles from "./Option.module.scss";

class Option extends Component {
  render() {
    return (
      <>
        {this.props.queries.map((query) => (
          <p className={styles.option}onClick={this.props.optionClick} >{query} </p>
        ))}

      </>
    );
  }
}

export default Option;
