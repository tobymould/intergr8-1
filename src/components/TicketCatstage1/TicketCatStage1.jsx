import React, { Component } from 'react';
import styles from './TicketCatStage1.module.scss';
import Tile from '../Tile'

class TicketCatStage1 extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>What is your query regarding?</h1>
      <section className={styles.tileParent}>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      </section>
      </>
     );
  }
}
 
export default TicketCatStage1;


