import React, { Component } from "react";
import styles from "./Chart.module.scss";

class Chart extends Component {

  render() {
    const { strokeDash, percent } = this.props;

    return (
      <>
        {/* <svg className={styles.chart} width={scaleDown(160)} height={scaleDown(160)}> */}
        <svg className={styles.chart} viewBox="0 0 160 160" >
          <circle
            className={styles.outerCircle}
            style={{ strokeDasharray: `${strokeDash} 301` }}
            r="30%"
            cx="50%"
            cy="50%"
          />

          <radialGradient id="myGradient">
            <stop offset="50%" stopColor="black" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <circle
            className={styles.innerShadow}
            r="27.5%"
            cx="50%"
            cy="50%"
            fill="url(#myGradient)"
          />

          <circle
            className={styles.innerCircle}
            r="27.5%"
            cx="50%"
            cy="50%"
          />

          <text
            x="30%"
            y="-10"
            style={{ "fontSize": 30, "fontFamily": "Poppins", "background": "blue" }}
            transform="rotate(90, 30, 30)"
          >{`${Math.round(percent)}%`}</text>

        </svg>
      </>
    );
  }
}

export default Chart;
