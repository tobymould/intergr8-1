import React, { Component } from "react";
import styles from "./Option.module.scss";

class Option extends Component {
  render() {
    return (
      <>
        {this.props.queries.map((query, index) => (
          <p
            key={index}
            className={styles.option}
            id={query}
            onClick={(event) => {
              let string = event.target.id
              this.props.optionClick(string)
            }
          }
          >
            {query}
          </p>
        ))}
      </>
    );
  }
}

export default Option;
