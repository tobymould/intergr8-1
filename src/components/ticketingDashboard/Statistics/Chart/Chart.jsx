import React, { Component } from 'react';
import styles from './Chart.module.scss';

class Chart extends Component {
  render() {
    return (
      <svg className={styles.chart} width="200" height="200">
        <circle className={styles.outerCircle} r="60" cx="100" cy="100" />
        <circle className={styles.innerCircle} r='55' cx="100" cy="100" />
      </svg>
    );
  }
}

export default Chart;