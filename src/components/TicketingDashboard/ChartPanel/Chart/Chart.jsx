import React, { Component } from "react";
import styles from "./Chart.module.scss";

class Chart extends Component {
  render() {
    const { strokeDash } = this.props;
    return (
      <>
        <svg className={styles.chart} width="160" height="160">
          <circle
            className={styles.outerCircle}
            style={{ strokeDasharray: `${strokeDash} 301` }}
            r="48"
            cx="80"
            cy="80"
          />

          <radialGradient id="myGradient">
            <stop offset="50%" stopColor="black" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <circle
            className={styles.innerShadow}
            r="44"
            cx="80"
            cy="86"
            fill="url(#myGradient)"
          />
          <circle className={styles.innerCircle} r="44" cx="80" cy="80" />
        </svg>
      </>
    );
  }
}

export default Chart;
