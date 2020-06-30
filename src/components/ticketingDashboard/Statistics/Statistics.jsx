import React, { Component } from 'react';
import Chart from './Chart'
import styles from './Statistics.module.scss';

class Statistics extends Component {
  state = {}
  render() {
    return (
      <section>
        <article className='all-in-progess'>
            <h3 className='statistic-title'>All in Progress</h3>
            <Chart />
        </article>
        <article className='own-in-progress'>
            <h3 className='statistic-title'>Own in Progress</h3>
            <Chart />
        </article>
        <article className="unassigned">
            <h3 className='statistic-title'>Unassigned</h3>
            <Chart />
        </article>
      </section>
    );
  }
}

export default Statistics;