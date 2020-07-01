import React, { Component } from 'react';
import styles from './TicketCatStageOne.module.scss';
import Tile from '../Tile'

class TicketCatStageOne extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <h1>What is your query regarding?</h1>
      <section className={styles.tileParent}>
      <Tile />
      </section>
      </div>
     );
  }
}
 
export default TicketCatStageOne;


