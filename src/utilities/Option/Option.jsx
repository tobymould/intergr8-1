import React, { Component } from "react";
import styles from "./Option.module.scss";

class Option extends Component {
  render() {
    return (
      <section className={styles.tileParent}>
      {this.props.queries.map((query, index) => (
      <article className={styles.tileStyles} key={index} onClick={(event) => {
        let string = event.target.id;
        this.props.optionClick(string)
        }}>
        <p
        className={styles.catTitle}
        id={query}
      >
            {query}
        </p>
      </article >
        ))}
    </section>
  );
  }
}

export default Option;
