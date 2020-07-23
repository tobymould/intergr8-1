import React, { Component } from "react";
import styles from "./Chart.module.scss";

class Chart extends Component {

  state = {
    multiplier: 1,
  }

  render() {
    const { strokeDash, percent } = this.props;

    // const whatever = window.matchMedia('(max-width: 800px)')
    // console.log(whatever)

    // const scaleDown = (num) => {
    //   const whatever = window.matchMedia('(max-width: 800px)')
    //   if (whatever.matches) return 0.8 * num;
    // }
    // const scaleDown = (num) => { return this.state.multiplier * num }


    // const listenerFunc = (event) => {
    //   let px = event.media.slice(12, 15)
    //   this.setState({ multiplier: Number(px / 1000) })
    // }

    // const whatever = window.matchMedia('(max-width: 800px)')
    // const whatevera = window.matchMedia('(max-width: 700px)')
    // const whateverb = window.matchMedia('(max-width: 600px)')
    // const whateverc = window.matchMedia('(max-width: 500px)')
    // const array = [whatever, whatevera, whateverb, whateverc]
    // array.forEach(el => el.addListener(listenerFunc))

    // console.log(this.state)

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
