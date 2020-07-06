import React, { Component } from "react";
import styles from "./Options.module.scss";

class Options extends Component {
  render() {
    return (
      <>
        {this.props.queries.map((query) => (
          <p>{query}</p>
        ))}
      </>
    );
  }
}

export default Options;
