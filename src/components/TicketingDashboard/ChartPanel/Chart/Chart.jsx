import React, { Component } from "react";
import styles from "./Chart.module.scss";

class Chart extends Component {
  render() {
    const { strokeDash } = this.props;
    return (
      <>
        <svg className={styles.chart} width="200" height="200">
          <circle
            className={styles.outerCircle}
            style={{ strokeDasharray: `${strokeDash} 377` }}
            r="60"
            cx="100"
            cy="100"
          />

          <radialGradient id="myGradient">
            <stop offset="50%" stopColor="black" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <circle
            className={styles.innerShadow}
            r="55"
            cx="100"
            cy="107.5"
            fill="url(#myGradient)"
          />
          <circle className={styles.innerCircle} r="55" cx="100" cy="100" />
        </svg>
      </>
    );
  }
}

export default Chart;
