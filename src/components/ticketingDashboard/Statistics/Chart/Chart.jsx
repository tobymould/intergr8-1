import React, { Component } from 'react';
import styles from './Chart.module.scss';

class Chart extends Component {
  render() {
    return (
        <svg className={styles.chart} width="200" height="200">
        <circle r="80" cx="100" cy="100" />
        </svg>

    );
  }
}

export default Chart;