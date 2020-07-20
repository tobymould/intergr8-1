import React, { Component } from "react";
import styles from "./Chart.module.scss";

class Chart extends Component {
  render() {
    const { strokeDash, percent } = this.props;
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
          <text
            x="57.5"
            y="-10"
            style={{ "fontSize": 30, "fontFamily": "Poppins" }}
            transform="rotate(90, 30, 30)"
          >{`${Math.round(percent)}%`}</text>
        </svg>
      </>
    );
  }
}

export default Chart;
